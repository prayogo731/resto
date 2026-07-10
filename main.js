/* =========================================================================
   MAIN.JS — FOODVERSE
   -------------------------------------------------------------------------
   - Render kartu menu dari data/menu.js
   - Filter kategori dengan indikator pill yang meluncur
   - Pencarian nama menu secara langsung
   - Tombol favorit (tersimpan di localStorage browser)
   - Scroll reveal & burger menu mobile
   ========================================================================= */

// ---- Burger menu (mobile) ----
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');
burger.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach((a) =>
  a.addEventListener('click', () => navLinks.classList.remove('open'))
);

// ---- State ----
let activeCategory = 'semua';
let searchTerm = '';
let favorites = JSON.parse(localStorage.getItem('foodverse-favorites') || '[]');

function formatPrice(num) {
  return 'Rp ' + num.toLocaleString('id-ID');
}

// ---- Render kartu menu ----
const grid = document.getElementById('menuGrid');
const emptyState = document.getElementById('emptyState');

function renderMenu() {
  if (typeof MENU === 'undefined') return;

  const filtered = MENU.filter((item) => {
    const matchCategory = activeCategory === 'semua' || item.category === activeCategory;
    const matchSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  grid.innerHTML = filtered
    .map((item) => {
      const isFav = favorites.includes(item.id);
      return `
      <div class="menu-card reveal in" data-category="${item.category}">
        <div class="card-media">
          <img src="${item.image}" alt="${item.name}" loading="lazy">
          ${item.tag ? `<span class="card-tag">${item.tag}</span>` : ''}
          <button class="fav-btn ${isFav ? 'active' : ''}" data-id="${item.id}" aria-label="Simpan ke favorit">
            <i class="fa-solid fa-heart"></i>
          </button>
          <div class="card-overlay"><p>${item.desc}</p></div>
        </div>
        <div class="card-body">
          <div class="card-top">
            <h3>${item.name}</h3>
            <span class="rating"><i class="fa-solid fa-star"></i> ${item.rating}</span>
          </div>
          <div class="card-bottom">
            <span class="price">${formatPrice(item.price)}</span>
            <button class="add-btn" aria-label="Tambah ke keranjang"><i class="fa-solid fa-plus"></i></button>
          </div>
        </div>
      </div>`;
    })
    .join('');

  emptyState.classList.toggle('show', filtered.length === 0);

  // pasang ulang event listener tombol favorit tiap render
  grid.querySelectorAll('.fav-btn').forEach((btn) => {
    btn.addEventListener('click', () => toggleFavorite(+btn.dataset.id));
  });
}

function toggleFavorite(id) {
  if (favorites.includes(id)) {
    favorites = favorites.filter((f) => f !== id);
  } else {
    favorites.push(id);
  }
  localStorage.setItem('foodverse-favorites', JSON.stringify(favorites));
  renderMenu();
}

// ---- Filter kategori dengan indikator pill ----
const pills = document.querySelectorAll('.pill');
const indicator = document.getElementById('pillIndicator');

function movePillIndicator(el) {
  indicator.style.width = el.offsetWidth + 'px';
  indicator.style.left = el.offsetLeft + 'px';
}

pills.forEach((pill) => {
  pill.addEventListener('click', () => {
    pills.forEach((p) => p.classList.remove('active'));
    pill.classList.add('active');
    movePillIndicator(pill);
    activeCategory = pill.dataset.category;
    renderMenu();
  });
});

// posisi indikator awal (setelah font selesai load biar lebar akurat)
window.addEventListener('load', () => {
  const activePill = document.querySelector('.pill.active');
  if (activePill) movePillIndicator(activePill);
});
window.addEventListener('resize', () => {
  const activePill = document.querySelector('.pill.active');
  if (activePill) movePillIndicator(activePill);
});

// ---- Pencarian ----
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', (e) => {
  searchTerm = e.target.value;
  renderMenu();
});

// ---- Scroll reveal (untuk section selain kartu menu) ----
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) e.target.classList.add('in');
    });
  },
  { threshold: 0.15 }
);
revealEls.forEach((el) => io.observe(el));

// ---- Header shadow saat scroll ----
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
  header.style.boxShadow = window.scrollY > 30 ? '0 6px 22px rgba(0,0,0,.35)' : 'none';
});

// ---- Init ----
renderMenu();
