/* =========================================================================
   DATA MENU — FOODVERSE
   -------------------------------------------------------------------------
   Edit array di bawah ini untuk mengganti isi menu.
   category harus salah satu dari: "berat", "minuman", "dessert", "snack"
   (dipakai oleh filter kategori di js/main.js)
   image bisa diisi link internet, atau taruh file di folder assets lalu
   tulis contoh: "assets/nasi-goreng.jpg"
   ========================================================================= */

const MENU = [
  {
    id: 1,
    name: "Nasi Goreng Nebula",
    category: "berat",
    desc: "Nasi goreng bumbu rempah dengan telur mata sapi & abon pedas.",
    price: 28000,
    rating: 4.8,
    tag: "🔥 Best Seller",
    image: "https://placehold.co/500x400/271c15/ffb627?text=Nasi+Goreng"
  },
  {
    id: 2,
    name: "Rendang Galaksi",
    category: "berat",
    desc: "Daging sapi empuk dimasak santan & rempah khas selama 6 jam.",
    price: 35000,
    rating: 4.9,
    tag: "🔥 Best Seller",
    image: "https://placehold.co/500x400/271c15/ff4d3d?text=Rendang"
  },
  {
    id: 3,
    name: "Ayam Geprek Komet",
    category: "berat",
    desc: "Ayam crispy digeprek sambal bawang level pedas pilihanmu.",
    price: 22000,
    rating: 4.7,
    tag: "🌶️ Pedas",
    image: "https://placehold.co/500x400/271c15/ffb627?text=Ayam+Geprek"
  },
  {
    id: 4,
    name: "Soto Betawi Orbit",
    category: "berat",
    desc: "Kuah santan gurih dengan potongan daging & jeroan pilihan.",
    price: 27000,
    rating: 4.6,
    tag: "",
    image: "https://placehold.co/500x400/271c15/ff4d3d?text=Soto+Betawi"
  },
  {
    id: 5,
    name: "Es Kopi Blackhole",
    category: "minuman",
    desc: "Kopi susu gula aren dengan es krim vanila di atasnya.",
    price: 18000,
    rating: 4.8,
    tag: "🔥 Best Seller",
    image: "https://placehold.co/500x400/271c15/ffb627?text=Es+Kopi"
  },
  {
    id: 6,
    name: "Teh Tarik Meteor",
    category: "minuman",
    desc: "Teh tarik klasik dengan buih lembut khas kedai.",
    price: 12000,
    rating: 4.5,
    tag: "",
    image: "https://placehold.co/500x400/271c15/ff4d3d?text=Teh+Tarik"
  },
  {
    id: 7,
    name: "Jus Alpukat Andromeda",
    category: "minuman",
    desc: "Alpukat segar diblender dengan susu kental & coklat.",
    price: 16000,
    rating: 4.7,
    tag: "🌱 Segar",
    image: "https://placehold.co/500x400/271c15/6fae6c?text=Jus+Alpukat"
  },
  {
    id: 8,
    name: "Mojito Stardust",
    category: "minuman",
    desc: "Perpaduan jeruk nipis, daun mint, dan soda dingin menyegarkan.",
    price: 17000,
    rating: 4.6,
    tag: "🌱 Segar",
    image: "https://placehold.co/500x400/271c15/6fae6c?text=Mojito"
  },
  {
    id: 9,
    name: "Es Krim Supernova",
    category: "dessert",
    desc: "Es krim vanila dengan topping choco chip & saus karamel meletup.",
    price: 20000,
    rating: 4.9,
    tag: "🔥 Best Seller",
    image: "https://placehold.co/500x400/271c15/ffb627?text=Es+Krim"
  },
  {
    id: 10,
    name: "Puding Gerhana",
    category: "dessert",
    desc: "Puding coklat lembut dengan lapisan vla vanila di atasnya.",
    price: 15000,
    rating: 4.5,
    tag: "",
    image: "https://placehold.co/500x400/271c15/ff4d3d?text=Puding"
  },
  {
    id: 11,
    name: "Brownies Konstelasi",
    category: "dessert",
    desc: "Brownies fudgy dengan taburan kacang almond panggang.",
    price: 19000,
    rating: 4.7,
    tag: "",
    image: "https://placehold.co/500x400/271c15/ffb627?text=Brownies"
  },
  {
    id: 12,
    name: "Cireng Asteroid",
    category: "snack",
    desc: "Cireng kriuk isi ayam suwir dengan sambal rujak pedas manis.",
    price: 13000,
    rating: 4.6,
    tag: "🌶️ Pedas",
    image: "https://placehold.co/500x400/271c15/ff4d3d?text=Cireng"
  },
  {
    id: 13,
    name: "Tahu Kres Satelit",
    category: "snack",
    desc: "Tahu kriuk renyah disajikan dengan saus kacang gurih.",
    price: 11000,
    rating: 4.4,
    tag: "🌱 Vegetarian",
    image: "https://placehold.co/500x400/271c15/6fae6c?text=Tahu+Kres"
  },
  {
    id: 14,
    name: "Pisang Nugget Galaxy",
    category: "snack",
    desc: "Nugget pisang crispy dengan taburan coklat & keju parut.",
    price: 14000,
    rating: 4.8,
    tag: "🔥 Best Seller",
    image: "https://placehold.co/500x400/271c15/ffb627?text=Pisang+Nugget"
  },
  {
    id: 15,
    name: "Kentang Goreng Cosmic",
    category: "snack",
    desc: "Kentang goreng renyah dengan bumbu tabur pedas gurih.",
    price: 15000,
    rating: 4.5,
    tag: "🌶️ Pedas",
    image: "https://placehold.co/500x400/271c15/ff4d3d?text=Kentang+Goreng"
  },
  {
    id: 16,
    name: "Sate Ayam Solar",
    category: "berat",
    desc: "Sate ayam bakar bumbu kacang dengan lontong hangat.",
    price: 24000,
    rating: 4.7,
    tag: "",
    image: "https://placehold.co/500x400/271c15/ffb627?text=Sate+Ayam"
  }
];
