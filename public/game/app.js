const teamNames = [
  "Mexico",
  "South Africa",
  "Korea Republic",
  "Czechia",
  "Canada",
  "Switzerland",
  "Qatar",
  "Bosnia and Herzegovina",
  "Brazil",
  "Morocco",
  "Haiti",
  "Scotland",
  "United States",
  "Paraguay",
  "Australia",
  "T\u00fcrkiye",
  "Germany",
  "Cura\u00e7ao",
  "C\u00f4te d'Ivoire",
  "Ecuador",
  "Netherlands",
  "Japan",
  "Sweden",
  "Tunisia",
  "Belgium",
  "Egypt",
  "Iran",
  "New Zealand",
  "Spain",
  "Cabo Verde",
  "Saudi Arabia",
  "Uruguay",
  "France",
  "Senegal",
  "Norway",
  "Iraq",
  "Argentina",
  "Algeria",
  "Austria",
  "Jordan",
  "Portugal",
  "Congo DR",
  "Uzbekistan",
  "Colombia",
  "England",
  "Croatia",
  "Ghana",
  "Panama",
];

const teamFlagFileNames = [
  "Mexico",
  "South_Africa",
  "South_Korea",
  "Czech_Republic",
  "Canada",
  "Switzerland",
  "Qatar",
  "Bosnia_Herzegovina",
  "Brazil",
  "Morocco",
  "Haiti",
  "Scotland",
  "United_States",
  "Paraguay",
  "Australia",
  "Turkey",
  "Germany",
  "Curacao",
  "Ivory_Coast",
  "Ecuador",
  "Netherlands",
  "Japan",
  "Sweden",
  "Tunisia",
  "Belgium",
  "Egypt",
  "Iran",
  "New_Zealand",
  "Spain",
  "Cape_Verde",
  "Saudi_Arabia",
  "Uruguay",
  "France",
  "Senegal",
  "Norway",
  "Iraq",
  "Argentina",
  "Algeria",
  "Austria",
  "Jordan",
  "Portugal",
  "DR_Congo",
  "Uzbekistan",
  "Colombia",
  "England",
  "Croatia",
  "Ghana",
  "Panama",
];

const teamThemes = [
  ["#0b8f4d", "#ffffff"],
  ["#f6c945", "#1f9b5a"],
  ["#f4f4f4", "#d63b3b"],
  ["#d62d2d", "#ffffff"],
  ["#e32636", "#ffffff"],
  ["#e01828", "#ffffff"],
  ["#8d173a", "#ffffff"],
  ["#1f65b7", "#f6d64a"],
  ["#f6d64a", "#1d9a50"],
  ["#c91f2f", "#1f9b5a"],
  ["#173f8f", "#d62828"],
  ["#244bba", "#ffffff"],
  ["#ffffff", "#1f4b99"],
  ["#d62828", "#ffffff"],
  ["#f6d64a", "#0b5ca8"],
  ["#d51f2a", "#ffffff"],
  ["#ffffff", "#111111"],
  ["#1f65b7", "#f6d64a"],
  ["#f58220", "#17853b"],
  ["#f6d64a", "#244bba"],
  ["#f47a20", "#ffffff"],
  ["#f2f2f2", "#d71f2a"],
  ["#f6d64a", "#244bba"],
  ["#d51f2a", "#ffffff"],
  ["#d51f2a", "#f6d64a"],
  ["#d51f2a", "#ffffff"],
  ["#ffffff", "#1f9b5a"],
  ["#ffffff", "#111111"],
  ["#e12d2d", "#ffd447"],
  ["#244bba", "#ffffff"],
  ["#ffffff", "#1f9b5a"],
  ["#62b7ff", "#111111"],
  ["#244bba", "#ffffff"],
  ["#1f9b5a", "#f6d64a"],
  ["#d51f2a", "#244bba"],
  ["#1f9b5a", "#ffffff"],
  ["#62b7ff", "#ffffff"],
  ["#ffffff", "#1f9b5a"],
  ["#ffffff", "#d51f2a"],
  ["#ffffff", "#d51f2a"],
  ["#d51f2a", "#1f9b5a"],
  ["#244bba", "#d51f2a"],
  ["#ffffff", "#1f65b7"],
  ["#f6d64a", "#244bba"],
  ["#ffffff", "#d82434"],
  ["#ffffff", "#d51f2a"],
  ["#ffffff", "#111111"],
  ["#d51f2a", "#244bba"],
];

const teamEmojis = [
  "馃嚥馃嚱",
  "馃嚳馃嚘",
  "馃嚢馃嚪",
  "馃嚚馃嚳",
  "馃嚚馃嚘",
  "馃嚚馃嚟",
  "馃嚩馃嚘",
  "馃嚙馃嚘",
  "馃嚙馃嚪",
  "馃嚥馃嚘",
  "馃嚟馃嚬",
  "馃彺",
  "馃嚭馃嚫",
  "馃嚨馃嚲",
  "馃嚘馃嚭",
  "馃嚬馃嚪",
  "馃嚛馃嚜",
  "馃嚚馃嚰",
  "馃嚚馃嚠",
  "馃嚜馃嚚",
  "馃嚦馃嚤",
  "馃嚡馃嚨",
  "馃嚫馃嚜",
  "馃嚬馃嚦",
  "馃嚙馃嚜",
  "馃嚜馃嚞",
  "馃嚠馃嚪",
  "馃嚦馃嚳",
  "馃嚜馃嚫",
  "馃嚚馃嚮",
  "馃嚫馃嚘",
  "馃嚭馃嚲",
  "馃嚝馃嚪",
  "馃嚫馃嚦",
  "馃嚦馃嚧",
  "馃嚠馃嚩",
  "馃嚘馃嚪",
  "馃嚛馃嚳",
  "馃嚘馃嚬",
  "馃嚡馃嚧",
  "馃嚨馃嚬",
  "馃嚚馃嚛",
  "馃嚭馃嚳",
  "馃嚚馃嚧",
  "馃彺",
  "馃嚟馃嚪",
  "馃嚞馃嚟",
  "馃嚨馃嚘",
];

const teams = teamNames.map((name, index) => {
  const number = String(index + 1).padStart(2, "0");
  const fileName = teamFlagFileNames[index];
  const id = fileName.toLowerCase().replaceAll("_", "-");
  const [primary, secondary] = teamThemes[index];

  return {
    id,
    name,
    emoji: teamEmojis[index],
    flagSrc: `../image/twitter-emoji/${number}_${fileName}.png`,
    chant: `${name.toUpperCase().split(" ")[0]}!`,
    primary,
    secondary,
    support: 0,
    votes: 0,
    goals: 0,
    previousRank: index + 1,
  };
});

const selectionTeams = [...teams].sort((a, b) => a.name.localeCompare(b.name, "en", { sensitivity: "base" }));

