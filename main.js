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
    window.location.href = "https://thotrangcute.github.io/rimuro/";
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
let currentDiscount = 0;
let lastCartTotal = 0;

function parseDiscountCode(code) {
  // Accepts codes like 'sale10%' or 'SALE20%'
  const match = code.match(/sale(\d+)%/i);
  if (match) {
    return parseInt(match[1], 10);
  }
  return 0;
}

function renderCartList(cartItems, discount = 0) {
  const cartList = document.getElementById("cart-list");
  const totalDiv = document.getElementById("twotitleSum");
  if (!cartList) return;
  if (!cartItems.length) {
    cartList.innerHTML = "<p>Chưa có sản phẩm trong giỏ hàng.</p>";
    if (totalDiv) totalDiv.textContent = "Tổng: 0";
    return;
  }
  let total = 0;
  cartList.innerHTML = cartItems
    .map((item) => {
      const imageUrl =
        item.images && item.images !== "" ? item.images : "./img/no-image.png";
      const quantity = item.quantity || 1;
      let price = item.price || 0;
      if (typeof price === "string") {
        price = price.replace(/[^\d]/g, "");
        price = parseInt(price, 10) || 0;
      }
      total += price * quantity;
      return `
    <div class="cart-item">
      <img src="${imageUrl}" alt="${item.name}"
      onerror="this.onerror=null;this.src='./img/no-image.png';"
       />
      <div>
        <h4>${item.name}</h4>
        <p>Giá: ${item.price}</p>
        <p>Số lượng: ${quantity}</p>
      </div>
    </div>
  `;
    })
    .join("");
  lastCartTotal = total;
  if (discount > 0) {
    const discountAmount = Math.round((total * discount) / 100);
    const discountedTotal = total - discountAmount;
    if (totalDiv)
      totalDiv.innerHTML = `Tổng: <span style='text-decoration:line-through;color:#888;'>${total.toLocaleString()}₫</span> <span style='color:#e53935;'>${discountedTotal.toLocaleString()}₫</span> <span style='color:#388e3c;'>(-${discount}%)</span>`;
  } else {
    if (totalDiv) totalDiv.textContent = `Tổng: ${total.toLocaleString()}₫`;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const cartItems = getCartFromUrlOrLocal();
  // Check if a discount code was previously applied
  const savedDiscount = parseInt(localStorage.getItem("discountPercent") || "0", 10);
  currentDiscount = savedDiscount;
  renderCartList(cartItems, currentDiscount);

  // Discount code logic
  const discountInput = document.querySelector(".pay-saleer");
  const discountBtn = document.querySelector(".twotitle-user");
  if (discountBtn && discountInput) {
    discountBtn.addEventListener("click", function () {
      const code = discountInput.value.trim();
      const percent = parseDiscountCode(code);
      if (percent > 0) {
        currentDiscount = percent;
        localStorage.setItem("discountPercent", percent);
        renderCartList(getCartFromUrlOrLocal(), currentDiscount);
        discountInput.style.border = "2px solid #388e3c";
        discountInput.title = `Đã áp dụng giảm giá ${percent}%`;
      } else {
        currentDiscount = 0;
        localStorage.removeItem("discountPercent");
        renderCartList(getCartFromUrlOrLocal(), 0);
        discountInput.style.border = "2px solid #e53935";
        discountInput.title = "Mã giảm giá không hợp lệ";
      }
    });
  }
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
  // Kiểm tra tài khoản đã đăng ký chưa
  let users = JSON.parse(localStorage.getItem("users") || "[]");
  const found = users.find(
    (u) =>
      u.username &&
      u.password &&
      u.username === username &&
      u.password === password
  );
  if (!found) {
    secontionnameError.textContent =
      "Tài khoản chưa đăng ký hoặc sai thông tin!";
    return;
  }
  loginBtnsision.textContent = username;
  loginPopupsision.style.display = "none";
  localStorage.setItem("username", username);
});
console.log(loginSubmit);

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
  // Lưu tài khoản vào localStorage, bao gồm cả email
  let users = JSON.parse(localStorage.getItem("users") || "[]");
  // Kiểm tra trùng username
  if (
    users.some(function (u) {
      return u && u.username && u.username === writeregis;
    })
  ) {
    registerWriteerror.textContent = "Tên đăng nhập đã tồn tại!";
    return;
  }
  users.push({ username: writeregis, password: passregis, email: emailregis });
  localStorage.setItem("users", JSON.stringify(users));
  alert("chúc mừng bạn đăng ký thành công");
  location.reload();
});
const darkBtn = document.querySelector(".fieerrersay");
if (localStorage.getItem("fieerrersay-dark") === "true") {
  darkBtn.classList.add("dark");
}

