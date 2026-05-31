/* ==========================================================================
   SHREYA BAHREE — CREATIVE OCEAN PORTFOLIO & KEEPSAKES
   PREMIUM INTERACTIVE JAVASCRIPT
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  // Init all systems
  initBubbles();
  initScrollEffects();
  initSportsViewer();
  initDashboardTabs();
  initKeepsakeGenerator();
  initCozyCorner();
});

/* ==========================================================================
   1. FLOATING OCEAN BUBBLES BACKGROUND
   ========================================================================== */
function initBubbles() {
  const container = document.getElementById("bubble-container");
  if (!container) return;

  const bubbleCount = 18;
  for (let i = 0; i < bubbleCount; i++) {
    createBubble(container, true); // initial positioning
  }

  // Continuously spawn bubbles
  setInterval(() => {
    createBubble(container, false);
  }, 2500);
}

function createBubble(container, isInitial) {
  const bubble = document.createElement("div");
  bubble.classList.add("bubble");

  const size = Math.random() * 40 + 15; // 15px to 55px
  const left = Math.random() * 100;    // percentage
  const duration = Math.random() * 8 + 8; // 8s to 16s
  const delay = isInitial ? -(Math.random() * duration) : Math.random() * 3;

  bubble.style.width = `${size}px`;
  bubble.style.height = `${size}px`;
  bubble.style.left = `${left}%`;
  bubble.style.animationDuration = `${duration}s`;
  bubble.style.animationDelay = `${delay}s`;

  container.appendChild(bubble);

  // Remove bubble after its animation completes
  setTimeout(() => {
    bubble.remove();
  }, (duration + delay) * 1000);
}


/* ==========================================================================
   2. SCROLL EFFECTS & ACTIVE NAVIGATION
   ========================================================================== */
