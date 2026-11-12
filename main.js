var cartCount = 0;
var totalPrice = 0;

function showMessage(text, type) {
  var icon = "fa-circle-check";
  if (type === "error") {
    icon = "fa-circle-exclamation";
  }
  var note = document.createElement("div");
  note.className = "note " + type;
  note.innerHTML = '<i class="fa-solid ' + icon + '"></i><span>' + text + '</span><button onclick="this.parentElement.remove()"><i class="fa-solid fa-xmark"></i></button>';
  document.getElementById("notes").appendChild(note);
  setTimeout(function () {
    note.remove();
  }, 3500);
}

function toggleMenu(id) {
  document.getElementById(id).classList.toggle("open");
}

function updateCart() {
  document.getElementById("cartCount").textContent = cartCount;
  document.getElementById("cartTotal").textContent = totalPrice.toLocaleString("ru-RU") + " so'm";
}

function addToCart(button) {
  cartCount = cartCount + 1;
  totalPrice = totalPrice + Number(button.getAttribute("data-price"));
  updateCart();
  showMessage(button.getAttribute("data-name") + " savatchaga qo'shildi", "success");
}

function orderNow() {
  if (cartCount === 0) {
    showMessage("Savatcha bo'sh", "error");
    return;
  }
  cartCount = 0;
  totalPrice = 0;
  updateCart();
  toggleMenu("cart");
  showMessage("Buyurtmangiz qabul qilindi", "success");
}

var loadTime = 5000 + Math.floor(Math.random() * 3001);
document.getElementById("barFill").style.animationDuration = loadTime + "ms";
document.body.classList.add("locked");
setTimeout(function () {
  document.getElementById("loader").classList.add("hidden");
  document.body.classList.remove("locked");
}, loadTime);

document.addEventListener("error", function (event) {
  if (event.target.tagName === "IMG") {
    event.target.style.visibility = "hidden";
    event.target.parentElement.classList.add("no-image");
  }
}, true);