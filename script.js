/* =========================================================
   DAILY TRACING TRASH
   SCRIPT UTAMA
   ========================================================= */

/*
  Jika website sudah online, QR otomatis menggunakan alamat
  halaman website saat ini.

  Contoh:
  https://namasitusmu.com/index.html?produk=botol

  Jika website dibuka melalui file lokal, QR sementara memakai
  alamat demo. Setelah website online, QR akan otomatis berubah
  mengikuti alamat website.
*/

const products = [

  {
    id: "botol",
    name: "Botol Plastik",
    category: "PET BOTTLE • #1 PET",
    subtitle: "Perjalanan botol minuman sekali pakai",
    image: "botol.jpg",

    description:
      "Botol minuman plastik umumnya menggunakan PET (polyethylene terephthalate), sebuah polimer yang banyak digunakan untuk kemasan minuman.",

    expert:
      "UNEP menjelaskan bahwa siklus hidup plastik mencakup pengambilan bahan baku, pengubahan menjadi produk, penggunaan, hingga pembuangan. Untuk plastik berbasis fosil, perjalanan tersebut umumnya dimulai dari minyak dan gas yang diekstraksi dari bumi kemudian diproses menjadi bahan pembentuk polimer.",

    source:
      "United Nations Environment Programme (UNEP) — A life-cycle approach to plastic pollution",

    sourceUrl:
      "https://www.unep.org/news-and-stories/story/what-life-cycle-approach-and-how-can-it-help-tackle-plastic-pollution",

    steps: [

      {
        title: "Bahan baku",
        text:
          "Sebagian besar plastik konvensional dibuat dari bahan baku yang berasal dari minyak dan gas. Bahan baku tersebut diproses di fasilitas industri menjadi bahan kimia yang kemudian dapat digunakan untuk membentuk polimer."
      },

      {
        title: "Pembentukan PET",
        text:
          "Untuk botol minuman PET, bahan polimer diproses menjadi bentuk awal yang kemudian dapat dipanaskan dan dibentuk menjadi botol menggunakan proses industri seperti blow molding."
      },

      {
        title: "Pengisian produk",
        text:
          "Botol yang telah terbentuk masuk ke fasilitas pengisian. Minuman dimasukkan, botol ditutup, diberi label, kemudian dikemas untuk distribusi."
      },

      {
        title: "Distribusi menuju toko",
        text:
          "Produk bergerak melalui jaringan distribusi dari fasilitas produksi menuju gudang, distributor, toko, minimarket, supermarket, kantin, atau tempat penjualan lainnya."
      },

      {
        title: "Digunakan manusia",
        text:
          "Konsumen membeli dan menggunakan minuman. Setelah isi produk habis, fungsi utama botol sebagai kemasan biasanya selesai."
      },

      {
        title: "Menjadi sampah",
        text:
          "Botol kemudian dapat dikumpulkan untuk didaur ulang atau masuk ke aliran sampah. EPA mencatat bahwa botol PET termasuk kategori kemasan plastik yang dapat dikumpulkan dan didaur ulang, tetapi tingkat pengelolaannya bergantung pada sistem pengumpulan dan pemilahan yang tersedia."
      }

    ]
  },

  {
    id: "cup",
    name: "Cup Plastik",
    category: "PLASTIC CUP • PP / PS / PET",
    subtitle: "Dari resin plastik menjadi wadah minuman",
    image: "cup.jpg",

    description:
      "Cup plastik tidak selalu dibuat dari satu jenis resin. Jenisnya dapat berbeda, termasuk PP, PET, atau polystyrene, tergantung desain dan fungsi produknya.",

    expert:
      "EPA menjelaskan bahwa produk cup plastik dapat dibuat dari berbagai jenis resin. Perbedaan bahan tersebut penting karena setiap jenis plastik memiliki karakteristik dan jalur pengelolaan yang berbeda.",

    source:
      "U.S. Environmental Protection Agency (EPA) — Nondurable Goods: Plastic Plates and Cups",

    sourceUrl:
      "https://www.epa.gov/facts-and-figures-about-materials-waste-and-recycling/nondurable-goods-product-specific-data",

    steps: [

      {
        title: "Memilih jenis resin",
        text:
          "Produsen memilih resin sesuai kebutuhan produk. Beberapa cup dapat menggunakan polypropylene (PP), PET, atau polystyrene. Resin yang berbeda mempunyai sifat mekanis dan karakteristik pemrosesan yang berbeda."
      },

      {
        title: "Produksi lembar atau bentuk awal",
        text:
          "Resin plastik dipanaskan dan diproses menjadi bentuk yang dapat digunakan untuk membuat cup. Pada proses tertentu, plastik dapat dibuat menjadi lembaran sebelum dibentuk menjadi wadah."
      },

      {
        title: "Pembentukan cup",
        text:
          "Material kemudian dibentuk menggunakan teknologi industri seperti thermoforming atau metode pencetakan lain sesuai jenis plastik dan desain cup."
      },

      {
        title: "Distribusi",
        text:
          "Cup dikemas dan dikirim ke distributor, toko, restoran, kantin, kedai minuman, sekolah, atau tempat lain yang menjual dan menyajikan minuman."
      },

      {
        title: "Digunakan",
        text:
          "Cup digunakan sebagai wadah minuman. Pada banyak penggunaan sekali pakai, masa penggunaan cup relatif singkat dibandingkan keseluruhan perjalanan produksinya."
      },

      {
        title: "Setelah digunakan",
        text:
          "Cup perlu dipilah berdasarkan materialnya. EPA mencatat bahwa beberapa jenis cup plastik tidak mudah dipisahkan satu sama lain karena karakteristik materialnya berbeda."
      }

    ]
  },

  {
    id: "snack",
    name: "Kemasan Snack",
    category: "FLEXIBLE PACKAGING",
    subtitle: "Kemasan ringan dengan struktur material berlapis",
    image: "snack.jpg",

    description:
      "Kemasan snack dapat menggunakan struktur fleksibel dan, pada beberapa produk, terdiri dari beberapa lapisan material untuk memberikan perlindungan terhadap makanan.",

    expert:
      "FDA menjelaskan bahwa kantong snack dapat dibuat dari berbagai material plastik dan pada beberapa kasus menggunakan struktur berlapis. Contohnya dapat mencakup PET, polypropylene berlapis aluminium, HDPE, dan LLDPE.",

    source:
      "U.S. Food and Drug Administration (FDA) — Snack Safely",

    sourceUrl:
      "https://www.fda.gov/animal-veterinary/animal-health-literacy/snack-safely-keep-your-pets-safe-snack-bag-suffocation",

    steps: [

      {
        title: "Pemilihan material",
        text:
          "Kemasan snack membutuhkan material yang ringan dan fleksibel sekaligus mampu melindungi makanan. Karena itu, struktur kemasan dapat menggunakan satu atau beberapa lapisan material."
      },

      {
        title: "Pembuatan film plastik",
        text:
          "Resin diproses menjadi film atau lembaran tipis. Film tersebut kemudian dapat digabungkan dengan material lain sesuai kebutuhan penghalang terhadap udara, kelembapan, cahaya, atau karakteristik produk."
      },

      {
        title: "Pencetakan desain",
        text:
          "Informasi produk seperti nama, merek, komposisi, informasi gizi, dan desain visual dicetak pada struktur kemasan sebelum kemasan dibentuk."
      },

      {
        title: "Pengisian dan penyegelan",
        text:
          "Kemasan dibentuk, diisi dengan makanan, kemudian disegel. Pada proses industri, penyegelan dapat dilakukan menggunakan panas dan tekanan untuk menghasilkan sambungan yang rapat."
      },

      {
        title: "Perjalanan menuju konsumen",
        text:
          "Kemasan snack yang sudah berisi produk masuk ke karton atau kemasan distribusi, kemudian dikirim ke gudang dan toko hingga akhirnya dibeli konsumen."
      },

      {
        title: "Menjadi sampah",
        text:
          "Setelah snack habis, kemasan menjadi material pascakonsumsi. Struktur berlapis dapat membuat proses pemilahan dan daur ulang lebih kompleks dibandingkan material plastik tunggal."
      }

    ]
  },

  {
    id: "kantong",
    name: "Kantong Plastik",
    category: "FLEXIBLE PLASTIC • LDPE / HDPE",
    subtitle: "Kantong ringan yang sering digunakan sehari-hari",
    image: "kantong.jpg",

    description:
      "Kantong plastik dapat dibuat dari polyethylene seperti LDPE atau HDPE, tergantung kebutuhan kekuatan, fleksibilitas, dan fungsi.",

    expert:
      "EPA menjelaskan bahwa LDPE digunakan untuk berbagai produk fleksibel seperti kantong, stretch wrap, shrink wrap, dan beberapa jenis lapisan kemasan. HDPE juga digunakan dalam berbagai produk kemasan.",

    source:
      "U.S. Environmental Protection Agency (EPA) — Sustainable End-of-Life Management of Plastics",

    sourceUrl:
      "https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=P101C0IO.TXT",

    steps: [

      {
        title: "Bahan polietilena",
        text:
          "Bahan dasar polyethylene diproses menjadi resin plastik. Jenis polyethylene yang digunakan dapat berbeda sesuai kebutuhan produk."
      },

      {
        title: "Extrusion",
        text:
          "Resin dipanaskan dan diekstrusi menjadi film plastik tipis. Film tersebut kemudian dapat dipotong dan dibentuk menjadi kantong."
      },

      {
        title: "Pencetakan",
        text:
          "Jika kantong digunakan untuk membawa produk bermerek, permukaannya dapat diberi desain, tulisan, logo, atau informasi produk."
      },

      {
        title: "Distribusi",
        text:
          "Kantong dapat diproduksi dalam jumlah besar lalu dikirim ke toko, pusat distribusi, restoran, pasar, atau bisnis lainnya."
      },

      {
        title: "Penggunaan",
        text:
          "Kantong digunakan untuk membawa atau membungkus barang. Durasi penggunaannya sangat bergantung pada kebiasaan pengguna."
      },

      {
        title: "Akhir penggunaan",
        text:
          "Setelah tidak digunakan, kantong dapat masuk ke sistem pengumpulan sampah. Jika tidak dikelola dengan baik, plastik dapat berpindah dari lingkungan darat ke saluran air atau lingkungan lainnya."
      }

    ]
  },

  {
    id: "minuman",
    name: "Kemasan Minuman",
    category: "PLASTIC PACKAGING",
    subtitle: "Kemasan yang melindungi produk cair",
    image: "minuman.jpg",

    description:
      "Kemasan minuman dapat menggunakan berbagai jenis plastik dan komponen tambahan, tergantung desain, isi, kebutuhan perlindungan, dan sistem distribusinya.",

    expert:
      "EPA mencatat bahwa berbagai resin plastik digunakan untuk wadah dan kemasan, termasuk PET untuk botol minuman dan jenis resin lain untuk berbagai wadah, penutup, serta komponen kemasan.",

    source:
      "U.S. Environmental Protection Agency (EPA) — Plastics: Material-Specific Data",

    sourceUrl:
      "https://www.epa.gov/facts-and-figures-about-materials-waste-and-recycling/plastics-material-specific-data",

    steps: [

      {
        title: "Pemilihan material",
        text:
          "Produsen menentukan material berdasarkan kebutuhan produk, seperti kekuatan, bentuk, berat, kemampuan mempertahankan isi, dan kebutuhan distribusi."
      },

      {
        title: "Pembentukan kemasan",
        text:
          "Resin diproses menggunakan teknologi pembentukan plastik. Bentuk akhir dapat berupa botol, gelas, wadah, tutup, atau komponen lain."
      },

      {
        title: "Pengisian",
        text:
          "Kemasan yang telah dibentuk masuk ke jalur produksi untuk diisi dengan minuman, kemudian ditutup dan diberi identitas produk."
      },

      {
        title: "Distribusi",
        text:
          "Produk kemudian dikemas dalam jumlah lebih besar dan dipindahkan melalui rantai distribusi hingga mencapai toko dan konsumen."
      },

      {
        title: "Penggunaan",
        text:
          "Konsumen membeli dan menggunakan minuman. Setelah produk habis, kemasan tidak lagi memiliki fungsi utama sebagai wadah."
      },

      {
        title: "Pengelolaan sampah",
        text:
          "Kemasan dapat dipilah dan masuk ke jalur daur ulang jika sistem lokal menerima jenis material tersebut. Jika tidak, kemasan dapat masuk ke sistem sampah lainnya."
      }

    ]
  },

  {
    id: "lainnya",
    name: "Kemasan Lainnya",
    category: "OTHER PLASTIC PACKAGING",
    subtitle: "Tray, tutup, wadah, dan berbagai bentuk kemasan",
    image: "lainnya.jpg",

    description:
      "Dunia kemasan plastik sangat beragam. Selain botol dan cup, terdapat tray, tutup, wadah, kantong, clamshell, serta berbagai bentuk kemasan lainnya.",

    expert:
      "EPA mencatat bahwa berbagai jenis resin digunakan dalam produk kemasan, termasuk PET, HDPE, LDPE, PP, polystyrene, dan resin lainnya. Perbedaan resin dan bentuk produk memengaruhi cara material tersebut digunakan dan dikelola setelah menjadi sampah.",

    source:
      "U.S. Environmental Protection Agency (EPA) — Containers and Packaging",

    sourceUrl:
      "https://www.epa.gov/facts-and-figures-about-materials-waste-and-recycling/containers-and-packaging-product-specific",

    steps: [

      {
        title: "Desain produk",
        text:
          "Produsen menentukan bentuk dan fungsi kemasan. Kemasan dapat dirancang untuk melindungi produk, mempermudah transportasi, memperpanjang masa simpan, atau memberikan kemudahan penggunaan."
      },

      {
        title: "Pemilihan resin",
        text:
          "Jenis plastik dipilih berdasarkan kebutuhan. PET, HDPE, LDPE, PP, polystyrene, dan jenis lainnya mempunyai karakteristik berbeda."
      },

      {
        title: "Produksi",
        text:
          "Resin diolah menjadi bentuk akhir menggunakan metode industri yang sesuai. Produk dapat berupa tutup, wadah, tray, film, kantong, clamshell, atau komponen kemasan lainnya."
      },

      {
        title: "Distribusi",
        text:
          "Kemasan yang telah menjadi bagian dari suatu produk bergerak melalui sistem logistik hingga sampai kepada konsumen."
      },

      {
        title: "Konsumsi",
        text:
          "Kemasan digunakan selama produk dikonsumsi. Ketika fungsi kemasan selesai, material tersebut masuk ke tahap pascakonsumsi."
      },

      {
        title: "Akhir siklus",
        text:
          "Material kemudian membutuhkan pengumpulan, pemilahan, dan pengelolaan. Jalur akhirnya dapat berbeda menurut jenis resin, kondisi material, fasilitas daur ulang, serta sistem pengelolaan sampah setempat."
      }

    ]
  }

];


