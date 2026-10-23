/**
 * LUMORA — The Art of Seeing
 * Pure Vanilla JavaScript Application Core
 * Interactive Photography Gallery, Lightbox, Filtering, Search & Favourites
 */

'use strict';

// -----------------------------------------------------------------------------
// 1. DATA SOURCE: 24 Curated High-Resolution Verified Masterworks
// Simple, clear, easy-to-understand titles and descriptions
// -----------------------------------------------------------------------------
const GALLERY_ITEMS = [
  // ================= NATURE (6 items) =================
  {
    id: 'nat-01',
    title: 'Morning in Yosemite Valley',
    category: 'nature',
    categoryLabel: 'Nature',
    caption: 'Golden morning sunlight reflecting softly across the calm mountain river.',
    photographer: 'Bailey Zindel',
    source: 'Verified Unsplash Artist',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=85',
    thumbnail: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    alt: 'Dawn light breaking over misty mountain reflections in Yosemite Valley',
    gridSpan: 'span-wide'
  },
  {
    id: 'nat-02',
    title: 'Misty Redwood Forest',
    category: 'nature',
    categoryLabel: 'Nature',
    caption: 'Sun rays shining warmly through the green trees and morning fog.',
    photographer: 'Casey Horner',
    source: 'Verified Unsplash Artist',
    image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=85',
    thumbnail: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80',
    alt: 'Dense misty evergreen redwood forest with sun rays shining through branches',
    gridSpan: 'span-tall'
  },
  {
    id: 'nat-03',
    title: 'Golden Desert Sunset',
    category: 'nature',
    categoryLabel: 'Nature',
    caption: 'Soft sand dunes glowing under the warm colors of the evening sunset.',
    photographer: 'Jeremy Bishop',
    source: 'Verified Unsplash Artist',
    image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1600&q=85',
    thumbnail: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80',
    alt: 'Golden desert sand dunes curving under dramatic late afternoon lighting',
    gridSpan: 'span-normal'
  },
  {
    id: 'nat-04',
    title: 'Snowy Mountain Peaks',
    category: 'nature',
    categoryLabel: 'Nature',
    caption: 'Majestic rocky mountain peaks standing tall against a bright blue sky.',
    photographer: 'Ales Krivec',
    source: 'Verified Unsplash Artist',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=85',
    thumbnail: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80',
    alt: 'High alpine jagged mountain ridges framed against crisp blue sky',
    gridSpan: 'span-mid'
  },
  {
    id: 'nat-05',
    title: 'Hidden Forest Waterfall',
    category: 'nature',
    categoryLabel: 'Nature',
    caption: 'Fresh clear water cascading down mossy green rocks in the wild.',
    photographer: 'Dave Hoefler',
    source: 'Verified Unsplash Artist',
    image: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1600&q=85',
    thumbnail: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=800&q=80',
    alt: 'Serene forest waterfall flowing peacefully over natural rocks',
    gridSpan: 'span-normal'
  },
  {
    id: 'nat-06',
    title: 'Autumn Mountain Lake',
    category: 'nature',
    categoryLabel: 'Nature',
    caption: 'Golden yellow autumn leaves surrounding a tranquil crystal blue lake.',
    photographer: 'Luca Bravo',
    source: 'Verified Unsplash Artist',
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1600&q=85',
    thumbnail: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80',
    alt: 'Misty autumn lake with mountains and pine trees in the distance',
    gridSpan: 'span-tall'
  },

  // ================= ARCHITECTURE (6 items) =================
  {
    id: 'arc-01',
    title: 'Spiral Building Steps',
    category: 'architecture',
    categoryLabel: 'Architecture',
    caption: 'Minimalist clean white curves creating beautiful geometric patterns.',
    photographer: 'Simone Hutsch',
    source: 'Verified Unsplash Artist',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=85',
    thumbnail: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
    alt: 'Clean minimalist architectural facade and geometric lines against clear sky',
    gridSpan: 'span-tall'
  },
  {
    id: 'arc-02',
    title: 'City Glass Skyscrapers',
    category: 'architecture',
    categoryLabel: 'Architecture',
    caption: 'Modern glass towers reaching upward and mirroring the open blue sky.',
    photographer: 'Mitch Rosen',
    source: 'Verified Unsplash Artist',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=85',
    thumbnail: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    alt: 'Looking directly up at glass and steel high-rise skyscrapers reflecting the sky',
    gridSpan: 'span-wide'
  },
  {
    id: 'arc-03',
    title: 'White Museum Curves',
    category: 'architecture',
    categoryLabel: 'Architecture',
    caption: 'Smooth flowing architectural shapes designed with artistic modern vision.',
    photographer: 'Joel Filipe',
    source: 'Verified Unsplash Artist',
    image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1600&q=85',
    thumbnail: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800&q=80',
    alt: 'Sweeping organic white modern architectural curves with intricate windows',
    gridSpan: 'span-mid'
  },
  {
    id: 'arc-04',
    title: 'Modern Villa Terrace',
    category: 'architecture',
    categoryLabel: 'Architecture',
    caption: 'Clean lines, warm sunlight, and open space in contemporary home design.',
    photographer: 'Alex Wong',
    source: 'Verified Unsplash Artist',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=85',
    thumbnail: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
    alt: 'Luxury architectural residence with minimalist pool terrace and palm trees',
    gridSpan: 'span-normal'
  },
  {
    id: 'arc-05',
    title: 'Symphony Hall Architecture',
    category: 'architecture',
    categoryLabel: 'Architecture',
    caption: 'Curved wood and acoustic panels creating a warm and elegant concert hall.',
    photographer: 'Scott Webb',
    source: 'Verified Unsplash Artist',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=85',
    thumbnail: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    alt: 'Bright and spacious modern interior architecture with glass partitions',
    gridSpan: 'span-wide'
  },
  {
    id: 'arc-06',
    title: 'The Steel Bridge Span',
    category: 'architecture',
    categoryLabel: 'Architecture',
    caption: 'Strong steel trusses and symmetrical beams crossing the wide river.',
    photographer: 'Matthew Hamilton',
    source: 'Verified Unsplash Artist',
    image: 'https://images.unsplash.com/photo-1477959858617-67f30bc75b82?auto=format&fit=crop&w=1600&q=85',
    thumbnail: 'https://images.unsplash.com/photo-1477959858617-67f30bc75b82?auto=format&fit=crop&w=800&q=80',
    alt: 'Vibrant metropolitan skyline at night with luminous bridge reflections',
    gridSpan: 'span-normal'
  },

  // ================= PORTRAITS (6 items) =================
  {
    id: 'por-01',
    title: 'Natural Window Light',
    category: 'portraits',
    categoryLabel: 'Portraits',
    caption: 'Soft sunlight gently illuminating a calm and thoughtful expression.',
    photographer: 'Jurica Koletic',
    source: 'Verified Unsplash Artist',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1600&q=85',
    thumbnail: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    alt: 'Expressive close-up fine art portrait of a woman looking with poised grace',
    gridSpan: 'span-tall'
  },
  {
    id: 'por-02',
    title: 'The Thoughtful Smile',
    category: 'portraits',
    categoryLabel: 'Portraits',
    caption: 'A warm, genuine portrait capturing kindness and peaceful confidence.',
    photographer: 'Ayo Ogunseinde',
    source: 'Verified Unsplash Artist',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1600&q=85',
    thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    alt: 'Warm candid portrait of a thoughtful man bathed in natural morning light',
    gridSpan: 'span-normal'
  },
  {
    id: 'por-03',
    title: 'Golden Sunset Glow',
    category: 'portraits',
    categoryLabel: 'Portraits',
    caption: 'Gentle evening sunlight creating a warm halo and happy moment.',
    photographer: 'Daniel Apodaca',
    source: 'Verified Unsplash Artist',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1600&q=85',
    thumbnail: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80',
    alt: 'Editorial portrait of a woman in evening golden hour natural backlight',
    gridSpan: 'span-mid'
  },
  {
    id: 'por-04',
    title: 'Pure Joy & Laughter',
    category: 'portraits',
    categoryLabel: 'Portraits',
    caption: 'A candid close-up portrait full of warmth, life, and natural happiness.',
    photographer: 'Michael Dam',
    source: 'Verified Unsplash Artist',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1600&q=85',
    thumbnail: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80',
    alt: 'Natural portrait highlighting authentic human emotion and gentle smile',
    gridSpan: 'span-wide'
  },
  {
    id: 'por-05',
    title: 'Quiet Contemplation',
    category: 'portraits',
    categoryLabel: 'Portraits',
    caption: 'A peaceful moment captured with gentle contrast and relaxed eyes.',
    photographer: 'Stefano Intintoli',
    source: 'Verified Unsplash Artist',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1600&q=85',
    thumbnail: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80',
    alt: 'Candid outdoor portrait of a young man with genuine expression',
    gridSpan: 'span-normal'
  },
  {
    id: 'por-06',
    title: 'Serene Nature Portrait',
    category: 'portraits',
    categoryLabel: 'Portraits',
    caption: 'A refreshing outdoor portrait surrounded by fresh blooming greenery.',
    photographer: 'Houcine Ncib',
    source: 'Verified Unsplash Artist',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1600&q=85',
    thumbnail: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80',
    alt: 'Charming fashion portrait of a girl smiling in soft natural light',
    gridSpan: 'span-tall'
  },

  // ================= TRAVEL (6 items) =================
  {
    id: 'trv-01',
    title: 'Lantern Street in Kyoto',
    category: 'travel',
    categoryLabel: 'Travel',
    caption: 'Traditional wooden houses lit up by warm glowing red paper lanterns.',
    photographer: 'Sora Sagano',
    source: 'Verified Unsplash Artist',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1600&q=85',
    thumbnail: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80',
    alt: 'Atmospheric narrow historic street in Kyoto Japan illuminated by ambient lanterns',
    gridSpan: 'span-wide'
  },
  {
    id: 'trv-02',
    title: 'Morning in Venice Canal',
    category: 'travel',
    categoryLabel: 'Travel',
    caption: 'Traditional gondolas resting quietly on the peaceful misty blue waters.',
    photographer: 'Damiano Baschiera',
    source: 'Verified Unsplash Artist',
    image: 'https://images.unsplash.com/photo-1514890547357-a9ee288728e0?auto=format&fit=crop&w=1600&q=85',
    thumbnail: 'https://images.unsplash.com/photo-1514890547357-a9ee288728e0?auto=format&fit=crop&w=800&q=80',
    alt: 'Gondolas resting on calm blue waters of Venice lagoon with Santa Maria church',
    gridSpan: 'span-tall'
  },
  {
    id: 'trv-03',
    title: 'Winding Mountain Road',
    category: 'travel',
    categoryLabel: 'Travel',
    caption: 'An open scenic road trip route weaving through dramatic mountain peaks.',
    photographer: 'Luca Bravo',
    source: 'Verified Unsplash Artist',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1600&q=85',
    thumbnail: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80',
    alt: 'Scenic mountain road trip journey through dramatic rocky alpine terrain',
    gridSpan: 'span-normal'
  },
  {
    id: 'trv-04',
    title: 'Sunset Over Santorini',
    category: 'travel',
    categoryLabel: 'Travel',
    caption: 'Famous white cliffside houses overlooking the deep blue sea at dusk.',
    photographer: 'Heidi Kaden',
    source: 'Verified Unsplash Artist',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1600&q=85',
    thumbnail: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=80',
    alt: 'Classic whitewashed Aegean village perched on volcanic cliffs above sea in Santorini',
    gridSpan: 'span-mid'
  },
  {
    id: 'trv-05',
    title: 'Tropical Island Shore',
    category: 'travel',
    categoryLabel: 'Travel',
    caption: 'Turquoise ocean waves lapping against powdery white sand and palm trees.',
    photographer: 'Sean Oulashin',
    source: 'Verified Unsplash Artist',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=85',
    thumbnail: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    alt: 'Idyllic tropical beach with clean white sand and gentle blue ocean waves',
    gridSpan: 'span-wide'
  },
  {
    id: 'trv-06',
    title: 'Hot Air Balloons in Cappadocia',
    category: 'travel',
    categoryLabel: 'Travel',
    caption: 'Colorful balloons floating gracefully over the fairy chimneys at sunrise.',
    photographer: 'Yonatan Bark',
    source: 'Verified Unsplash Artist',
    image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1600&q=85',
    thumbnail: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=800&q=80',
    alt: 'Colorful hot air balloons flying over Cappadocia valley during sunrise',
    gridSpan: 'span-normal'
  }
];

