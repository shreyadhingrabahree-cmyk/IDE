// --- BEACHES DATASET ---
const BEACHES_DATA = [
  {
    id: "grace-bay",
    name: "Grace Bay",
    location: "Providenciales, Turks & Caicos",
    rating: 4.9,
    vibe: "Luxury",
    bestTime: "Dec – Apr",
    temp: 28,
    weatherLabel: "Sunny & Gentle",
    sandType: "White Powder",
    image: "assets/images/grace_bay.png",
    activities: [
      { name: "Coral Reef Snorkeling", icon: "🤿" },
      { name: "Stand-Up Paddleboarding", icon: "🏄" },
      { name: "Catamaran Sailing", icon: "⛵" },
      { name: "Sunset Beachfront Dining", icon: "🍽️" },
      { name: "Glass-Bottom Kayaking", icon: "🛶" }
    ],
    wind: "8 km/h",
    crowdLevel: "Low to Moderate",
    description: "Grace Bay is legendary for its long stretch of pristine, powdery white sand and incredibly vibrant turquoise water. Protected by a massive coral reef system, the waters here are exceptionally calm and crystal clear, making it a luxurious haven for families, snorkelers, and relaxation seekers alike.",
    weatherMonths: [26, 27, 27, 28, 29, 30, 31, 31, 30, 29, 28, 27], // Monthly average temps Jan-Dec
    checklist: [
      "Reef-safe biodegradable sunscreen (SPF 50+)",
      "High-clarity snorkel and mask package",
      "Packable UV sun hat and polarized sunglasses",
      "Light linen clothing and luxury swimwear",
      "Waterproof dry bag for boat excursions"
    ]
  },
  {
    id: "anse-source",
    name: "Anse Source d'Argent",
    location: "La Digue Island, Seychelles",
    rating: 4.8,
    vibe: "Exotic",
    bestTime: "May – Sep",
    temp: 29,
    weatherLabel: "Warm & Tropical",
    sandType: "Pink-Golden",
    image: "assets/images/anse_source.png",
    activities: [
      { name: "Seychelles Biking", icon: "🚲" },
      { name: "Granite Rock Exploring", icon: "🧗" },
      { name: "Pristine Snorkeling", icon: "🤿" },
      { name: "Sunset Photography", icon: "📷" },
      { name: "Tropical Jungle Hiking", icon: "🥾" }
    ],
    wind: "14 km/h",
    crowdLevel: "Moderate",
    description: "Famed as the most photographed beach in the world, Anse Source d'Argent is renowned for its colossal, uniquely sculpted grey granite boulders scattered across a shoreline of soft, rosy-hued sand. Shallow, calm turquoise waters run inside a protective reef, creating an otherworldly, jungle-backed paradise.",
    weatherMonths: [28, 28, 29, 30, 29, 28, 27, 27, 28, 29, 29, 28],
    checklist: [
      "Sturdy water shoes (for exploring slippery granite rocks)",
      "Quality waterproof action camera or DSLR protector",
      "Light insect repellent (for jungle trails)",
      "Compact micro-fiber quick-dry beach towel",
      "Cash in Seychelles Rupees (SCR) for local fruit shakes"
    ]
  },
  {
    id: "banzai-pipeline",
    name: "Banzai Pipeline",
    location: "North Shore, Oahu, Hawaii, USA",
    rating: 4.7,
    vibe: "Adventure",
    bestTime: "Nov – Feb",
    temp: 27,
    weatherLabel: "Breezy & Surf-swell",
    sandType: "Golden",
    image: "assets/images/banzai_pipeline.png",
    activities: [
      { name: "Professional Surf Watching", icon: "🏄" },
      { name: "Beachcombing Trails", icon: "🐚" },
      { name: "Sunset Horizon Gazing", icon: "🌅" },
      { name: "Shave Ice Tasting", icon: "🍧" },
      { name: "Summer Reef Swimming", icon: "🏊" }
    ],
    wind: "22 km/h",
    crowdLevel: "High (Winter) / Low (Summer)",
    description: "The Banzai Pipeline is the absolute epicentre of professional surfing. During winter, towering, perfectly barreling waves break over a shallow, jagged reef just yards from the shore, providing a jaw-dropping visual spectacle. In the summer months, the ocean transforms completely into a tranquil pool ideal for beachgoers.",
    weatherMonths: [24, 24, 25, 26, 27, 28, 28, 29, 29, 28, 26, 25],
    checklist: [
      "Telephoto zoom lens (essential for capturing surfers from the sand)",
      "High wind-resistant beach umbrella or canopy",
      "Surfboard wax (cool water formula for winter months)",
      "Comfortable sand-walking slide sandals",
      "Hawaii-safe mineral-only sunscreen"
    ]
  },
  {
    id: "navagio-beach",
    name: "Navagio Beach",
    location: "Zakynthos Island, Greece",
    rating: 4.6,
    vibe: "Adventure",
    bestTime: "Jun – Sep",
    temp: 31,
    weatherLabel: "Mediterranean Sun",
    sandType: "White Pebbles",
    image: "assets/images/navagio_beach.png",
    activities: [
      { name: "Shipwreck Investigating", icon: "⚓" },
      { name: "Secluded Cave Swimming", icon: "🏊" },
      { name: "High Cliff Photography", icon: "📷" },
      { name: "Speedboat Touring", icon: "🚤" },
      { name: "Sunset Cliffside Walks", icon: "🥾" }
    ],
    wind: "11 km/h",
    crowdLevel: "High",
    description: "Also known as Shipwreck Cove, Navagio Beach is a spectacular, isolated sandy cove enclosed by sheer white limestone cliffs on Zakynthos Island. The centrepiece is the MV Panagiotis, a rusted smuggler shipwreck resting on pristine white pebbles, surrounded by waters of a surreal, electric neon-blue.",
    weatherMonths: [14, 14, 16, 19, 23, 27, 31, 31, 28, 24, 19, 16],
    checklist: [
      "Sturdy closed-toe shoes (for climbing the cliffside panoramic path)",
      "Snorkel mask for checking out coastal limestone caves",
      "Motion sickness bands for the speedboat cruise to the cove",
      "Insulated thermal water bottle to combat intense summer heat",
      "Light jacket or windbreaker (the sea breeze can get chilly)"
    ]
  },
  {
    id: "whitehaven-beach",
    name: "Whitehaven Beach",
    location: "Whitsundays, Queensland, Australia",
    rating: 4.9,
    vibe: "Eco-Pristine",
    bestTime: "Sep – Nov",
    temp: 26,
    weatherLabel: "Spring Breeze",
    sandType: "White Silica",
    image: "assets/images/whitehaven_beach.png",
    activities: [
      { name: "Silica Sand Exfoliation", icon: "✨" },
      { name: "Hill Inlet Lookout Trek", icon: "🥾" },
      { name: "Scenic Helicopter Ride", icon: "🚁" },
      { name: "Eco-Friendly Sailing", icon: "⛵" },
      { name: "Stingray Spotting", icon: "🐟" }
    ],
    wind: "16 km/h",
    crowdLevel: "Low to Moderate",
    description: "Stretching over 7 kilometres along Whitsunday Island, Whitehaven Beach is globally celebrated for its 98% pure silica sand. The sand is so fine it doesn't retain heat, remaining perfectly cool to walk on even in the blazing midday sun. At the northern end, Hill Inlet forms a mesmerizing swirl of white sands and shifting turquoise tides.",
    weatherMonths: [28, 28, 27, 25, 23, 21, 21, 22, 24, 25, 27, 28],
    checklist: [
      "Camera-friendly polarized sunglasses (essential for white sand glare)",
      "Stinger suit (mandatory during tropical marine stinger season)",
      "Light backpack for the Hill Inlet hiking trail",
      "Eco-safe leave-no-trace travel kit",
      "Waterproof phone case for wading through shifting sandbars"
    ]
  },
  {
    id: "pink-sands",
    name: "Pink Sands Beach",
    location: "Harbour Island, Bahamas",
    rating: 4.8,
    vibe: "Romantic",
    bestTime: "Dec – Apr",
    temp: 28,
    weatherLabel: "Warm Breeze",
    sandType: "Pink-Golden",
    image: "assets/images/pink_sands.png",
    activities: [
      { name: "Shoreline Horseback Riding", icon: "🐎" },
      { name: "Out Island Snorkeling", icon: "🤿" },
      { name: "Pink-Sand Sunbathing", icon: "⛱️" },
      { name: "Harbour Town Exploring", icon: "🏘️" },
      { name: "Paddleboard Surfing", icon: "🏄" }
    ],
    wind: "12 km/h",
    crowdLevel: "Low",
    description: "Stretching along the eastern coast of Harbour Island, Pink Sands Beach features 3 miles of pastel pink sands, tinted by microscopic red coral shelled insects (Foraminifera). The offshore coral reef provides exceptional protection, ensuring gentle waves that are incredibly safe and romantic for relaxing strolls.",
    weatherMonths: [25, 25, 26, 27, 28, 29, 30, 30, 29, 28, 27, 25],
    checklist: [
      "Sturdy sunhat with chin strap (for shoreline horseback riding)",
      "Pastel cover-up suited for casual Harbour Island dining",
      "Soft beach blanket (to relax comfortably on the shell sand)",
      "Polarized water-sports sunglasses",
      "Water-resistant beach tote bag"
    ]
  }
];

