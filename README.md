# 🪐 Foodverse — Jelajah Kuliner Digital

Website front-end interaktif untuk menjelajahi menu kuliner, dengan filter kategori, pencarian, animasi hover, dan sistem favorit. Dibangun murni dengan **HTML, CSS, dan JavaScript** (tanpa framework/backend) — siap di-deploy ke GitHub Pages.

## ✨ Fitur

- Hero dengan animasi **orbit makanan** (representasi visual "universe" kuliner)
- Filter kategori (Semua / Makanan Berat / Minuman / Dessert / Snack) dengan indikator pill yang meluncur mulus
- Pencarian menu secara real-time
- Kartu menu dengan animasi hover (zoom gambar, overlay deskripsi)
- Tombol favorit (❤) tersimpan otomatis di browser (localStorage)
- Sepenuhnya responsif untuk mobile

## 📁 Struktur Folder

```
foodverse/
├── index.html          # halaman utama
├── css/
│   └── style.css        # semua styling & animasi
├── js/
│   └── main.js           # render menu, filter, search, favorit
├── data/
│   └── menu.js            # data menu (edit di sini!)
└── assets/                # taruh gambar menu kamu sendiri di sini
```

## 🚀 Cara Menjalankan

Cukup buka `index.html` di browser — tidak perlu instalasi atau build tool apa pun.

## 🍜 Cara Menambah / Mengedit Menu

Buka `data/menu.js`, lalu tambah atau ubah objek di dalam array `MENU`:

```js
{
  id: 17,
  name: "Nama Menu",
  category: "berat", // salah satu: "berat" | "minuman" | "dessert" | "snack"
  desc: "Deskripsi singkat menu.",
  price: 25000,
  rating: 4.7,
  tag: "🔥 Best Seller", // boleh dikosongkan: ""
  image: "assets/nama-file.jpg" // atau link gambar dari internet
}
```

Simpan file, lalu refresh browser — kartu menu baru otomatis muncul dan langsung ikut ke sistem filter/pencarian.

## 🌐 Deploy ke GitHub Pages

1. Push folder ini ke repository GitHub kamu.
2. Buka **Settings → Pages** di repo tersebut.
3. Pilih branch `main` dan folder `/ (root)`, lalu **Save**.
4. Tunggu beberapa menit, situs akan aktif di `https://<username>.github.io/<nama-repo>/`.

## 🛠️ Teknologi

- HTML5
- CSS3 (custom properties, grid, animasi)
- JavaScript murni (vanilla JS, tanpa dependency)
- [Font Awesome](https://fontawesome.com/) untuk ikon
- Google Fonts: Baloo 2, Plus Jakarta Sans, Space Mono

---

Dibuat dengan 🍽️ untuk Foodverse.
