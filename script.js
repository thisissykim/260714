const JOBS_BY_TRACK = {
  '국내 대기업': ['인사·경영지원', '마케팅', '브랜드 마케팅', '서비스기획', '국내영업', '해외영업', '재무·회계', '홍보·PR'],
  '해외 대기업': ['해외영업', '글로벌 마케팅', '사업개발', '영문 콘텐츠·PR', '구매·소싱', 'HR·피플팀', '글로벌 서비스기획'],
  '국내 은행권': ['기업금융', '리테일금융', 'WM·PB', '디지털금융', '리스크관리', '여신심사', '경영기획', '채용·인사'],
  '국내 공기업': ['사무행정', '경영기획', '인사·노무', '재무·회계', '홍보·대외협력', '사업관리', '고객지원', '지역·사회공헌'],
};

const RECRUITMENT_WINDOWS = {
  '국내 대기업': {
    months: [3, 9],
    label: '상·하반기 공채가 몰리는 달',
    detail: '국내 대기업은 보통 3월과 9월 전후에 공채 공고가 집중돼요.',
  },
  '해외 대기업': {
    months: [2, 3, 4, 8, 9, 10],
    label: '글로벌 채용 공고가 늘어나는 달',
    detail: '해외계 기업은 상반기와 하반기 캠퍼스 리크루팅, 수시채용이 함께 열리는 편이에요.',
  },
  '국내 은행권': {
    months: [3, 4, 8, 9],
    label: '은행권 채용 시즌',
    detail: '은행권은 상·하반기 공채와 인턴 전환이 겹치며 공고가 자주 올라와요.',
  },
  '국내 공기업': {
    months: [4, 5, 6, 9, 10, 11],
    label: '공기업 채용 시즌',
    detail: '공기업은 상반기와 하반기 필기 전후로 채용공고가 집중되는 편이에요.',
  },
};

const CERTIFICATE_RECOMMENDATIONS = {
  '국내 대기업': [
    {
      rank: 1,
      name: 'OPIc AL',
      prepWeeks: 4,
      applicationWeeks: 1,
      examGapWeeks: 2,
      description: '말하기 성적을 먼저 확보하면 지원 폭을 넓히기 좋아요.',
    },
    {
      rank: 2,
      name: '컴퓨터활용능력 1급',
      prepWeeks: 5,
      applicationWeeks: 1,
      examGapWeeks: 2,
      description: '기본 사무 역량을 빠르게 증명할 수 있어요.',
    },
    {
      rank: 3,
      name: 'TOEIC 850+',
      prepWeeks: 4,
      applicationWeeks: 1,
      examGapWeeks: 2,
      description: '영업·기획·해외 협업 직무에 두루 활용하기 좋아요.',
    },
  ],
  '해외 대기업': [
    {
      rank: 1,
      name: 'TOEIC Speaking',
      prepWeeks: 4,
      applicationWeeks: 1,
      examGapWeeks: 2,
      description: '영문 커뮤니케이션의 기본 체력을 보여주기 좋아요.',
    },
    {
      rank: 2,
      name: 'TOEIC 900+',
      prepWeeks: 5,
      applicationWeeks: 1,
      examGapWeeks: 2,
      description: '글로벌 지원에서 가장 즉시 읽히는 점수예요.',
    },
    {
      rank: 3,
      name: '국제무역사',
      prepWeeks: 6,
      applicationWeeks: 1,
      examGapWeeks: 2,
      description: '사업개발·소싱·영업 직무에 힘을 실어줘요.',
    },
  ],
  '국내 은행권': [
    {
      rank: 1,
      name: '투자자산운용사',
      prepWeeks: 6,
      applicationWeeks: 1,
      examGapWeeks: 2,
      description: '금융권 기본 자격으로 가장 먼저 손에 쥐기 좋아요.',
    },
    {
      rank: 2,
      name: 'AFPK',
      prepWeeks: 6,
      applicationWeeks: 1,
      examGapWeeks: 3,
      description: 'WM·PB와 자산관리 직무에 잘 맞아요.',
    },
    {
      rank: 3,
      name: '파생상품투자권유자문인력',
      prepWeeks: 5,
      applicationWeeks: 1,
      examGapWeeks: 2,
      description: '리스크와 상품 이해도를 함께 보여주기 좋아요.',
    },
  ],
  '국내 공기업': [
    {
      rank: 1,
      name: '컴퓨터활용능력 1급',
      prepWeeks: 5,
      applicationWeeks: 1,
      examGapWeeks: 2,
      description: '사무행정 기본기를 가장 빠르게 보여줄 수 있어요.',
    },
    {
      rank: 2,
      name: '한국사능력검정 1급',
      prepWeeks: 4,
      applicationWeeks: 1,
      examGapWeeks: 2,
      description: '공기업 지원에서 여전히 강하게 쓰이는 자격이에요.',
    },
    {
      rank: 3,
      name: '사회조사분석사 2급',
      prepWeeks: 5,
      applicationWeeks: 1,
      examGapWeeks: 2,
      description: '사업관리·경영기획 계열에서 좋은 가점이 됩니다.',
    },
  ],
};

const COMPANY_RECOMMENDATIONS = {
  '국내 대기업': [
    { name: '삼성전자', style: 'brand', jobs: ['서비스기획', '마케팅', '인사·경영지원'] },
    { name: '현대자동차', style: 'brand', jobs: ['국내영업', '서비스기획', '브랜드 마케팅'] },
    { name: 'LG전자', style: 'brand', jobs: ['마케팅', '브랜드 마케팅', '해외영업'] },
    { name: 'CJ제일제당', style: 'brand', jobs: ['국내영업', '해외영업', '마케팅'] },
    { name: 'SK하이닉스', style: 'brand', jobs: ['재무·회계', '인사·경영지원', '해외영업'] },
  ],
  '해외 대기업': [
    { name: 'Amazon', style: 'global', jobs: ['해외영업', '사업개발', '구매·소싱'] },
    { name: 'Google', style: 'global', jobs: ['글로벌 마케팅', '영문 콘텐츠·PR', '글로벌 서비스기획'] },
    { name: 'Microsoft', style: 'global', jobs: ['HR·피플팀', '글로벌 서비스기획', '사업개발'] },
    { name: 'Apple', style: 'global', jobs: ['영문 콘텐츠·PR', '글로벌 마케팅', '해외영업'] },
    { name: 'Meta', style: 'global', jobs: ['글로벌 마케팅', '글로벌 서비스기획', '사업개발'] },
  ],
  '국내 은행권': [
    { name: 'KB국민은행', style: 'finance', jobs: ['WM·PB', '리테일금융', '경영기획'] },
    { name: '신한은행', style: 'finance', jobs: ['디지털금융', '리테일금융', '리스크관리'] },
    { name: '하나은행', style: 'finance', jobs: ['기업금융', '여신심사', '경영기획'] },
    { name: '우리은행', style: 'finance', jobs: ['리테일금융', '채용·인사', '경영기획'] },
    { name: 'NH농협은행', style: 'finance', jobs: ['WM·PB', '기업금융', '디지털금융'] },
  ],
  '국내 공기업': [
    { name: '한국전력공사', style: 'public', jobs: ['사업관리', '경영기획', '재무·회계'] },
    { name: '한국토지주택공사', style: 'public', jobs: ['사업관리', '고객지원', '사무행정'] },
    { name: '인천국제공항공사', style: 'public', jobs: ['홍보·대외협력', '사업관리', '고객지원'] },
    { name: '한국수자원공사', style: 'public', jobs: ['사업관리', '경영기획', '인사·노무'] },
    { name: '한국철도공사', style: 'public', jobs: ['사무행정', '고객지원', '사업관리'] },
  ],
};