const zones = {
  leftTop: { label: "Top Left", keeperChance: 0.28, reticle: [18, 24] },
  centerTop: { label: "Top Center", keeperChance: 0.34, reticle: [50, 22] },
  rightTop: { label: "Top Right", keeperChance: 0.28, reticle: [82, 24] },
  leftLow: { label: "Low Left", keeperChance: 0.42, reticle: [28, 70] },
  rightLow: { label: "Low Right", keeperChance: 0.42, reticle: [72, 70] },
};

let gameState = "start";
let activeTeamId = selectionTeams[0].id;
let shooting = false;
let goalStreak = 0;
let shotCount = 0;
let roundGoals = 0;
let roundFanPower = 0;
let shotAim = { x: 0.5, y: 0.3 };
let keeperX = 0.5;
let keeperDirection = 1;
let keeperFrameId = null;
let wallPlayers = [];
let fistReady = true;
let cameraStream = null;
let motionTimer = null;
let previousFrame = null;
let zoneStableSince = 0;
let handLandmarker = null;
let handLoopId = null;
let lastVideoTime = -1;
let modelLoading = false;
let usingModel = false;
let shotAnimationId = null;

let currentAimZoneId = "centerTop";
let flashbulbTimer = null;
let shotTimerId = null;
let shotTimeLeft = 30;
let fistFrameCount = 0;
let lastGestureShotAt = 0;
let walkoutTimers = [];
let bgmFadeFrameId = null;
const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
let onboardShown = false;        // 本局只弹一次
let onboardTimerId = null;       // 倒计时 interval

const root = document.documentElement;
const gameStage = document.querySelector("#gameStage");
const flashbulbLayer = document.querySelector("#flashbulbLayer");
const startScreen = document.querySelector("#startScreen");
const teamScreen = document.querySelector("#teamScreen");
const walkoutScreen = document.querySelector("#walkoutScreen");
const resultScreen = document.querySelector("#resultScreen");
const startButton = document.querySelector("#startButton");
const confirmTeamButton = document.querySelector("#confirmTeamButton");
const teamGrid = document.querySelector("#teamGrid");
const leaderboardList = document.querySelector("#leaderboardList");
const podiumList = document.querySelector("#podiumList");
const resultLeaderboardList = document.querySelector("#resultLeaderboardList");
const activeFlag = document.querySelector("#activeFlag");
const activeTeamName = document.querySelector("#activeTeamName");
const activeSupport = document.querySelector("#activeSupport");
const streak = document.querySelector("#streak");
const shotTimer = document.querySelector("#shotTimer");
const shotTimerValue = document.querySelector("#shotTimerValue");
const walkoutCountdown = document.querySelector("#walkoutCountdown");
const selectedFlag = document.querySelector("#selectedFlag");
const selectedTeamName = document.querySelector("#selectedTeamName");
const walkoutFlag = document.querySelector("#walkoutFlag");
const walkoutTeam = document.querySelector("#walkoutTeam");
const shootButton = document.querySelector("#shootButton");
const aimLabel = document.querySelector("#aimLabel");
const aimReticle = document.querySelector("#aimReticle");
const aimCurvePath = document.querySelector("#aimCurvePath");
const wallLine = document.querySelector("#wallLine");
const goalScene = document.querySelector(".goal-scene");
const goalFrame = document.querySelector(".goal-frame");
const targetZoneButtons = document.querySelectorAll(".target-zone");
const keeper = document.querySelector("#keeper");
const keeperFrame = document.querySelector("#keeperFrame");
const ball = document.querySelector("#ball");
const striker = document.querySelector("#striker");
const strikerFrame = document.querySelector("#strikerFrame");
const resultBurst = document.querySelector("#resultBurst");
const resultShell = document.querySelector("#resultShell");
const resultTitle = document.querySelector("#resultTitle");
const resultSummary = document.querySelector("#resultSummary");
const resultGoals = document.querySelector("#resultGoals");
const resultFanPower = document.querySelector("#resultFanPower");
const viewRankingsButton = document.querySelector("#viewRankingsButton");
const closeRankingsButton = document.querySelector("#closeRankingsButton");
const retryButton = document.querySelector("#retryButton");
const changeTeamButton = document.querySelector("#changeTeamButton");
const danmakuLayer = document.querySelector("#danmakuLayer");
const cameraButton = document.querySelector("#cameraButton");
const cameraFeed = document.querySelector("#cameraFeed");
const cameraView = document.querySelector(".camera-view");
const motionCanvas = document.querySelector("#motionCanvas");
const gestureStatus = document.querySelector("#gestureStatus");
const gestureCoach = document.querySelector("#gestureCoach");
const gestureOnboardOverlay = document.querySelector("#gestureOnboardOverlay");
const onboardTimerEl = document.querySelector("#onboardTimer");
const onboardGestureBtn = document.querySelector("#onboardGestureBtn");
const onboardClickBtn = document.querySelector("#onboardClickBtn");
const cameraPanel = document.querySelector(".camera-panel");

// MediaPipe 资源全部走本地，避免部署环境 CDN/Google 被墙
const MEDIAPIPE_BUNDLE = "/mediapipe/vision_bundle.mjs";
const MEDIAPIPE_WASM = "/mediapipe/wasm";
const HAND_MODEL = "/mediapipe/hand_landmarker.task";
const keeperFrames = {
  block: "/image/figure/%E5%AE%88%E9%97%A8%E5%91%98/%E6%AD%A3%E9%9D%A2%E5%B0%81%E5%A0%B5%E5%BC%8F.png",
  sideDive: "/image/figure/%E5%AE%88%E9%97%A8%E5%91%98/%E5%8D%95%E4%BE%A7%E6%89%91%E6%95%91%E5%BC%8F.png",
  highCatch: "/image/figure/%E5%AE%88%E9%97%A8%E5%91%98/%E8%B5%B7%E8%B7%B3%E9%AB%98%E6%8E%A5%E5%BC%8F.png",
};
const wallImages = [
  "/image/figure/%E4%BA%BA%E5%A2%99/%E4%BA%BA%E5%A2%991.png",
  "/image/figure/%E4%BA%BA%E5%A2%99/%E4%BA%BA%E5%A2%992.png",
  "/image/figure/%E4%BA%BA%E5%A2%99/%E4%BA%BA%E5%A2%993.png",
];
const keeperZoneActions = {
  leftTop: { image: keeperFrames.sideDive, className: "save-leftTop" },
  centerTop: { image: keeperFrames.highCatch, className: "save-centerTop" },
  rightTop: { image: keeperFrames.sideDive, className: "save-rightTop" },
  leftLow: { image: keeperFrames.block, className: "save-leftLow" },
  rightLow: { image: keeperFrames.block, className: "save-rightLow" },
};
const targetZoneAims = {
  leftTop: [0.18, 0.24],
  centerTop: [0.5, 0.22],
  rightTop: [0.82, 0.24],
  leftLow: [0.28, 0.55],
  rightLow: [0.72, 0.55],
};

