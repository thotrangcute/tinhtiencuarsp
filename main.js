$(".content-wire-left").click(function () {
  location.reload();
});
$(".content-cart-left-texts").click(function () {
  location.reload();
});

$(".content-font-left").click(function () {
  $("html,body").animate(
    {
      scrollTop: $(document).height(),
    },
    "slow"
  );
});
let cartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
/*
const contentText = document.querySelectorAll(".content-font-left");
contentText.forEach(function (element) {
  element.addEventListener("click", function () {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  });
});
*/
$(".return-load").click(function () {
  $("html,body").animate({ scrollTop: 0 }, "smooth");
});
$(window).click(function () {
  if ($(window).scrollTop() > 100) {
    $(".return-load").show();
  } else {
    $(".return-load").hide();
  }
});
/*

const returnLoadBtn = document.querySelector(".return-load");
window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    returnLoadBtn.style.display = "block";
  } else {
    returnLoadBtn.style.display = "none";
  }
  if (returnLoadBtn) {
    returnLoadBtn.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }
});
*/
$(".order-btn").click(function () {
  window.location.href = "https://thotrangcute.github.io/tinhtiencuarsp/";
});

const procenterNice = document.getElementById("procenter-nice");
const productesion = [
  {
    id: 1,
    images: "./img/sanpham1.webp",
    name: " Nụ Hồng Trong Nắng Ban Mai",
    price: "1.730.000đ",
    oldPrice: "290.000đ",
    perCent: "-20%",
    category: "kem-duong-da",
    description: "Dưỡng ẩm sâu, phù hợp mọi loại da.",
  },
  {
    id: 2,
    images: "./img/sanpham2.webp",
    name: "Giấc Mơ Da Mịn Như Tơ",
    price: "730.000đ",
    perCent: "",
    category: "sua-rua-mat",
    description: "Dưỡng ẩm sâu, phù hợp mọi loại da.",
  },
  {
    id: 3,
    images: "./img/sanpha3.webp",
    name: "Làn Gió Mới Cho Da Em",
    price: "830.000đ",
    oldPrice: "290.000đ",
    perCent: "-20%",
    category: "dau-goi",
    description: "Dưỡng ẩm sâu, phù hợp mọi loại da.",
  },
  {
    id: 4,
    images: "./img/sanpham4.webp",
    name: "Ánh Nhìn Nhẹ Như Mây",
    perCent: "",
    price: "890.000đ",
    category: "sua-tam",
    description: "Dưỡng ẩm sâu, phù hợp mọi loại da.",
  },
];

/* sản phẩm chỗ mới nhất */
const fontTimeBtn = $(".fonttime-button");
function displayfontTime(products) {
  fontTimeBtn.empty();
  $.each(products, function (index, product) {
    var productCard = $(`
      <div class="product-item">
        <div class="product-image-container">
          <img src="${product.images}" alt="${
      product.name
    }" class="product-img" />
          ${product.perCent ? `<span class=""></span>` : ""}
          <div class="product-overlay">
            <button class="view-now">Xem Ngay</button>
            <button class="buy-now">Mua Ngay</button>
          </div>
        </div>
        <h4 class="product-name">${product.name}</h4>
        <p class="product-pacess">
          <span>${product.price}</span>
          ${product.oldPrice ? `<span class=""> </span>` : ""}
        </p>
      </div>
    `);
    console.log(productCard);
    productCard.find(".view-now").click(function () {
      showpopup(product);
    });
    productCard.find(".buy-now").click(function () {
      buypopup(product);
    });
    fontTimeBtn.append(productCard);
  });
}
displayfontTime(productesion);

const filterButton = document.querySelectorAll(".filter-btn");