// -----------------------------------------------------------------------------
// 2. STATE MANAGEMENT
// -----------------------------------------------------------------------------
const state = {
  activeCategory: 'all',       // 'all' | 'nature' | 'architecture' | 'portraits' | 'travel' | 'favourites'
  searchQuery: '',
  favourites: new Set(),       // Set of item IDs saved in localStorage
  currentLightboxIndex: 0,     // Index relative to visibleItems
  visibleItems: [...GALLERY_ITEMS]
};

// -----------------------------------------------------------------------------
// 3. DOM ELEMENTS CACHE
// -----------------------------------------------------------------------------
const DOM = {
  header: document.getElementById('header'),
  headerCount: document.getElementById('header-image-count'),
  navFavBtn: document.getElementById('nav-fav-toggle'),
  navFavCount: document.getElementById('nav-fav-count'),
  mobileToggle: document.getElementById('mobile-toggle'),
  mobileDrawer: document.getElementById('mobile-drawer'),
  mobileLinks: document.querySelectorAll('.mobile-nav-link'),

  galleryGrid: document.getElementById('gallery-grid'),
  emptyState: document.getElementById('empty-state'),
  emptyResetBtn: document.getElementById('empty-reset-btn'),
  statusText: document.getElementById('status-text'),
  resetFiltersBtn: document.getElementById('reset-filters-btn'),

  searchInput: document.getElementById('gallery-search'),
  clearSearchBtn: document.getElementById('clear-search'),
  filterButtons: document.querySelectorAll('.filter-btn'),
  favCountBadge: document.getElementById('count-fav'),
  
  // Category counts
  countAll: document.getElementById('count-all'),
  countNature: document.getElementById('count-nature'),
  countArchitecture: document.getElementById('count-architecture'),
  countPortraits: document.getElementById('count-portraits'),
  countTravel: document.getElementById('count-travel'),

  // Lightbox
  lightbox: document.getElementById('lightbox'),
  lightboxBackdrop: document.getElementById('lightbox-backdrop'),
  lightboxShell: document.getElementById('lightbox-shell'),
  lightboxImg: document.getElementById('lb-image'),
  lightboxLoader: document.getElementById('lb-loader'),
  lightboxCurrent: document.getElementById('lb-current'),
  lightboxTotal: document.getElementById('lb-total'),
  lightboxCategory: document.getElementById('lb-category'),
  lightboxTitle: document.getElementById('lb-title'),
  lightboxCaption: document.getElementById('lb-caption'),
  lightboxArtist: document.getElementById('lb-artist'),
  lightboxFavBtn: document.getElementById('lb-fav-btn'),
  lightboxCloseBtn: document.getElementById('lb-close-btn'),
  lightboxPrevBtn: document.getElementById('lb-prev-btn'),
  lightboxNextBtn: document.getElementById('lb-next-btn'),

  // Utilities
  scrollTopBtn: document.getElementById('scroll-top-btn'),
  toastContainer: document.getElementById('toast-container'),
  currentYearSpan: document.getElementById('current-year'),
  footerFilterLinks: document.querySelectorAll('.footer-cat-link')
};