const resultTextArc = {
  titleCurve: 12,
  titleRotation: 8,
  summaryCurve: 17,
  summaryRotation: 11,
};
const shotResultMessages = {
  BLOCKED: "Blocked by the wall!",
  MISS: "So close, just wide!",
  SAVED: "What a save!",
  GOAL: "It's in!! Goal!",
};
const bgm = new Audio("/music/bgm/Ukulele Cardio.mp3");
const goalSfx = new Audio("/music/Firefly_audio_stadium_crowd_cheering_loudly_after_a_goal,_soccer_variation2.wav");
const countdownSfx = new Audio("/music/mixkit-race-countdown-1953.wav");
const BGM_VOLUME = 0.42;
const GOAL_SFX_VOLUME = 0.86;
const COUNTDOWN_SFX_VOLUME = 0.48;
const SHOT_TIME_LIMIT = 30;
const GESTURE_HINT_STORAGE_KEY = "worldCupGestureHintSettings";
const gestureHintVars = [
  "--gesture-coach-left",
  "--gesture-coach-top",
  "--gesture-arrow-left",
  "--gesture-arrow-top",
  "--gesture-arrow-rotate",
];
const strikerIdleFrame = "/image/figure/%E5%88%9D%E5%A7%8B%E4%BA%BA%E7%89%A9/%E4%BA%BA%E8%AE%BE%E5%9B%BE_%E7%AB%99%E7%AB%8B%E8%83%8C%E5%BD%B1.png";
const strikerKickFrame = "/image/figure/%E5%88%9D%E5%A7%8B%E4%BA%BA%E7%89%A9/%E8%A7%A6%E7%90%83.png";

bgm.loop = true;
bgm.volume = 0;
goalSfx.volume = GOAL_SFX_VOLUME;
countdownSfx.volume = COUNTDOWN_SFX_VOLUME;

