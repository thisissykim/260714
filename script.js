const ballStage = document.querySelector('#ball-stage');
const drawButton = document.querySelector('#draw-button');
const roundLabel = document.querySelector('.round-label');
const historyToggle = document.querySelector('.history-toggle');
const historyPanel = document.querySelector('#history-panel');
const historyList = document.querySelector('#history-list');
const historyCount = document.querySelector('#history-count');
const clearHistory = document.querySelector('#clear-history');
const magicBurst = document.querySelector('#magic-burst');

const HISTORY_CACHE_KEY = 'lotto-history-cache';
const API_ENDPOINT = '/api/draws';
let history = JSON.parse(localStorage.getItem(HISTORY_CACHE_KEY) || '[]');
let remoteReady = false;

const colorClass = (number) => number <= 10 ? 'yellow' : number <= 20 ? 'blue' : number <= 30 ? 'red' : number <= 40 ? 'gray' : 'green';

function getNumbers() {
  const pool = Array.from({ length: 45 }, (_, i) => i + 1);
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return pool.slice(0, 6).sort((a, b) => a - b);
}

function balls(numbers, mini = false) {
  return numbers.map((number) => `<span class="${mini ? 'mini-ball' : 'ball'} ${colorClass(number)}">${number}</span>`).join('');
}

function updateRoundLabel() {
  roundLabel.innerHTML = `<i></i> DRAW ${String(Math.max(history.length, 1)).padStart(2, '0')}`;
}

function persistCache() {
  localStorage.setItem(HISTORY_CACHE_KEY, JSON.stringify(history));
}

function trackEvent(name, params = {}) {
  if (typeof window.gtag === 'function') {
    window.gtag('event', name, params);
  }
}

function renderHistory() {
  historyCount.textContent = history.length;
  historyList.innerHTML = history.length
    ? history
        .map(
          (entry, index) =>
            `<li class="history-item"><span>${String(history.length - index).padStart(2, '0')}번째</span><span class="mini-balls">${balls(entry, true)}</span></li>`,
        )
        .join('')
    : '<li class="history-item">아직 저장된 결과가 없습니다.</li>';
  updateRoundLabel();
}

async function readJson(url, options = {}) {
  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
    ...options,
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(message || `Request failed with ${response.status}`);
  }

  if (response.status === 204) {
    return null;
  }

  return response.json();
}

async function loadHistory() {
  try {
    const rows = await readJson(API_ENDPOINT);
    history = Array.isArray(rows)
      ? rows
          .map((row) => Array.isArray(row.numbers) ? row.numbers : [])
          .filter((entry) => entry.length === 6)
      : [];
    remoteReady = true;
    persistCache();
  } catch (error) {
    history = JSON.parse(localStorage.getItem(HISTORY_CACHE_KEY) || '[]');
    remoteReady = false;
  }

  renderHistory();
}

function playIntro() {
  if (!window.AudioContext && !window.webkitAudioContext) return;

  const context = new (window.AudioContext || window.webkitAudioContext)();
  const now = context.currentTime;

  [
    { time: 0, frequency: 72 },
    { time: 0.18, frequency: 48 },
  ].forEach(({ time, frequency }) => {
    const oscillator = context.createOscillator();
    const gain = context.createGain();

    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(frequency, now + time);
    gain.gain.setValueAtTime(0.001, now + time);
    gain.gain.exponentialRampToValueAtTime(0.14, now + time + 0.025);
    gain.gain.exponentialRampToValueAtTime(0.001, now + time + 0.38);

    oscillator.connect(gain).connect(context.destination);
    oscillator.start(now + time);
    oscillator.stop(now + time + 0.4);
  });

  setTimeout(() => context.close(), 700);
}

function launchMagic() {
  magicBurst.replaceChildren();

  const colors = ['#bde7ff', '#b7f0dd', '#ffe08a', '#ffd0d8', '#d9c2ff', '#ffffff'];
  const particles = [...Array(34)].map((_, index) => {
    const particle = document.createElement('span');
    const isSparkle = index % 3 === 0;
    const angle = Math.random() * Math.PI * 2;
    const distance = 70 + Math.random() * 190;

    particle.className = isSparkle ? 'sparkle' : 'confetti';
    particle.style.setProperty('--color', colors[index % colors.length]);
    particle.style.setProperty('--x', `${Math.cos(angle) * distance}px`);
    particle.style.setProperty('--y', `${Math.sin(angle) * distance + 70}px`);
    particle.style.setProperty('--rotation', `${Math.round(Math.random() * 720 - 360)}deg`);
    particle.style.setProperty('--duration', `${900 + Math.random() * 800}ms`);
    particle.style.setProperty('--size', `${4 + Math.random() * 5}px`);
    particle.style.setProperty('--width', `${5 + Math.random() * 6}px`);
    particle.style.setProperty('--height', `${9 + Math.random() * 10}px`);
    return particle;
  });

  magicBurst.append(...particles);
  setTimeout(() => magicBurst.replaceChildren(), 1800);
}

async function saveDraw(numbers) {
  try {
    await readJson(API_ENDPOINT, {
      method: 'POST',
      body: JSON.stringify({ numbers }),
    });
    remoteReady = true;
    return true;
  } catch (error) {
    remoteReady = false;
    return false;
  }
}

drawButton.addEventListener('click', async () => {
  drawButton.disabled = true;
  trackEvent('lotto_draw_start', {
    draw_count: history.length + 1,
  });
  playIntro();
  drawButton.querySelector('span').textContent = '번호를 고르는 중…';
  ballStage.innerHTML = '<p class="placeholder">행운의 번호를 고르는 중입니다.</p>';

  setTimeout(async () => {
    const numbers = getNumbers();
    ballStage.innerHTML = balls(numbers);
    launchMagic();

    history.unshift(numbers);
    history = history.slice(0, 10);
    persistCache();
    renderHistory();

    await saveDraw(numbers);
    if (remoteReady) {
      await loadHistory();
    }

    trackEvent('lotto_draw_complete', {
      draw_count: history.length,
      saved_to_supabase: remoteReady ? 'yes' : 'no',
    });

    drawButton.disabled = false;
    drawButton.querySelector('span').textContent = '다시 뽑기';
  }, 520);
});

historyToggle.addEventListener('click', () => {
  const willOpen = historyPanel.hidden;
  historyPanel.hidden = !willOpen;
  historyToggle.setAttribute('aria-expanded', willOpen);
  trackEvent(willOpen ? 'lotto_history_open' : 'lotto_history_close', {
    visible_draw_count: history.length,
  });
});

clearHistory.addEventListener('click', async () => {
  const clearedCount = history.length;
  history = [];
  persistCache();
  renderHistory();
  trackEvent('lotto_history_clear', {
    cleared_count: clearedCount,
  });

  try {
    await readJson(API_ENDPOINT, { method: 'DELETE' });
    remoteReady = true;
  } catch (error) {
    remoteReady = false;
  }
});

loadHistory();