// -----------------------------------------------------------------------------
// 4. STORAGE & INITIALIZATION
// -----------------------------------------------------------------------------
function loadFavourites() {
  try {
    const stored = localStorage.getItem('lumora_favourites');
    if (stored) {
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed)) {
        state.favourites = new Set(parsed);
      }
    }
  } catch (err) {
    console.warn('Could not read favourites from localStorage:', err);
    state.favourites = new Set();
  }
}

function saveFavourites() {
  try {
    localStorage.setItem('lumora_favourites', JSON.stringify([...state.favourites]));
  } catch (err) {
    console.warn('Could not save favourites to localStorage:', err);
  }
}

function updateFavBadges() {
  const count = state.favourites.size;
  if (DOM.navFavCount) DOM.navFavCount.textContent = count;
  if (DOM.favCountBadge) DOM.favCountBadge.textContent = count;
}

// -----------------------------------------------------------------------------
// 5. RENDERING THE GALLERY
// -----------------------------------------------------------------------------
function formatIndex(index) {
  const num = index + 1;
  return num < 10 ? `0${num}` : `${num}`;
}

function renderGallery(items) {
  DOM.galleryGrid.innerHTML = '';

  if (items.length === 0) {
    DOM.emptyState.hidden = false;
    DOM.galleryGrid.style.display = 'none';
    DOM.statusText.textContent = `Showing 0 photos`;
    DOM.resetFiltersBtn.hidden = false;
    return;
  }

  DOM.emptyState.hidden = true;
  DOM.galleryGrid.style.display = 'grid';

  // Construct status bar message in simple English
  let statusMsg = `Showing ${items.length} ${items.length === 1 ? 'photo' : 'photos'}`;
  if (state.activeCategory === 'favourites') {
    statusMsg += ' in Saved Favourites';
  } else if (state.activeCategory !== 'all') {
    const catName = state.activeCategory.charAt(0).toUpperCase() + state.activeCategory.slice(1);
    statusMsg += ` in ${catName}`;
  }
  if (state.searchQuery.trim()) {
    statusMsg += ` matching "${state.searchQuery.trim()}"`;
  }
  DOM.statusText.textContent = statusMsg;

  // Show reset filters button if query or non-all filter active
  DOM.resetFiltersBtn.hidden = (state.activeCategory === 'all' && !state.searchQuery.trim());

  // Render cards
  const fragment = document.createDocumentFragment();

  items.forEach((item, index) => {
    const card = document.createElement('article');
    card.className = `gallery-card ${item.gridSpan} reveal-on-scroll`;
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', `View photo: ${item.title} by ${item.photographer}`);
    card.dataset.id = item.id;
    card.dataset.index = index;

    const isFav = state.favourites.has(item.id);

    card.innerHTML = `
      <div class="card-media">
        <span class="card-category-tag">${item.categoryLabel}</span>
        <button 
          type="button" 
          class="card-fav-btn ${isFav ? 'is-fav' : ''}" 
          data-fav-id="${item.id}"
          aria-label="${isFav ? 'Remove from saved favourites' : 'Save to favourites'}"
          title="${isFav ? 'Remove from favourites' : 'Save to favourites'}"
        >
          <svg viewBox="0 0 24 24" fill="${isFav ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </button>

        <img 
          src="${item.thumbnail}" 
          alt="${item.alt}" 
          class="card-img" 
          loading="lazy" 
          decoding="async"
        >

        <div class="card-overlay">
          <span class="card-index">// PHOTO ${formatIndex(index)}</span>
          <h3 class="card-title">${item.title}</h3>
          <p class="card-caption">${item.caption}</p>
          <div class="card-meta-bottom">
            <span class="card-author">Photo by <span class="card-author-name">${item.photographer}</span></span>
            <span class="card-action-cue" aria-hidden="true">View Photo →</span>
          </div>
        </div>
      </div>
    `;

    // Graceful image load error handling
    const imgEl = card.querySelector('.card-img');
    imgEl.addEventListener('error', function() {
      handleImageError(this, item);
    });

    // Favourite button click
    const favBtn = card.querySelector('.card-fav-btn');
    favBtn.addEventListener('click', (e) => {
      e.stopPropagation(); // prevent card opening lightbox
      toggleFavourite(item.id);
    });

    // Open lightbox on click or Enter / Space keypress
    card.addEventListener('click', () => {
      openLightbox(index);
    });

    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openLightbox(index);
      }
    });

    fragment.appendChild(card);
  });

  DOM.galleryGrid.appendChild(fragment);

  // Trigger reveal animation for newly injected cards
  observeRevealElements();
}