// --- APP STATE MANAGEMENT ---
let state = {
  beaches: [...BEACHES_DATA],
  searchTerm: "",
  activeVibe: "All",
  activeSand: "All",
  activeActivity: "All",
  favorites: JSON.parse(localStorage.getItem("shoreline_favs")) || [],
  checklistStates: JSON.parse(localStorage.getItem("shoreline_checklist")) || {}
};

// --- DOM ELEMENTS ---
const elements = {
  header: document.getElementById("header"),
  searchBar: document.getElementById("search-bar"),
  beachesGrid: document.getElementById("beaches-grid"),
  resultsCounter: document.getElementById("results-counter"),
  
  // Filter pills
  vibeFilters: document.getElementById("vibe-filters"),
  sandFilters: document.getElementById("sand-filters"),
  activityFilters: document.getElementById("activity-filters"),
  
  // Favorites
  favoritesBtn: document.getElementById("favorites-btn"),
  favoritesCount: document.getElementById("favorites-count"),
  favSidebarOverlay: document.getElementById("fav-sidebar-overlay"),
  favSidebar: document.getElementById("fav-sidebar"),
  favSidebarClose: document.getElementById("fav-sidebar-close"),
  favSidebarBody: document.getElementById("fav-sidebar-body"),
  favCompareBtn: document.getElementById("fav-compare-btn"),
  
  // Detail Drawer
  detailDrawerOverlay: document.getElementById("detail-drawer-overlay"),
  detailDrawer: document.getElementById("detail-drawer"),
  drawerCloseBtn: document.getElementById("drawer-close-btn"),
  drawerBody: document.getElementById("drawer-body"),
  
  // Quiz
  quizTriggerBtn: document.getElementById("quiz-trigger-btn"),
  quizOverlay: document.getElementById("quiz-overlay"),
  quizCloseBtn: document.getElementById("quiz-close-btn"),
  quizProgressBar: document.getElementById("quiz-progress-inner"),
  quizBody: document.getElementById("quiz-body"),
  
  // Comparison Modal
  compareModalOverlay: document.getElementById("compare-modal-overlay"),
  compareModalClose: document.getElementById("compare-modal-close"),
  compareTableBody: document.getElementById("compare-table-body"),
  compareTableHead: document.getElementById("compare-table-head")
};