const productList = [
  {
    id: 1,
    images: "./img/sanpham1.webp",
    name: "Chạm Nhẹ Vào Làn Da Xinh",
    price: "1.230.000đ",
    oldPrice: "1.590.000đ",
    perCent: "-20%",
    category: "kem-duong-da",
    description: "Dưỡng ẩm sâu, phù hợp mọi loại da.",
  },
  {
    id: 2,
    images: "./img/sanpham2.webp",
    name: "Em Là Hương Sớm Tinh Khôi",
    price: "2.130.000đ",
    perCent: "",
    category: "sua-rua-mat",
    description: "Dưỡng ẩm sâu, phù hợp mọi loại da.",
  },
  {
    id: 3,
    images: "./img/sanpha3.webp",
    name: "Hương Hoa Dịu Dàng Cho Mái Tóc",
    price: "2.230.000đ",
    oldPrice: "2.790.000đ",
    perCent: "-10%",
    category: "dau-goi",
    description: "Dưỡng ẩm sâu, phù hợp mọi loại da.",
  },
  {
    id: 4,
    images: "./img/sanpham4.webp",
    name: "Suối Tóc Dài – Mềm Như Nhung",
    price: "930.000đ",
    perCent: "",
    category: "sua-tam",
    description: "Dưỡng ẩm sâu, phù hợp mọi loại da.",
  },
  {
    id: 5,
    images: "./img/sanpham5.webp",
    name: "Dầu Gội Thảo Mộc Cho Da Đầu Khỏe",
    price: "4.630.000đ",
    oldPrice: "4.990.000đ",
    perCent: "-12%",
    category: "kem-duong-da",
    description: "Dưỡng ẩm sâu, phù hợp mọi loại da.",
  },
  {
    id: 6,
    images: "./img/sanpham6.webp",
    name: "Tóc Mượt Như Chạm Lụa",
    price: "1.430.000đ",
    oldPrice: "1.790.000đ",
    perCent: "-22%",
    category: "sua-tam",
    description: "Dưỡng ẩm sâu, phù hợp mọi loại da.",
  },
  {
    id: 7,
    images: "./img/sanpham7.webp",
    name: "Sữa Tắm Dưỡng Da Từ Thiên Nhiên",
    price: "930.000đ",
    perCent: "",
    category: "sua-rua-mat",
    description: "Dưỡng ẩm sâu, phù hợp mọi loại da.",
  },
  {
    id: 8,
    images: "./img/sanpham8.webp",
    name: "Tắm Như Ôm Trọn Mây Trời",
    price: "2.230.000đ",
    oldPrice: "2.890.000đ",
    perCent: "-24%",
    category: "sua-tam",
    description: "Dưỡng ẩm sâu, phù hợp mọi loại da.",
  },
  {
    id: 9,
    images: "./img/sanpham9.webp",
    name: "Tinh Dầu Hoa Cho Tóc Bồng Bềnh",
    price: "6.230.000đ",
    perCent: "",
    category: "dau-goi",
    description: "Dưỡng ẩm sâu, phù hợp mọi loại da.",
  },
  {
    id: 10,
    images: "./img/sanpham10.webp",
    name: "Dưỡng Da Trong Từng Bọt Nhẹ",
    price: "2.630.000đ",
    oldPrice: "2.890.000đ",
    perCent: "-27%",
    category: "sua-tam",
    description: "Dưỡng ẩm sâu, phù hợp mọi loại da.",
  },
];
/* sản phẩm chỗ tổng nhìu */
const displayProductsion = $("#product-list");
function displayProducts(products) {
  displayProductsion.empty();
  products.forEach(function (product) {
    const productCard = $(`
    <div class="product-item">
    <div class="product-image-container">
    <img src="${product.images}" alt="${product.name}" class="product-img" /> ${
      product.perCent
        ? `
      <span class="product-percentafge">${product.perCent}</span>`
        : ""
    }
            <div class="product-overlay">
              <button class="view-now">Xem Ngay</button>
              <button class="buy-now">Mua Ngay</button>
            </div>
          </div>
          <h4 class="product-name">${product.name}</h4>
          <p class="product-pacess">
          <span > ${product.price}</span>${
      product.oldPrice
        ? `
          <span  class= "product-oldPrice"  > ${product.oldPrice}</span>`
        : ""
    }
          </p>
        </div>
  `);
    console.log(productCard);
    displayProductsion.append(productCard);
    console.log(productCard);
    productCard.find(".view-now").click(function () {
      showpopup(product);
    });
    productCard.find(".buy-now").click(function () {
      buypopup(product);
    });
  });
}
/* ấn nút mua ngay ra thông tin */
function buypopup(product) {
  const found = cartItems.find((item) => item.id === product.id);
  if (found) {
    found.quantity += 1;
  } else {
    cartItems.push({ ...product, quantity: 1 });
  }
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  showPopup();
  const popup = $(`
  <div class="popup-fullner">
  <div class="popup-saiontime">
    <div class="popup-center">
    <h2 class="popup-sectent"> &#10004; Sản phẩm vừa được thêm vào giỏ hàng</h2>
    <span class="close-btnner">&times;</span>
    </div>
    <div class="popup-setuptofile">
    <div class="popup-middble">
     <img src="${product.images}" alt="Product Large">
     <div class="popup-filenight">
     <h2>${product.name}</h2>
     <p class="popup-double">  ${product.price}</p>
     </div>
    </div>
    </div>
    <div class="popup-finnoler">
     <p class="popup-hightlight"> &#10148; Giỏ Hàng Hiện Có Sản Phẩm Này

     </p>
     <div class="popup-sailamogif">
     <a href="https://thotrangcute.github.io/tinhtiencuarsp/"target="_blank">
        <h2 class="popup-senninor"> Tiến Hành Thanh Toán &#10140;</h2>
     </a>
     </div>
    </div>
    </div>
    </div>
    `);
  $(".popup-senninor").click(function () {
    const cartData = JSON.stringify(cartItems);
    const encoded = encodeURIComponent(cartData);
    window.location.href =
      "https://thotrangcute.github.io/tinhtiencuarsp/?cart=" + encoded;
  });
  popup.find(".close-btnner").click(function () {
    popup.remove();
  });
  popup.click(function (e) {
    if (e.target === this) {
      popup.remove();
    }
  });

  $("body").append(popup);
  $(popupBox).addClass("active");
  $(buttonBox).addClass("hidden");
  renderCartItems();
}
/*ấn nút xme ngay ra thông tin*/
function showpopup(product) {
  const popup = $(`
  <div class="popup-overlay">
    <div class="popup-content">
      <span class="close-btn">&times;</span>
      <div class="popup-image">
        <img src="${product.images}" alt="Product Large">
      </div>
      <div class="popup-info">
        <h2>${product.name}</h2>
          <div class="popup-counter">
            <button id="decrease">-</button>
            <div class="value" id="value">1</div>
            <button id="increase">+</button>
          </div>
          <div id="message" class="popup-message"></div>
          <div class="popup-setfor">
            <p class="popup-paceset">
          <span class="popup-price" > ${product.price}</span>${
    product.oldPrice
      ? `
          <span class="popup-oldPrice"  > ${product.oldPrice}</span>`
      : ""
  }
          </p>

            <button class="buy-now">MUA NGAY</button>
          </div>
          <p class="popup-desc">
            Son Ba Màu Maybelline Bitten 3.9g - Kết cấu ba màu độc đáo tạo hiệu ứng môi ombre 3D thời thượng, màu sắc loang nước sống động cho đôi môi căng mọng đẹp tự nhiên. Công thức Ultra creamy dưỡng ẩm môi suốt 12h liền.
          </p>
      </div>
    </div>
  </div>
`);

  popup.find(".close-btn").click(function () {
    popup.remove();
  });
  popup.click(function (e) {
    if (e.target === this) {
      popup.remove();
    }
  });
  popup.find(".buy-now").click(function () {
    buypopup(product);
  });

  let currentValue = 1;

  const increaseBtn = popup.find("#increase");
  const decreaseBtn = popup.find("#decrease");
  const valueDisplay = popup.find("#value");
  const messageDisplay = popup.find("#message");
  increaseBtn.click(function () {
    currentValue++;
    valueDisplay.text(currentValue);
    messageDisplay.text("");
  });
  decreaseBtn.click(function () {
    if (currentValue > 0) {
      currentValue--;
      valueDisplay.text(currentValue);
      messageDisplay.text("");
    } else {
      messageDisplay.text("Vui lòng chọn số lượng sản phẩm ");
    }
  });
  $("body").append(popup);
}
displayProducts(productList);
/* sản phầm trong giỏ hàng */