function handleImageError(imgEl, item) {
  const mediaContainer = imgEl.parentElement;
  if (!mediaContainer) return;
  
  imgEl.style.display = 'none';
  const fallback = document.createElement('div');
  fallback.className = 'card-fallback';
  fallback.innerHTML = `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
      <circle cx="8.5" cy="8.5" r="1.5"></circle>
      <polyline points="21 15 16 10 5 21"></polyline>
    </svg>
    <span>${item.title}</span>
    <small style="font-size: 0.7rem; color: var(--text-tertiary); margin-top: 4px;">Image preview unavailable</small>
  `;
  mediaContainer.appendChild(fallback);
}

// -----------------------------------------------------------------------------
// 6. FILTERING & SEARCH ENGINE
// -----------------------------------------------------------------------------
function filterGallery(animate = true) {
  if (animate) {
    DOM.galleryGrid.classList.add('filtering');
  }

  const query = state.searchQuery.trim().toLowerCase();

  state.visibleItems = GALLERY_ITEMS.filter(item => {
    // 1. Category check
    let categoryMatches = false;
    if (state.activeCategory === 'all') {
      categoryMatches = true;
    } else if (state.activeCategory === 'favourites') {
      categoryMatches = state.favourites.has(item.id);
    } else {
      categoryMatches = (item.category === state.activeCategory);
    }

    if (!categoryMatches) return false;

    // 2. Search check (title, category, caption, photographer)
    if (!query) return true;

    return (
      item.title.toLowerCase().includes(query) ||
      item.categoryLabel.toLowerCase().includes(query) ||
      item.caption.toLowerCase().includes(query) ||
      item.photographer.toLowerCase().includes(query)
    );
  });

  setTimeout(() => {
    renderGallery(state.visibleItems);
    if (animate) {
      DOM.galleryGrid.classList.remove('filtering');
    }
  }, animate ? 150 : 0);
}