function fadeAudio(audio, targetVolume, duration = 900, onComplete) {
  if (audio === bgm && bgmFadeFrameId) {
    cancelAnimationFrame(bgmFadeFrameId);
    bgmFadeFrameId = null;
  }

  const startVolume = audio.volume;
  const startedAt = performance.now();

  function step(now) {
    const progress = clamp((now - startedAt) / duration, 0, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    audio.volume = startVolume + (targetVolume - startVolume) * eased;

    if (progress < 1) {
      const frameId = requestAnimationFrame(step);
      if (audio === bgm) bgmFadeFrameId = frameId;
      return;
    }

    if (audio === bgm) bgmFadeFrameId = null;
    if (onComplete) onComplete();
  }

  const frameId = requestAnimationFrame(step);
  if (audio === bgm) bgmFadeFrameId = frameId;
}

function fadeInBgm() {
  if (bgm.paused) {
    bgm.play().catch(() => {});
  }
  fadeAudio(bgm, BGM_VOLUME, 1200);
}

function fadeOutBgm() {
  if (bgm.paused) return;
  fadeAudio(bgm, 0, 900, () => {
    bgm.pause();
    bgm.currentTime = 0;
  });
}

function syncBgmWithState() {
  if (["teamSelect", "walkout", "stadiumIntro", "penalty"].includes(gameState)) {
    fadeInBgm();
    return;
  }

  fadeOutBgm();
}

function playGoalSfx() {
  goalSfx.currentTime = 0;
  goalSfx.play().catch(() => {});
}

function playCountdownSfx() {
  countdownSfx.currentTime = 0;
  countdownSfx.play().catch(() => {});
}

// ── 手势引导蒙版 ──────────────────────────────
function hideOnboard() {
  if (onboardTimerId) { clearInterval(onboardTimerId); onboardTimerId = null; }
  gestureOnboardOverlay.classList.remove("show");
  cameraPanel.classList.remove("onboard-highlight");
  // 确保卡片不拦截游戏点击
  gestureOnboardOverlay.style.pointerEvents = "none";
}

function showOnboard() {
  if (onboardShown) return;
  if (isTouchDevice) return;  // 移动端不弹手势引导
  onboardShown = true;
  let timeLeft = 10;
  onboardTimerEl.textContent = timeLeft;
  gestureOnboardOverlay.classList.add("show");
  cameraPanel.classList.add("onboard-highlight");

  onboardTimerId = setInterval(() => {
    timeLeft -= 1;
    onboardTimerEl.textContent = timeLeft;
    if (timeLeft <= 0) {
      // 超时默认用点击模式，直接关闭
      hideOnboard();
    }
  }, 1000);
}

// 点"开启手势"
if (onboardGestureBtn) {
  onboardGestureBtn.addEventListener("click", () => {
    hideOnboard();
    enableCamera();
  });
}

// 点"点击射击"
if (onboardClickBtn) {
  onboardClickBtn.addEventListener("click", () => {
    hideOnboard();
    addDanmaku("Click anywhere on the goal to shoot! 🎯", "goal", true);
  });
}
// ─────────────────────────────────────────────

function setWalkoutIntroText() {
  walkoutCountdown.innerHTML = "<span>Penalty shootout</span><span>starts soon</span>";
}

function showKickFrame() {
  strikerFrame.classList.add("is-kick-frame");
  strikerFrame.src = strikerKickFrame;
}

function showIdleFrame() {
  strikerFrame.classList.remove("is-kick-frame");
  strikerFrame.src = strikerIdleFrame;
}
function activeTeam() {
  return teams.find((team) => team.id === activeTeamId);
}

function clearFlashbulbs() {
  if (flashbulbTimer) {
    clearTimeout(flashbulbTimer);
    flashbulbTimer = null;
  }
  flashbulbLayer.replaceChildren();
}

function scheduleFlashbulb() {
  if (gameState !== "penalty" && gameState !== "result") return;

  const burstCount = 1 + Math.floor(Math.random() * 2);
  for (let index = 0; index < burstCount; index += 1) {
    const flash = document.createElement("span");
    const audienceBand = Math.random() < 0.58 ? [13, 26] : [28, 39];
    flash.className = "flashbulb";
    flash.style.setProperty("--flash-x", `${4 + Math.random() * 92}%`);
    flash.style.setProperty("--flash-y", `${audienceBand[0] + Math.random() * (audienceBand[1] - audienceBand[0])}%`);
    flash.style.setProperty("--flash-size", `${10 + Math.random() * 10}px`);
    flash.style.setProperty("--flash-duration", `${260 + Math.random() * 220}ms`);
    flash.style.setProperty("--flash-rotate", `${Math.random() * 45}deg`);
    flash.style.animationDelay = `${index * 90 + Math.random() * 160}ms`;
    flashbulbLayer.appendChild(flash);
    flash.addEventListener("animationend", () => flash.remove());
  }

  flashbulbTimer = setTimeout(scheduleFlashbulb, 180 + Math.random() * 520);
}

function syncFlashbulbs() {
  clearFlashbulbs();
  if (gameState === "penalty" || gameState === "result") {
    flashbulbTimer = setTimeout(scheduleFlashbulb, 120 + Math.random() * 260);
  }
}

function hideGestureCoach() {
  gestureCoach.classList.remove("show");
}

function syncGestureCoach() {
  // 已用 onboard 引导卡替代，gestureCoach 永不显示
  gestureCoach.classList.remove("show");
}

function setState(nextState) {
  if (nextState !== "penalty") stopKeeperMovement();
  if (nextState !== "penalty") stopShotTimer();
  if (nextState !== "penalty") hideGestureCoach();
  gameState = nextState;
  gameStage.className = `game-stage is-${nextState}`;
  startScreen.classList.toggle("hidden", nextState !== "start");
  teamScreen.classList.toggle("hidden", nextState !== "teamSelect");
  walkoutScreen.classList.toggle("hidden", nextState !== "walkout" && nextState !== "stadiumIntro");
  resultScreen.classList.toggle("hidden", nextState !== "result");
  syncFlashbulbs();
  syncBgmWithState();
}

function loadSavedGestureHintPosition() {
  let saved = {};
  try {
    saved = JSON.parse(localStorage.getItem(GESTURE_HINT_STORAGE_KEY) || "{}");
  } catch (error) {
    saved = {};
  }

  gestureHintVars.forEach((propertyName) => {
    if (!saved[propertyName]) return;
    const unit = propertyName === "--gesture-arrow-rotate" ? "deg" : "px";
    root.style.setProperty(propertyName, `${saved[propertyName]}${unit}`);
  });
}

function sortedTeams() {
  return [...teams].sort((a, b) => {
    if (b.support !== a.support) return b.support - a.support;
    if (b.goals !== a.goals) return b.goals - a.goals;
    return b.votes - a.votes;
  });
}

function flagMarkup(team, className = "flag-img") {
  return `<img class="${className}" src="${team.flagSrc}" alt="${team.name}" />`;
}

function renderTeams() {
  teamGrid.innerHTML = selectionTeams
    .map(
      (team) => `
        <button class="team-card ${team.id === activeTeamId ? "active" : ""}" data-team="${team.id}" type="button">
          ${flagMarkup(team)}
          <span>${team.name}</span>
        </button>
      `,
    )
    .join("");
}

function leaderboardItems(limit = teams.length, compact = false) {
  return sortedTeams()
    .slice(0, limit)
    .map((team, index) => {
      const rank = index + 1;
      const delta = team.previousRank - rank;
      const deltaText = delta > 0 ? `Up ${delta}` : delta < 0 ? `Down ${Math.abs(delta)}` : "-";

      return `
        <li class="leaderboard-item ${team.id === activeTeamId ? "active" : ""}">
          <span class="rank">${rank}</span>
          <span class="leader-team">
            <strong>${flagMarkup(team, "flag-img mini")} ${team.name}</strong>
            <small>${compact ? `Goals ${team.goals} - ${deltaText}` : `Shots ${team.votes} - Goals ${team.goals} - ${deltaText}`}</small>
          </span>
          <span class="score">${team.support}</span>
        </li>
      `;
    })
    .join("");
}

function renderPodium() {
  const [first, second, third] = sortedTeams();
  const podiumTeams = [
    { team: second, rank: 2, label: "Runner-up", className: "second" },
    { team: first, rank: 1, label: "Champion", className: "first" },
    { team: third, rank: 3, label: "Third Place", className: "third" },
  ];

  podiumList.innerHTML = podiumTeams
    .map(
      ({ team, rank, label, className }) => `
        <article class="podium-card ${className} ${team.id === activeTeamId ? "active" : ""}">
          <span class="podium-medal">${rank}</span>
          ${flagMarkup(team, "flag-img podium-flag")}
          <strong>${team.name}</strong>
          <small>${label} - Goals ${team.goals}</small>
          <em>${team.support}</em>
          <div class="podium-step"></div>
        </article>
      `,
    )
    .join("");
}

function renderLeaderboard() {
  leaderboardList.innerHTML = leaderboardItems(6);
  renderPodium();
  resultLeaderboardList.innerHTML = sortedTeams()
    .slice(3)
    .map((team, index) => {
      const rank = index + 4;
      const delta = team.previousRank - rank;
      const deltaText = delta > 0 ? `Up ${delta}` : delta < 0 ? `Down ${Math.abs(delta)}` : "-";

      return `
        <li class="leaderboard-item ${team.id === activeTeamId ? "active" : ""}">
          <span class="rank">${rank}</span>
          <span class="leader-team">
            <strong>${flagMarkup(team, "flag-img mini")} ${team.name}</strong>
            <small>Goals ${team.goals} - ${deltaText}</small>
          </span>
          <span class="score">${team.support}</span>
        </li>
      `;
    })
    .join("");
}

function renderActiveTeam() {
  const team = activeTeam();
  root.style.setProperty("--team-primary", team.primary);
  root.style.setProperty("--team-secondary", team.secondary);
  activeFlag.src = team.flagSrc;
  activeFlag.alt = team.name;
  activeTeamName.textContent = team.name;
  activeSupport.textContent = team.support;
  streak.textContent = goalStreak;
  selectedFlag.src = team.flagSrc;
  selectedFlag.alt = team.name;
  selectedTeamName.textContent = team.name;
  walkoutFlag.src = team.flagSrc;
  walkoutFlag.alt = team.name;
  walkoutTeam.textContent = team.name;
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function aimCurvePoints() {
  const sceneRect = goalScene.getBoundingClientRect();
  const frameRect = goalFrame.getBoundingClientRect();
  const end = sceneRect.width && sceneRect.height
    ? {
        x: ((frameRect.left - sceneRect.left + shotAim.x * frameRect.width) / sceneRect.width) * 100,
        y: ((frameRect.top - sceneRect.top + shotAim.y * frameRect.height) / sceneRect.height) * 100,
      }
    : { x: shotAim.x * 100, y: shotAim.y * 100 };

  return {
    start: { x: 58, y: 88 },
    control: {
      x: 58 + (end.x - 58) * 0.48,
      y: 88 + (end.y - 88) * 0.46 - 14,
    },
    end,
  };
}

function renderAim() {
  const chance = Math.min(shotCount + 1, 5);
  const { start, control, end } = aimCurvePoints();
  aimLabel.textContent = `${chance} / 5`;
  aimReticle.style.left = `${shotAim.x * 100}%`;
  aimReticle.style.top = `${shotAim.y * 100}%`;
  aimCurvePath.setAttribute("d", `M${start.x} ${start.y} Q${control.x.toFixed(1)} ${control.y.toFixed(1)} ${end.x.toFixed(1)} ${end.y.toFixed(1)}`);
  targetZoneButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.zone === currentAimZoneId);
  });
}