function initScrollEffects() {
  const progress = document.getElementById("scroll-progress");
  const header = document.getElementById("header");
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-links a");

  // Scroll listener
  window.addEventListener("scroll", () => {
    // 1. Update progress bar
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    if (progress) progress.style.width = `${scrolled}%`;

    // 2. Scrolled class for header
    if (header) {
      if (window.scrollY > 50) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    }

    // 3. Highlight current nav link
    let currentId = "";
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        currentId = section.getAttribute("id");
      }
    });

    if (currentId) {
      navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${currentId}`) {
          link.classList.add("active");
        }
      });
    }
  });
}


/* ==========================================================================
   3. SPORTS COLLAGE VIEWER
   ========================================================================== */
const SPORTS_DB = {
  volleyball: {
    title: "🏐 Volleyball",
    colorClass: "hot",
    emoji: "🏐",
    quote: "A fresh favorite sport! I love coordinates, team spirit, and standard spikes.",
    desc: "Volleyball is my latest passion! Learning to read the ball coordinates, aligning my stance, and spiking with power over the net is extremely thrilling. It sharpens my agility and teaches me deep teamwork.",
    stats: "Spikes: High-energy • Focus: 98% • Team Spirit: Maximum"
  },
  athletics: {
    title: "🏃‍♀️ Track Athletics",
    colorClass: "dynamic",
    emoji: "👟",
    quote: "Testing speeds, sprint records, and endurance boundaries.",
    desc: "Sprinting and track athletics push my speed limits. I love the wind on my face and racing against the stopwatch. It boosts my physical endurance, cardiovascular health, and mental willpower.",
    stats: "Sprint Speed: Rapid • Endurance: High • Motivation: 100%"
  },
  swimming: {
    title: "🏊‍♀️ Swimming strokes",
    colorClass: "cool",
    emoji: "🐬",
    quote: "Feeling weightless and building major cardiovascular strength.",
    desc: "Gliding through water is my ultimate relaxation and energy booster! I practice freestyle laps and backstrokes to strengthen my muscles and build rhythmic breathing coordinates.",
    stats: "Breathing Focus: Excellent • Stamina: Great • Laps completed: 20+"
  },
  badminton: {
    title: "🏸 Badminton Court",
    colorClass: "action",
    emoji: "⚡",
    quote: "Flick-of-the-wrist smashes and lightning-fast reflexes.",
    desc: "Badminton requires razor-sharp focus. I love quick drops, baseline clears, and smash defenses. It helps build incredible hand-eye coordination and rapid leg movements on the court.",
    stats: "Reflexes: Extreme • Accuracy: High • Smash Speed: Impressive"
  },
  football: {
    title: "⚽ Football Field",
    colorClass: "field",
    emoji: "⭐",
    quote: "Dribbling across grass, passing accuracy, and beautiful goals.",
    desc: "Nothing beats chasing a football on the pitch! I love coordinate passes, tactical positions, and working with my teammates to break through defenses and score sweet goals.",
    stats: "Ball Control: Good • Stamina: Very High • Team Play: 95%"
  },
  basketball: {
    title: "🏀 Basketball Hoop",
    colorClass: "hoops",
    emoji: "🔥",
    quote: "Dribbling drills, high jumps, and clean layups.",
    desc: "Bouncing the ball, performing quick pivots, and shooting perfect arcs into the hoop! Basketball challenges my vertical jump, stamina, and coordinate precision under pressure.",
    stats: "Shooting Range: Accurate • Coordination: High • Jump Height: Peak"
  }
};

function initSportsViewer() {
  const badges = document.querySelectorAll(".sport-item-badge");
  const viewer = document.getElementById("sports-viewer");
  if (!viewer) return;

  badges.forEach(badge => {
    badge.addEventListener("click", () => {
      const sportKey = badge.getAttribute("data-sport");
      const data = SPORTS_DB[sportKey];
      if (!data) return;

      // Reset active badge class
      badges.forEach(b => b.classList.remove("active"));
      badge.classList.add("active");

      // Inject details with fadeIn animations
      viewer.innerHTML = `
        <div class="sport-details-view">
          <div class="sport-details-header">
            <span style="font-size: 28px;">${data.emoji}</span>
            <h4>${data.title}</h4>
          </div>
          <p style="font-style: italic; color: var(--primary); font-weight: 700; margin-bottom: 8px;">"${data.quote}"</p>
          <p>${data.desc}</p>
          <span class="sport-stat-label"><i class="fa-solid fa-gauge-high"></i> ${data.stats}</span>
        </div>
      `;
    });
  });
}


/* ==========================================================================
   4. CREATIVE DASHBOARD TAB SYSTEM
   ========================================================================== */
function initDashboardTabs() {
  const tabs = document.querySelectorAll(".dashboard-tabs .tab-btn");
  const content = document.getElementById("dashboard-content");
  if (!tabs || !content) return;

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const targetPanelId = `panel-${tab.getAttribute("data-tab")}`;
      
      // Update active tab buttons
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      // Update active panels
      const panels = content.querySelectorAll(".tab-panel");
      panels.forEach(panel => {
        panel.classList.remove("active");
        if (panel.getAttribute("id") === targetPanelId) {
          panel.classList.add("active");
        }
      });
    });
  });
}


/* ==========================================================================
   5. DREAM & EMOTION KEEPSAKE GENERATOR (KEY SKILL)
   ========================================================================== */
let savedKeepsakes = JSON.parse(localStorage.getItem("shreya_keepsakes")) || [];

// Beautiful custom poem engine based on dream inputs and styles
const POEM_DATABASE = {
  aurora: [
    "sealed with soft twilight and seafoam light",
    "Where rosy pink dreams take beautiful flight",
    "cherished forever in sea breeze so warm",
    "A shelter of colors far away from the storm."
  ],
  deepsea: [
    "Enclosed in deep waters, silent and blue",
    "Where starlight whispers secrets to you",
    "A treasure of quietness, holding your peace",
    "Where all of your worries and tremors shall cease."
  ],
  sunnysand: [
    "Bathed in gold sand dunes and sunny bright skies",
    "Where laughter rebounds and joy never dies",
    "A capsule of courage, of summer and warmth",
    "To carry you safely whenever you go forth."
  ],
  starlight: [
    "Tethered to stars floating high in the bay",
    "To guide your emotions when words drift away",
    "A magical crystal of dreams sweet and clear",
    "To whisper that beauty is always quite near."
  ]
};

function generateKeepsakePoem(vibe, dreamText) {
  // Extract keywords to make it customized
  const lowercaseDream = dreamText.toLowerCase();
  let customizedOpening = "A dream of quiet wonders, precious and sweet";
  
  if (lowercaseDream.includes("fly") || lowercaseDream.includes("sky") || lowercaseDream.includes("bird") || lowercaseDream.includes("cloud")) {
    customizedOpening = "A wish of high heavens, of flying so free";
  } else if (lowercaseDream.includes("happy") || lowercaseDream.includes("warm") || lowercaseDream.includes("smile") || lowercaseDream.includes("love")) {
    customizedOpening = "A warm, glowing feeling of laughter and love";
  } else if (lowercaseDream.includes("sad") || lowercaseDream.includes("tired") || lowercaseDream.includes("cry") || lowercaseDream.includes("scared")) {
    customizedOpening = "A gentle protector for feelings so deep";
  } else if (lowercaseDream.includes("sing") || lowercaseDream.includes("music") || lowercaseDream.includes("song")) {
    customizedOpening = "A song in the ripples, a musical theme";
  } else if (lowercaseDream.includes("sport") || lowercaseDream.includes("run") || lowercaseDream.includes("win") || lowercaseDream.includes("play")) {
    customizedOpening = "A surge of great action, energetic and bright";
  }

  const databaseLines = POEM_DATABASE[vibe] || POEM_DATABASE.aurora;
  return `"${customizedOpening},\n${databaseLines[0]},\n${databaseLines[1]},\n${databaseLines[2]}."`;
}

function initKeepsakeGenerator() {
  const form = document.getElementById("keepsake-form");
  const dreamInput = document.getElementById("dream-input");
  const btnGenerate = document.getElementById("btn-generate-keepsake");
  const instruction = document.getElementById("canvas-instruction");
  const resultCard = document.getElementById("keepsake-result-card");
  const bottleContainer = document.getElementById("bottle-container");
  const bottleLiquid = document.getElementById("bottle-liquid");
  const bottleSparkles = document.getElementById("bottle-sparkles");
  
  const radioLabels = document.querySelectorAll(".vibe-radio-item");

  if (!form) return;

  // Render current gallery if exists
  renderKeepsakeGallery();

  // Sync radio items styling on click
  radioLabels.forEach(label => {
    const input = label.querySelector("input");
    input.addEventListener("change", () => {
      radioLabels.forEach(l => l.classList.remove("active"));
      label.classList.add("active");
    });
  });

  // Generate keepsakes
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const dreamVal = dreamInput.value.trim();
    if (!dreamVal) return;

    const selectedVibe = document.querySelector('input[name="keepsake-vibe"]:checked').value;
    
    // 1. Hide instructions
    instruction.style.display = "none";
    resultCard.style.display = "none";
    bottleContainer.classList.remove("floating-animation");

    // Play micro-loading delay
    btnGenerate.innerHTML = `<i class="fa-solid fa-circle-notch fa-spin"></i> Sealing Your Dream...`;
    btnGenerate.disabled = true;

    setTimeout(() => {
      // Restore button status
      btnGenerate.innerHTML = `<i class="fa-solid fa-flask-bubble"></i> Cherish My Emotion Forever`;
      btnGenerate.disabled = false;

      // Configure Bottle colors based on theme
      let liquidGradient = "";
      let vibeText = "";
      if (selectedVibe === "aurora") {
        liquidGradient = "linear-gradient(180deg, rgba(251, 113, 133, 0.7) 0%, rgba(219, 39, 119, 0.9) 100%)";
        vibeText = "Coral Aurora Vibe";
      } else if (selectedVibe === "deepsea") {
        liquidGradient = "linear-gradient(180deg, rgba(14, 165, 233, 0.7) 0%, rgba(15, 23, 42, 0.95) 100%)";
        vibeText = "Deep Sea Vibe";
      } else if (selectedVibe === "sunnysand") {
        liquidGradient = "linear-gradient(180deg, rgba(253, 224, 71, 0.75) 0%, rgba(217, 119, 6) 100%)";
        vibeText = "Sunny Dunes Vibe";
      } else if (selectedVibe === "starlight") {
        liquidGradient = "linear-gradient(180deg, rgba(168, 85, 247, 0.7) 0%, rgba(30, 27, 75, 0.95) 100%)";
        vibeText = "Starlight Vibe";
      }

      bottleLiquid.style.background = liquidGradient;
      
      // Spawn tiny inner bottle sparkles
      bottleSparkles.innerHTML = "";
      for (let s = 0; s < 8; s++) {
        const sparkle = document.createElement("div");
        sparkle.classList.add("b-sparkle");
        sparkle.style.top = `${Math.random() * 50 + 40}%`;
        sparkle.style.left = `${Math.random() * 80 + 10}%`;
        const sSize = Math.random() * 5 + 3;
        sparkle.style.width = `${sSize}px`;
        sparkle.style.height = `${sSize}px`;
        sparkle.style.animationDelay = `${Math.random() * 2}s`;
        bottleSparkles.appendChild(sparkle);
      }

      // Generate poem
      const customizedPoem = generateKeepsakePoem(selectedVibe, dreamVal);

      // Populate display
      document.getElementById("keepsake-quote").innerText = `"${dreamVal.substring(0, 100)}${dreamVal.length > 100 ? '...' : ''}"`;
      document.getElementById("keepsake-poem").innerText = customizedPoem;

      // Reveal visual bottle and result card
      bottleContainer.style.display = "block";
      bottleContainer.classList.add("floating-animation");
      resultCard.style.display = "block";

      // Bind Temporary state for "Keeping" this item
      window.currentPendingKeepsake = {
        id: Date.now().toString(),
        dream: dreamVal,
        vibe: selectedVibe,
        vibeName: vibeText,
        poem: customizedPoem,
        timestamp: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric" })
      };
    }, 1500);
  });

  // Action: Save Keepsake
  const btnSave = document.getElementById("btn-save-keepsake");
  if (btnSave) {
    btnSave.addEventListener("click", () => {
      if (!window.currentPendingKeepsake) return;

      // Push to collection
      savedKeepsakes.unshift(window.currentPendingKeepsake);
      localStorage.setItem("shreya_keepsakes", JSON.stringify(savedKeepsakes));

      // Reset pending
      window.currentPendingKeepsake = null;

      // Trigger beautiful animation and sync UI
      btnSave.innerHTML = `<i class="fa-solid fa-circle-check"></i> Sealed in Gallery!`;
      btnSave.disabled = true;

      setTimeout(() => {
        btnSave.innerHTML = `<i class="fa-solid fa-cloud-arrow-down"></i> Keep in Collection`;
        btnSave.disabled = false;
        resetKeepsakeCanvas();
        renderKeepsakeGallery();
      }, 1000);
    });
  }

  // Action: Reset/Create new
  const btnReset = document.getElementById("btn-reset-keepsake");
  if (btnReset) {
    btnReset.addEventListener("click", resetKeepsakeCanvas);
  }
}

function resetKeepsakeCanvas() {
  document.getElementById("dream-input").value = "";
  document.getElementById("canvas-instruction").style.display = "block";
  document.getElementById("keepsake-result-card").style.display = "none";
  const bottle = document.getElementById("bottle-container");
  if (bottle) {
    bottle.style.display = "none";
    bottle.classList.remove("floating-animation");
  }
  window.currentPendingKeepsake = null;
}

function renderKeepsakeGallery() {
  const gallerySection = document.getElementById("saved-gallery-section");
  const grid = document.getElementById("keepsake-gallery-grid");
  if (!grid || !gallerySection) return;

  if (savedKeepsakes.length === 0) {
    gallerySection.style.display = "none";
    return;
  }

  gallerySection.style.display = "block";
  grid.innerHTML = savedKeepsakes.map(item => `
    <div class="saved-keepsake-item glassmorphism" onclick="viewSavedKeepsake('${item.id}')">
      <button class="delete-thumb-btn" onclick="event.stopPropagation(); deleteKeepsake('${item.id}')" title="Discard Keepsake">
        <i class="fa-solid fa-trash"></i>
      </button>
      
      <div class="saved-bottle-thumb">
        <div class="s-cork"></div>
        <div class="s-neck"></div>
        <div class="s-body">
          <div class="s-liquid liquid-${item.vibe}"></div>
        </div>
      </div>
      
      <h4>${item.dream.substring(0, 16)}${item.dream.length > 16 ? '...' : ''}</h4>
      <span>${item.timestamp} • ${item.vibeName}</span>
    </div>
  `).join("");
}

// Global scope helper handlers for click interactions inside grid template injection
window.deleteKeepsake = function(id) {
  savedKeepsakes = savedKeepsakes.filter(item => item.id !== id);
  localStorage.setItem("shreya_keepsakes", JSON.stringify(savedKeepsakes));
  renderKeepsakeGallery();
};

window.viewSavedKeepsake = function(id) {
  const item = savedKeepsakes.find(item => item.id === id);
  if (!item) return;

  // Temporarily display this saved item on canvas
  const instruction = document.getElementById("canvas-instruction");
  const resultCard = document.getElementById("keepsake-result-card");
  const bottleContainer = document.getElementById("bottle-container");
  const bottleLiquid = document.getElementById("bottle-liquid");
  
  if (!instruction || !resultCard) return;

  instruction.style.display = "none";
  
  // Set theme color
  let liquidColor = "";
  if (item.vibe === "aurora") liquidColor = "linear-gradient(180deg, rgba(251, 113, 133, 0.7) 0%, rgba(219, 39, 119, 0.9) 100%)";
  else if (item.vibe === "deepsea") liquidColor = "linear-gradient(180deg, rgba(14, 165, 233, 0.7) 0%, rgba(15, 23, 42, 0.95) 100%)";
  else if (item.vibe === "sunnysand") liquidColor = "linear-gradient(180deg, rgba(253, 224, 71, 0.75) 0%, rgba(217, 119, 6) 100%)";
  else if (item.vibe === "starlight") liquidColor = "linear-gradient(180deg, rgba(168, 85, 247, 0.7) 0%, rgba(30, 27, 75, 0.95) 100%)";

  bottleLiquid.style.background = liquidColor;
  bottleContainer.style.display = "block";
  bottleContainer.classList.add("floating-animation");

  document.getElementById("keepsake-quote").innerText = `"${item.dream}"`;
  document.getElementById("keepsake-poem").innerText = item.poem;
  resultCard.style.display = "block";

  // Hide the "Save/Keep" action since it's already saved, but show close
  const btnSave = document.getElementById("btn-save-keepsake");
  if (btnSave) btnSave.style.display = "none";

  // Modify create new button to act as a close viewer
  const btnReset = document.getElementById("btn-reset-keepsake");
  if (btnReset) {
    btnReset.innerHTML = `<i class="fa-solid fa-xmark"></i> Close Keepsake`;
    const tempHandler = () => {
      btnSave.style.display = "inline-flex";
      btnReset.innerHTML = `<i class="fa-solid fa-arrow-rotate-left"></i> Create New`;
      btnReset.removeEventListener("click", tempHandler);
      resetKeepsakeCanvas();
    };
    btnReset.addEventListener("click", tempHandler);
  }

  // Scroll smoothly to generator canvas
  document.getElementById("keepsake-generator").scrollIntoView();
};


/* ==========================================================================
   6. THE COZY CORNER WIDGETS
   ========================================================================== */
const COZY_BOOKS = {
  adventure: {
    title: "Adventure Chronicles",
    quote: "A single book can take you on journeys deeper than the deepest oceans. I love stories of courage, uncharted islands, and mysterious maps!",
    author: "— Recommended: Percy Jackson / Enid Blyton"
  },
  mystery: {
    title: "Mystery & Puzzles",
    quote: "Unraveling clues, decoding locks, and finding secret rooms. Mystery books sharpen my logical coordinates and keep me guessing until the final page!",
    author: "— Recommended: Nancy Drew / Sherlock Holmes"
  },
  science: {
    title: "Space & Science Fiction",
    quote: "Fascinating voyages to alien planets, black holes, and timetravel machinery. Reading sci-fi makes me dream of tomorrow's breakthroughs!",
    author: "— Recommended: A Wrinkle in Time"
  }
};

function initCozyCorner() {
  const pills = document.querySelectorAll(".cozy-pill");
  const panels = document.querySelectorAll(".cozy-panel");

  // Cozy Tabs Switch
  pills.forEach(pill => {
    pill.addEventListener("click", () => {
      const type = pill.getAttribute("data-cozy");
      pills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");

      panels.forEach(panel => {
        panel.classList.remove("active");
        if (panel.getAttribute("id") === `cozy-panel-${type}`) {
          panel.classList.add("active");
        }
      });
    });
  });

  // --- SUB-WIDGET 1: CLASSIC TV SIMULATOR ---
  const tvScreen = document.getElementById("tv-screen");
  const powerBtn = document.getElementById("tv-power");
  const knob = document.getElementById("knob-channel");
  const channelBtns = document.querySelectorAll(".channel-btn");
  
  let isTvOn = false;
  let currentKnobRotation = 0;

  function setTvPower(on) {
    isTvOn = on;
    if (on) {
      powerBtn.classList.add("active");
      tvScreen.classList.remove("off");
      loadChannel("cartoons"); // default channel 1
    } else {
      powerBtn.classList.remove("active");
      tvScreen.classList.add("off");
      channelBtns.forEach(b => b.classList.remove("active"));
      tvScreen.innerHTML = `
        <div class="tv-program">
          <div class="tv-overlay-grain"></div>
          <div class="tv-show-content" style="color: rgba(255,255,255,0.3)">
            <i class="fa-solid fa-power-off" style="font-size: 40px; color: rgba(255,255,255,0.15); margin-bottom: 8px;"></i>
            <h4>TV is OFF</h4>
            <p>Press the red power button or select a channel to turn on!</p>
          </div>
        </div>
      `;
    }
  }

  // Knob Rotation transition effect
  function rotateKnob() {
    currentKnobRotation += 45;
    knob.style.transform = `rotate(${currentKnobRotation}deg)`;
  }

  function loadChannel(channelKey) {
    if (!isTvOn) {
      setTvPower(true);
    }
    
    rotateKnob();
    channelBtns.forEach(btn => {
      btn.classList.remove("active");
      if (btn.getAttribute("data-channel") === channelKey) {
        btn.classList.add("active");
      }
    });

    let displayHtml = "";
    if (channelKey === "cartoons") {
      displayHtml = `
        <div class="sim-cartoon-screen">
          <div class="tv-overlay-grain"></div>
          <div class="sim-cartoon-tv">🐱🐹</div>
          <span class="sim-screen-title"><i class="fa-solid fa-circle-play"></i> Channel 1: Nostalgic Cartoons</span>
          <p style="font-size: 11px; color: #1e293b; margin-top: 5px;">Animated comedy matches, pure relaxation!</p>
        </div>
      `;
    } else if (channelKey === "nature") {
      displayHtml = `
        <div class="sim-cartoon-screen" style="background: linear-gradient(180deg, #0d9488 0%, #115e59 100%);">
          <div class="tv-overlay-grain"></div>
          <div class="sim-cartoon-tv" style="animation-duration: 4s;">🐠🐋🐳</div>
          <span class="sim-screen-title" style="background: rgba(255,255,255,0.15)"><i class="fa-solid fa-fish"></i> Channel 2: Ocean Wonders</span>
          <p style="font-size: 11px; color: #ccfbf1; margin-top: 5px;">Drifting reefs and marine coral ecosystems.</p>
        </div>
      `;
    } else if (channelKey === "science") {
      displayHtml = `
        <div class="sim-cartoon-screen" style="background: linear-gradient(180deg, #1e1b4b 0%, #0f172a 100%);">
          <div class="tv-overlay-grain"></div>
          <div class="sim-cartoon-tv">🚀🪐🛸</div>
          <span class="sim-screen-title" style="background: rgba(255,255,255,0.1)"><i class="fa-solid fa-satellite"></i> Channel 3: Space Voyager</span>
          <p style="font-size: 11px; color: #e0e7ff; margin-top: 5px;">Discovering stars and planetary coordinates.</p>
        </div>
      `;
    }

    tvScreen.innerHTML = displayHtml;
  }

  // Bind TV events
  powerBtn.addEventListener("click", () => setTvPower(!isTvOn));
  knob.addEventListener("click", () => {
    if (!isTvOn) return;
    const currentActive = document.querySelector(".channel-btn.active");
    if (currentActive) {
      const currentCh = currentActive.getAttribute("data-channel");
      if (currentCh === "cartoons") loadChannel("nature");
      else if (currentCh === "nature") loadChannel("science");
      else loadChannel("cartoons");
    }
  });

  channelBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      loadChannel(btn.getAttribute("data-channel"));
    });
  });

  // Start with TV off simulated
  setTvPower(false);


  // --- SUB-WIDGET 2: VIRTUAL FLIPBOOK ---
  const bookBtns = document.querySelectorAll(".book-cat-btn");
  const bookPageRight = document.getElementById("book-page-right");

  bookBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const type = btn.getAttribute("data-book");
      const data = COZY_BOOKS[type];
      if (!data || !bookPageRight) return;

      // Update active btn styling
      bookBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      // Animate flip effect
      bookPageRight.style.opacity = "0";
      bookPageRight.style.transform = "rotateY(-10deg) translateX(5px)";

      setTimeout(() => {
        bookPageRight.innerHTML = `
          <div class="book-content-display">
            <h4 id="book-title" style="animation: fadeIn 0.3s;">${data.title}</h4>
            <p class="book-quote-text" id="book-quote">"${data.quote}"</p>
            <span class="book-author" id="book-author">${data.author}</span>
            <div class="book-decoration-stars">⭐⭐⭐⭐⭐</div>
          </div>
        `;
        bookPageRight.style.opacity = "1";
        bookPageRight.style.transform = "rotateY(0deg) translateX(0)";
      }, 300);
    });
  });


  // --- SUB-WIDGET 3: CHAT SIMULATOR WITH SHREYA ---
  const chatMessages = document.getElementById("chat-messages");
  const chatOptions = document.getElementById("chat-options");
  if (!chatMessages || !chatOptions) return;

  const RESPONSE_TREE = {
    reading: {
      userText: "I love reading books too!",
      shreyaReplies: [
        "Yay! High five! Books are like pocket-sized teleportation machines 🚀.",
        "Currently I'm reading some great mystery and sci-fi papers. What's your absolute favorite book to read?"
      ],
      nextPrompts: [
        { text: "I love fantasy and magic!", key: "fantasy" },
        { text: "I prefer realistic science stories!", key: "realscience" }
      ]
    },
    sports: {
      userText: "I relax by playing sports!",
      shreyaReplies: [
        "Oh, sports are so great! It feels awesome to run around volleyball courts or slam a shuttlecock 🏸.",
        "It coordinates both your brain and your muscles! Which sports keep you energetic?"
      ],
      nextPrompts: [
        { text: "Volleyball & basketball!", key: "ballsports" },
        { text: "Swimming & badminton!", key: "fastsports" }
      ]
    },
    crafts: {
      userText: "I enjoy painting and crafting!",
      shreyaReplies: [
        "Crafting is magical! I love taking scrap papers, clay, and teals, and turning them into miniature objects 🎨.",
        "It represents exactly what I love doing: capturing feelings and shaping them into physical keepsakes!"
      ],
      nextPrompts: [
        { text: "Can you design a keepsake for me?", key: "askkeepsake" },
        { text: "What materials do you use to paint?", key: "paintmaterials" }
      ]
    },
    joke: {
      userText: "Tell me a funny school joke!",
      shreyaReplies: [
        "Haha, okay! Here is one: Why did the student take a ladder to Vasant Valley School?",
        "Because she wanted to go to High School! 🪜😄.",
        "Maths puns are great too. Why was the maths book so sad? Because it had too many problems!"
      ],
      nextPrompts: [
        { text: "Haha! Tell me another joke!", key: "joke" },
        { text: "Let's talk about books again!", key: "reading" }
      ]
    },
    // Leaf Responses
    fantasy: {
      userText: "I love fantasy and magic!",
      shreyaReplies: [
        "Magical realms are the best! Spell books, dragons, and starry skies are so fun to dream about.",
        "If you want, go try the Aurora Vibe on my Keepsake Generator above to seal your magical dream!"
      ],
      nextPrompts: [
        { text: "Let's chat about sports!", key: "sports" },
        { text: "Tell me another school joke!", key: "joke" }
      ]
    },
    realscience: {
      userText: "I prefer realistic science stories!",
      shreyaReplies: [
        "Science details are incredible! Understanding stars, deep-ocean trenches, and equations makes real life feel like magic itself."
      ],
      nextPrompts: [
        { text: "Let's talk about painting!", key: "crafts" },
        { text: "Tell me another school joke!", key: "joke" }
      ]
    },
    ballsports: {
      userText: "Volleyball & basketball!",
      shreyaReplies: [
        "Awesome choices! High jumps, coordinate dribbles, and spikes are so satisfying. Keep active! 🏀🏐"
      ],
      nextPrompts: [
        { text: "Tell me a funny joke!", key: "joke" },
        { text: "Talk about book categories!", key: "reading" }
      ]
    },
    fastsports: {
      userText: "Swimming & badminton!",
      shreyaReplies: [
        "Perfect! Swimming laps coordinates breathing, and badminton keeps reflexes super rapid. Splendid choices!"
      ],
      nextPrompts: [
        { text: "Can we talk about arts & crafts?", key: "crafts" },
        { text: "Tell me a funny joke!", key: "joke" }
      ]
    },
    askkeepsake: {
      userText: "Can you design a keepsake for me?",
      shreyaReplies: [
        "I would LOVE to! Scroll right up to the Keepsake Generator section, type in your dream, and I'll craft a custom seal for you instantly! ✨"
      ],
      nextPrompts: [
        { text: "Tell me a funny joke!", key: "joke" },
        { text: "Let's talk about books!", key: "reading" }
      ]
    },
    paintmaterials: {
      userText: "What materials do you use to paint?",
      shreyaReplies: [
        "I love vibrant acrylics, soft water-colors, and ocean-colored fine-liners. Painting sea corals and stars is my favorite!"
      ],
      nextPrompts: [
        { text: "Let's talk about books!", key: "reading" },
        { text: "Tell me a school joke!", key: "joke" }
      ]
    }
  };

  // Option Click Handler
  chatOptions.addEventListener("click", (e) => {
    const btn = e.target.closest(".chat-opt-btn");
    if (!btn) return;

    const replyKey = btn.getAttribute("data-reply");
    const data = RESPONSE_TREE[replyKey];
    if (!data) return;

    // 1. Post User message
    appendMessage(data.userText, "user");

    // Disable options grid during typing simulation
    chatOptions.innerHTML = "";

    // 2. Typing animation simulation
    const typingBubble = document.createElement("div");
    typingBubble.classList.add("msg", "msg-shreya");
    typingBubble.innerHTML = `
      <div class="typing-dots">
        <span></span><span></span><span></span>
      </div>
    `;
    chatMessages.appendChild(typingBubble);
    chatMessages.scrollTop = chatMessages.scrollHeight;

    // 3. Shreya replies sequentially
    setTimeout(() => {
      typingBubble.remove();
      postSequentialReplies(data.shreyaReplies, data.nextPrompts);
    }, 1200);
  });

  function appendMessage(text, sender) {
    const msg = document.createElement("div");
    msg.classList.add("msg", `msg-${sender}`);
    msg.innerHTML = `
      <p>${text}</p>
      <span class="msg-time">Just now</span>
    `;
    chatMessages.appendChild(msg);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  function postSequentialReplies(replies, nextPrompts, index = 0) {
    if (index >= replies.length) {
      // Re-enable options in grid
      chatOptions.innerHTML = nextPrompts.map(p => `
        <button class="chat-opt-btn" data-reply="${p.key}">${p.text}</button>
      `).join("");
      return;
    }

    appendMessage(replies[index], "shreya");

    // Schedule next sentence if multi-line reply
    setTimeout(() => {
      postSequentialReplies(replies, nextPrompts, index + 1);
    }, 1400);
  }
}