function setActiveCategory(cat) {
  state.activeCategory = cat;

  DOM.filterButtons.forEach(btn => {
    const isTarget = (btn.dataset.category === cat);
    btn.classList.toggle('active', isTarget);
    btn.setAttribute('aria-selected', isTarget ? 'true' : 'false');
  });

  filterGallery();
}

function handleSearch(query) {
  state.searchQuery = query;
  DOM.clearSearchBtn.hidden = !query;
  filterGallery();
}

function resetAllFilters() {
  state.activeCategory = 'all';
  state.searchQuery = '';
  DOM.searchInput.value = '';
  DOM.clearSearchBtn.hidden = true;
  setActiveCategory('all');
}

// -----------------------------------------------------------------------------
// 7. FAVOURITES MANAGEMENT
// -----------------------------------------------------------------------------
function toggleFavourite(id) {
  const item = GALLERY_ITEMS.find(i => i.id === id);
  if (!item) return;

  const isFav = state.favourites.has(id);
  if (isFav) {
    state.favourites.delete(id);
    showToast(`Removed "${item.title}" from favourites`);
  } else {
    state.favourites.add(id);
    showToast(`Added "${item.title}" to favourites`);
  }

  saveFavourites();
  updateFavBadges();

  // If in favourites view, re-filter so it vanishes smoothly
  if (state.activeCategory === 'favourites') {
    filterGallery(true);
  } else {
    // Update active card's fav button in the DOM directly
    const cardFavBtn = DOM.galleryGrid.querySelector(`[data-fav-id="${id}"]`);
    if (cardFavBtn) {
      cardFavBtn.classList.toggle('is-fav', !isFav);
      cardFavBtn.setAttribute('aria-label', !isFav ? 'Remove from saved favourites' : 'Save to favourites');
      const svg = cardFavBtn.querySelector('svg');
      if (svg) svg.setAttribute('fill', !isFav ? 'currentColor' : 'none');
    }
  }

  // Update lightbox favourite button state if open
  updateLightboxFavButton();
}