function updateAim(x, y = shotAim.y) {
  shotAim = {
    x: clamp(x, 0.02, 0.98),
    y: clamp(y, 0.03, 0.9),
  };
  currentAimZoneId = resolveAimZone();
  renderAim();
}

function resolveAimZone() {
  if (shotAim.y <= 0.52) {
    if (shotAim.x < 0.34) return "leftTop";
    if (shotAim.x > 0.66) return "rightTop";
    return "centerTop";
  }

  return shotAim.x < 0.5 ? "leftLow" : "rightLow";
}

function setKeeperIdle() {
  keeperFrame.src = keeperFrames.block;
  keeper.className = "keeper";
}

function updateShotTimerDisplay() {
  shotTimerValue.textContent = shotTimeLeft;
  shotTimer.classList.toggle("warning", shotTimeLeft <= 5);
}

function stopShotTimer() {
  if (shotTimerId) {
    clearInterval(shotTimerId);
    shotTimerId = null;
  }
}

function startShotTimer() {
  stopShotTimer();
  shotTimeLeft = SHOT_TIME_LIMIT;
  updateShotTimerDisplay();
  shotTimerId = setInterval(() => {
    shotTimeLeft -= 1;
    updateShotTimerDisplay();
    if (shotTimeLeft <= 0) expireShot();
  }, 1000);
}

function pushTeamSupport(team) {
  fetch("/api/support", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: team.id, name: team.name, support: team.support, goals: team.goals, votes: team.votes }),
  }).catch(() => {});
}

function advanceAfterShot(team) {
  pushTeamSupport(team);
  renderLeaderboard();
  renderActiveTeam();
  setTimeout(() => {
    if (shotCount >= 5) {
      showSettlement(team);
    } else {
      preparePenaltyRound();
    }
  }, 940);
}

function expireShot() {
  if (shooting || gameState !== "penalty" || shotCount >= 5) return;
  const team = activeTeam();
  hideGestureCoach();
  stopShotTimer();
  stopKeeperMovement();
  shooting = true;
  shootButton.disabled = true;
  shotCount += 1;
  goalStreak = 0;
  showResult("TIME OUT", false);
  addDanmaku(`Shot ${shotCount}: TIME OUT.`, "saved");
  advanceAfterShot(team);
}

function setKeeperAction(zoneId) {
  const action = keeperZoneActions[zoneId] || keeperZoneActions.centerTop;
  keeperFrame.src = action.image;
  keeper.style.removeProperty("transform");
  keeper.className = `keeper ${action.className}`;
}

function setRandomKeeperAction(targetX) {
  const useSideDive = Math.random() < 0.5;
  const zoneId = useSideDive ? (targetX < 0.5 ? "leftTop" : "rightTop") : "centerTop";
  setKeeperAction(zoneId);
}

function cancelShotAnimation() {
  if (shotAnimationId) cancelAnimationFrame(shotAnimationId);
  shotAnimationId = null;
}

function pointOnQuadratic(start, control, end, progress) {
  const inverse = 1 - progress;
  return {
    x: inverse * inverse * start.x + 2 * inverse * progress * control.x + progress * progress * end.x,
    y: inverse * inverse * start.y + 2 * inverse * progress * control.y + progress * progress * end.y,
  };
}

function scenePointToViewport(point) {
  const rect = goalScene.getBoundingClientRect();
  return {
    x: rect.left + (point.x / 100) * rect.width,
    y: rect.top + (point.y / 100) * rect.height,
  };
}

function animateBallAlongAim() {
  cancelShotAnimation();

  const { start, control, end } = aimCurvePoints();
  const ballRect = ball.getBoundingClientRect();
  const ballStart = {
    x: ballRect.left + ballRect.width / 2,
    y: ballRect.top + ballRect.height / 2,
  };
  const duration = 760;
  const startedAt = performance.now();

  ball.classList.remove("is-aiming");
  ball.classList.add("is-shot");

  function step(now) {
    const rawProgress = Math.min((now - startedAt) / duration, 1);
    const progress = 1 - Math.pow(1 - rawProgress, 3);
    const curvePoint = scenePointToViewport(pointOnQuadratic(start, control, end, progress));
    const scale = 0.86 - progress * 0.38;
    const rotate = progress * 720;
    const dx = curvePoint.x - ballStart.x;
    const dy = curvePoint.y - ballStart.y;

    ball.style.transform = `translate(${dx}px, ${dy}px) scale(${scale}) rotate(${rotate}deg)`;

    if (rawProgress < 1) {
      shotAnimationId = requestAnimationFrame(step);
    } else {
      shotAnimationId = null;
    }
  }

  shotAnimationId = requestAnimationFrame(step);
}

function renderAll() {
  renderTeams();
  renderLeaderboard();
  renderActiveTeam();
  renderAim();
}

let danmakuLaneIndex = 0;

function addDanmaku(text, type = "normal", immediate = false) {
  const item = document.createElement("div");
  item.className = `danmaku ${type}`;
  item.textContent = text;
  // Landscape short viewports (≤500px): 80px layer fits only 2 lanes at 38px
  const compact = window.innerHeight < 500;
  const laneCount = compact ? 2 : 5;
  item.style.top = `${(danmakuLaneIndex % laneCount) * 38}px`;
  item.style.animationDelay = immediate ? "0s" : `${Math.floor(danmakuLaneIndex / laneCount) * 2.2}s`;
  danmakuLaneIndex += 1;
  danmakuLayer.appendChild(item);
  item.addEventListener("animationend", () => item.remove());
}

function showResult(text, isGoal) {
  resultBurst.textContent = text;
  resultBurst.style.color = isGoal ? "#fff35f" : "#eaffff";
  resultBurst.classList.remove("show");
  window.requestAnimationFrame(() => resultBurst.classList.add("show"));
}

function clearWalkoutTimers() {
  walkoutTimers.forEach((timer) => clearTimeout(timer));
  walkoutTimers = [];
}

function queueWalkoutStep(delay, callback) {
  const timer = setTimeout(callback, delay);
  walkoutTimers.push(timer);
}

function startWalkout() {
  const team = activeTeam();
  clearWalkoutTimers();
  shotCount = 0;
  roundGoals = 0;
  roundFanPower = 0;
  shotAim = { x: 0.5, y: 0.3 };
  onboardShown = false;   // 每局重置，下一局重新弹引导
  hideOnboard();
  setState("walkout");
  renderActiveTeam();
  setWalkoutIntroText();
  walkoutCountdown.classList.remove("hide");

  queueWalkoutStep(1200, () => {
    walkoutCountdown.textContent = "3";
    playCountdownSfx();
  });

  queueWalkoutStep(2050, () => {
    walkoutCountdown.textContent = "2";
  });

  queueWalkoutStep(2900, () => {
    walkoutCountdown.textContent = "1";
  });

  queueWalkoutStep(3650, () => {
    walkoutCountdown.classList.add("hide");
  });

  queueWalkoutStep(4050, () => {
    setState("stadiumIntro");
  });

  queueWalkoutStep(6250, () => {
    setState("penalty");
    preparePenaltyRound();
    addDanmaku("Penalty starts: 5 shots this round.");
  });
}
function stopKeeperMovement() {
  if (keeperFrameId) cancelAnimationFrame(keeperFrameId);
  keeperFrameId = null;
}