darkBtn.addEventListener("click", function () {
  darkBtn.classList.add("dark");
  localStorage.setItem("fieerrersay-dark", darkBtn.classList.contains("dark"));
});

const forgetsection = document.querySelector(".forgetsection");
const forgetPopup = document.getElementById("forgetPopup");
const closeForget = document.getElementById("closeForget");

if (forgetsection && forgetPopup) {
  forgetsection.addEventListener("click", function (e) {
    e.preventDefault();
    forgetPopup.style.display = "flex";
  });
}
if (closeForget && forgetPopup) {
  closeForget.addEventListener("click", function () {
    forgetPopup.style.display = "none";
  });
}
if (forgetPopup) {
  forgetPopup.addEventListener("click", function (e) {
    if (e.target === forgetPopup) {
      forgetPopup.style.display = "none";
    }
  });
}

const forgetSubmit = document.querySelector(".forget-submit");
if (forgetSubmit) {
  forgetSubmit.addEventListener("click", function (e) {
    e.preventDefault();
    const forgetEmail = document.querySelector(".forget-email");
    const forgetName = document.querySelector(".forget-name");
    const forgetNameNew = document.querySelector(".forget-name-new");
    const forgetNameAction = document.querySelector(".forget-name-action");

    const emailforgot = forgetEmail.value.trim();
    const nameforgot = forgetName.value.trim();
    const nameforgotnew = forgetNameNew.value.trim();
    const nameforgotaction = forgetNameAction.value.trim();

    const emailFORGOTerror = document.querySelector(".forget-email-error");
    const nameForgoterror = document.querySelector(".forget-name-error");
    const namenewforgeterror = document.querySelector(".forget-name-new-error");
    const nameactionForgoterror = document.querySelector(
      ".forget-name-action-error"
    );

    emailFORGOTerror.textContent = "";
    nameForgoterror.textContent = "";
    namenewforgeterror.textContent = "";
    nameactionForgoterror.textContent = "";

    if (!emailforgot) {
      emailFORGOTerror.textContent = "Hãy nhập email của bạn";
      return;
    }
    let users = JSON.parse(localStorage.getItem("users") || "[]");
    const foundUser = users.find(function (u) {
      return u && u.email && u.email === emailforgot;
    });

    if (!foundUser) {
      emailFORGOTerror.textContent = "Email không đúng hoặc chưa đăng ký!";
      return;
    }
    if (!nameforgot) {
      nameForgoterror.textContent = "Hãy nhập mật khẩu mới  của bạn";
      return;
    }
    if (!nameforgotnew) {
      namenewforgeterror.textContent = "Hãy nhập lại mật khẩu mới  của bạn";
      return;
    }
    if (nameforgot !== nameforgotnew) {
      namenewforgeterror.textContent = "Mật khẩu nhập lại không khớp ";
      return;
    }
    if (!nameforgotaction) {
      nameactionForgoterror.textContent = "Hãy nhập mã xác nhận của bạn";
      return;
    }
    // Cập nhật mật khẩu mới cho user
    users = users.map((u) =>
      u && u.email && u.email === emailforgot
        ? { ...u, password: nameforgot }
        : u
    );
    localStorage.setItem("users", JSON.stringify(users));
    alert("Đổi mật khẩu thành công!");
    forgetPopup.style.display = "none";
  });
}

const userIcon = document.querySelector('.fa-user-circle-o');
const userMenu = document.getElementById('sectinonwhefasdf');
const logoutBtn = document.querySelector('.secontioner-close');

if (userIcon && userMenu) {
  userMenu.style.display = 'none';
  userIcon.addEventListener('click', function (e) {
    e.stopPropagation();
    if (userMenu.style.display === 'none' || userMenu.style.display === '') {
      userMenu.style.display = 'block';
    } else {
      userMenu.style.display = 'none';
    }
  });
  // Ẩn menu khi click ra ngoài
  document.addEventListener('click', function (e) {
    if (!userMenu.contains(e.target) && e.target !== userIcon) {
      userMenu.style.display = 'none';
    }
  });
}
if (logoutBtn) {
  logoutBtn.addEventListener('click', function () {
    localStorage.removeItem('username');
    location.reload();
  });
}