function updateLightboxFavButton() {
  if (state.visibleItems.length === 0) return;
  const currentItem = state.visibleItems[state.currentLightboxIndex];
  if (!currentItem) return;

  const isFav = state.favourites.has(currentItem.id);
  DOM.lightboxFavBtn.classList.toggle('is-fav', isFav);
  DOM.lightboxFavBtn.setAttribute('aria-label', isFav ? 'Remove from favourites' : 'Add to favourites');
  const svg = DOM.lightboxFavBtn.querySelector('svg');
  if (svg) svg.setAttribute('fill', isFav ? 'currentColor' : 'none');
}

// -----------------------------------------------------------------------------
// 8. FULL-SCREEN LIGHTBOX ENGINE
// -----------------------------------------------------------------------------
let previousFocusedElement = null;

function openLightbox(index) {
  if (!state.visibleItems || state.visibleItems.length === 0) return;

  previousFocusedElement = document.activeElement;
  state.currentLightboxIndex = Math.max(0, Math.min(index, state.visibleItems.length - 1));

  DOM.lightbox.hidden = false;
  // Trigger reflow for CSS opacity transition
  void DOM.lightbox.offsetWidth;
  DOM.lightbox.classList.add('active');

  // Prevent background scroll
  document.body.style.overflow = 'hidden';

  loadLightboxSlide(state.currentLightboxIndex);

  // Focus trap / initial focus on close button
  setTimeout(() => {
    DOM.lightboxCloseBtn.focus();
  }, 100);
}