/* =========================================================
   ELEMENTS
   ========================================================= */

const curtain = document.getElementById("curtain");
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

const productsGrid = document.getElementById("productsGrid");

const modal = document.getElementById("productModal");
const modalBackdrop = document.getElementById("modalBackdrop");
const modalClose = document.getElementById("modalClose");

const modalImage = document.getElementById("modalImage");
const modalCategory = document.getElementById("modalCategory");
const modalTitle = document.getElementById("modalTitle");
const modalSubtitle = document.getElementById("modalSubtitle");
const modalTimeline = document.getElementById("modalTimeline");

const modalExpert = document.getElementById("modalExpert");
const modalSource = document.getElementById("modalSource");
const modalSourceLink = document.getElementById("modalSourceLink");

const modalQR = document.getElementById("modalQR");
const enlargeQR = document.getElementById("enlargeQR");
const downloadQR = document.getElementById("downloadQR");

const qrFullscreen = document.getElementById("qrFullscreen");
const qrFullscreenBackdrop = document.getElementById("qrFullscreenBackdrop");
const qrFullscreenClose = document.getElementById("qrFullscreenClose");
const qrFullscreenTitle = document.getElementById("qrFullscreenTitle");
const largeQR = document.getElementById("largeQR");
const downloadLargeQR = document.getElementById("downloadLargeQR");

