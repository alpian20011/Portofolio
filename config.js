/* ==========================================================
   config.js — semua isi website diatur dari sini.
   Simpan, lalu restart server (Vercel: deploy ulang).
   ========================================================== */
module.exports = {
  siteUrl: "", // contoh: "https://alpiansyah.vercel.app"
  name: "Alpiansyah",
  role: "Developer & Pembuat Website",
  tagline:
    "Saya suka mencoba hal baru dan membangun produk digital lewat kode. Beberapa hasilnya bisa Anda lihat di bagian project.",
  photo: "/image/profil.jpg",

  about: {
    birthplace: "Tamiang Layang, Barito Timur, Kalimantan Tengah",
    residence: "Loktabat Utara, Banjarbaru, Kalimantan Selatan",
    hobbies: ["Mencoba hal baru", "Coding", "Nongkrong"],
    education: [
      { level: "SD", school: "" }, // isi "school" jika ingin menampilkan nama sekolah
      { level: "SMP", school: "" },
      { level: "SMA", school: "" }
    ]
  },

  languages: [
    { name: "Indonesia", code: "ID" },
    { name: "Inggris", code: "EN" },
    { name: "Belanda", code: "NL" },
    { name: "Mandarin", code: "中" }
  ],

  // Logo resmi dari Devicon (CDN). Bisa diganti file lokal, mis. "/image/js.svg"
  skills: [
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/javascript/javascript-original.svg" },
    { name: "Dart",       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/dart/dart-original.svg" },
    { name: "Python",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/python/python-original.svg" },
    { name: "PHP",        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/php/php-original.svg" }
  ],

  // "url" kosong = tombol nonaktif ("Segera hadir"). Isi dengan URL asli project.
  projects: [
    { name: "SyahPay",      logo: "/image/syahpay.jpg",     url: "https://syahpay.biz.id", description: "Layanan pembayaran digital yang praktis dan mudah digunakan." },
    { name: "Syahpedia",    logo: "/image/syahpedia.jpg",   url: "https://syahpedia.my.id", description: "Platform layanan digital dalam satu tempat." },
    { name: "Syah Shop",    logo: "/image/syahshop.jpg",    url: "https://toko.syah.biz.id", description: "Toko online untuk berbagai kebutuhan digital." },
    { name: "Syah Topup",   logo: "/image/syahtopup.jpg",   url: "https://syah-topup.my.ud", description: "Top up game dan layanan digital dengan proses cepat." },
    { name: "Syah Premium", logo: "/image/syahpremium.jpg", url: "https://myprem.syah.biz.id", description: "Layanan akun premium aplikasi dan hiburan." }
  ],

  // Contoh: { type: "email", label: "Email", value: "nama@domain.com", url: "mailto:nama@domain.com" }
  contacts: [{ type: "email", label: "Email", valu: "alpincodeid@gmail.com", url: "mailto:alpincodeid@gmail.com" }]
};