// --- INIT APP ---
document.addEventListener("DOMContentLoaded", () => {
  setupScrollListener();
  renderFilters();
  applyFilters();
  setupEventListeners();
  updateFavoritesUI();
});

// --- SCROLL EFFECT FOR HEADER ---
function setupScrollListener() {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 30) {
      elements.header.classList.add("scrolled");
    } else {
      elements.header.classList.remove("scrolled");
    }
  });
}

// --- SETUP EVENT LISTENERS ---
function setupEventListeners() {
  // Real-time Search
  elements.searchBar.addEventListener("input", (e) => {
    state.searchTerm = e.target.value.trim().toLowerCase();
    applyFilters();
  });

  // Favorites Panel Toggle
  elements.favoritesBtn.addEventListener("click", toggleFavoritesSidebar);
  elements.favSidebarOverlay.addEventListener("click", toggleFavoritesSidebar);
  elements.favSidebarClose.addEventListener("click", toggleFavoritesSidebar);

  // Compare Shortlist Action
  elements.favCompareBtn.addEventListener("click", openCompareModal);
  elements.compareModalOverlay.addEventListener("click", (e) => {
    if (e.target === elements.compareModalOverlay) closeCompareModal();
  });
  elements.compareModalClose.addEventListener("click", closeCompareModal);

  // Detail Drawer Closing
  elements.detailDrawerOverlay.addEventListener("click", closeDetailDrawer);
  elements.drawerCloseBtn.addEventListener("click", closeDetailDrawer);

  // Quiz Overlay Opening/Closing
  elements.quizTriggerBtn.addEventListener("click", openQuiz);
  elements.quizOverlay.addEventListener("click", (e) => {
    if (e.target === elements.quizOverlay) closeQuiz();
  });
  elements.quizCloseBtn.addEventListener("click", closeQuiz);
}