function closeLightbox() {
  DOM.lightbox.classList.remove('active');
  document.body.style.overflow = '';

  setTimeout(() => {
    DOM.lightbox.hidden = true;
    DOM.lightboxImg.src = '';
    DOM.lightboxImg.classList.remove('loaded');
    if (previousFocusedElement && typeof previousFocusedElement.focus === 'function') {
      previousFocusedElement.focus();
    }
  }, 300);
}

function loadLightboxSlide(index) {
  const item = state.visibleItems[index];
  if (!item) return;

  // Indicators
  DOM.lightboxCurrent.textContent = formatIndex(index);
  DOM.lightboxTotal.textContent = formatIndex(state.visibleItems.length - 1);

  // Content
  DOM.lightboxCategory.textContent = item.categoryLabel;
  DOM.lightboxTitle.textContent = item.title;
  DOM.lightboxCaption.textContent = item.caption;
  DOM.lightboxArtist.textContent = item.photographer;
  DOM.lightboxImg.alt = item.alt;

  // Preloader & Image transition
  DOM.lightboxLoader.classList.add('active');
  DOM.lightboxImg.classList.remove('loaded');

  const highResImg = new Image();
  highResImg.src = item.image;

  highResImg.onload = () => {
    DOM.lightboxImg.src = item.image;
    DOM.lightboxImg.classList.add('loaded');
    DOM.lightboxLoader.classList.remove('active');
  };

  highResImg.onerror = () => {
    // Fallback to thumbnail if high-res fails
    DOM.lightboxImg.src = item.thumbnail;
    DOM.lightboxImg.classList.add('loaded');
    DOM.lightboxLoader.classList.remove('active');
  };

  updateLightboxFavButton();
}

function nextLightboxSlide() {
  if (state.visibleItems.length <= 1) return;
  state.currentLightboxIndex = (state.currentLightboxIndex + 1) % state.visibleItems.length;
  loadLightboxSlide(state.currentLightboxIndex);
}

function prevLightboxSlide() {
  if (state.visibleItems.length <= 1) return;
  state.currentLightboxIndex = (state.currentLightboxIndex - 1 + state.visibleItems.length) % state.visibleItems.length;
  loadLightboxSlide(state.currentLightboxIndex);
}