function moveKeeper() {
  if (gameState !== "penalty" || shooting) return;
  const lateRoundPressure = shotCount >= 3 ? (shotCount - 2) * 0.0028 : 0;
  const speed = 0.0076 + shotCount * 0.0013 + lateRoundPressure;
  keeperX += speed * keeperDirection;
  if (keeperX > 0.8 || keeperX < 0.2) {
    keeperDirection *= -1;
    keeperX = clamp(keeperX, 0.2, 0.8);
  }
  keeper.style.left = `${keeperX * 100}%`;
  keeper.style.transform = "translateX(-50%)";
  keeperFrameId = window.requestAnimationFrame(moveKeeper);
}

function createWallPlayers() {
  const wallCounts = [3, 4, 5, 6, 6];
  const count = wallCounts[clamp(shotCount, 0, wallCounts.length - 1)];
  const shuffledWallImages = [...wallImages].sort(() => Math.random() - 0.5);
  const imageQueue = Array.from({ length: count }, (_, index) => shuffledWallImages[index % shuffledWallImages.length]);
  const sixPlayerFormations = [
    [0.18, 0.27, 0.38, 0.62, 0.73, 0.82],
    [0.14, 0.25, 0.35, 0.55, 0.67, 0.8],
    [0.2, 0.33, 0.45, 0.6, 0.71, 0.86],
  ];

  if (count === 6) {
    const baseFormation = sixPlayerFormations[(shotCount - 3 + Math.floor(Math.random() * 2)) % sixPlayerFormations.length];
    wallPlayers = baseFormation.map((baseX, index) => ({
      x: clamp(baseX + (Math.random() - 0.5) * 0.018, 0.12, 0.88),
      reach: 0.04,
      image: imageQueue[index],
    }));
    wallLine.innerHTML = wallPlayers
      .map(
        (player) => `
        <div
          class="wall-player"
          style="left:${player.x * 100}%; z-index:1;"
        >
          <img src="${player.image}" alt="" draggable="false" />
        </div>
      `,
      )
      .join("");
    return;
  }

  const leftCount = Math.ceil(count / 2);
  const rightCount = count - leftCount;
  const gapByCount = {
    3: 0.07,
    4: 0.06,
    5: 0.047,
    6: 0.032,
  };
  const gapHalfWidth = (gapByCount[count] || 0.06) + Math.random() * 0.008;
  const leftStart = 0.22 + (Math.random() - 0.5) * 0.025;
  const leftEnd = 0.5 - gapHalfWidth;
  const rightStart = 0.5 + gapHalfWidth;
  const rightEnd = 0.78 + (Math.random() - 0.5) * 0.025;

  const makeSideSlots = (sideCount, start, end, offset) =>
    Array.from({ length: sideCount }, (_, index) => {
      const progress = sideCount === 1 ? 0.5 : index / (sideCount - 1);
      const x = clamp(start + progress * (end - start) + (Math.random() - 0.5) * 0.018, 0.14, 0.86);

      return {
        x,
        reach: 0.044,
        image: imageQueue[offset + index],
      };
    });

  const slots = [...makeSideSlots(leftCount, leftStart, leftEnd, 0), ...makeSideSlots(rightCount, rightStart, rightEnd, leftCount)];

  wallPlayers = slots.sort((a, b) => a.x - b.x);
  wallLine.innerHTML = wallPlayers
    .map(
      (player) => `
        <div
          class="wall-player"
          style="left:${player.x * 100}%; z-index:1;"
        >
          <img src="${player.image}" alt="" draggable="false" />
        </div>
      `,
    )
    .join("");
}

function preparePenaltyRound() {
  cancelShotAnimation();
  stopKeeperMovement();
  stopShotTimer();
  ball.className = "ball";
  ball.classList.add("is-aiming");
  ball.style.removeProperty("transform");
  setKeeperIdle();
  keeper.style.transform = "translateX(-50%)";
  striker.classList.remove("kick");
  showIdleFrame();   // 每球准备时还原站立图
  shooting = false;
  shootButton.disabled = false;
  fistReady = true;
  fistFrameCount = 0;
  keeperX = 0.24 + Math.random() * 0.52;
  keeperDirection = Math.random() > 0.5 ? 1 : -1;
  createWallPlayers();
  updateAim(shotAim.x, shotAim.y);
  moveKeeper();
  startShotTimer();
  syncGestureCoach();
  // 仅第1球显示引导，第2球起不再提示
  if (shotCount === 0 && !onboardShown) {
    showOnboard();
  } else {
    hideOnboard();
  }
  if (shotCount === 4) addDanmaku("Final shot. Make it count.", "goal", true);
  gestureStatus.textContent = "Open palm: move aim. Make a fist to shoot.";
}

function resetShot() {
  preparePenaltyRound();
}

// 移动端结算界面缩放：把 result-head 整体 scale 到屏幕宽度，完全还原 PC 布局
function scaleResultHead() {
  const head = document.querySelector(".result-head");
  const screen = document.querySelector(".result-screen");
  if (!head || !screen) return;

  const vw = window.innerWidth;
  const vh = window.innerHeight;
  // PC 端 result-head 的自然宽度（未缩放时）
  head.style.transform = "";
  head.classList.remove("is-scaled");
  screen.classList.remove("is-scaled-wrap");

  const naturalW = head.scrollWidth;
  const naturalH = head.scrollHeight;

  // 只在小屏幕（宽度或高度不够）时才缩放
  const scaleX = vw / naturalW;
  const scaleY = vh / naturalH;
  const scale  = Math.min(scaleX, scaleY, 1); // 不放大，只缩小

  if (scale < 0.98) {
    head.style.transform = `scale(${scale})`;
    head.style.transformOrigin = "center center";
    head.classList.add("is-scaled");
    // 同步容器高度，居中对齐
    screen.style.height = `${naturalH * scale}px`;
    screen.style.display = "flex";
    screen.style.alignItems = "center";
    screen.style.justifyContent = "center";
    screen.classList.add("is-scaled-wrap");
  } else {
    screen.style.height = "";
  }
}

