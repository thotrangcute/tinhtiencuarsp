let cardtimeout = JSON.parse(localStorage.getItem("cardtimeout") || "[]");

const twotitleMuangay = document.querySelector(".twotitle-muangay");
twotitleMuangay.addEventListener("click", function (e) {
  e.preventDefault();
  const payEmail = document.querySelector(".pay-email");
  const payName = document.querySelector(".pay-name");
  const payAddresssever1 = document.querySelector(".pay-addresssever1");

  const email = payEmail.value.trim();
  const name = payName.value.trim();
  const addresssever1 = payAddresssever1.value.trim();

  const emailerror = document.querySelector(".email-error");
  const nameerror = document.querySelector(".name-error");
  const addresssever1error = document.querySelector(".addresssever1-error");

  emailerror.textContent = "";
  nameerror.textContent = "";
  addresssever1error.textContent = "";

  if (!email) {
    emailerror.textContent = "Vui lòng nhập email của bạn ";
    return;
  }
  if (!name) {
    nameerror.textContent = "Vui lòng nhập  họ và tên của bạn ";
    return;
  }
  if (!addresssever1) {
    addresssever1error.textContent = "Viu lòng nhập địa chỉ của bạn ";
    return;
  }
  alert("bạn đã mua hàng thành công ");
});
const twotitleReturn = document.querySelectorAll(".twotitle-return");
twotitleReturn.forEach(function (element) {
  element.addEventListener("click", function () {
    window.location.href = "https://hien0101.github.io/rimuro/";
  });
});

function getCartFromUrlOrLocal() {
  const params = new URLSearchParams(window.location.search);
  const cart = params.get("cart");
  if (cart) {
    try {
      return JSON.parse(decodeURIComponent(cart));
    } catch (e) {
      return [];
    }
  }
  try {
    return JSON.parse(localStorage.getItem("cartItems") || "[]");
  } catch (e) {
    return [];
  }
}
function renderCartList(cartItems) {
  const cartList = document.getElementById("cart-list");
  if (!cartList) return;
  if (!cartItems.length) {
    cartList.innerHTML = "<p>Chưa có sản phẩm trong giỏ hàng.</p>";
    return;
  }
  cartList.innerHTML = cartItems
    .map((item) => {
      // Nếu không có ảnh hoặc ảnh lỗi, dùng ảnh mặc định local
      const imageUrl =
        item.images && item.images !== "" ? item.images : "./img/no-image.png";
      return `
    <div class="cart-item">
      <img src="${imageUrl}" alt="${item.name}"
      onerror="this.onerror=null;this.src='./img/no-image.png';"
      style="width:60px;height:60px;object-fit:cover;" />
      <div>
        <h4>${item.name}</h4>
        <p>Giá: ${item.price}</p>
        <p>Số lượng: ${item.quantity || 1}</p>
      </div>
    </div>
  `;
    })
    .join("");
}

document.addEventListener("DOMContentLoaded", function () {
  const cartItems = getCartFromUrlOrLocal();
  renderCartList(cartItems);
});
const loginBtn = document.getElementById("loginButton");
const savedUsername = localStorage.getItem("username");
if (savedUsername) {
  loginBtn.textContent = savedUsername;
}
console.log(savedUsername);
const popup = document.getElementById("loginPopup");
const closeBtn = document.getElementById("closePopup");
loginBtn.addEventListener("click", () => {
  const savedUsername = localStorage.getItem("username");
  const savedPassword = localStorage.getItem("password");

  const usernameInput = document.querySelector(".secontion-input-name");
  const userpassInput = document.querySelector(".secontion-input-pass");

  if (savedUsername && usernameInput) {
    usernameInput.value = savedUsername;
  }
  if (savedPassword && userpassInput) {
    userpassInput.value = savedPassword;
  }
  popup.style.display = "flex";
  console.log(loginBtn);
});

closeBtn.addEventListener("click", () => {
  popup.style.display = "none";
});

popup.addEventListener("click", (e) => {
  if (e.target === popup) {
    popup.style.display = "none";
  }
});
console.log(popup);
const loginBtnsision = document.getElementById("loginButton");
const loginPopupsision = document.getElementById("loginPopup");
const loginSubmit = document.querySelector(".secontion-severtime");

