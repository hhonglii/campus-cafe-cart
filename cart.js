// Campus Café: the menu, the order and its total.
const menu = [
  { id: "latte", name: "Latte", price: 4.5 },
  { id: "bagel", name: "Bagel", price: 3 },
  { id: "muffin", name: "Blueberry muffin", price: 3.5 },
  { id: "tea", name: "Iced lemon tea", price: 2.5 },
];

const cart = [];

function addItem(id) {
  const line = cart.find((item) => item.id === id);
  if (line) {
    line.qty += 1;
  } else {
    const dish = menu.find((item) => item.id === id);
    cart.push({ ...dish, qty: 1 });
  }
  render();
}

function cartTotal(items) {
  let total = 0;
  for (let i = 0; i < items.length; i++) {
    total += items[i].price * items[i].qty;
  }
  return total;
}

function changeQty(id, step) {
  const line = cart.find((item) => item.id === id);
  line.qty += step;
  render();
}

function renderMenu() {
  const menuList = document.querySelector("#menu");
  menuList.innerHTML = "";
  for (const item of menu) {
    const li = document.createElement("li");
    const name = document.createElement("span");
    name.textContent = `${item.name} ($${item.price.toFixed(2)})`;
    const button = document.createElement("button");
    button.textContent = "Add";
    button.addEventListener("click", () => addItem(item.id));
    li.append(name, button);
    menuList.append(li);
  }
}

function renderCart() {
  const cartList = document.querySelector("#cart");
  cartList.innerHTML = "";
  if (cart.length === 0) {
    const li = document.createElement("li");
    li.className = "empty";
    li.textContent = "Your order is empty. Add something from the menu.";
    cartList.append(li);
    return;
  }
  for (const item of cart) {
    const li = document.createElement("li");
    const name = document.createElement("span");
    name.textContent = `${item.name} x ${item.qty}`;
    const less = document.createElement("button");
    less.textContent = "-";
    less.setAttribute("aria-label", `One less ${item.name}`);
    less.addEventListener("click", () => changeQty(item.id, -1));
    const more = document.createElement("button");
    more.textContent = "+";
    more.setAttribute("aria-label", `One more ${item.name}`);
    more.addEventListener("click", () => changeQty(item.id, 1));
    li.append(name, less, more);
    cartList.append(li);
  }
}

function render() {
  renderMenu();
  renderCart();
  document.querySelector("#total").textContent = `$${cartTotal(cart).toFixed(2)}`;
}

render();