function showSettlement(targetTeam) {
  stopKeeperMovement();
  resultShell.classList.remove("show-board");
  setArcText(resultTitle, targetTeam.name.toUpperCase(), {
    curve: resultTextArc.titleCurve,
    rotation: resultTextArc.titleRotation,
    fit: true,
  });
  setArcText(resultSummary, "THANK YOU FOR YOUR SUPPORT!", {
    curve: resultTextArc.summaryCurve,
    rotation: resultTextArc.summaryRotation,
  });
  resultGoals.textContent = roundGoals;
  resultFanPower.textContent = roundFanPower;
  shooting = false;
  renderLeaderboard();
  renderActiveTeam();
  setState("result");
  // 移动端结算缩放：等 DOM 渲染完再执行
  requestAnimationFrame(() => requestAnimationFrame(scaleResultHead));
}

function setArcText(element, text, options = {}) {
  const { curve = 16, rotation = -7, fit = false } = options;
  const letters = [...text];
  const fitScale = fit ? clamp(12 / Math.max(text.length, 12), 0.46, 1) : 1;
  const center = (letters.length - 1) / 2 || 1;
  element.style.setProperty("--title-fit", fitScale.toFixed(3));
  if (fit) {
    element.style.fontSize = `clamp(${Math.round(52 * fitScale)}px, ${(8 * fitScale).toFixed(2)}vw, ${Math.round(122 * fitScale)}px)`;
  } else {
    element.style.removeProperty("font-size");
  }
  element.innerHTML = letters
    .map((letter, index) => {
      const distance = (index - center) / center;
      const y = Math.abs(distance) * Math.abs(distance) * curve;
      const rotate = distance * rotation;
      const content = letter === " " ? "&nbsp;" : letter;
      return `<span class="arc-letter" style="--arc-y:${y.toFixed(1)}px; --arc-rotate:${rotate.toFixed(1)}deg;">${content}</span>`;
    })
    .join("");
}

function shoot(source = "manual") {
  if (shooting || gameState !== "penalty" || shotCount >= 5) return;

  hideOnboard(); // 射击时立即关闭引导蒙版
  shooting = true;
  hideGestureCoach();
  stopKeeperMovement();
  stopShotTimer();
  shootButton.disabled = true;

  const team = activeTeam();
  const targetX = shotAim.x;
  const keeperDistance = Math.abs(targetX - keeperX);
  const keeperReach = 0.13 + shotCount * 0.012 + (shotCount >= 3 ? 0.045 + (shotCount - 3) * 0.025 : 0);
  const wallHit = wallPlayers.some((wallPlayer) => Math.abs(targetX - wallPlayer.x) < wallPlayer.reach);
  const offTarget = shotAim.x < 0 || shotAim.x > 1 || shotAim.y < 0 || shotAim.y > 1;
  const isGoal = !offTarget && !wallHit && keeperDistance > keeperReach;
  striker.classList.add("kick");
  showKickFrame();   // 踢球时切换踢球图
  keeper.style.left = `${keeperX * 100}%`;
  setRandomKeeperAction(targetX);

  setTimeout(() => {
    animateBallAlongAim();
  }, 120);

  setTimeout(() => {
    shotCount += 1;
    team.votes += 1;
    if (isGoal) {
      const fanPowerGain = source === "gesture" ? 2 : 1;
      team.support += fanPowerGain;
      team.goals += 1;
      goalStreak += 1;
      roundGoals += 1;
      roundFanPower += fanPowerGain;
      playGoalSfx();
      showResult(`GOAL +${fanPowerGain}`, true);
      addDanmaku(shotResultMessages.GOAL, "goal");
    } else {
      goalStreak = 0;
      const failText = wallHit ? "BLOCKED" : offTarget ? "MISS" : "SAVED";
      showResult(failText, false);
      addDanmaku(shotResultMessages[failText], "saved");
    }

    advanceAfterShot(team);
  }, 760);
}

function zoneFromPoint(x, y) {
  updateAim(x, y);
}

function landmarkDistance(a, b) {
  return Math.hypot(a.x - b.x, a.y - b.y);
}

function isFist(hand) {
  const wrist = hand[0];
  const palm = hand[9] || hand[0];
  const palmSize = Math.max(landmarkDistance(wrist, palm), 0.05);
  const foldedFingers = [8, 12, 16, 20].filter((tipIndex) => {
    const tip = hand[tipIndex];
    const pip = hand[tipIndex - 2];
    const mcp = hand[tipIndex - 3];
    const tipToPalm = landmarkDistance(tip, palm);
    const mcpToPalm = landmarkDistance(mcp, palm);
    const tipBelowMiddleJoint = tip.y > pip.y + palmSize * 0.08;
    const tipBelowBaseJoint = tip.y > mcp.y - palmSize * 0.03;
    const tuckedNearPalm = tipToPalm < Math.max(palmSize * 1.22, mcpToPalm * 1.12);
    return tipBelowMiddleJoint && tipBelowBaseJoint && tuckedNearPalm;
  }).length;
  return foldedFingers >= 3;
}

function handleGestureAim(x, y, fistClosed) {
  const now = performance.now();
  updateAim(1 - x, y);

  if (!fistClosed) {
    fistFrameCount = 0;
    fistReady = true;
    gestureStatus.textContent = "Open palm: move aim. Make a fist to shoot.";
    return;
  }

  fistFrameCount += 1;
  const fistStable = fistFrameCount >= 3;
  gestureStatus.textContent = fistStable ? "Fist detected. Shooting." : "Fist detected.";

  if (fistReady && fistStable && now - lastGestureShotAt > 900 && !shooting && gameState === "penalty") {
    fistReady = false;
    lastGestureShotAt = now;
    shoot("gesture");
  }
}

async function loadHandModel() {
  if (handLandmarker || modelLoading) return handLandmarker;
  modelLoading = true;
  console.log("[MP] start loading...");

  try {
    console.log("[MP] importing bundle from", MEDIAPIPE_BUNDLE);
    const { HandLandmarker, FilesetResolver } = await import(MEDIAPIPE_BUNDLE);
    console.log("[MP] bundle loaded, loading wasm from", MEDIAPIPE_WASM);
    const vision = await FilesetResolver.forVisionTasks(MEDIAPIPE_WASM);
    console.log("[MP] wasm ready, creating landmarker...");
    const timeoutPromise = new Promise((_, reject) =>
      setTimeout(() => reject(new Error("timeout")), 15000)
    );
    handLandmarker = await Promise.race([
      HandLandmarker.createFromOptions(vision, {
        baseOptions: { modelAssetPath: HAND_MODEL, delegate: "CPU" },
        runningMode: "VIDEO",
        numHands: 1,
        minHandDetectionConfidence: 0.5,
        minHandPresenceConfidence: 0.5,
        minTrackingConfidence: 0.5,
      }),
      timeoutPromise,
    ]);
    usingModel = true;
    console.log("[MP] ✅ model ready!");
    gestureStatus.textContent = "Gesture ready! Palm=aim, Fist=shoot.";
    return handLandmarker;
  } catch (error) {
    usingModel = false;
    console.error("[MP] ❌ error:", error);
    return null;
  } finally {
    modelLoading = false;
  }
}