function renderCartItems() {
  const cartList = popupBox.querySelector(".cart-list");
  if (cartItems.length === 0) {
    cartList.innerHTML = "<p>Chưa có sản phẩm trong giỏ hàng.</p>";
    updateCartCount();
    return;
  }
  const cartListion = $(cartList);
  cartListion.empty();
  cartItems.forEach((item, idx) => {
    const cartItem = $(
      `
      <div class="item-content">
      <img src="${item.images}" alt="${item.name}" class="cart-item-img" />
      <div class="cart-item-info">
      <h4>${item.name}</h4>
      <p>${item.price}</p>
      <div class="item-counter">
          <button class="decrease">-</button>
          <div class="value">${item.quantity}</div>
          <button class="increase">+</button>
      </div>
      <div class="item-message"></div>
      </div>
      <div class="cart-item-wash">
      <i class="fa fa-trash-o"></i>
      </div>

      </div>
      `
    );
    console.log(cartItem);
    const messageDisplay = cartItem.find(".item-message");
    const increaseBtn = cartItem.find(".increase");
    const decreaseBtn = cartItem.find(".decrease");
    const trashBtn = cartItem.find(".fa-trash-o");
    increaseBtn.click(function () {
      cartItems[idx].quantity++;
      renderCartItems();
    });

    decreaseBtn.click(function () {
      if (cartItems[idx].quantity > 1) {
        cartItems[idx].quantity--;
        renderCartItems();
      } else {
        messageDisplay.textContent = "Vui lòng chọn số lượng sản phẩm";
      }
    });
    trashBtn.click(function () {
      cartItems.splice(idx, 1);
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      renderCartItems();
    });
    cartListion.append(cartItem);
    console.log(cartItem);
  });
  function updateCartCount() {
    const total = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    const cartCountMain = document.getElementById("cart-count-main");
    const cartCountPopup = document.getElementById("cart-count-popup");
    const cartCountSonnit = document.getElementById("cart-count-sonnit");
    if (cartCountSonnit) cartCountSonnit.textContent = total > 0 ? total : "";
    if (cartCountMain) cartCountMain.textContent = total > 0 ? total : "";
    if (cartCountPopup) cartCountPopup.textContent = total > 0 ? total : "";
  }
  updateCartCount();
}
displayProducts(productList);