// -----------------------------------------------------------------------------
// 9. TOAST NOTIFICATIONS & TO-TOP
// -----------------------------------------------------------------------------
function showToast(message) {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <span class="toast-dot" aria-hidden="true"></span>
    <span>${message}</span>
  `;

  DOM.toastContainer.appendChild(toast);

  // Animate in
  requestAnimationFrame(() => {
    toast.classList.add('visible');
  });

  // Remove after 3.2s
  setTimeout(() => {
    toast.classList.remove('visible');
    setTimeout(() => {
      toast.remove();
    }, 350);
  }, 3200);
}

function handleScroll() {
  const scrollY = window.scrollY || document.documentElement.scrollTop;

  // Header blur depth
  if (scrollY > 50) {
    DOM.header.classList.add('scrolled');
  } else {
    DOM.header.classList.remove('scrolled');
  }

  // Scroll to top button visibility
  if (scrollY > 500) {
    DOM.scrollTopBtn.hidden = false;
  } else {
    DOM.scrollTopBtn.hidden = true;
  }
}

// -----------------------------------------------------------------------------
// 10. INTERSECTION OBSERVER FOR REVEAL ANIMATIONS
// -----------------------------------------------------------------------------
let scrollObserver;

function observeRevealElements() {
  if (!('IntersectionObserver' in window)) {
    // Fallback: reveal all
    document.querySelectorAll('.reveal-on-scroll').forEach(el => el.classList.add('revealed'));
    return;
  }

  if (scrollObserver) {
    scrollObserver.disconnect();
  }

  scrollObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  document.querySelectorAll('.reveal-on-scroll:not(.revealed)').forEach(el => {
    scrollObserver.observe(el);
  });
}

// -----------------------------------------------------------------------------
// 11. EVENT LISTENERS SETUP
// -----------------------------------------------------------------------------
function setupEventListeners() {
  // Window Scroll
  window.addEventListener('scroll', handleScroll, { passive: true });

  // Scroll to Top
  DOM.scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Header Saved Favourites Quick Filter Button
  DOM.navFavBtn.addEventListener('click', () => {
    setActiveCategory('favourites');
    const gallerySection = document.getElementById('gallery');
    if (gallerySection) {
      gallerySection.scrollIntoView({ behavior: 'smooth' });
    }
  });

  // Mobile Drawer Toggle
  DOM.mobileToggle.addEventListener('click', () => {
    const isExpanded = DOM.mobileToggle.getAttribute('aria-expanded') === 'true';
    DOM.mobileToggle.setAttribute('aria-expanded', !isExpanded);
    DOM.mobileDrawer.classList.toggle('active', !isExpanded);
    DOM.mobileDrawer.setAttribute('aria-hidden', isExpanded ? 'true' : 'false');
  });

  DOM.mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      DOM.mobileToggle.setAttribute('aria-expanded', 'false');
      DOM.mobileDrawer.classList.remove('active');
      DOM.mobileDrawer.setAttribute('aria-hidden', 'true');
    });
  });

  // Search Input Events
  DOM.searchInput.addEventListener('input', (e) => {
    handleSearch(e.target.value);
  });

  DOM.clearSearchBtn.addEventListener('click', () => {
    DOM.searchInput.value = '';
    handleSearch('');
    DOM.searchInput.focus();
  });

  // Category Filter Buttons
  DOM.filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const cat = btn.dataset.category;
      setActiveCategory(cat);
    });
  });

  // Reset Filters links
  DOM.resetFiltersBtn.addEventListener('click', resetAllFilters);
  DOM.emptyResetBtn.addEventListener('click', resetAllFilters);

  // Footer Category Quick Filters
  DOM.footerFilterLinks.forEach(link => {
    link.addEventListener('click', () => {
      const targetCat = link.dataset.filter;
      setActiveCategory(targetCat);
      const gallerySection = document.getElementById('gallery');
      if (gallerySection) {
        gallerySection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Lightbox Navigation & Action Controls
  DOM.lightboxCloseBtn.addEventListener('click', closeLightbox);
  DOM.lightboxBackdrop.addEventListener('click', closeLightbox);
  DOM.lightboxNextBtn.addEventListener('click', nextLightboxSlide);
  DOM.lightboxPrevBtn.addEventListener('click', prevLightboxSlide);

  DOM.lightboxFavBtn.addEventListener('click', () => {
    if (state.visibleItems.length === 0) return;
    const currentItem = state.visibleItems[state.currentLightboxIndex];
    if (currentItem) {
      toggleFavourite(currentItem.id);
    }
  });

  // Prevent clicks inside lightbox shell from closing backdrop
  DOM.lightboxShell.addEventListener('click', (e) => {
    e.stopPropagation();
  });

  // Global Keyboard Navigation (Escape, Arrow Keys)
  window.addEventListener('keydown', (e) => {
    if (!DOM.lightbox.classList.contains('active')) return;

    if (e.key === 'Escape') {
      closeLightbox();
    } else if (e.key === 'ArrowRight') {
      nextLightboxSlide();
    } else if (e.key === 'ArrowLeft') {
      prevLightboxSlide();
    }
  });

  // Touch swipe support for mobile lightbox
  let touchStartX = 0;
  let touchEndX = 0;

  DOM.lightboxShell.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  DOM.lightboxShell.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleLightboxSwipe();
  }, { passive: true });

  function handleLightboxSwipe() {
    const diff = touchEndX - touchStartX;
    if (Math.abs(diff) > 45) {
      if (diff < 0) {
        nextLightboxSlide(); // Swiped left -> next
      } else {
        prevLightboxSlide(); // Swiped right -> prev
      }
    }
  }
}

// -----------------------------------------------------------------------------
// 12. INITIALIZATION ROUTINE
// -----------------------------------------------------------------------------
function initApp() {
  // 1. Dynamic copyright year
  if (DOM.currentYearSpan) {
    DOM.currentYearSpan.textContent = new Date().getFullYear();
  }

  // 2. Load favourites from LocalStorage
  loadFavourites();
  updateFavBadges();

  // 3. Set up event handlers
  setupEventListeners();

  // 4. Initial Gallery Render
  filterGallery(false);

  // 5. Scroll cue & Intersection Observer
  observeRevealElements();

  // 6. Initial check for scroll
  handleScroll();
}

// Kick off when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