let currentProduct = null;


/* =========================================================
   CURTAIN
   ========================================================= */

window.addEventListener("load", () => {

  setTimeout(() => {
    curtain.classList.add("hide");
  }, 1900);

});


/* =========================================================
   MOBILE MENU
   ========================================================= */

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

document.querySelectorAll("nav a").forEach(link => {

  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });

});


/* =========================================================
   QR URL
   ========================================================= */

function getBaseWebsiteURL() {

  /*
    Jika website online, otomatis menggunakan URL website sekarang.

    Contoh:
    https://websitekamu.com/index.html

    Jika file dibuka langsung dari HP/computer menggunakan file://,
    digunakan URL demo agar QR tetap dapat dibuat.
  */

  if (window.location.protocol !== "file:") {

    return window.location.href
      .split("?")[0]
      .split("#")[0];

  }

  return "https://example.com/index.html";
}


function getProductURL(productId) {

  const baseURL = getBaseWebsiteURL();

  return `${baseURL}?produk=${encodeURIComponent(productId)}`;
}


function getQRURL(productId, size = 500) {

  const targetURL = getProductURL(productId);

  return (
    "https://api.qrserver.com/v1/create-qr-code/" +
    `?size=${size}x${size}` +
    "&margin=12" +
    "&qzone=4" +
    `&data=${encodeURIComponent(targetURL)}`
  );

}