const cartIconsel = document.getElementById("cartIconsel");
const filterBtnsel = document.getElementById("filterBtnsel");
const filterBtn = document.getElementById("filterBtn");
const popupBox = document.getElementById("popupBox");
const buttonBox = document.getElementById("buttonBox");
const closePopup = document.getElementById("closePopup");
const orderPopup = document.getElementById("orderPopup");

function showPopup() {
  popupBox.classList.add("active");
  buttonBox.classList.add("hidden");
}

function hidePopup() {
  popupBox.classList.remove("active");
  setTimeout(() => {
    buttonBox.classList.remove("hidden");
  }, 450);
}

cartIcon.addEventListener("click", showPopup);
cartIconsel.addEventListener("click", showPopup);
filterBtnsel.addEventListener("click", showPopup);
filterBtn.addEventListener("click", showPopup);
closePopup.addEventListener("click", hidePopup);
orderPopup.addEventListener("click", showPopup);

const proDuctList = [
  {
    id: 6,
    images: "./img/sanpham6.webp",
    name: "Làn Da Dịu Êm Sau Mỗi Lần Tắm",
    price: "1.210.000đ",
    oldPrice: "1.890.000đ",
    perCent: "-27%",
    category: "sua-tam",
    description: "Dưỡng ẩm sâu, phù hợp mọi loại da.",
  },
  {
    id: 7,
    images: "./img/sanpham7.webp",
    name: "Dưỡng Da Trong Từng Bọt Nhẹ",
    price: "2.030.000đ",
    perCent: "",
    category: "sua-rua-mat",
    description: "Dưỡng ẩm sâu, phù hợp mọi loại da.",
  },
  {
    id: 8,
    images: "./img/sanpham8.webp",
    name: "Làn Da Em Mịn Như Mơ",
    price: "5.730.000đ",
    oldPrice: "6.190.000đ",
    perCent: "-10%",
    category: "sua-tam",
    description: "Dưỡng ẩm sâu, phù hợp mọi loại da.",
  },
  {
    id: 9,
    images: "./img/sanpham9.webp",
    name: "Kem Dưỡng Ẩm Dịu Nhẹ",
    price: "930.000đ",
    perCent: "",
    category: "dau-goi",
    description: "Dưỡng ẩm sâu, phù hợp mọi loại da.",
  },
  {
    id: 10,
    images: "./img/sanpham10.webp",
    name: "Hương Hoa Mơ Cho Làn Da",
    price: "2.230.000đ",
    oldPrice: "2.890.000đ",
    perCent: "-15%",
    category: "sua-tam",
    description: "Dưỡng ẩm sâu, phù hợp mọi loại da.",
  },
  {
    id: 11,
    images: "./img/sanpham11.webp",
    name: "Kem Dưỡng Mỗi Đêm",
    price: "1.110.000đ",
    perCent: "",
    category: "kem-duong-da",
    description: "Dưỡng ẩm sâu, phù hợp mọi loại da.",
  },
  {
    id: 11,
    images: "./img/sanpham11.webp",
    name: "Kem Dưỡng Da ",
    price: "2.030.000đ",
    perCent: "",
    category: "kem-duong-da",
    description: "Dưỡng ẩm sâu, phù hợp mọi loại da.",
  },
  {
    id: 12,
    images: "./img/sanpham12.webp",
    name: "Hương Hoa Mơ Cho Làn Da Nhẹ Nhàng",
    price: "1.230.000đ",
    oldPrice: "1.590.000đ",
    perCent: "-20%",
    category: "dau-goi",
    description: "Dưỡng ẩm sâu, phù hợp mọi loại da.",
  },
  {
    id: 13,
    images: "./img/sanpham13.webp",
    name: "Vỗ Về Làn Da Sau Một Ngày Dài",
    price: "2.130.000đ",
    perCent: "",
    category: "sua-tam",
    description: "Dưỡng ẩm sâu, phù hợp mọi loại da.",
  },
  {
    id: 14,
    images: "./img/sanpham14.webp",
    name: "Làn Da Em Mịn Như Mơ",
    price: "1.230.000đ",
    oldPrice: "1.790.000đ",
    perCent: "-20%",

    category: "kem-duong-da",
    description: "Dưỡng ẩm sâu, phù hợp mọi loại da.",
  },
  {
    id: 15,
    images: "./img/sanpham15.webp",
    name: "Tắm Xong Chỉ Muốn Ôm Lấy Da Mình",
    price: "4.230.000đ",
    perCent: "",
    category: "sua-tam",
    description: "Dưỡng ẩm sâu, phù hợp mọi loại da.",
  },
  {
    id: 16,
    images: "./img/sanpham16.webp",
    name: "Mỗi Ngày Một Chút Dịu Dàng Cho Da  ",
    price: "5.230.000đ",
    oldPrice: "6.290.000đ",
    perCent: "-20%",
    category: "kem-duong-da",
    description: "Dưỡng ẩm sâu, phù hợp mọi loại da.",
  },
  {
    id: 17,
    images: "./img/sanpham5.webp",
    name: "Tái Tạo Da Với Tinh Túy Thiên Nhiên",
    price: "1.230.000đ",
    perCent: "",
    category: "dau-goi",
    description: "Dưỡng ẩm sâu, phù hợp mọi loại da.",
  },
  {
    id: 18,
    images: "./img/sanpham11.webp",
    name: "Hương Hoa Mơ Cho Làn Da Nhẹ Nhàng",
    price: "2.430.000đ",
    oldPrice: "2.990.000đ",
    perCent: "-20%",
    category: "sua-rua-mat",
    description: "Dưỡng ẩm sâu, phù hợp mọi loại da.",
  },
  {
    id: 19,
    images: "./img/sanpham8.webp",
    name: "Kem Dưỡng Ẩm Dịu Nhẹ Tự Nhiên",
    price: "2.230.000đ",
    oldPrice: "2.690.000đ",
    perCent: "-20%",
    category: "sua-tam",
    description: "Dưỡng ẩm sâu, phù hợp mọi loại da.",
  },
  {
    id: 20,
    images: "./img/sanpham12.webp",
    name: "Tinh Chất Dưỡng Mềm Như Tơ",
    price: "900.000đ",
    perCent: "",
    category: "kem-duong-da",
    description: "Dưỡng ẩm sâu, phù hợp mọi loại da.",
  },
];