// --- RENDERING FILTER CONTROL PILLS ---
function renderFilters() {
  // Extract Vibes
  const vibes = ["All", ...new Set(BEACHES_DATA.map(b => b.vibe))];
  elements.vibeFilters.innerHTML = vibes.map(vibe => `
    <button class="filter-pill ${state.activeVibe === vibe ? 'active' : ''}" data-vibe="${vibe}">${vibe}</button>
  `).join("");

  // Extract Sand Types
  const sands = ["All", ...new Set(BEACHES_DATA.map(b => b.sandType))];
  elements.sandFilters.innerHTML = sands.map(sand => `
    <button class="filter-pill ${state.activeSand === sand ? 'active' : ''}" data-sand="${sand}">${sand}</button>
  `).join("");

  // Curate common Activities
  const activities = ["All", "Snorkeling", "Surfing", "Swimming", "Exploring", "Dining", "Sailing"];
  elements.activityFilters.innerHTML = activities.map(act => `
    <button class="filter-pill ${state.activeActivity === act ? 'active' : ''}" data-act="${act}">${act}</button>
  `).join("");

  // Bind Event delegation for filter rows
  elements.vibeFilters.addEventListener("click", (e) => {
    if (e.target.classList.contains("filter-pill")) {
      document.querySelectorAll("#vibe-filters .filter-pill").forEach(p => p.classList.remove("active"));
      e.target.classList.add("active");
      state.activeVibe = e.target.getAttribute("data-vibe");
      applyFilters();
    }
  });

  elements.sandFilters.addEventListener("click", (e) => {
    if (e.target.classList.contains("filter-pill")) {
      document.querySelectorAll("#sand-filters .filter-pill").forEach(p => p.classList.remove("active"));
      e.target.classList.add("active");
      state.activeSand = e.target.getAttribute("data-sand");
      applyFilters();
    }
  });

  elements.activityFilters.addEventListener("click", (e) => {
    if (e.target.classList.contains("filter-pill")) {
      document.querySelectorAll("#activity-filters .filter-pill").forEach(p => p.classList.remove("active"));
      e.target.classList.add("active");
      state.activeActivity = e.target.getAttribute("data-act");
      applyFilters();
    }
  });
}

// --- APPLY SEARCH AND MULTI-LAYERED FILTERS ---
function applyFilters() {
  const filtered = BEACHES_DATA.filter(beach => {
    // 1. Search Query check
    const matchesSearch = 
      beach.name.toLowerCase().includes(state.searchTerm) ||
      beach.location.toLowerCase().includes(state.searchTerm) ||
      beach.vibe.toLowerCase().includes(state.searchTerm) ||
      beach.sandType.toLowerCase().includes(state.searchTerm);

    // 2. Vibe filter check
    const matchesVibe = state.activeVibe === "All" || beach.vibe === state.activeVibe;

    // 3. Sand type check
    const matchesSand = state.activeSand === "All" || beach.sandType === state.activeSand;

    // 4. Activity check (fuzzy match against array)
    const matchesActivity = state.activeActivity === "All" || beach.activities.some(act => 
      act.name.toLowerCase().includes(state.activeActivity.toLowerCase())
    );

    return matchesSearch && matchesVibe && matchesSand && matchesActivity;
  });

  state.beaches = filtered;
  renderBeachesGrid();
}

