'use client';
import { useEffect } from 'react';
import Script from 'next/script';

export default function Home() {
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '/game/styles.css';
    document.head.appendChild(link);
    return () => { document.head.removeChild(link); };
  }, []);

  return (
    <>
      <div className="rotate-prompt">
        <div className="rotate-prompt-icon"></div>
        <p>Rotate your device to landscape for the best experience</p>
      </div>
      <main className="app-shell">
        <section id="gameStage" className="game-stage is-start" aria-label="World Cup cheer penalty game">
          <div className="stadium-bg" aria-hidden="true"></div>
          <div className="stadium-vignette" aria-hidden="true"></div>
          <div className="stadium-lights" aria-hidden="true"></div>
          <div id="flashbulbLayer" className="flashbulb-layer" aria-hidden="true"></div>

          <section id="startScreen" className="screen-layer start-screen">
            <div className="start-year" aria-hidden="true">2026</div>
            <div className="start-content">
              <h1><span>Cheer</span><span>Penalty Clash</span></h1>
              <ul className="start-points" aria-label="Game highlights">
                <li><img src="/image/start-screen/flag.svg" alt="" draggable={false} />Play for your team.</li>
                <li><img src="/image/start-screen/football.svg" alt="" draggable={false} />Score goals.</li>
                <li><img src="/image/start-screen/trophy.svg" alt="" draggable={false} />Rise on the leaderboard.</li>
              </ul>
              <button id="startButton" className="mega-button start-button-art" type="button">
                <img className="start-button-ball" src="/image/start-screen/%E9%80%8F%E6%98%8E.png" alt="" draggable={false} />
                <span>Start Game</span>
              </button>
            </div>
            <img className="start-player" src="/image/start-screen/%E7%90%83%E5%91%98.png" alt="" draggable={false} />
          </section>

          <section id="teamScreen" className="screen-layer team-screen hidden">
            <div className="team-shell">
              <header className="team-hero">
                <div><h2>Choose Your Team</h2></div>
                <button id="confirmTeamButton" className="mega-button small" type="button">Enter Stadium</button>
              </header>
              <div className="team-layout">
                <section className="panel select-panel" aria-label="Team list">
                  <div className="panel-title">48 Teams</div>
                  <div id="teamGrid" className="team-grid"></div>
                </section>
                <aside className="panel select-board" aria-label="Current team">
                  <div className="selected-card">
                    <img id="selectedFlag" className="flag-img large" alt="" />
                    <div>
                      <span>Current Team</span>
                      <strong id="selectedTeamName">Argentina</strong>
                    </div>
                  </div>
                  <div className="player-art-card" aria-hidden="true">
                    <img src="/image/figure/%E4%BA%BA%E8%AE%BE%E5%9B%BE_%E6%8A%B1%E7%90%83%E6%AD%A3%E9%9D%A2.png" alt="" />
                    <img src="/image/figure/%E4%BA%BA%E8%AE%BE%E5%9B%BE_%E6%8A%B1%E7%90%83%E6%97%A0%E5%8F%B7%E7%A0%81%E8%83%8C%E5%BD%B1.png" alt="" />
                  </div>
                </aside>
              </div>
            </div>
          </section>

          <section id="resultScreen" className="screen-layer result-screen hidden" aria-live="polite">
            <div id="resultShell" className="result-shell">
              <header className="result-head">
                <img className="result-banner" src="/image/celebrate/%E6%A8%AA%E5%B9%85.png" alt="" draggable={false} />
                <img className="result-celebrator" src="/image/celebrate/%E4%BA%BA%E8%AE%BE%E5%9B%BE_%E5%BA%86%E7%A5%9D%E5%8A%A8%E4%BD%9C.png" alt="" draggable={false} />
                <div className="result-banner-copy">
                  <h2 id="resultTitle">ARGENTINA</h2>
                </div>
                <p id="resultSummary" className="result-thanks">THANK YOU FOR YOUR SUPPORT!</p>
                <div className="result-stats" aria-label="Round score">
                  <div>
                    <strong><span id="resultGoals">3</span><span className="result-stat-small">/5</span></strong>
                    <span>GOALS SCORED</span>
                  </div>
                  <div className="result-stat-divider" aria-hidden="true"></div>
                  <div>
                    <strong><span className="result-stat-plus">+</span><span id="resultFanPower">15</span></strong>
                    <span>FAN POWER</span>
                  </div>
                </div>
                <div className="result-actions">
                  <button id="retryButton" className="result-button result-button-gold" type="button">Play Again</button>
                  <button id="changeTeamButton" className="result-button result-button-blue" type="button">Change Team</button>
                  <button id="viewRankingsButton" className="result-button result-button-dark" type="button">View Leaderboard</button>
                </div>
              </header>
              <section className="panel result-board" aria-label="Full fan power board">
                <button id="closeRankingsButton" className="rankings-close" type="button" aria-label="Back to result">×</button>
                <div className="support-head">
                  <div>
                    <div className="panel-title">Full Fan Board</div>
                    <strong>Fan Power for 48 Teams</strong>
                  </div>
                  <div className="support-legend">Sorted live by fan power</div>
                </div>
                <div id="podiumList" className="podium-list"></div>
                <ol id="resultLeaderboardList" className="support-grid"></ol>
              </section>
            </div>
          </section>

          <section id="walkoutScreen" className="screen-layer walkout-screen hidden" aria-live="polite">
            <div id="walkoutCountdown" className="walkout-countdown"><span>Penalty shootout</span><span>starts soon</span></div>
            <div className="walkout-copy">
              <img id="walkoutFlag" className="flag-img" alt="" />
              <strong id="walkoutTeam">Argentina</strong>
            </div>
          </section>

          <div id="gestureOnboardOverlay" className="gesture-onboard-overlay">
            <div className="gesture-onboard-card">
              <div className="gesture-onboard-timer" id="onboardTimer">10</div>
              <h3>Gesture Control!</h3>
              <p><strong>Move your palm: aim.</strong> Make a fist: shoot. Gesture goals double fan power.</p>
              <div className="gesture-onboard-actions">
                <button id="onboardGestureBtn" className="onboard-btn onboard-btn-gesture">Use Gesture</button>
                <button id="onboardClickBtn" className="onboard-btn onboard-btn-click">Tap to Shoot</button>
              </div>
            </div>
          </div>

          <header className="hud hud-score game-ui">
            <div className="team-pill">
              <img id="activeFlag" className="flag-img" alt="" />
              <span id="activeTeamName">Argentina</span>
            </div>
            <div>
              <span className="hud-label">Fan Power</span>
              <strong id="activeSupport">0</strong>
            </div>
            <div>
              <span className="hud-label">Streak</span>
              <strong id="streak">0</strong>
            </div>
            <div id="shotTimer" className="shot-timer">
              <span className="hud-label">Shot Clock</span>
              <strong><span id="shotTimerValue">30</span>s</strong>
            </div>
          </header>

          <aside className="leaderboard panel game-ui">
            <div className="panel-title">Team Rankings</div>
            <ol id="leaderboardList" className="leaderboard-list"></ol>
          </aside>

          <section className="camera-panel panel game-ui">
            <div className="camera-head">
              <span>Gesture Control</span>
              <button id="cameraButton" className="icon-button" title="Open camera" type="button">●</button>
            </div>
            <div className="camera-view">
              <video id="cameraFeed" autoPlay playsInline muted></video>
              <canvas id="motionCanvas" width="160" height="100"></canvas>
              <div id="cameraFallback" className="camera-fallback">Open the camera to move the aim with your palm and shoot with a fist.</div>
            </div>
            <div id="gestureStatus" className="gesture-status">Aim with your palm, mouse, or touch.</div>
          </section>

          <div id="gestureCoach" className="gesture-coach game-ui" aria-live="polite">
            <div className="gesture-coach-arrow" aria-hidden="true"></div>
            <strong>Move your palm: aim.</strong>
            <span>Make a fist: shoot. Gesture goals double fan power.</span>
          </div>

          <div id="danmakuLayer" className="danmaku-layer" aria-live="polite"></div>

          <section className="goal-scene game-ui" aria-label="Penalty shooting area">
            <div className="goal-frame">
              <div className="net"></div>
              <button className="target-zone zone-left-top" data-zone="leftTop" type="button"><span>Top Left</span></button>
              <button className="target-zone zone-center-top" data-zone="centerTop" type="button"><span>Top Center</span></button>
              <button className="target-zone zone-right-top" data-zone="rightTop" type="button"><span>Top Right</span></button>
              <button className="target-zone zone-left-low" data-zone="leftLow" type="button"><span>Low Left</span></button>
              <button className="target-zone zone-right-low" data-zone="rightLow" type="button"><span>Low Right</span></button>
              <div id="aimReticle" className="aim-reticle"></div>
              <div id="keeper" className="keeper">
                <img id="keeperFrame" className="keeper-frame" src="/image/figure/%E5%AE%88%E9%97%A8%E5%91%98/%E6%AD%A3%E9%9D%A2%E5%B0%81%E5%A0%B5%E5%BC%8F.png" alt="" draggable={false} />
              </div>
            </div>
            <svg id="aimCurve" className="aim-curve" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
              <path id="aimCurvePath" d="M58 88 Q50 54 50 18"></path>
            </svg>
            <div id="wallLine" className="wall-line" aria-hidden="true"></div>
            <div id="resultBurst" className="result-burst" aria-live="polite"></div>
            <div className="striker-wrap">
              <div id="striker" className="striker">
                <img id="strikerFrame" className="striker-frame" src="/image/figure/%E5%88%9D%E5%A7%8B%E4%BA%BA%E7%89%A9/%E4%BA%BA%E8%AE%BE%E5%9B%BE_%E7%AB%99%E7%AB%8B%E8%83%8C%E5%BD%B1.png" alt="" draggable={false} />
              </div>
              <div id="ball" className="ball"></div>
            </div>
          </section>

          <nav className="control-dock panel game-ui" aria-label="Game controls">
            <button id="shootButton" className="game-button shoot-button" type="button">Shoot</button>
            <div className="aim-status">
              <span>Chance</span>
              <strong id="aimLabel">1 / 5</strong>
            </div>
          </nav>
        </section>
      </main>
      <Script src="/game/app.js" strategy="afterInteractive" />
    </>
  );
}