const JOB_COMPANY_PRIORITY = {
  '서비스기획': ['삼성전자', '현대자동차', 'LG전자', 'Google', 'Microsoft'],
  '마케팅': ['LG전자', 'CJ제일제당', 'Google', 'Meta', 'Amazon'],
  '브랜드 마케팅': ['현대자동차', 'LG전자', 'CJ제일제당', 'Apple'],
  '국내영업': ['현대자동차', 'CJ제일제당', '하나은행'],
  '해외영업': ['Amazon', 'Apple', 'LG전자', 'CJ제일제당'],
  '재무·회계': ['SK하이닉스', '한국전력공사', 'KB국민은행'],
  '홍보·PR': ['LG전자', 'Google', '인천국제공항공사'],
  '글로벌 마케팅': ['Google', 'Meta', 'Apple', 'Amazon'],
  '사업개발': ['Amazon', 'Meta', 'Microsoft', '한국전력공사'],
  '영문 콘텐츠·PR': ['Google', 'Apple', 'Meta'],
  '구매·소싱': ['Amazon', 'CJ제일제당', '하나은행'],
  'HR·피플팀': ['Microsoft', 'SK하이닉스', '우리은행'],
  '글로벌 서비스기획': ['Google', 'Microsoft', 'Meta'],
  '기업금융': ['하나은행', 'NH농협은행', 'KB국민은행'],
  '리테일금융': ['KB국민은행', '신한은행', '우리은행'],
  'WM·PB': ['KB국민은행', 'NH농협은행', '신한은행'],
  '디지털금융': ['신한은행', 'NH농협은행', '우리은행'],
  '리스크관리': ['신한은행', '우리은행', '한국수자원공사'],
  '여신심사': ['하나은행', 'KB국민은행'],
  '경영기획': ['한국전력공사', 'KB국민은행', 'SK하이닉스'],
  '채용·인사': ['우리은행', 'Microsoft', 'SK하이닉스'],
  '사무행정': ['한국철도공사', '한국토지주택공사', 'SK하이닉스'],
  '인사·노무': ['한국수자원공사', 'SK하이닉스', 'Microsoft'],
  '홍보·대외협력': ['인천국제공항공사', '한국토지주택공사', 'LG전자'],
  '사업관리': ['한국전력공사', '한국토지주택공사', '한국수자원공사'],
  '고객지원': ['한국철도공사', '한국토지주택공사', '인천국제공항공사'],
  '지역·사회공헌': ['한국전력공사', '한국수자원공사'],
};

const DAILY_QUOTES = [
  '완벽한 계획보다 오늘의 한 칸이 더 멀리 갑니다.',
  '공고는 기다려주지 않지만 준비는 쌓입니다.',
  '서류는 빠를수록 편하고, 연습은 많을수록 정확해요.',
  '하루를 가볍게 시작하면 취준도 덜 무겁습니다.',
  '지금 적는 일정 하나가 나중의 불안을 줄여줘요.',
  '오늘의 작은 정리는 내일의 지원 속도를 바꿉니다.',
];

const LAYER_META = {
  recruitment: { label: '공채 서류마감', color: 'recruitment' },
  certificate: { label: '자격증 접수·시험', color: 'certificate' },
  aptitude: { label: '인적성 준비 구간', color: 'aptitude' },
  resume: { label: '자소서 마일스톤', color: 'resume' },
  personal: { label: '개인 일정', color: 'personal' },
};

const app = document.querySelector('#app');
const today = new Date();
const state = JSON.parse(sessionStorage.getItem('chwippo-selection') || 'null') || {
  track: '',
  job: '',
  season: '',
};
const storedLayerState = JSON.parse(localStorage.getItem('chwippo-layer-state') || 'null') || {};
const storedCalendarView = Number(localStorage.getItem('chwippo-calendar-view') || '0');
const layerState = {
  recruitment: true,
  certificate: true,
  aptitude: true,
  resume: true,
  personal: true,
  ...storedLayerState,
};
const customEvents = JSON.parse(localStorage.getItem('chwippo-custom-events') || '[]');
const customCompanyEvents = JSON.parse(localStorage.getItem('chwippo-company-events') || '[]');
const selectedCompanies = JSON.parse(localStorage.getItem('chwippo-selected-companies') || '[]');
const selectedCertificates = JSON.parse(localStorage.getItem('chwippo-selected-certificates') || '[]');
const certificateTargetWeeks = JSON.parse(localStorage.getItem('chwippo-certificate-target-weeks') || '{}');
const certificateVisibility = JSON.parse(localStorage.getItem('chwippo-certificate-visibility') || '{}');
let calendarViewIndex = Number.isFinite(storedCalendarView) ? storedCalendarView : 0;
let calendarTransition = '';
let activeMoreEventsDate = '';
let activeCertificatePicker = null;
let toastTimer = null;
let toastMessage = '';
let activeCertificateGoalEditor = null;

function getSessionId() {
  let id = sessionStorage.getItem('chwippo-session-id');
  if (!id) {
    id = crypto.randomUUID ? crypto.randomUUID() : `s-${Date.now()}`;
    sessionStorage.setItem('chwippo-session-id', id);
  }
  return id;
}

function trackEvent(eventName, params = {}) {
  const detail = { session_id: getSessionId(), timestamp: Date.now(), ...params };
  if (typeof window.gtag === 'function') window.gtag('event', eventName, detail);
  console.info('[analytics]', eventName, detail);
}

function escapeHtml(value) {
  return String(value).replace(/[&<>'"]/g, char => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    "'": '&#39;',
    '"': '&quot;',
  })[char]);
}

function saveSelection() {
  sessionStorage.setItem('chwippo-selection', JSON.stringify(state));
}

function saveLayerState() {
  localStorage.setItem('chwippo-layer-state', JSON.stringify(layerState));
}

function saveCustomEvents() {
  localStorage.setItem('chwippo-custom-events', JSON.stringify(customEvents));
}

function saveCompanyEvents() {
  localStorage.setItem('chwippo-company-events', JSON.stringify(customCompanyEvents));
}

function saveSelectedCompanies() {
  localStorage.setItem('chwippo-selected-companies', JSON.stringify(selectedCompanies));
}

function saveSelectedCertificates() {
  localStorage.setItem('chwippo-selected-certificates', JSON.stringify(selectedCertificates));
}

function saveCertificateTargetWeeks() {
  localStorage.setItem('chwippo-certificate-target-weeks', JSON.stringify(certificateTargetWeeks));
}

function saveCertificateVisibility() {
  localStorage.setItem('chwippo-certificate-visibility', JSON.stringify(certificateVisibility));
}

function showToast(message) {
  toastMessage = message;
  renderCalendar();
  if (toastTimer) window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => {
    toastMessage = '';
    renderCalendar();
  }, 2400);
}

