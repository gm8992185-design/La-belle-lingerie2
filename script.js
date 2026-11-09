// CONFIGURAÇÃO: substitua pelo número da loja, com código do país e DDD.
// Exemplo: 5511999999999
const WHATSAPP_NUMBER = "5500000000000";

const products = [
  { id: 1, name: "Conjunto Delicata", category: "Conjuntos", price: 89.90, tag: "Mais vendido" },
  { id: 2, name: "Pijama Serena", category: "Pijamas", price: 119.90, tag: "Conforto" },
  { id: 3, name: "Body Elegance", category: "Bodies", price: 99.90, tag: "Novidade" },
  { id: 4, name: "Camisola Belle", category: "Camisolas", price: 109.90, tag: "Especial" },
  { id: 5, name: "Conjunto Clássico", category: "Conjuntos", price: 79.90, tag: "Favorito" },
  { id: 6, name: "Pijama Aconchego", category: "Pijamas", price: 129.90, tag: "Conforto" },
  { id: 7, name: "Body Harmonia", category: "Bodies", price: 94.90, tag: "Elegante" },
  { id: 8, name: "Camisola Serena", category: "Camisolas", price: 114.90, tag: "Delicado" }
];

let cart = [];
const money = value => value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

function renderProducts() {
  const search = document.getElementById("searchInput").value.toLowerCase().trim();
  const category = document.getElementById("categoryFilter").value;
  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(search) &&
    (category === "todos" || p.category === category)
  );
  const grid = document.getElementById("productGrid");
  if (!filtered.length) {
    grid.innerHTML = '<p class="empty-cart">Nenhum produto encontrado.</p>';
    return;
  }
  grid.innerHTML = filtered.map(p => `
    <article class="product-card">
      <div class="product-art">
        <span class="product-tag">${p.tag}</span>
      </div>
      <div class="product-info">
        <span class="product-category">${p.category}</span>
        <h3>${p.name}</h3>
        <p class="product-price">${money(p.price)}</p>
        <button class="add-button" data-add="${p.id}">Adicionar à sacola</button>
      </div>
    </article>
  `).join("");
}

function addToCart(id) {
  const product = products.find(p => p.id === id);
  const found = cart.find(item => item.id === id);
  if (found) found.quantity += 1;
  else cart.push({ ...product, quantity: 1 });
  renderCart();
}

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  renderCart();
}

function renderCart() {
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  document.getElementById("cartCount").textContent = count;
  document.getElementById("cartTotal").textContent = money(total);
  const container = document.getElementById("cartItems");
  container.innerHTML = cart.length ? cart.map(item => `
    <div class="cart-line">
      <div><strong>${item.name}</strong>${item.quantity} × ${money(item.price)}</div>
      <button class="remove-item" data-remove="${item.id}">Remover</button>
    </div>
  `).join("") : '<p class="empty-cart">Sua sacola está vazia.</p>';
}

function openCart() {
  document.getElementById("cartDrawer").classList.add("open");
  document.getElementById("cartOverlay").classList.add("visible");
  document.getElementById("cartDrawer").setAttribute("aria-hidden", "false");
}
function closeCart() {
  document.getElementById("cartDrawer").classList.remove("open");
  document.getElementById("cartOverlay").classList.remove("visible");
  document.getElementById("cartDrawer").setAttribute("aria-hidden", "true");
}
function sendWhatsApp(message) {
  if (WHATSAPP_NUMBER === "5500000000000") {
    alert("Configure o número de WhatsApp da loja no arquivo script.js antes de receber pedidos.");
    return;
  }
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank", "noopener");
}

document.getElementById("productGrid").addEventListener("click", event => {
  const button = event.target.closest("[data-add]");
  if (button) addToCart(Number(button.dataset.add));
});
document.getElementById("cartItems").addEventListener("click", event => {
  const button = event.target.closest("[data-remove]");
  if (button) removeFromCart(Number(button.dataset.remove));
});
document.getElementById("searchInput").addEventListener("input", renderProducts);
document.getElementById("categoryFilter").addEventListener("change", renderProducts);
document.getElementById("openCart").addEventListener("click", openCart);
document.getElementById("closeCart").addEventListener("click", closeCart);
document.getElementById("cartOverlay").addEventListener("click", closeCart);
document.getElementById("checkoutButton").addEventListener("click", () => {
  if (!cart.length) {
    alert("Adicione pelo menos um produto à sacola.");
    return;
  }
  const lines = cart.map(item => `• ${item.name} — ${item.quantity} x ${money(item.price)}`);
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  sendWhatsApp(`Olá! Gostaria de confirmar este pedido na La Belle Lingerie:\n\n${lines.join("\n")}\n\nTotal: ${money(total)}\n\nPoderiam me informar as opções de pagamento e entrega?`);
});
document.getElementById("whatsappContact").addEventListener("click", event => {
  event.preventDefault();
  sendWhatsApp("Olá! Gostaria de conhecer os produtos da La Belle Lingerie.");
});
document.getElementById("menuToggle").addEventListener("click", () => {
  document.getElementById("mainNav").classList.toggle("open");
});
document.querySelectorAll("#mainNav a").forEach(link => link.addEventListener("click", () => {
  document.getElementById("mainNav").classList.remove("open");
}));
document.getElementById("year").textContent = new Date().getFullYear();

renderProducts();
renderCart();