function runHandTracking() {
  if (!cameraStream || !handLandmarker) return;

  // 去掉 currentTime !== lastVideoTime 的限制，强制每帧都检测
  if (cameraFeed.readyState >= 2) {
    lastVideoTime = cameraFeed.currentTime;
    try {
      const results = handLandmarker.detectForVideo(cameraFeed, performance.now());
      const hand = results.landmarks?.[0];
      if (hand) {
        const palm = hand[9] || hand[0];
        handleGestureAim(palm.x, palm.y, isFist(hand));
      } else {
        gestureStatus.textContent = "Show your hand in camera view";
        fistReady = true;
      }
    } catch (e) {
      // ignore per-frame errors
    }
  }

  handLoopId = window.requestAnimationFrame(runHandTracking);
}

function trackMotion() {
  if (!cameraStream) return;
  // 若已切换为 MediaPipe 精准模式，停止 motion fallback
  if (handLandmarker) return;
  motionTimer = requestAnimationFrame(trackMotion);

  if (cameraFeed.readyState < 2 || cameraFeed.paused) return;

  const context = motionCanvas.getContext("2d", { willReadFrequently: true });
  context.save();
  context.scale(-1, 1);
  context.drawImage(cameraFeed, -motionCanvas.width, 0, motionCanvas.width, motionCanvas.height);
  context.restore();

  const frame = context.getImageData(0, 0, motionCanvas.width, motionCanvas.height);
  if (!previousFrame) {
    previousFrame = frame;
    return;
  }

  let total = 0;
  let sumX = 0;
  let sumY = 0;

  for (let index = 0; index < frame.data.length; index += 16) {
    const diff =
      Math.abs(frame.data[index] - previousFrame.data[index]) +
      Math.abs(frame.data[index + 1] - previousFrame.data[index + 1]) +
      Math.abs(frame.data[index + 2] - previousFrame.data[index + 2]);

    if (diff > 48) {
      const pixel = index / 4;
      const x = pixel % motionCanvas.width;
      const y = Math.floor(pixel / motionCanvas.width);
      total += diff;
      sumX += x * diff;
      sumY += y * diff;
    }
  }

  previousFrame = frame;

  // fallback 只做瞄准，不做射门（射门需要 MediaPipe 握拳识别）
  if (total > 8000) {
    const x = sumX / total / motionCanvas.width;
    const y = sumY / total / motionCanvas.height;
    updateAim(x, y);
  }
  gestureStatus.textContent = "Model loading… palm moves aim. Fist available soon.";
}

async function enableCamera() {
  if (!navigator.mediaDevices?.getUserMedia) {
    gestureStatus.textContent = "This browser does not support the camera API.";
    return;
  }

  try {
    hideGestureCoach();
    cameraStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
    cameraFeed.srcObject = cameraStream;
    await cameraFeed.play().catch(() => {});
    cameraView.classList.add("has-video");
    cameraButton.textContent = "ON";
    gestureStatus.textContent = "Camera is on. Open palm to aim, fist to shoot.";

    // 立即启动 rAF 驱动的 motion fallback
    if (motionTimer) cancelAnimationFrame(motionTimer);
    if (handLoopId) cancelAnimationFrame(handLoopId);
    motionTimer = requestAnimationFrame(trackMotion);

    // 后台异步加载 MediaPipe，成功后自动接管
    loadHandModel().then((model) => {
      if (!model || !cameraStream) return;
      if (motionTimer) cancelAnimationFrame(motionTimer);
      motionTimer = null;
      runHandTracking();
    });
  } catch (error) {
    cameraButton.textContent = "!";
    gestureStatus.textContent = "Camera is not enabled. You can keep aiming with the mouse.";
  }
}

startButton.addEventListener("click", () => {
  setState("teamSelect");
});

confirmTeamButton.addEventListener("click", startWalkout);

viewRankingsButton.addEventListener("click", () => {
  resultShell.classList.add("show-board");
});

closeRankingsButton.addEventListener("click", () => {
  resultShell.classList.remove("show-board");
});

retryButton.addEventListener("click", () => {
  shotCount = 0;
  roundGoals = 0;
  roundFanPower = 0;
  shotAim = { x: 0.5, y: 0.3 };
  setState("penalty");
  preparePenaltyRound();
  addDanmaku("A new penalty round begins. You have 5 shots.");
});

changeTeamButton.addEventListener("click", () => {
  goalStreak = 0;
  shotCount = 0;
  roundGoals = 0;
  roundFanPower = 0;
  stopKeeperMovement();
  setState("teamSelect");
  renderAll();
});

teamGrid.addEventListener("click", (event) => {
  const card = event.target.closest(".team-card");
  if (!card) return;
  activeTeamId = card.dataset.team;
  goalStreak = 0;
  renderAll();
});

goalScene.addEventListener("pointermove", (event) => {
  if (gameState !== "penalty" || shooting) return;
  const rect = goalFrame.getBoundingClientRect();
  updateAim((event.clientX - rect.left) / rect.width, (event.clientY - rect.top) / rect.height);
});

goalScene.addEventListener("click", (event) => {
  if (gameState !== "penalty" || shooting) return;
  // 点击球门永远更新瞄准位置
  const rect = goalFrame.getBoundingClientRect();
  updateAim(
    (event.clientX - rect.left) / rect.width,
    (event.clientY - rect.top) / rect.height,
  );
  // 无论是否开启手势，点击球门都可以射击
  shoot();
});

targetZoneButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.stopPropagation();
    if (gameState !== "penalty" || shooting) return;
    const aim = targetZoneAims[button.dataset.zone];
    if (aim) updateAim(aim[0], aim[1]);
    currentAimZoneId = button.dataset.zone;
    renderAim();
    shoot();
  });
});

shootButton.addEventListener("click", shoot);
cameraButton.addEventListener("click", () => {
  console.log("[CAM] button clicked, calling enableCamera");
  enableCamera();
});
console.log("[APP] app.js loaded, cameraButton=", cameraButton);
window.addEventListener("keydown", (event) => {
  if (event.key === " ") {
    event.preventDefault();
    shoot();
  }
});
window.addEventListener("resize", renderAim);
window.addEventListener("resize", () => {
  if (gameState === "result") scaleResultHead();
});

loadSavedGestureHintPosition();
renderAll();
setState("start");

// 从后端拉取最新应援数据并刷新排行榜
function fetchSupportData() {
  fetch("/api/support")
    .then((r) => r.json())
    .then(({ ok, data }) => {
      if (!ok || !data) return;
      data.forEach((row) => {
        const team = teams.find((t) => t.id === row.id);
        if (team) {
          team.support = row.support;
          team.goals   = row.goals;
          team.votes   = row.votes;
        }
      });
      renderLeaderboard();
    })
    .catch(() => {});
}

// 页面加载时拉取一次
fetchSupportData();

// 每 15s 轮询一次，保持排行榜实时更新
setInterval(fetchSupportData, 15000);