let productRendered = false;

$("#showMoreBtn").click(function () {
  const isActive = $("#hiddenProducts")
    .toggleClass("active")
    .hasClass("active");
  const label = $(this).find(".setup-content-siuver-xiuxiu");

  if (isActive) {
    label.text("Ẩn bớt");
    if (!productRendered) {
      $.each(proDuctList, function (_, product) {
        const productCard = $(`
          <div class="product-item hidden-product-item">
            <div class="product-image-container">
              <img src="${product.images}" alt="${
          product.name
        }" class="product-img" />
              ${
                product.perCent
                  ? `<span class="product-percentafge">${product.perCent}</span>`
                  : ""
              }
              <div class="product-overlay">
                <button class="view-now">Xem Ngay</button>
                <button class="buy-now">Mua Ngay</button>
              </div>
            </div>
            <h4 class="product-name">${product.name}</h4>
            <p class="product-pacess">
              <span>${product.price}</span>
              ${
                product.oldPrice
                  ? `<span class="product-oldPrice">${product.oldPrice}</span>`
                  : ""
              }
            </p>
          </div>
        `);
        console.log(productCard);
        productCard.find(".view-now").click(function () {
          showpopup(product);
        });
        productCard.find(".buy-now").click(function () {
          buypopup(product);
        });
        $("#product-list").append(productCard);
      });
      productRendered = true;
    }
  } else {
    label.text("Xem thêm");
    $("#product-list .hidden-product-item").remove();
    productRendered = false;
  }
  $("#showMoreBtn").insertAfter("#product-list");
});
const allProducts = [...productList];
$(".filter-btn").click(function () {
  $(".filter-btn").removeClass("active");
  $(this).addClass("active");
  const filter = $(this).data("filter");
  if (filter === "all") {
    displayProducts(allProducts);
  } else {
    displayProducts(allProducts.filter((p) => p.category == filter));
  }
});
/*
filterButton.forEach((button) => {
  button.addEventListener("click", () => {
    filterButton.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    const filter = button.dataset.filter;
    if (filter === "all") {
      displayProducts(allProducts);
    } else {
      const filtered = allProducts.filter((p) => p.category === filter);
      displayProducts(filtered);
    }
  });
});
*/
$(".saiontime").click(function (e) {
  e.preventDefault();

  const Name = $(".seon-name").val().trim();
  const Email = $(".seoun-email").val().trim();
  const message = $(".seon-message").val().trim();

  $(".name-error").text("");
  $(".email-error").text("");
  $(".message-error").text("");

  if (!Name) {
    $(".name-error").text("! Vui lòng nhập tên của bạn");
    return;
  }
  if (!Email) {
    $(".email-error").text("! Vui lòng nhập Email của bạn");
    return;
  }
  if (!message) {
    $(".message-error").text(" ! hãy nhập nội dung bạn cần viết ");
    return;
  }
  alert("gửi thành công ");
});
$(document).ready(function () {
  renderCartItems();
});