/* =========================================================
   PRODUCT CARD
   ========================================================= */

function renderProducts() {

  productsGrid.innerHTML = "";

  products.forEach(product => {

    const card = document.createElement("article");

    card.className = "product-card";

    const qrURL = getQRURL(product.id, 300);

    card.innerHTML = `

      <div class="product-image">

        <img
          src="${product.image}"
          alt="${product.name}"
          loading="lazy"
          onerror="this.style.opacity='0.18'"
        >

      </div>

      <div class="product-body">

        <span class="product-type">
          ${product.category}
        </span>

        <h3>${product.name}</h3>

        <p>
          ${product.description}
        </p>

        <div class="product-bottom">

          <button
            class="explore-button"
            data-id="${product.id}">
            EXPLORE JOURNEY →
          </button>

          <div
            class="card-qr"
            title="Klik untuk memperbesar QR"
            data-qr="${product.id}">

            <img
              src="${qrURL}"
              alt="QR ${product.name}"
              loading="lazy"
            >

          </div>

        </div>

      </div>

    `;

    productsGrid.appendChild(card);

  });


  document.querySelectorAll(".explore-button").forEach(button => {

    button.addEventListener("click", () => {

      openProduct(button.dataset.id);

    });

  });


  document.querySelectorAll(".card-qr").forEach(qr => {

    qr.addEventListener("click", event => {

      event.stopPropagation();

      openLargeQR(qr.dataset.qr);

    });

  });

}