function hashCode(value) {
  let hash = 0;
  for (let i = 0; i < value.length; i += 1) {
    hash = ((hash << 5) - hash) + value.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

function parseSeason(season) {
  if (!season) return null;
  const [yearText, half] = season.split(' ');
  if (!yearText || !half) return null;
  return {
    year: Number(yearText),
    month: half === '상반기' ? 5 : 11,
  };
}

function startOfDay(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function startOfMonth(date) {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

function endOfMonth(date) {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0);
}

function addDays(date, amount) {
  const next = new Date(date);
  next.setDate(next.getDate() + amount);
  return next;
}

function addMonths(date, amount) {
  return new Date(date.getFullYear(), date.getMonth() + amount, 1);
}

function sameDay(left, right) {
  return left.getFullYear() === right.getFullYear()
    && left.getMonth() === right.getMonth()
    && left.getDate() === right.getDate();
}

function sameMonth(left, right) {
  return left.getFullYear() === right.getFullYear()
    && left.getMonth() === right.getMonth();
}

function formatKoreanDate(date) {
  return `${date.getMonth() + 1}월 ${date.getDate()}일`;
}

function formatMonthLabel(date) {
  return `${date.getMonth() + 1}월`;
}

function formatRange(start, end) {
  if (sameDay(start, end)) return formatKoreanDate(start);
  if (sameMonth(start, end)) return `${formatKoreanDate(start)} ~ ${end.getDate()}일`;
  return `${formatKoreanDate(start)} ~ ${formatKoreanDate(end)}`;
}

function targetSeasonDate() {
  const parsed = parseSeason(state.season);
  if (!parsed) return addMonths(startOfMonth(today), 2);
  const target = new Date(parsed.year, parsed.month + 1, 0);
  if (target < startOfMonth(today)) return addMonths(startOfMonth(today), 2);
  return target;
}

function monthRange(start, end) {
  const months = [];
  let cursor = startOfMonth(start);
  const finalMonth = startOfMonth(end);
  if (finalMonth < cursor) return [new Date(cursor)];
  while (cursor <= finalMonth) {
    months.push(new Date(cursor));
    cursor = addMonths(cursor, 1);
  }
  return months;
}

function clampCalendarViewIndex(monthCount) {
  return Math.max(0, Math.min(calendarViewIndex, Math.max(0, monthCount - 1)));
}

function getDailyQuote() {
  const index = (today.getMonth() * 31 + today.getDate()) % DAILY_QUOTES.length;
  return DAILY_QUOTES[index];
}

function getGoalProgressText() {
  const months = monthRange(today, targetSeasonDate());
  const recruitmentMonths = getRecruitmentEvents(months).length;
  return `목표 시즌까지 ${months.length}개월, 공채 포인트 ${recruitmentMonths}개를 월별로 볼 수 있어요.`;
}

function getCompanyDdayList() {
  return selectedCompanies.map(company => {
    const deadline = addDays(targetSeasonDate(), -21 - (hashCode(company) % 14));
    return {
      company,
      days: Math.max(0, Math.ceil((deadline - today) / (1000 * 60 * 60 * 24))),
    };
  }).sort((left, right) => left.days - right.days);
}

function getAllCertificateRecommendations() {
  return Object.values(CERTIFICATE_RECOMMENDATIONS).flat();
}

function getCertificateTargetPrepWeeks(cert) {
  const value = certificateTargetWeeks[cert.name];
  return Number.isFinite(Number(value)) && Number(value) > 0 ? Number(value) : cert.prepWeeks;
}

function setCertificateTargetPrepWeeks(certName, weeks) {
  const nextWeeks = Math.max(1, Number(weeks) || 1);
  certificateTargetWeeks[certName] = nextWeeks;
  saveCertificateTargetWeeks();
}

function getSelectedCertificateList() {
  return selectedCertificates
    .map(name => {
      const cert = getAllCertificateRecommendations().find(item => item.name === name);
      if (!cert) return null;
      const rounds = getCertificateRoundOptions(cert);
      const chosenRound = rounds[0];
      const targetWeeks = getCertificateTargetPrepWeeks(cert);
      return {
        cert,
        targetWeeks,
        examDate: chosenRound.examDate,
        days: Math.max(0, Math.ceil((chosenRound.examDate - today) / (1000 * 60 * 60 * 24))),
      };
    })
    .filter(Boolean)
    .sort((left, right) => left.days - right.days);
}

function getCertificatePriorityCompanies(certName) {
  const companies = [];
  Object.values(COMPANY_RECOMMENDATIONS).flat().forEach(company => {
    const score = (company.jobs || []).reduce((acc, job) => {
      const left = certName.toLowerCase();
      const right = job.toLowerCase();
      return acc + (left.includes(right.slice(0, 3)) || right.includes(left.slice(0, 3)) ? 1 : 0);
    }, 0);
    if (score > 0 && !companies.includes(company.name)) companies.push(company.name);
  });
  return companies.slice(0, 3);
}

function getRecruitmentEvents(months) {
  if (!state.track || !state.job) return [];
  const blueprint = RECRUITMENT_WINDOWS[state.track];
  if (!blueprint) return [];

  return months
    .filter(monthDate => blueprint.months.includes(monthDate.getMonth() + 1))
    .map(monthDate => {
      const monthStart = startOfMonth(monthDate);
      const monthEnd = endOfMonth(monthDate);
      return {
        id: `recruit-${monthDate.getFullYear()}-${monthDate.getMonth()}`,
        title: `${state.job} 공채 포인트`,
        start: monthStart,
        end: monthEnd,
        layer: 'recruitment',
        kind: '공채 시즌',
        detail: `${state.track}의 ${state.job} 직무는 보통 ${blueprint.label}에 공고가 자주 열려요. ${blueprint.detail}`,
        badge: '공채 포인트',
      };
    });
}

function getCertificateRecommendations() {
  const recommendations = CERTIFICATE_RECOMMENDATIONS[state.track] || CERTIFICATE_RECOMMENDATIONS['국내 대기업'];
  const startAnchor = addDays(today, 3);

  return recommendations.map((plan, index) => {
    const targetWeeks = getCertificateTargetPrepWeeks(plan);
    const prepStart = addDays(startAnchor, index * 7);
    const prepEnd = addDays(prepStart, targetWeeks * 7 - 1);
    const applicationStart = addDays(prepEnd, 1);
    const applicationEnd = addDays(applicationStart, plan.applicationWeeks * 7 - 1);
    const examDate = addDays(applicationEnd, plan.examGapWeeks * 7);
    return {
      ...plan,
      targetWeeks,
      prepStart,
      prepEnd,
      applicationStart,
      applicationEnd,
      examDate,
      detail: plan.description,
      seriesClass: `cert-${plan.rank}`,
    };
  });
}

function getCertificateRoundOptions(cert) {
  const roundOffsets = [
    { round: 1, label: '1회차', monthOffset: 1 },
    { round: 2, label: '2회차', monthOffset: 4 },
    { round: 3, label: '3회차', monthOffset: 7 },
  ];

  return roundOffsets.map(option => {
    const anchor = addMonths(startOfMonth(today), option.monthOffset + (cert.rank - 1));
    const prepStart = addDays(anchor, -21);
    const prepEnd = addDays(anchor, -1);
    const applicationStart = addDays(anchor, 7);
    const applicationEnd = addDays(anchor, 13);
    const examDate = addDays(anchor, 21);

    return {
      ...option,
      cert,
      prepStart,
      prepEnd,
      applicationStart,
      applicationEnd,
      examDate,
      summary: `${formatMonthLabel(examDate)} ${option.label}`,
    };
  });
}

function certificateEventExists(cert, suffix) {
  const title = `${cert.name} ${suffix}`;
  return customEvents.some(event => event.title === title && event.layer === 'certificate');
}

function getCertificateEvents() {
  return getCertificateRecommendations().flatMap(plan => ([
    {
      id: `certificate-${plan.rank}-prep`,
      title: `${plan.rank}순위 ${plan.name} 준비 기간`,
      start: plan.prepStart,
      end: plan.prepEnd,
      layer: 'certificate',
      kind: '자격증',
      detail: `준비 ${formatRange(plan.prepStart, plan.prepEnd)} · ${plan.description}`,
      seriesClass: plan.seriesClass,
      certName: plan.name,
    },
    {
      id: `certificate-${plan.rank}-apply`,
      title: `${plan.rank}순위 ${plan.name} 접수 기간`,
      start: plan.applicationStart,
      end: plan.applicationEnd,
      layer: 'certificate',
      kind: '자격증',
      detail: `접수 ${formatRange(plan.applicationStart, plan.applicationEnd)} · 시험장과 준비물을 미리 확인하세요.`,
      seriesClass: plan.seriesClass,
      certName: plan.name,
    },
    {
      id: `certificate-${plan.rank}-exam`,
      title: `${plan.rank}순위 ${plan.name} 시험일`,
      start: plan.examDate,
      end: plan.examDate,
      layer: 'certificate',
      kind: '자격증',
      detail: `시험 ${formatRange(plan.examDate, plan.examDate)} · 실전처럼 마무리하세요.`,
      seriesClass: plan.seriesClass,
      certName: plan.name,
    },
  ]));
}

function addCertificateSchedule(rank, round = 1) {
  const cert = getCertificateRecommendations().find(item => String(item.rank) === String(rank));
  if (!cert) return;
  const selectedRound = getCertificateRoundOptions(cert).find(item => item.round === Number(round)) || getCertificateRoundOptions(cert)[0];
  const certEvents = [
    {
      id: `cert-${Date.now()}-${rank}-${selectedRound.round}-prep`,
      title: `${cert.name} ${selectedRound.round}회차 준비`,
      start: selectedRound.prepStart,
      end: selectedRound.prepStart,
      layer: 'certificate',
      kind: '자격증',
      detail: `${cert.description} 준비 ${formatRange(selectedRound.prepStart, selectedRound.prepEnd)}`,
      markerLabel: '준비',
      certName: cert.name,
      certRound: selectedRound.round,
    },
    {
      id: `cert-${Date.now()}-${rank}-${selectedRound.round}-apply`,
      title: `${cert.name} ${selectedRound.round}회차 접수`,
      start: selectedRound.applicationStart,
      end: selectedRound.applicationStart,
      layer: 'certificate',
      kind: '자격증',
      detail: `접수 ${formatRange(selectedRound.applicationStart, selectedRound.applicationEnd)}`,
      markerLabel: '접수',
      certName: cert.name,
      certRound: selectedRound.round,
    },
    {
      id: `cert-${Date.now()}-${rank}-${selectedRound.round}-exam`,
      title: `${cert.name} ${selectedRound.round}회차 시험`,
      start: selectedRound.examDate,
      end: selectedRound.examDate,
      layer: 'certificate',
      kind: '자격증',
      detail: `시험 ${formatRange(selectedRound.examDate, selectedRound.examDate)}`,
      markerLabel: '시험',
      certName: cert.name,
      certRound: selectedRound.round,
    },
  ];

  customEvents.unshift(...certEvents);
  if (!selectedCertificates.includes(cert.name)) {
    selectedCertificates.unshift(cert.name);
    saveSelectedCertificates();
  }
  layerState.certificate = true;
  saveLayerState();
  saveCustomEvents();
  trackEvent('certificate_schedule_added', { rank: cert.rank, name: cert.name, round: selectedRound.round });
  activeCertificatePicker = null;
  showToast(`${formatMonthLabel(selectedRound.examDate)} ${selectedRound.examDate.getDate()}일 ${selectedRound.round}회차 ${cert.name} 자격증 일정이 캘린더에 추가되었어요.`);
  renderCalendar();
}

function getCompanyRecommendations() {
  const companies = COMPANY_RECOMMENDATIONS[state.track] || COMPANY_RECOMMENDATIONS['국내 대기업'];
  if (!state.job) return companies;
  return [...companies].sort((left, right) => {
    const priority = JOB_COMPANY_PRIORITY[state.job] || [];
    const leftScore = priority.includes(left.name) ? 2 : (left.jobs?.includes(state.job) ? 1 : 0);
    const rightScore = priority.includes(right.name) ? 2 : (right.jobs?.includes(state.job) ? 1 : 0);
    return rightScore - leftScore;
  });
}

function buildCompanyEvent(companyName, index, source = 'recommendation') {
  const deadline = addDays(targetSeasonDate(), -21);
  const order = index + 1;
  const offset = hashCode(companyName) % 16;
  const applicationStart = addDays(deadline, -18 - offset - (order * 2));
  const applicationEnd = addDays(applicationStart, 6 + (offset % 3));
  const aptitudeStart = addDays(applicationStart, -12 - (offset % 4));
  const aptitudeEnd = addDays(aptitudeStart, 10 + (order % 3));
  const resumeStart = addDays(aptitudeStart, -22 - (offset % 5));
  const resumeEnd = addDays(applicationStart, -3);

  return {
    id: `company-${source}-${companyName}-${order}`.replace(/\s+/g, '-'),
    title: `${companyName} 공채 일정`,
    start: applicationStart,
    end: applicationEnd,
    layer: 'recruitment',
    kind: '기업 공채',
    detail: `${companyName} 기준으로 서류접수, 인적성 준비, 서류 준비 기간을 자동 배치했어요.`,
    companyName,
    companySource: source,
    companySchedule: {
      applicationStart,
      applicationEnd,
      aptitudeStart,
      aptitudeEnd,
      resumeStart,
      resumeEnd,
    },
  };
}

function getCompanyEvents() {
  const selectedEvents = selectedCompanies.map((company, index) => buildCompanyEvent(company, index, 'selected'));
  const searchEvents = customCompanyEvents.map(item => buildCompanyEvent(item.name, item.order || 0, 'search'));
  const unique = new Map();

  [...selectedEvents, ...searchEvents].forEach(event => {
    const key = `${event.companySource}:${event.companyName}`;
    if (unique.has(key)) return;
    unique.set(key, event);
  });

  return [...unique.values()].flatMap(event => ([
    {
      id: `${event.id}-resume`,
      title: `${event.companyName} 서류 준비`,
      start: event.companySchedule.resumeStart,
      end: event.companySchedule.resumeEnd,
      layer: 'resume',
      kind: '기업 준비',
      detail: `${event.companyName} 서류 준비 기간입니다.`,
      companyName: event.companyName,
      companySource: event.companySource,
    },
    {
      id: `${event.id}-aptitude`,
      title: `${event.companyName} 인적성 준비`,
      start: event.companySchedule.aptitudeStart,
      end: event.companySchedule.aptitudeEnd,
      layer: 'aptitude',
      kind: '기업 준비',
      detail: `${event.companyName} 인적성 준비 기간입니다.`,
      companyName: event.companyName,
      companySource: event.companySource,
    },
    {
      id: event.id,
      title: `${event.companyName} 공채 일정`,
      start: event.companySchedule.applicationStart,
      end: event.companySchedule.applicationEnd,
      layer: 'recruitment',
      kind: '기업 공채',
      detail: `${event.companyName} 서류접수 기간입니다.`,
      companyName: event.companyName,
      companySource: event.companySource,
    },
  ]));
}

function getPinnedEvents(events, day) {
  const priority = {
    recruitment: 0,
    aptitude: 1,
    resume: 2,
    certificate: 3,
    personal: 4,
  };

  return [...events]
    .sort((left, right) => (priority[left.layer] ?? 9) - (priority[right.layer] ?? 9) || left.title.localeCompare(right.title, 'ko'))
    .slice(0, 3);
}

function getCertificateDayItems() {
  return selectedCertificates.map(name => {
    const cert = Object.values(CERTIFICATE_RECOMMENDATIONS).flat().find(item => item.name === name);
    if (!cert) return null;
    const rounds = getCertificateRoundOptions(cert);
    const targetWeeks = getCertificateTargetPrepWeeks(cert);
    const selectedRound = rounds[0];
    return {
      name,
      cert,
      targetWeeks,
      days: Math.max(0, Math.ceil((selectedRound.examDate - today) / (1000 * 60 * 60 * 24))),
      round: selectedRound.round,
      examDate: selectedRound.examDate,
    };
  }).filter(Boolean).sort((a, b) => a.days - b.days);
}

function getBaseEvents() {
  const deadline = addDays(targetSeasonDate(), -21);
  const resumeStart = addDays(deadline, -30);
  const resumeFinish = addDays(deadline, -1);
  const interviewPractice = addDays(deadline, -10);

  return [
    {
      id: 'deadline',
      title: `${state.track} ${state.season} 서류 마감`,
      start: deadline,
      end: deadline,
      layer: 'recruitment',
      kind: '마감',
      detail: '목표 기업군의 공채 서류 제출 마감일입니다.',
    },
    {
      id: 'application-prep',
      title: '서류 준비 기간',
      start: resumeStart,
      end: resumeFinish,
      layer: 'resume',
      kind: '서류 준비',
      detail: '자기소개서, 경력 정리, 지원동기 초안을 한 번에 묶어두는 긴 구간입니다.',
    },
    {
      id: 'resume',
      title: '마스터 자소서 완성',
      start: addDays(deadline, -14),
      end: addDays(deadline, -14),
      layer: 'resume',
      kind: '자소서',
      detail: '대표 경험과 지원동기를 하나의 자소서 구조로 묶어두는 날입니다.',
    },
    {
      id: 'interview-practice',
      title: '면접 답변 초안 정리',
      start: interviewPractice,
      end: interviewPractice,
      layer: 'resume',
      kind: '면접',
      detail: '자기소개, 지원동기, 갈등 경험 답변을 짧은 문장으로 먼저 굳혀보세요.',
    },
  ];
}

function getAptitudeEvents() {
  const plans = {
    '국내 대기업': {
      title: '인적성 준비 시작',
      offset: -28,
      kind: '인적성',
      detail: '언어·수리·추리 영역의 기본 문제풀이를 시작해 보세요.',
    },
    '해외 대기업': {
      title: '영문 레쥬메 초안 완성',
      offset: -20,
      kind: '레쥬메',
      detail: '성과 중심의 영문 이력서를 다듬는 단계로 들어가 보세요.',
    },
    '국내 은행권': {
      title: 'NCS 집중 준비 시작',
      offset: -24,
      kind: 'NCS',
      detail: '금융·경제 상식과 NCS 문제풀이에 집중할 시점이에요.',
    },
    '국내 공기업': {
      title: 'NCS 준비 시작',
      offset: -22,
      kind: 'NCS',
      detail: '직업기초능력평가와 자소서 문항 준비를 병행해 보세요.',
    },
  };

  const plan = plans[state.track] || plans['국내 대기업'];
  const deadline = addDays(targetSeasonDate(), -21);
  const eventEnd = addDays(deadline, -1);
  const eventStart = addDays(deadline, plan.offset);
  return [
    {
      id: 'aptitude',
      title: '인적성 준비 기간',
      start: eventStart,
      end: eventEnd,
      layer: 'aptitude',
      kind: plan.kind,
      detail: `${plan.title} · ${plan.detail}`,
    },
  ];
}

function getCustomEvents() {
  return customEvents.map(event => ({
    ...event,
    custom: true,
    start: new Date(`${event.start}T12:00:00`),
    end: new Date(`${event.end || event.start}T12:00:00`),
  }));
}

function isCertificateVisible(event) {
  if (event.layer !== 'certificate') return true;
  if (!event.certName) return true;
  if (certificateVisibility[event.certName] === false) return false;
  return true;
}

function getAllEvents() {
  const months = monthRange(today, targetSeasonDate());
  const recruitmentEvents = getRecruitmentEvents(months);
  const baseEvents = getBaseEvents();
  const aptitudeEvents = getAptitudeEvents();
  const companyEvents = getCompanyEvents();
  return [...baseEvents, ...aptitudeEvents, ...recruitmentEvents, ...companyEvents, ...getCustomEvents()];
}

function eventIntersectsMonth(event, monthDate) {
  return event.end >= startOfMonth(monthDate) && event.start <= endOfMonth(monthDate);
}

function monthEventsForSummary(events, monthDate) {
  return events.filter(event => layerState[event.layer] && isCertificateVisible(event) && eventIntersectsMonth(event, monthDate));
}

function sortDayEvents(events) {
  const layerPriority = {
    certificate: 0,
    recruitment: 1,
    aptitude: 2,
    resume: 3,
    personal: 4,
  };

  return [...events].sort((left, right) => {
    const leftPriority = layerPriority[left.layer] ?? 99;
    const rightPriority = layerPriority[right.layer] ?? 99;
    if (leftPriority !== rightPriority) return leftPriority - rightPriority;
    if (Boolean(left.markerLabel) !== Boolean(right.markerLabel)) return left.markerLabel ? -1 : 1;
    return left.title.localeCompare(right.title, 'ko');
  });
}

function quoteCardMarkup() {
  return `
    <section class="quote-card">
      <p class="panel-label">오늘의 명언</p>
      <strong>“${escapeHtml(getDailyQuote())}”</strong>
    </section>
  `;
}

function buildMonthWeeks(monthDate) {
  const monthStart = startOfMonth(monthDate);
  const monthEnd = endOfMonth(monthDate);
  const offset = monthStart.getDay();
  const cells = Array.from({ length: 42 }, (_, index) => {
    const dayNumber = index - offset + 1;
    if (index < offset || dayNumber > monthEnd.getDate()) return null;
    return new Date(monthDate.getFullYear(), monthDate.getMonth(), dayNumber);
  });

  return Array.from({ length: 6 }, (_, weekIndex) => cells.slice(weekIndex * 7, weekIndex * 7 + 7));
}

function getVisibleMultiDayEvents(events, monthDate) {
  const monthStart = startOfMonth(monthDate);
  const monthEnd = endOfMonth(monthDate);
  return events
    .filter(event => layerState[event.layer] && event.end >= monthStart && event.start <= monthEnd && !sameDay(event.start, event.end))
    .map(event => ({
      ...event,
      visibleStart: event.start < monthStart ? monthStart : event.start,
      visibleEnd: event.end > monthEnd ? monthEnd : event.end,
    }));
}

function layoutWeekSegments(events, week) {
  const visibleDays = week.filter(Boolean);
  if (!visibleDays.length) return [];
  const weekStart = visibleDays[0];
  const weekEnd = visibleDays[visibleDays.length - 1];
  const segments = events
    .filter(event => event.visibleEnd >= weekStart && event.visibleStart <= weekEnd)
    .map(event => ({
      ...event,
      startCol: Math.max(0, (event.visibleStart < weekStart ? weekStart : event.visibleStart).getDay()),
      endCol: Math.min(6, (event.visibleEnd > weekEnd ? weekEnd : event.visibleEnd).getDay()),
    }))
    .sort((left, right) => left.startCol - right.startCol || right.endCol - left.endCol);

  const laneEnds = [];
  return segments.map(segment => {
    let lane = laneEnds.findIndex(lastEnd => lastEnd < segment.startCol);
    if (lane === -1) {
      lane = laneEnds.length;
      laneEnds.push(segment.endCol);
    } else {
      laneEnds[lane] = segment.endCol;
    }
    return { ...segment, lane };
  });
}

function renderMonthEventTrack(monthDate, events) {
  const weeks = buildMonthWeeks(monthDate);
  const multiDayEvents = getVisibleMultiDayEvents(events, monthDate);

  return `
    <div class="month-event-track">
      ${weeks.map((week, weekIndex) => {
        const segments = layoutWeekSegments(multiDayEvents, week);
        const laneCount = Math.max(1, ...segments.map(segment => segment.lane + 1), 1);
        return `
          <div class="event-week" style="--lanes:${laneCount}">
            ${segments.map(segment => `
              <button
                class="event-range ${segment.layer} ${segment.seriesClass || ''}"
                style="grid-column:${segment.startCol + 1} / ${segment.endCol + 2}; grid-row:${segment.lane + 1};"
                data-event="${segment.id}"
                type="button"
              >
                ${escapeHtml(segment.title)}
              </button>
            `).join('')}
          </div>
        `;
      }).join('')}
    </div>
  `;
}

function renderWeekBlock(week, events) {
  const dayCells = week.map(day => {
    if (!day) return '<div class="day empty"></div>';
    const dayEvents = sortDayEvents(events.filter(event => layerState[event.layer] && isCertificateVisible(event) && event.start <= day && event.end >= day));
    const isToday = sameDay(day, today);
    const visibleEvents = getPinnedEvents(dayEvents, day);
    const hiddenCount = Math.max(0, dayEvents.length - visibleEvents.length);
    const dateKey = toDateInputValue(day);
    const hiddenEvents = dayEvents.slice(visibleEvents.length);
    return `
      <div class="day ${isToday ? 'today' : ''}">
        <time>${day.getDate()}</time>
        <div class="day-events">
          ${visibleEvents.map(event => `
            <button class="event event-chip ${event.layer} ${event.seriesClass || ''} ${event.markerLabel ? 'marker-only' : ''}" data-event="${event.id}" type="button" title="${escapeHtml(event.title)}">
              <span class="event-dot"></span>
              ${event.markerLabel ? `<span class="event-marker-label">${escapeHtml(event.markerLabel)}</span>` : ''}
            </button>
          `).join('')}
          ${hiddenCount > 0 ? `
            <button class="event more-events" type="button" data-more-events="${dateKey}" aria-expanded="${activeMoreEventsDate === dateKey ? 'true' : 'false'}">+${hiddenCount}</button>
            ${activeMoreEventsDate === dateKey ? `
              <div class="more-popover" role="dialog">
                ${hiddenEvents.map(event => `
                  <button class="popover-item" type="button" data-event="${event.id}">
                    <span class="popover-dot ${event.layer}"></span>
                    <span>${escapeHtml(event.title)}</span>
                  </button>
                `).join('')}
              </div>
            ` : ''}
          ` : ''}
        </div>
      </div>
    `;
  }).join('');

  return `
    <div class="week-block">
      <div class="weekdays week-grid-head">
        ${['일', '월', '화', '수', '목', '금', '토'].map(day => `<span>${day}</span>`).join('')}
      </div>
      <div class="grid">${dayCells}</div>
    </div>
  `;
}

function renderLanding() {
  const jobOptions = state.track ? JOBS_BY_TRACK[state.track] : [];
  app.innerHTML = `
    <div class="landing">
      <header class="landing-header">
        <a class="logo" href="#/">취뽀<span>달력</span></a>
        <span class="header-note">취준의 오늘을 정리하다</span>
      </header>
      <section class="hero" aria-labelledby="hero-title">
        <p class="eyebrow"><i></i> CAREER PLANNING, MADE CLEAR</p>
        <h1 id="hero-title">당신이 꿈꾸는 직무를<br /><em>선택하세요.</em></h1>
        <p class="hero-copy">한 방에 끝내는 취준 숏컷 캘린더</p>
        <div class="selector-card">
          <div class="card-label">나의 취업 목표</div>
          <label class="sentence">
            저는
            <select id="track" aria-label="기업 대분류">
              <option value="">대분류를 선택하세요</option>
              ${Object.keys(JOBS_BY_TRACK).map(track => `<option value="${track}" ${track === state.track ? 'selected' : ''}>${track}</option>`).join('')}
            </select>
            의
            <select id="job" aria-label="직무" ${state.track ? '' : 'disabled'}>
              <option value="">직무를 선택하세요</option>
              ${jobOptions.map(job => `<option value="${job}" ${job === state.job ? 'selected' : ''}>${job}</option>`).join('')}
            </select>
            직무에 취업하고 싶어요.
          </label>
          <div class="season-field">
            <span>목표 시즌</span>
            <div class="season-options">
              ${getSeasonOptions().map(season => `<button class="season ${season === state.season ? 'selected' : ''}" data-season="${season}" type="button">${season}</button>`).join('')}
            </div>
          </div>
          <button id="create-calendar" class="primary-button" ${state.track && state.job && state.season ? '' : 'disabled'}>
            취뽀 캘린더 만들기 <span>→</span>
          </button>
        </div>
        <p class="form-hint">문과 계열 직무를 중심으로 구성했어요. 선택 후 언제든 바꿀 수 있습니다.</p>
      </section>
      <section class="benefits">
        <div><b>01</b><strong>공채 마감일</strong><p>목표 시즌에 맞춘 지원 일정을 정리해요.</p></div>
        <div><b>02</b><strong>준비 역산</strong><p>마감일 기준으로 필요한 시작일을 계산해요.</p></div>
        <div><b>03</b><strong>자격증 로드맵</strong><p>직무에 맞는 다음 한 걸음을 보여드려요.</p></div>
      </section>
    </div>
  `;

  document.querySelector('#track').addEventListener('change', event => {
    state.track = event.target.value;
    state.job = '';
    selectedCompanies.length = 0;
    customCompanyEvents.length = 0;
    saveSelectedCompanies();
    saveCompanyEvents();
    saveSelection();
    renderLanding();
  });

  document.querySelector('#job').addEventListener('change', event => {
    state.job = event.target.value;
    saveSelection();
    renderLanding();
  });

  document.querySelectorAll('.season').forEach(button => {
    button.addEventListener('click', () => {
      state.season = button.dataset.season;
      saveSelection();
      renderLanding();
    });
  });

  document.querySelector('#create-calendar').addEventListener('click', () => {
    trackEvent('calendar_generated', state);
    location.hash = '#/calendar';
  });
}

function getSeasonOptions() {
  const year = today.getFullYear();
  const currentHalfOptions = today.getMonth() < 6 ? [`${year} 상반기`, `${year} 하반기`] : [`${year} 하반기`];
  return [
    ...currentHalfOptions,
    `${year + 1} 상반기`,
    `${year + 1} 하반기`,
    `${year + 2} 상반기`,
    `${year + 2} 하반기`,
  ];
}

function renderMonthView(monthDate, events, monthIndex, monthCount) {
  const monthEvents = monthEventsForSummary(events, monthDate);
  const recruitmentActive = monthEvents.some(event => event.layer === 'recruitment');
  const weeks = buildMonthWeeks(monthDate);
  const visibleMultiDayEvents = getVisibleMultiDayEvents(events, monthDate);

  return `
    <section class="month-section ${recruitmentActive ? 'recruitment-active' : ''} ${calendarTransition ? `turn-${calendarTransition}` : ''}">
      <div class="month-top">
        <div>
          <p>${monthDate.getFullYear()}년</p>
          <h2>${formatMonthLabel(monthDate)}</h2>
        </div>
        <div class="month-nav">
          <button id="prev-month" type="button" ${monthIndex === 0 ? 'disabled' : ''} aria-label="이전 달">
            <span>‹</span>
          </button>
          <span class="month-badge ${recruitmentActive ? 'active' : ''}">${monthIndex + 1} / ${monthCount}</span>
          <button id="next-month" type="button" ${monthIndex === monthCount - 1 ? 'disabled' : ''} aria-label="다음 달">
            <span>›</span>
          </button>
        </div>
      </div>
      <div class="month-grid">
        ${weeks.map(week => renderWeekBlock(week, visibleMultiDayEvents)).join('')}
      </div>
    </section>
  `;
}

function renderCalendar() {
  if (!state.track || !state.job || !state.season) {
    location.hash = '#/';
    return;
  }

  const events = getAllEvents();
  const monthDates = monthRange(today, targetSeasonDate());
  calendarViewIndex = clampCalendarViewIndex(monthDates.length);
  const visibleMonth = monthDates[calendarViewIndex];
  const nextRecruitmentMonth = monthDates.slice(calendarViewIndex).find(monthDate => {
    const monthEvents = monthEventsForSummary(events, monthDate);
    return monthEvents.some(event => event.layer === 'recruitment');
  }) || monthDates.find(monthDate => {
    const monthEvents = monthEventsForSummary(events, monthDate);
    return monthEvents.some(event => event.layer === 'recruitment');
  });

  app.innerHTML = `
    <div class="calendar-app">
      <header class="calendar-header">
        <a class="logo" href="#/">취뽀<span>달력</span></a>
        <div class="selection-summary">
          <b>${escapeHtml(state.track)}</b>
          <span>·</span>
          <b>${escapeHtml(state.job)}</b>
          <span>·</span>
          <span>${escapeHtml(state.season)}</span>
          <button id="edit-goal" type="button">수정</button>
        </div>
      </header>
      <div class="dday">
        <span>D-${Math.max(0, Math.ceil((targetSeasonDate() - today) / (1000 * 60 * 60 * 24)))}</span>
        <strong>${getGoalProgressText()}</strong>
        <small>${nextRecruitmentMonth ? `다음 공채 포인트는 ${formatMonthLabel(nextRecruitmentMonth)}입니다.` : '월별 일정을 차근차근 이어가세요.'}</small>
      </div>
      ${getCompanyDdayList().length ? `
        <div class="company-dday-list">
          ${getCompanyDdayList().map(item => `
            <div class="company-dday-pill">
              <span>${escapeHtml(item.company)}</span>
              <strong>D-${item.days}</strong>
            </div>
          `).join('')}
        </div>
      ` : ''}
      ${getCertificateDayItems().length ? `
        <div class="company-dday-list certificate-dday-list">
          ${getCertificateDayItems().map(item => `
            <div class="company-dday-pill certificate-pill">
              <span>${escapeHtml(item.cert.name)}</span>
              <strong>D-${item.days}</strong>
              <button class="pill-edit" type="button" data-cert-goal-edit="${escapeHtml(item.cert.name)}">목표 ${item.targetWeeks}주</button>
            </div>
          `).join('')}
        </div>
      ` : ''}
      <div class="calendar-layout">
        <aside>
          <section class="next-task">
            <p class="panel-label">오늘의 한 걸음</p>
            <strong>${escapeHtml((events.find(event => event.layer === 'aptitude') || events[0]).title)}</strong>
            <p>${escapeHtml((events.find(event => event.layer === 'aptitude') || events[0]).detail)}</p>
          </section>
          <section class="layer-panel">
            <p class="panel-label">표시할 일정</p>
            ${Object.entries(LAYER_META).map(([key, meta]) => `
              <label class="layer-row">
                <input type="checkbox" data-layer="${key}" ${layerState[key] ? 'checked' : ''} />
                <i class="swatch ${meta.color}"></i>
                ${meta.label}
              </label>
            `).join('')}
            ${getSelectedCertificateList().length ? `
              <div class="certificate-toggle-group">
                <p class="panel-label">자격증 개별 표시</p>
                ${getSelectedCertificateList().map(item => `
                  <label class="layer-row certificate-row">
                    <input type="checkbox" data-certificate-toggle="${escapeHtml(item.cert.name)}" ${certificateVisibility[item.cert.name] === false ? '' : 'checked'} />
                    <i class="swatch certificate"></i>
                    ${escapeHtml(item.cert.name)}
                  </label>
                `).join('')}
              </div>
            ` : ''}
          </section>
          <section class="roadmap">
            <p class="panel-label">추천 자격증</p>
          ${renderCertificatePlan()}
          ${renderCompanyPanel()}
          </section>
          <section class="quick-add">
            <p class="panel-label">일정 추가</p>
            <form id="event-form" class="event-form">
              <input id="event-title" type="text" placeholder="일정 제목" maxlength="30" required />
              <input id="event-date" type="date" value="${toDateInputValue(today)}" required />
              <select id="event-layer">
                ${Object.entries(LAYER_META).map(([key, meta]) => `<option value="${key}" ${key === 'personal' ? 'selected' : ''}>${meta.label}</option>`).join('')}
              </select>
              <textarea id="event-detail" rows="3" placeholder="메모"></textarea>
              <button type="submit" class="primary-button compact">일정 추가 <span>＋</span></button>
            </form>
          </section>
          ${quoteCardMarkup()}
        </aside>
        <main class="month-stack">
          ${renderMonthView(visibleMonth, events, calendarViewIndex, monthDates.length)}
        </main>
      </div>
      <div class="detail" id="detail" hidden></div>
      ${activeCertificateGoalEditor ? renderCertificateGoalEditor(activeCertificateGoalEditor) : ''}
      ${toastMessage ? `<div class="toast" role="status" aria-live="polite">${escapeHtml(toastMessage)}</div>` : ''}
    </div>
  `;

  document.querySelector('#edit-goal').addEventListener('click', () => {
    location.hash = '#/';
  });

  document.querySelectorAll('[data-cert]').forEach(button => {
    button.addEventListener('click', () => {
      const cert = getCertificateRecommendations().find(item => String(item.rank) === String(button.dataset.cert));
      if (!cert) return;
      activeCertificatePicker = activeCertificatePicker?.rank === cert.rank ? null : cert.rank;
      renderCalendar();
    });
  });

  document.querySelectorAll('[data-cert-round]').forEach(button => {
    button.addEventListener('click', () => {
      addCertificateSchedule(button.dataset.cert, button.dataset.certRound);
    });
  });

  document.querySelectorAll('[data-cert-goal-edit]').forEach(button => {
    button.addEventListener('click', () => {
      const cert = Object.values(CERTIFICATE_RECOMMENDATIONS).flat().find(item => item.name === button.dataset.certGoalEdit);
      if (!cert) return;
      activeCertificateGoalEditor = cert.name;
      renderCalendar();
    });
  });

  const goalEditor = document.querySelector('#certificate-goal-editor');
  if (goalEditor) {
    goalEditor.addEventListener('click', event => {
      if (event.target === goalEditor) {
        activeCertificateGoalEditor = null;
        renderCalendar();
      }
    });
    goalEditor.querySelector('[data-goal-close]')?.addEventListener('click', () => {
      activeCertificateGoalEditor = null;
      renderCalendar();
    });
    goalEditor.querySelector('#certificate-goal-form')?.addEventListener('submit', event => {
      event.preventDefault();
      const weeks = goalEditor.querySelector('#certificate-goal-weeks').value;
      const certName = goalEditor.dataset.certName;
      setCertificateTargetPrepWeeks(certName, weeks);
      activeCertificateGoalEditor = null;
      showToast(`${certName} 목표 준비기간이 ${weeks}주로 저장되었어요.`);
      renderCalendar();
    });
  }

  document.querySelectorAll('[data-cert-close]').forEach(button => {
    button.addEventListener('click', () => {
      activeCertificatePicker = null;
      renderCalendar();
    });
  });

  document.querySelectorAll('[data-company]').forEach(button => {
    button.addEventListener('click', () => {
      const company = button.dataset.company;
      addCompanySchedule(company);
    });
  });

  const companySearchForm = document.querySelector('#company-search-form');
  if (companySearchForm) {
    companySearchForm.addEventListener('submit', event => {
      event.preventDefault();
      const input = document.querySelector('#company-search-input');
      const company = input.value.trim();
      if (!company) return;
      addCompanySchedule(company);
      input.value = '';
    });
  }

  const certificateSearchForm = document.querySelector('#certificate-search-form');
  if (certificateSearchForm) {
    certificateSearchForm.addEventListener('submit', event => {
      event.preventDefault();
      const input = document.querySelector('#certificate-search-input');
      const name = input.value.trim();
      if (!name) return;
      addCustomCertificate(name);
      input.value = '';
    });
  }

  const prevMonth = document.querySelector('#prev-month');
  const nextMonth = document.querySelector('#next-month');

  if (prevMonth) {
    prevMonth.addEventListener('click', () => {
      if (calendarViewIndex <= 0) return;
      calendarViewIndex -= 1;
      localStorage.setItem('chwippo-calendar-view', String(calendarViewIndex));
      calendarTransition = 'prev';
      trackEvent('calendar_month_navigated', { direction: 'prev', month_index: calendarViewIndex });
      renderCalendar();
      setTimeout(() => { calendarTransition = ''; }, 450);
    });
  }

  if (nextMonth) {
    nextMonth.addEventListener('click', () => {
      if (calendarViewIndex >= monthDates.length - 1) return;
      calendarViewIndex += 1;
      localStorage.setItem('chwippo-calendar-view', String(calendarViewIndex));
      calendarTransition = 'next';
      trackEvent('calendar_month_navigated', { direction: 'next', month_index: calendarViewIndex });
      renderCalendar();
      setTimeout(() => { calendarTransition = ''; }, 450);
    });
  }

  document.querySelectorAll('[data-layer]').forEach(input => {
    input.addEventListener('change', event => {
      layerState[event.target.dataset.layer] = event.target.checked;
      saveLayerState();
      trackEvent('layer_toggle_used', {
        layer: event.target.dataset.layer,
        enabled: event.target.checked,
      });
      renderCalendar();
    });
  });

  document.querySelectorAll('[data-certificate-toggle]').forEach(input => {
    input.addEventListener('change', event => {
      certificateVisibility[event.target.dataset.certificateToggle] = event.target.checked;
      saveCertificateVisibility();
      renderCalendar();
    });
  });

  document.querySelector('#event-form').addEventListener('submit', event => {
    event.preventDefault();
    const title = document.querySelector('#event-title').value.trim();
    const date = document.querySelector('#event-date').value;
    const layer = document.querySelector('#event-layer').value;
    const detail = document.querySelector('#event-detail').value.trim();

    if (!title || !date) return;

    customEvents.unshift({
      id: `custom-${Date.now()}`,
      title,
      start: date,
      end: date,
      layer,
      kind: layer === 'personal' ? '개인 일정' : '추가 일정',
      detail: detail || '사용자가 직접 추가한 일정입니다.',
    });

    saveCustomEvents();
    trackEvent('custom_event_added', { layer, title });
    renderCalendar();
  });

  document.querySelectorAll('[data-event]').forEach(button => {
    button.addEventListener('click', () => {
      showDetail(events.find(event => event.id === button.dataset.event));
    });
  });

  document.querySelectorAll('[data-more-events]').forEach(button => {
    button.addEventListener('click', () => {
      activeMoreEventsDate = activeMoreEventsDate === button.dataset.moreEvents ? '' : button.dataset.moreEvents;
      renderCalendar();
    });
  });
}

function renderCertificatePlan() {
  const recommendations = getCertificateRecommendations();

  return `
    <section class="planner-card">
      <div class="planner-card-head">
        <div>
          <p class="panel-label">자격증 로드맵</p>
          <strong>내 캘린더 추가하기</strong>
        </div>
        <span class="planner-toggle-hint">토글로 펼쳐보기</span>
      </div>
      <div class="certificate-list">
      <form id="certificate-search-form" class="company-search certificate-search">
        <input id="certificate-search-input" type="search" placeholder="자격증 검색해서 추가" maxlength="40" />
        <button class="secondary-button" type="submit">추가</button>
      </form>
      ${recommendations.map(cert => `
        <div class="certificate-card ${cert.seriesClass} ${activeCertificatePicker === cert.rank ? 'expanded' : ''}">
          <div class="certificate-head">
            <span class="priority">${cert.rank}순위</span>
            <strong>${escapeHtml(cert.name)}</strong>
            <small>${escapeHtml(getCertificatePriorityCompanies(cert.name).length ? `${getCertificatePriorityCompanies(cert.name).join(', ')} 기업에서 우대` : '우대 기업 정보 없음')}</small>
          </div>
          <div class="certificate-body">
            <p>${escapeHtml(cert.description)}</p>
            <button class="secondary-button" type="button" data-cert="${cert.rank}" aria-expanded="${activeCertificatePicker === cert.rank ? 'true' : 'false'}">내 캘린더 추가하기</button>
            ${activeCertificatePicker === cert.rank ? renderCertificatePicker(cert) : ''}
            ${activeCertificatePicker === cert.rank ? '<p class="picker-hint">선택하면 일정이 바로 캘린더에 추가돼요.</p>' : ''}
          </div>
        </div>
      `).join('')}
      </div>
    </section>
  `;
}

function renderCompanyPanel() {
  const recommendations = getCompanyRecommendations();
  return `
    <section class="planner-card company-panel">
      <div class="planner-card-head">
        <div>
          <p class="panel-label">관심 기업 추가하기</p>
          <strong>선택 직무의 유망 기업</strong>
        </div>
      </div>
      <div class="company-list">
        ${recommendations.map((company, index) => `
          <button class="company-pill ${company.style} ${selectedCompanies.includes(company.name) ? 'selected' : ''}" type="button" data-company="${escapeHtml(company.name)}" data-order="${index}">
            ${escapeHtml(company.name)}
          </button>
        `).join('')}
      </div>
      <form id="company-search-form" class="company-search">
        <input id="company-search-input" type="search" placeholder="직접 기업 검색해서 추가" maxlength="30" />
        <button class="secondary-button" type="submit">추가</button>
      </form>
    </section>
  `;
}

function renderCertificatePicker(cert) {
  const options = getCertificateRoundOptions(cert);
  return `
    <div class="certificate-picker-card" aria-label="${escapeHtml(cert.name)} 회차 선택">
      <div class="picker-head">
        <p class="panel-label">회차 선택</p>
        <button class="picker-close" type="button" data-cert-close aria-label="닫기">×</button>
      </div>
      <p class="picker-desc">어느 회차를 캘린더에 넣을지 고르세요.</p>
      <div class="picker-list">
        ${options.map(option => `
          <button class="picker-option" type="button" data-cert-round="${option.round}" data-cert="${cert.rank}">
            <strong>${option.label}</strong>
            <span>${escapeHtml(option.summary)}</span>
          </button>
        `).join('')}
      </div>
    </div>
  `;
}

function findCertificateByName(name) {
  return Object.values(CERTIFICATE_RECOMMENDATIONS).flat().find(item => item.name === name);
}

function addCustomCertificate(name) {
  const trimmed = String(name || '').trim();
  if (!trimmed) return;
  if (!selectedCertificates.includes(trimmed)) {
    selectedCertificates.unshift(trimmed);
    saveSelectedCertificates();
  }
  const baseCert = findCertificateByName(trimmed);
  const targetWeeks = baseCert ? getCertificateTargetPrepWeeks(baseCert) : 4;
  const examDate = addDays(addMonths(startOfMonth(today), 1), targetWeeks * 7);
  customEvents.unshift({
    id: `cert-custom-${Date.now()}`,
    title: `${trimmed} 시험`,
    start: examDate,
    end: examDate,
    layer: 'certificate',
    kind: '자격증',
    detail: `${trimmed} 일정이 추가되었어요.`,
    markerLabel: '시험',
  });
  saveCustomEvents();
  layerState.certificate = true;
  saveLayerState();
  renderCalendar();
  showToast(`${formatMonthLabel(examDate)} ${examDate.getDate()}일 ${trimmed} 자격증 일정이 캘린더에 추가되었어요.`);
}

function renderCertificateGoalEditor(certName) {
  const cert = findCertificateByName(certName);
  const currentWeeks = cert ? getCertificateTargetPrepWeeks(cert) : 4;
  return `
    <div class="modal-card certificate-goal-card" id="certificate-goal-editor" data-cert-name="${escapeHtml(certName)}" role="dialog" aria-modal="true">
      <div class="picker-head">
        <p class="panel-label">목표 기간 편집</p>
        <button class="picker-close" type="button" data-goal-close aria-label="닫기">×</button>
      </div>
      <h3>${escapeHtml(certName)}</h3>
      <form id="certificate-goal-form" class="goal-form">
        <label>
          목표 준비 기간(주)
          <input id="certificate-goal-weeks" type="number" min="1" max="52" value="${currentWeeks}" />
        </label>
        <button class="primary-button compact" type="submit">저장</button>
      </form>
    </div>
  `;
}

function addCompanySchedule(companyName) {
  if (!companyName) return;
  const recommendations = getCompanyRecommendations();
  const found = recommendations.find(item => item.name === companyName);
  const index = found ? recommendations.indexOf(found) : 0;
  const storedIndex = customCompanyEvents.findIndex(item => item.name === companyName);
  if (storedIndex >= 0) customCompanyEvents.splice(storedIndex, 1);
  customCompanyEvents.unshift({ name: companyName, order: index });
  saveCompanyEvents();
  if (!selectedCompanies.includes(companyName)) {
    selectedCompanies.unshift(companyName);
    saveSelectedCompanies();
  }
  trackEvent('company_schedule_added', { company: companyName, source: found ? 'recommendation' : 'search' });
  renderCalendar();
}

function toDateInputValue(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function showDetail(event) {
  if (!event) return;
  const detail = document.querySelector('#detail');
  detail.hidden = false;
  detail.innerHTML = `
    <button class="close-detail" aria-label="닫기">×</button>
    <p>${escapeHtml(event.kind)}</p>
    <h2>${escapeHtml(event.title)}</h2>
    <strong>${formatRange(event.start, event.end)}까지</strong>
    <div>${escapeHtml(event.detail)}</div>
    ${event.custom ? '<button class="delete-detail" type="button">삭제</button>' : ''}
  `;

  detail.querySelector('.close-detail').addEventListener('click', () => {
    detail.hidden = true;
  });

  const deleteButton = detail.querySelector('.delete-detail');
  if (deleteButton) {
    deleteButton.addEventListener('click', () => {
      const index = customEvents.findIndex(item => item.id === event.id);
      if (index >= 0) {
        customEvents.splice(index, 1);
        saveCustomEvents();
      }
      detail.hidden = true;
      renderCalendar();
    });
  }
}

function router() {
  if (location.hash === '#/calendar') {
    renderCalendar();
    return;
  }
  renderLanding();
}

window.addEventListener('hashchange', router);
trackEvent('page_view', { page: 'landing' });
router();