// --- RENDER MAIN BEACH CARDS GRID ---
function renderBeachesGrid() {
  elements.resultsCounter.innerText = `${state.beaches.length} ${state.beaches.length === 1 ? 'Beach' : 'Beaches'} found`;

  if (state.beaches.length === 0) {
    elements.beachesGrid.innerHTML = `
      <div class="beaches-empty-state">
        <div class="empty-icon">🏖️</div>
        <h3 class="empty-title">No Beaches Match Your Search</h3>
        <p class="empty-desc">We couldn't find any shorelines matching your exact filter setup. Try relaxing your filters or typing something else.</p>
        <button class="empty-reset-btn" id="empty-reset-btn">Reset All Filters</button>
      </div>
    `;
    
    document.getElementById("empty-reset-btn").addEventListener("click", resetAllFilters);
    return;
  }

  elements.beachesGrid.innerHTML = state.beaches.map(beach => {
    const isFav = state.favorites.some(f => f.id === beach.id);
    return `
      <article class="beach-card" data-id="${beach.id}">
        <div class="card-img-wrapper" onclick="openDetailDrawer('${beach.id}')">
          <img src="${beach.image}" alt="${beach.name}" loading="lazy">
          <div class="card-img-overlay">
            <div class="card-top-tags">
              <span class="vibe-badge">${beach.vibe}</span>
              <button class="fav-card-btn ${isFav ? 'favorited' : ''}" data-id="${beach.id}" onclick="event.stopPropagation(); toggleFavorite('${beach.id}')">
                <i class="fa-${isFav ? 'solid' : 'regular'} fa-heart"></i>
              </button>
            </div>
            
            <div class="card-bottom-meta">
              <span class="weather-badge">
                ☀️ ${beach.temp}°C
              </span>
              <span class="rating-badge">
                ★ ${beach.rating.toFixed(1)}
              </span>
            </div>
          </div>
        </div>
        
        <div class="card-content">
          <div class="card-loc"><i class="fa-solid fa-location-dot"></i> ${beach.location}</div>
          <h3 class="card-title" onclick="openDetailDrawer('${beach.id}')">${beach.name}</h3>
          
          <div class="card-info-pills">
            <span class="info-pill"><i class="fa-solid fa-umbrella-beach"></i> ${beach.sandType} Sand</span>
            <span class="info-pill"><i class="fa-solid fa-wind"></i> ${beach.wind} Wind</span>
          </div>
          
          <div class="card-footer">
            <div class="card-best-time">
              Best Time to Visit
              <strong>${beach.bestTime}</strong>
            </div>
            <button class="card-details-btn" onclick="openDetailDrawer('${beach.id}')">
              Explore Beach <i class="fa-solid fa-arrow-right-long"></i>
            </button>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

// --- RESET ALL FILTER STATES ---
function resetAllFilters() {
  state.searchTerm = "";
  state.activeVibe = "All";
  state.activeSand = "All";
  state.activeActivity = "All";
  
  elements.searchBar.value = "";
  
  renderFilters();
  applyFilters();
}

// --- DYNAMICALLY TOGGLE FAVORITES SHORTLIST ---
function toggleFavorite(id) {
  const beach = BEACHES_DATA.find(b => b.id === id);
  if (!beach) return;

  const index = state.favorites.findIndex(f => f.id === id);
  if (index === -1) {
    // Add to favorites
    state.favorites.push(beach);
  } else {
    // Remove from favorites
    state.favorites.splice(index, 1);
  }

  // Save State
  localStorage.setItem("shoreline_favs", JSON.stringify(state.favorites));
  
  // Update Interfaces
  updateFavoritesUI();
  renderBeachesGrid();

  // If Drawer is open, sync drawer fav button status
  const drawerFavBtn = document.getElementById("drawer-fav-action-btn");
  if (drawerFavBtn && drawerFavBtn.getAttribute("data-id") === id) {
    const isFav = index === -1; // Since we just pushed or spliced
    drawerFavBtn.classList.toggle("favorited", isFav);
    drawerFavBtn.innerHTML = `<i class="fa-${isFav ? 'solid' : 'regular'} fa-heart"></i>`;
  }
}

// --- UPDATE FAVORITES UI STATES ---
function updateFavoritesUI() {
  const count = state.favorites.length;
  elements.favoritesCount.innerText = count;
  elements.favoritesCount.style.display = count > 0 ? "flex" : "none";

  if (count === 0) {
    elements.favSidebarBody.innerHTML = `
      <div class="fav-empty-state">
        <div class="fav-empty-icon">❤️</div>
        <p>Your shortlist is empty.</p>
        <p style="font-size: 13px; margin-top: 6px;">Tap the heart on beach cards to add destinations and compare them.</p>
      </div>
    `;
    elements.favCompareBtn.style.display = "none";
  } else {
    elements.favSidebarBody.innerHTML = state.favorites.map(beach => `
      <div class="fav-item-card">
        <div class="fav-item-img">
          <img src="${beach.image}" alt="${beach.name}">
        </div>
        
        <div class="fav-item-details">
          <h4 class="fav-item-title">${beach.name}</h4>
          <div class="fav-item-meta">
            <span>★ ${beach.rating}</span>
            <span>📍 ${beach.vibe}</span>
          </div>
        </div>
        
        <button class="fav-item-remove" onclick="toggleFavorite('${beach.id}')">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>
    `).join("");
    
    // Show Compare button if we have at least 2 beaches to contrast
    elements.favCompareBtn.style.display = count >= 2 ? "flex" : "none";
  }
}

function toggleFavoritesSidebar() {
  elements.favSidebarOverlay.classList.toggle("open");
  elements.favSidebar.classList.toggle("open");
}

// --- OPEN COMPARISON MODAL TABLE ---
function openCompareModal() {
  if (state.favorites.length < 2) return;

  // Render Table Head
  elements.compareTableHead.innerHTML = `
    <tr>
      <th>Feature</th>
      ${state.favorites.map(beach => `<th>${beach.name}</th>`).join("")}
    </tr>
  `;

  // Render Compare Rows
  const features = [
    { label: "Location", key: "location" },
    { label: "Rating", key: "rating", format: val => `★ ${val.toFixed(1)}` },
    { label: "Theme Vibe", key: "vibe" },
    { label: "Best Time to Go", key: "bestTime" },
    { label: "Current Temp", key: "temp", format: val => `${val}°C` },
    { label: "Sand Variety", key: "sandType" },
    { label: "Wind Velocity", key: "wind" },
    { label: "Crowds", key: "crowdLevel" }
  ];

  elements.compareTableBody.innerHTML = features.map(feat => `
    <tr>
      <th>${feat.label}</th>
      ${state.favorites.map(beach => {
        let val = beach[feat.key];
        if (feat.format) val = feat.format(val);
        return `<td>${val}</td>`;
      }).join("")}
    </tr>
  `).join("");

  elements.compareModalOverlay.classList.add("open");
}

function closeCompareModal() {
  elements.compareModalOverlay.classList.remove("open");
}

// --- SLIDE-OUT DETAIL DRAWER (SHEET) MANAGEMENT ---
function openDetailDrawer(id) {
  const beach = BEACHES_DATA.find(b => b.id === id);
  if (!beach) return;

  const isFav = state.favorites.some(f => f.id === beach.id);

  // Compile full content inside Drawer Body
  elements.drawerBody.innerHTML = `
    <div class="drawer-header-img" style="margin: 0 -32px;">
      <img src="${beach.image}" alt="${beach.name}">
      <div class="drawer-header-overlay">
        <div class="drawer-top-row">
          <button class="drawer-close-btn" id="drawer-close-action-btn"><i class="fa-solid fa-xmark"></i></button>
          <button class="drawer-fav-btn ${isFav ? 'favorited' : ''}" id="drawer-fav-action-btn" data-id="${beach.id}"><i class="fa-${isFav ? 'solid' : 'regular'} fa-heart"></i></button>
        </div>
      </div>
    </div>
    
    <div class="drawer-title-row">
      <h2 class="drawer-title">${beach.name}</h2>
      <div class="drawer-loc"><i class="fa-solid fa-location-dot"></i> ${beach.location}</div>
    </div>
    
    <div class="drawer-meta-badges">
      <span class="drawer-badge gold"><i class="fa-solid fa-star"></i> Rating: ${beach.rating}</span>
      <span class="drawer-badge blue"><i class="fa-solid fa-temperature-three-quarters"></i> Temp: ${beach.temp}°C</span>
      <span class="drawer-badge coral"><i class="fa-solid fa-umbrella-beach"></i> Vibe: ${beach.vibe}</span>
    </div>
    
    <div class="drawer-section">
      <p style="font-size: 15px; color: var(--text-muted); line-height: 1.7; margin-bottom: 0;">${beach.description}</p>
    </div>
    
    <div class="drawer-section">
      <h4 class="drawer-section-title"><i class="fa-solid fa-swimmer"></i> Signature Activities</h4>
      <div class="drawer-activities-list">
        ${beach.activities.map(act => `
          <div class="drawer-activity-item">
            <span class="drawer-activity-icon">${act.icon}</span>
            <span>${act.name}</span>
          </div>
        `).join("")}
      </div>
    </div>
    
    <div class="drawer-section">
      <h4 class="drawer-section-title"><i class="fa-solid fa-cloud-sun"></i> Seasonal Temp Guide</h4>
      <p style="font-size: 13px; color: var(--text-muted); margin-bottom: 12px;">Average temperature cycle (Jan to Dec) across seasonal milestones:</p>
      
      <div class="weather-chart-container">
        <div class="weather-chart-bars" id="drawer-chart-bars">
          <!-- Dynamically Populated Bars -->
        </div>
        <div class="weather-stats">
          <div class="weather-stat-box">
            <div class="weather-stat-val">${beach.wind}</div>
            <div class="weather-stat-lbl">Wind Speed</div>
          </div>
          <div class="weather-stat-box">
            <div class="weather-stat-val">${beach.crowdLevel}</div>
            <div class="weather-stat-lbl">Crowds</div>
          </div>
          <div class="weather-stat-box">
            <div class="weather-stat-val">${beach.bestTime}</div>
            <div class="weather-stat-lbl">Peak Season</div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="drawer-section">
      <h4 class="drawer-section-title"><i class="fa-solid fa-clipboard-check"></i> Beach Travel Planner</h4>
      <p style="font-size: 13px; color: var(--text-muted); margin-bottom: 16px;">Curated checklist for this destination. Check off items as you pack!</p>
      
      <div class="checklist-container" id="drawer-checklist-container">
        <!-- Checklist elements -->
      </div>
    </div>
  `;

  // Bind new action buttons inside dynamically created HTML
  document.getElementById("drawer-close-action-btn").addEventListener("click", closeDetailDrawer);
  document.getElementById("drawer-fav-action-btn").addEventListener("click", () => toggleFavorite(beach.id));

  // Build the seasonal temperature chart bars
  const chartBarsContainer = document.getElementById("drawer-chart-bars");
  const monthLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  
  chartBarsContainer.innerHTML = beach.weatherMonths.map((mTemp, idx) => {
    // We assume max possible temp in layout is 35°C to scale percentage
    const barHeightPct = (mTemp / 35) * 100;
    return `
      <div class="chart-column">
        <div class="chart-bar" style="height: 0%;" id="chart-bar-${idx}">
          <span class="chart-temp">${mTemp}°</span>
        </div>
        <span class="chart-label">${monthLabels[idx]}</span>
      </div>
    `;
  }).join("");

  // Build Checklist Elements
  const checklistContainer = document.getElementById("drawer-checklist-container");
  const savedChecks = state.checklistStates[beach.id] || [];

  checklistContainer.innerHTML = beach.checklist.map((itemText, idx) => {
    const isChecked = savedChecks.includes(idx);
    return `
      <div class="checklist-item ${isChecked ? 'checked' : ''}" data-idx="${idx}">
        <div class="checklist-checkbox">
          ${isChecked ? '<i class="fa-solid fa-check"></i>' : ''}
        </div>
        <span class="checklist-text">${itemText}</span>
      </div>
    `;
  }).join("");

  // Attach checklist handlers
  checklistContainer.addEventListener("click", (e) => {
    const item = e.target.closest(".checklist-item");
    if (!item) return;

    const idx = parseInt(item.getAttribute("data-idx"));
    let currentChecked = state.checklistStates[beach.id] || [];

    if (currentChecked.includes(idx)) {
      currentChecked = currentChecked.filter(i => i !== idx);
      item.classList.remove("checked");
      item.querySelector(".checklist-checkbox").innerHTML = "";
    } else {
      currentChecked.push(idx);
      item.classList.add("checked");
      item.querySelector(".checklist-checkbox").innerHTML = '<i class="fa-solid fa-check"></i>';
    }

    state.checklistStates[beach.id] = currentChecked;
    localStorage.setItem("shoreline_checklist", JSON.stringify(state.checklistStates));
  });

  // Display components
  elements.detailDrawerOverlay.classList.add("open");
  elements.detailDrawer.classList.add("open");
  document.body.style.overflow = "hidden"; // Disable background scrolling

  // Micro-animation for chart bar sliding up
  setTimeout(() => {
    beach.weatherMonths.forEach((mTemp, idx) => {
      const barElement = document.getElementById(`chart-bar-${idx}`);
      if (barElement) {
        const barHeightPct = (mTemp / 35) * 100;
        barElement.style.height = `${barHeightPct}%`;
      }
    });
  }, 100);
}

function closeDetailDrawer() {
  elements.detailDrawerOverlay.classList.remove("open");
  elements.detailDrawer.classList.remove("open");
  document.body.style.overflow = "auto";
}

// --- BEACH MOOD MATCHER QUIZ LOGIC ---
const QUIZ_STEPS = [
  {
    question: "What is your preferred holiday pace?",
    options: [
      { text: "Quiet & Serene (Ultimate relaxation on untouched dunes)", score: { "grace-bay": 3, "pink-sands": 3 }, icon: "🧘" },
      { text: "Active Exploring (Hiking and seeing natural formations)", score: { "anse-source": 3, "whitehaven": 3 }, icon: "🥾" },
      { text: "Thrilling Adventure (Extreme sports, boat rides, or colossal waves)", score: { "banzai-pipeline": 3, "navagio-beach": 3 }, icon: "🏄" }
    ]
  },
  {
    question: "Who are you enjoying the sunshine with?",
    options: [
      { text: "Solo Discovery (Finding myself in unique, exotic destinations)", score: { "anse-source": 2, "navagio-beach": 3 }, icon: "🧭" },
      { text: "Romantic Escape (A dreamy private getaway with my partner)", score: { "pink-sands": 3, "grace-bay": 2 }, icon: "💖" },
      { text: "Active Family/Friends Trip (Creating memories together)", score: { "whitehaven": 3, "banzai-pipeline": 2, "grace-bay": 2 }, icon: "👨‍👩‍👧‍👦" }
    ]
  },
  {
    question: "What is your perfect tropical soundscape?",
    options: [
      { text: "Soft, gentle ripples lapping shallow, warm reefs", score: { "grace-bay": 3, "pink-sands": 3 }, icon: "🐚" },
      { text: "Thunderous, massive waves crashing against surf reefs", score: { "banzai-pipeline": 3, "navagio-beach": 2 }, icon: "🌊" },
      { text: "Quiet coastal breezes rustling exotic, wild tree-lines", score: { "anse-source": 3, "whitehaven": 3 }, icon: "🌴" }
    ]
  }
];

let quizState = {
  currentStep: 0,
  scores: {
    "grace-bay": 0,
    "anse-source": 0,
    "banzai-pipeline": 0,
    "navagio-beach": 0,
    "whitehaven-beach": 0,
    "pink-sands": 0
  }
};

function openQuiz() {
  quizState.currentStep = 0;
  quizState.scores = {
    "grace-bay": 0,
    "anse-source": 0,
    "banzai-pipeline": 0,
    "navagio-beach": 0,
    "whitehaven-beach": 0,
    "pink-sands": 0
  };
  
  elements.quizOverlay.classList.add("open");
  renderQuizStep();
}

function closeQuiz() {
  elements.quizOverlay.classList.remove("open");
}

function renderQuizStep() {
  const isFinished = quizState.currentStep >= QUIZ_STEPS.length;
  
  // Progress Bar update
  const pct = isFinished ? 100 : ((quizState.currentStep + 1) / QUIZ_STEPS.length) * 100;
  elements.quizProgressBar.style.width = `${pct}%`;

  if (isFinished) {
    // Find beach with maximum score
    let bestBeachId = "grace-bay";
    let maxScore = -1;
    
    Object.keys(quizState.scores).forEach(id => {
      if (quizState.scores[id] > maxScore) {
        maxScore = quizState.scores[id];
        bestBeachId = id;
      }
    });

    const match = BEACHES_DATA.find(b => b.id === bestBeachId);

    elements.quizBody.innerHTML = `
      <div class="quiz-result-slide">
        <div class="quiz-result-icon">🏝️</div>
        <div class="quiz-question-num">Your Perfect Beach Match</div>
        <h3 class="quiz-result-match">${match.name}</h3>
        <p class="quiz-result-desc">${match.name} matches your speed, crowd preferences, and activities flawlessly! Enjoy its stunning ${match.sandType} shores.</p>
        <button class="quiz-result-action-btn" id="quiz-result-action-btn">Explore ${match.name} Now</button>
      </div>
    `;

    document.getElementById("quiz-result-action-btn").addEventListener("click", () => {
      closeQuiz();
      openDetailDrawer(match.id);
    });
    return;
  }

  const step = QUIZ_STEPS[quizState.currentStep];

  elements.quizBody.innerHTML = `
    <div class="quiz-question-step active">
      <div class="quiz-question-num">Question ${quizState.currentStep + 1} of ${QUIZ_STEPS.length}</div>
      <h3 class="quiz-question-text">${step.question}</h3>
      <div class="quiz-answers-grid">
        ${step.options.map((opt, idx) => `
          <button class="quiz-answer-opt" data-idx="${idx}">
            <div class="quiz-opt-icon">${opt.icon}</div>
            <span>${opt.text}</span>
          </button>
        `).join("")}
      </div>
    </div>
  `;

  // Attach option click handlers
  document.querySelectorAll(".quiz-answer-opt").forEach(btn => {
    btn.addEventListener("click", () => {
      const idx = parseInt(btn.getAttribute("data-idx"));
      const option = step.options[idx];

      // Add scores
      Object.keys(option.score).forEach(beachId => {
        if (quizState.scores[beachId] !== undefined) {
          quizState.scores[beachId] += option.score[beachId];
        }
      });

      // Advance
      quizState.currentStep++;
      renderQuizStep();
    });
  });
}