/* =========================================================
   OPEN PRODUCT
   ========================================================= */

function openProduct(productId) {

  const product = products.find(item => item.id === productId);

  if (!product) return;

  currentProduct = product;

  modalImage.src = product.image;
  modalImage.alt = product.name;

  modalCategory.textContent = product.category;
  modalTitle.textContent = product.name;
  modalSubtitle.textContent = product.subtitle;

  modalExpert.textContent = product.expert;
  modalSource.textContent = product.source;

  modalSourceLink.href = product.sourceUrl;

  modalTimeline.innerHTML = "";

  product.steps.forEach((step, index) => {

    const stepElement = document.createElement("div");

    stepElement.className = "timeline-card";

    stepElement.innerHTML = `

      <div class="timeline-card-header">

        <div class="timeline-number">
          ${String(index + 1).padStart(2, "0")}
        </div>

        <h3>${step.title}</h3>

      </div>

      <p>${step.text}</p>

    `;

    modalTimeline.appendChild(stepElement);

  });


  const qrURL = getQRURL(product.id, 700);

  modalQR.src = qrURL;

  modalQR.dataset.url = qrURL;

  modalQR.dataset.product = product.id;

  modal.classList.add("active");

  document.body.style.overflow = "hidden";

}


/* =========================================================
   CLOSE PRODUCT
   ========================================================= */

function closeProduct() {

  modal.classList.remove("active");

  document.body.style.overflow = "";

}

modalClose.addEventListener("click", closeProduct);

modalBackdrop.addEventListener("click", closeProduct);


/* =========================================================
   LARGE QR
   ========================================================= */

function openLargeQR(productId) {

  const product = products.find(item => item.id === productId);

  if (!product) return;

  const qrURL = getQRURL(product.id, 1000);

  qrFullscreenTitle.textContent = product.name;

  largeQR.src = qrURL;

  largeQR.dataset.url = qrURL;

  largeQR.dataset.product = product.id;

  qrFullscreen.classList.add("active");

  document.body.style.overflow = "hidden";

}