loginSubmit.addEventListener("click", function (e) {
  e.preventDefault();
  const usernameInput = document.querySelector(".secontion-input-name");
  const passwordInput = document.querySelector(".secontion-input-pass");
  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();
  const secontionpassError = document.querySelector(".secontion-pass-error");
  const secontionnameError = document.querySelector(".secontion-name-error");

  secontionpassError.textContent = "";
  secontionnameError.textContent = "";
  if (!username) {
    secontionnameError.textContent = "Vui lòng nhập tài khoản của bạn ";
    return;
  }
  if (!password) {
    secontionpassError.textContent = "Vui lòng nhập mật khẩu của bạn ";
    return;
  }
  loginBtnsision.textContent = username;
  loginPopupsision.style.display = "none";
  localStorage.setItem("username", username);
});
console.log(loginSubmit);
/*
const registerBtn = document.getElementById("registerBtn");
const registerPopup = document.getElementById("registerPopup");
const closeRegister = document.getElementById("closeRegister");

// Hiển thị popup khi ấn "Đăng kí"
registerBtn.addEventListener("click", () => {
  registerPopup.style.display = "flex";
});

// Đóng popup khi ấn dấu ×
closeRegister.addEventListener("click", () => {
  registerPopup.style.display = "none";
});

// Đóng popup khi click ra ngoài form
registerPopup.addEventListener("click", (e) => {
  if (e.target === registerPopup) {
    registerPopup.style.display = "none";
  }
});

*/
const secontionRevertime = document.querySelectorAll(".secontion-revertime");
const registerPopup = document.getElementById("registerPopup");
const closeRegister = document.getElementById("closeRegister");
secontionRevertime.forEach(function (element) {
  element.addEventListener("click", () => {
    registerPopup.style.display = "flex";
  });
});
closeRegister.addEventListener("click", () => {
  registerPopup.style.display = "none";
});

registerPopup.addEventListener("click", (e) => {
  if (e.target === registerPopup) {
    registerPopup.style.display = "none";
  }
});
const resgisterLogin = document.querySelector(".resgister-login");
resgisterLogin.addEventListener("click", function (e) {
  e.preventDefault();
  const registerName = document.querySelector(".register-name");
  const registerEmail = document.querySelector(".register-email");
  const registerWrite = document.querySelector(".register-write");
  const registerNumber = document.querySelector(".register-number");
  const registerpass = document.querySelector(".register-pass");

  const nameregis = registerName.value.trim();
  const emailregis = registerEmail.value.trim();
  const writeregis = registerWrite.value.trim();
  const numberregis = registerNumber.value.trim();
  const passregis = registerpass.value.trim();

  const registerNameerror = document.querySelector(".register-name-error");
  const registerEmailerror = document.querySelector(".register-email-error");
  const registerWriteerror = document.querySelector(".register-write-error");
  const registerNumbererror = document.querySelector(".register-number-error");
  const registerPasserror = document.querySelector(".register-pass-error");

  registerNameerror.textContent = "";
  registerEmailerror.textContent = "";
  registerWriteerror.textContent = "";
  registerNumbererror.textContent = "";
  registerPasserror.textContnet = "";

  if (!nameregis) {
    registerNameerror.textContent = "Vui lòng nhập thông tin têm bạn ";
    return;
  }
  if (!emailregis) {
    registerEmailerror.textContent = "Vui lòng nhập email của bạn  ";
    return;
  }
  if (!writeregis) {
    registerWriteerror.textContent = "Vui lòng nhập tên đăng nhập của bạn ";
    return;
  }
  if (!numberregis) {
    registerNumbererror.textContent = "Vui lòng nhập số điện thoại của bạn  ";
    return;
  }
  if (!passregis) {
    registerPasserror.textContnet = "Hãy nhập mật khẩu đủ 8 kí tự  ";
    return;
  }
  alert("chúc mừng bạn đăng ký thành công");
  location.reload();
});
/*
const darkBtn = document.querySelector('.fieerrersay');

// Khi load trang, kiểm tra trạng thái đã lưu
if (localStorage.getItem('fieerrersay-dark') === 'true') {
  darkBtn.classList.add('dark');
}

darkBtn.addEventListener('click', function () {
  darkBtn.classList.toggle('dark');
  localStorage.setItem('fieerrersay-dark', darkBtn.classList.contains('dark'));
});*/
const darkBtn = document.querySelector(".fieerrersay");
if (localStorage.getItem("fieerrersay-dark") === "true") {
  darkBtn.classList.add("dark");
}

darkBtn.addEventListener("click", function () {
  darkBtn.classList.add("dark");
  localStorage.setItem("fieerrersay-dark", darkBtn.classList.contains("dark"));
});
