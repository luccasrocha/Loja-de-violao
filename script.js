// =========================================
// DADOS DOS PRODUTOS
// =========================================
const produtos = [
  {
    id: 1,
    nome: "Violão Clássico Nylon Studio",
    descricao: "Cordas de nylon, ideal para iniciantes e estudo de violão clássico.",
    preco: 899.9,
    categoria: "nylon",
    badge: "Mais vendido",
    imagem: "https://images.unsplash.com/photo-1541689592655-f5f52825a3b8?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    nome: "Violão Folk Aço Natural",
    descricao: "Cordas de aço, som encorpado e projeção para shows acústicos.",
    preco: 1249.0,
    categoria: "aco",
    badge: "Novo",
    imagem: "https://images.unsplash.com/photo-1558098329-a11cff621064?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    nome: "Violão Eletroacústico Cutaway",
    descricao: "Equipado com captador, pronto para plugar direto no amplificador.",
    preco: 1899.0,
    categoria: "eletro",
    badge: "Destaque",
    imagem: "https://images.unsplash.com/photo-1610557607773-51db1458e1c9?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    nome: "Violão Clássico Artesanal",
    descricao: "Tampo maciço e acabamento artesanal para um timbre quente.",
    preco: 1549.9,
    categoria: "nylon",
    badge: "",
    imagem: "https://images.unsplash.com/photo-1567771736315-133752f63a69?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    nome: "Violão Aço Dreadnought",
    descricao: "Corpo dreadnought, som potente para acompanhamento e dedilhado.",
    preco: 1699.0,
    categoria: "aco",
    badge: "",
    imagem: "https://images.unsplash.com/photo-1588690224648-20426ab6274a?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    nome: "Violão Eletroacústico Premium",
    descricao: "Equalizador embutido e cordas de aço para performances ao vivo.",
    preco: 2399.0,
    categoria: "eletro",
    badge: "Premium",
    imagem: "https://images.unsplash.com/photo-1547357812-4a336d835928?auto=format&fit=crop&w=800&q=80"
  }
];

// =========================================
// ESTADO
// =========================================
let carrinho = [];
let filtroAtual = "todos";

// =========================================
// ELEMENTOS
// =========================================
const productGrid = document.getElementById("productGrid");
const filtersEl = document.getElementById("filters");
const cartBtn = document.getElementById("cartBtn");
const cartCount = document.getElementById("cartCount");
const cartModal = document.getElementById("cartModal");
const cartClose = document.getElementById("cartClose");
const cartList = document.getElementById("cartList");
const cartTotal = document.getElementById("cartTotal");
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
const toast = document.getElementById("toast");
const contactForm = document.getElementById("contactForm");

// =========================================
// FORMATAÇÃO DE MOEDA
// =========================================
function formatarPreco(valor) {
  return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

// =========================================
// RENDERIZAR PRODUTOS
// =========================================
function renderizarProdutos() {
  const lista = filtroAtual === "todos"
    ? produtos
    : produtos.filter(p => p.categoria === filtroAtual);

  productGrid.innerHTML = lista.map(produto => `
    <article class="product-card" data-id="${produto.id}">
      <div class="product-card__image-wrap">
        ${produto.badge ? `<span class="product-card__badge">${produto.badge}</span>` : ""}
        <img src="${produto.imagem}" alt="${produto.nome}" loading="lazy">
      </div>
      <div class="product-card__body">
        <h3 class="product-card__name">${produto.nome}</h3>
        <p class="product-card__desc">${produto.descricao}</p>
        <div class="product-card__footer">
          <span class="product-card__price">${formatarPreco(produto.preco)}</span>
          <button class="product-card__add" data-id="${produto.id}">Adicionar</button>
        </div>
      </div>
    </article>
  `).join("");
}

// =========================================
// FILTROS
// =========================================
filtersEl.addEventListener("click", (e) => {
  const btn = e.target.closest(".filter-btn");
  if (!btn) return;

  filtroAtual = btn.dataset.filter;

  filtersEl.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("is-active"));
  btn.classList.add("is-active");

  renderizarProdutos();
});

// =========================================
// CARRINHO
// =========================================
productGrid.addEventListener("click", (e) => {
  const btn = e.target.closest(".product-card__add");
  if (!btn) return;

  const id = Number(btn.dataset.id);
  const produto = produtos.find(p => p.id === id);
  if (!produto) return;

  carrinho.push(produto);
  atualizarCarrinho();
  mostrarToast(`${produto.nome} adicionado ao carrinho`);
});

function atualizarCarrinho() {
  cartCount.textContent = carrinho.length;

  cartList.innerHTML = carrinho.map((item, index) => `
    <li>
      <span>${item.nome}</span>
      <span>${formatarPreco(item.preco)}</span>
    </li>
  `).join("") || `<li><span>Seu carrinho está vazio</span></li>`;

  const total = carrinho.reduce((soma, item) => soma + item.preco, 0);
  cartTotal.textContent = formatarPreco(total);
}

cartBtn.addEventListener("click", () => {
  cartModal.classList.add("is-open");
});

cartClose.addEventListener("click", () => {
  cartModal.classList.remove("is-open");
});

cartModal.addEventListener("click", (e) => {
  if (e.target === cartModal) {
    cartModal.classList.remove("is-open");
  }
});

// =========================================
// MENU MOBILE
// =========================================
menuToggle.addEventListener("click", () => {
  mainNav.classList.toggle("is-open");
});

mainNav.querySelectorAll(".nav__link").forEach(link => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("is-open");
  });
});

// =========================================
// TOAST
// =========================================
let toastTimeout;
function mostrarToast(mensagem) {
  toast.textContent = mensagem;
  toast.classList.add("is-visible");

  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 2200);
}

// =========================================
// FORMULÁRIO DE CONTATO
// =========================================
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  mostrarToast("Mensagem enviada! Em breve entraremos em contato.");
  contactForm.reset();
});

// =========================================
// INICIALIZAÇÃO
// =========================================
renderizarProdutos();
atualizarCarrinho();