function closeLargeQR() {

  qrFullscreen.classList.remove("active");

  if (!modal.classList.contains("active")) {
    document.body.style.overflow = "";
  }

}


enlargeQR.addEventListener("click", () => {

  if (!currentProduct) return;

  openLargeQR(currentProduct.id);

});


modalQR.addEventListener("click", () => {

  if (!currentProduct) return;

  openLargeQR(currentProduct.id);

});


qrFullscreenClose.addEventListener("click", closeLargeQR);

qrFullscreenBackdrop.addEventListener("click", closeLargeQR);


/* =========================================================
   DOWNLOAD QR
   ========================================================= */

async function downloadQRCode(productId) {

  const product = products.find(item => item.id === productId);

  if (!product) return;

  const qrURL = getQRURL(product.id, 1200);

  try {

    const response = await fetch(qrURL);

    if (!response.ok) {
      throw new Error("QR tidak dapat diambil.");
    }

    const blob = await response.blob();

    const blobURL = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = blobURL;
    link.download = `QR-${product.id}-DAILY-TRACING-TRASH.png`;

    document.body.appendChild(link);

    link.click();

    link.remove();

    setTimeout(() => {
      URL.revokeObjectURL(blobURL);
    }, 1000);

  } catch (error) {

    /*
      Fallback jika browser menolak download langsung.
      QR tetap dibuka dalam tab baru sehingga pengguna
      masih dapat menyimpan gambarnya.
    */

    window.open(qrURL, "_blank");

  }

}


downloadQR.addEventListener("click", () => {

  if (!currentProduct) return;

  downloadQRCode(currentProduct.id);

});


downloadLargeQR.addEventListener("click", () => {

  if (!currentProduct) return;

  downloadQRCode(currentProduct.id);

});


/* =========================================================
   KEYBOARD
   ========================================================= */

document.addEventListener("keydown", event => {

  if (event.key === "Escape") {

    if (qrFullscreen.classList.contains("active")) {
      closeLargeQR();
      return;
    }

    if (modal.classList.contains("active")) {
      closeProduct();
    }

  }

});


/* =========================================================
   QR AUTO OPEN
   ========================================================= */

function openProductFromQR() {

  const params = new URLSearchParams(window.location.search);

  const productId = params.get("produk");

  if (!productId) return;

  const productExists = products.some(
    product => product.id === productId
  );

  if (!productExists) return;

  setTimeout(() => {

    openProduct(productId);

    setTimeout(() => {

      const modalBox = document.querySelector(".modal-box");

      if (modalBox) {
        modalBox.scrollTop = 0;
      }

    }, 100);

  }, 500);

}


/* =========================================================
   IMAGE FALLBACK
   ========================================================= */

function setupImageFallback() {

  document.querySelectorAll("img").forEach(img => {

    img.addEventListener("error", () => {

      if (img.classList.contains("product-image-fallback")) {
        return;
      }

      img.style.background =
        "radial-gradient(circle, rgba(83,255,137,.15), rgba(0,0,0,.2))";

    });

  });

}


/* =========================================================
   INITIALIZE
   ========================================================= */

renderProducts();

setupImageFallback();

openProductFromQR();


/* =========================================================
   REVEAL ANIMATION
   ========================================================= */

const revealElements = document.querySelectorAll(
  ".journey-step, .product-card, .about-card, .qr-section"
);

const revealObserver = new IntersectionObserver(
  entries => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";

        revealObserver.unobserve(entry.target);

      }

    });

  },
  {
    threshold: .08
  }
);


revealElements.forEach(element => {

  element.style.opacity = "0";
  element.style.transform = "translateY(30px)";
  element.style.transition = "opacity .8s ease, transform .8s ease";

  revealObserver.observe(element);

});


/* =========================================================
   HASH NAVIGATION
   ========================================================= */

document.querySelectorAll('a[href^="#"]').forEach(link => {

  link.addEventListener("click", event => {

    const targetID = link.getAttribute("href");

    const target = document.querySelector(targetID);

    if (!target) return;

    event.preventDefault();

    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

  });

});