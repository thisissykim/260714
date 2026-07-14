const ballStage = document.querySelector('#ball-stage');
const drawButton = document.querySelector('#draw-button');
const roundLabel = document.querySelector('.round-label');
const historyToggle = document.querySelector('.history-toggle');
const historyPanel = document.querySelector('#history-panel');
const historyList = document.querySelector('#history-list');
const historyCount = document.querySelector('#history-count');
const clearHistory = document.querySelector('#clear-history');
const magicBurst = document.querySelector('#magic-burst');

let history = JSON.parse(localStorage.getItem('lotto-history') || '[]');
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
  return numbers.map(number => `<span class="${mini ? 'mini-ball' : 'ball'} ${colorClass(number)}">${number}</span>`).join('');
}
function renderHistory() {
  historyCount.textContent = history.length;
  historyList.innerHTML = history.length ? history.map((entry, index) => `<li class="history-item"><span>${String(history.length - index).padStart(2, '0')}번째</span><span class="mini-balls">${balls(entry, true)}</span></li>`).join('') : '<li class="history-item">아직 저장된 결과가 없습니다.</li>';
}
function saveHistory() { localStorage.setItem('lotto-history', JSON.stringify(history)); }

function playIntro() {
  if (!window.AudioContext && !window.webkitAudioContext) return;
  const context = new (window.AudioContext || window.webkitAudioContext)();
  const now = context.currentTime;
  [ { time: 0, frequency: 72 }, { time: .18, frequency: 48 } ].forEach(({ time, frequency }) => {
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    oscillator.type = 'sine'; oscillator.frequency.setValueAtTime(frequency, now + time);
    gain.gain.setValueAtTime(.001, now + time);
    gain.gain.exponentialRampToValueAtTime(.14, now + time + .025);
    gain.gain.exponentialRampToValueAtTime(.001, now + time + .38);
    oscillator.connect(gain).connect(context.destination);
    oscillator.start(now + time); oscillator.stop(now + time + .4);
  });
  setTimeout(() => context.close(), 700);
}

function launchMagic() {
  magicBurst.replaceChildren();
  const colors = ['#ffcf58', '#fb7c98', '#8bcdb8', '#83c5e6', '#c79ae8', '#fff5bd'];
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

drawButton.addEventListener('click', () => {
  drawButton.disabled = true;
  playIntro();
  drawButton.querySelector('span').textContent = '번호를 고르는 중…';
  ballStage.innerHTML = '<p class="placeholder">행운의 번호를 고르는 중입니다.</p>';
  setTimeout(() => {
    const numbers = getNumbers();
    ballStage.innerHTML = balls(numbers);
    launchMagic();
    history.unshift(numbers);
    history = history.slice(0, 10);
    saveHistory(); renderHistory();
    roundLabel.innerHTML = `<i></i> DRAW ${String(history.length).padStart(2, '0')}`;
    drawButton.disabled = false;
    drawButton.querySelector('span').textContent = '다시 뽑기';
  }, 520);
});
historyToggle.addEventListener('click', () => {
  const willOpen = historyPanel.hidden;
  historyPanel.hidden = !willOpen;
  historyToggle.setAttribute('aria-expanded', willOpen);
});
clearHistory.addEventListener('click', () => { history = []; saveHistory(); renderHistory(); roundLabel.innerHTML = '<i></i> DRAW 01'; });
renderHistory();
