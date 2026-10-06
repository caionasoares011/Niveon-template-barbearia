/* ==========================================================================
   TEMPLATE BARBEARIA — script.js
   --------------------------------------------------------------------------
   PARTE 1  CONFIG  → tudo que muda de cliente para cliente (edite só aqui)
   PARTE 2  Motor   → lê o CONFIG e monta a página (não precisa mexer)
   ========================================================================== */


/* ==========================================================================
   PARTE 1 — CONFIGURAÇÃO DO CLIENTE
   ========================================================================== */
/* Atalhos para montar URLs de bancos de imagens gratuitos (só o ID muda). */
const unsplash = (id, w = 1200) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=75&w=${w}`;
const pexels   = (id, w = 1200) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

const CONFIG = {

  /* ----- Marca ----- */
  brand: {
    name: "NOIR BARBER",
    tagline: "Tradição, precisão e atitude",
    logo: "images/logo.png"            // ← LOGO: troque o arquivo em /images ou o caminho aqui
  },


  /* ==========================================================================
     IMAGENS — REGISTRO ÚNICO. Todas as fotos do site são definidas aqui.
       src   → foto exibida (URL externa OU arquivo local, ex.: "images/hero.jpg")
       local → arquivo reserva em /images, usado se o src não carregar
       alt   → texto alternativo (acessibilidade e SEO)
       credit→ créditos (apenas informativo)
     Para trocar uma foto: mude só o "src" (e o "alt") da chave correspondente.
     As seções referenciam estas chaves, então nada mais precisa ser alterado.
     ========================================================================== */
  images: {
    hero:     { src: unsplash("1672642150228-3fcd5826ec26", 1920), local: "images/hero.jpg",
                alt: "Barbeiro realizando um corte de cabelo em cliente na barbearia",
                credit: "Redd Francisco / Unsplash" },
    about:    { src: unsplash("1702865272115-5afdbae975af", 1000), local: "images/barber-2.jpg",
                alt: "Interior da barbearia com cadeira de couro e espelho",
                credit: "Redd Francisco / Unsplash" },
    cta:      { src: unsplash("1621645582931-d1d3e6564943", 1600), local: "images/barber-4.jpg",
                alt: "Cadeira de barbeiro preta e prata na barbearia",
                credit: "Joshua Lawrence / Unsplash" },
    cut:      { src: unsplash("1634480257305-7f4ca3582e6a", 900),  local: "images/barber-1.jpg",
                alt: "Cliente recebendo um corte masculino das mãos do barbeiro",
                credit: "Hair Spies / Unsplash" },
    beard:    { src: unsplash("1494873446894-adbfecfc407a", 900),  local: "images/barber-2.jpg",
                alt: "Barbeiro aparando a barba de um cliente, em preto e branco",
                credit: "Adam Sherez / Unsplash" },
    working:  { src: pexels("7697642", 900),                       local: "images/barber-3.jpg",
                alt: "Barbeiro concentrado realizando um corte de cabelo",
                credit: "Pexels (foto 7697642)" },
    ambiance: { src: unsplash("1621645582931-d1d3e6564943", 900),  local: "images/barber-4.jpg",
                alt: "Ambiente da barbearia com cadeira de barbeiro",
                credit: "Joshua Lawrence / Unsplash" },
    detail:   { src: unsplash("1634484144058-fbe30f770ca1", 900),  local: "images/barber-3.jpg",
                alt: "Detalhe de uma navalha de barbeiro",
                credit: "Hair Spies / Unsplash" },
    client:   { src: pexels("7697648", 900),                       local: "images/barber-1.jpg",
                alt: "Barbeiro escovando a cabeça do cliente após o corte",
                credit: "Pexels (foto 7697648)" }
  },

  /* ----- Contato, endereço e redes ----- */
  contact: {
    whatsapp: "5511999990000",         // ← WHATSAPP: só números, com 55 + DDD + número
    whatsappDisplay: "(11) 99999-0000",
    phone: "",                         // telefone fixo opcional (deixe "" para ocultar)
    phoneDisplay: "",
    instagram: "noirbarber",           // ← INSTAGRAM: usuário, sem @
    address: {                         // ← ENDEREÇO
      line1: "Rua das Acácias, 128 – Centro",
      line2: "Cidade Exemplo – UF, 00000-000"
    },
    mapsEmbedUrl: "",                  // ← MAPA: cole aqui o link "Incorporar mapa" (src do iframe) do Google Maps
    mapsLink: ""                       // link para abrir o Maps (se vazio, é gerado a partir do endereço)
  },

  /* ----- Horário de funcionamento ----- */
  hours: [
    { days: "Segunda a sexta", time: "09h às 20h" },
    { days: "Sábado",          time: "08h às 18h" },
    { days: "Domingo",         time: "Fechado" }
  ],

  /* ----- Mensagens do WhatsApp ({brand} e {service} são substituídos automaticamente) ----- */
  whatsappMessages: {
    default: "Olá! Gostaria de agendar um horário na {brand}.",
    service: "Olá! Gostaria de agendar: {service}. Quais horários estão disponíveis?"
  },

  /* ----- Formato de preço ----- */
  currency: { locale: "pt-BR", code: "BRL" },

  /* ----- Menu (usado no topo e no rodapé) ----- */
  nav: [
    { label: "Início",     href: "#inicio" },
    { label: "Sobre",      href: "#sobre" },
    { label: "Serviços",   href: "#servicos" },
    { label: "Galeria",    href: "#galeria" },
    { label: "Avaliações", href: "#avaliacoes" },
    { label: "Contato",    href: "#contato" }
  ],
  header: { cta: "Agendar horário" },

  /* ----- Hero ----- */
  hero: {
    title: "Corte preciso.\nPresença inconfundível.",   // \n = quebra de linha
    subtitle: "Barbearia para quem leva estilo a sério. Atendimento com hora marcada, no seu tempo e sem pressa.",
    primaryCta: "Agendar pelo WhatsApp",
    secondaryCta: "Conhecer os serviços"
  },

  /* ----- Sobre ----- */
  about: {
    title: "Barbearia clássica, execução de ateliê.",
    paragraphs: [
      "A Noir Barber nasceu da vontade de devolver ao cuidado masculino o tempo que ele merece. Cada atendimento começa numa conversa, passa pela técnica e termina no acabamento de navalha.",
      "Unimos o ritual da barbearia tradicional a um ambiente reservado, produtos profissionais e agenda organizada, para que você chegue no horário e saia com a imagem que veio buscar."
    ],
    stats: [
      { value: "10",    label: "anos de tradição" },
      { value: "+12 mil", label: "atendimentos" },
      { value: "4,9",   label: "nota média dos clientes" }
    ]
  },

  /* ----- Serviços e preços (preço em número; "featured" destaca o card) ----- */
  services: {
    title: "Serviços e valores",
    intro: "Preços claros. Todo atendimento inclui acabamento na navalha e finalização com produtos profissionais.",
    items: [
      { name: "Corte masculino", image: "cut", description: "Tesoura ou máquina, com acabamento na navalha e finalização.", price: 55 },
      { name: "Barba", image: "beard",           description: "Modelagem com toalha quente, navalha e hidratação.",          price: 45 },
      { name: "Corte + barba", image: "working",   description: "O serviço completo para sair alinhado da cabeça ao queixo.",  price: 90 },
      { name: "Sobrancelha", image: "detail",     description: "Alinhamento com navalha ou pinça, com resultado natural.",    price: 20 },
      { name: "Combo premium", image: "client",   description: "Corte, barba, sobrancelha, hidratação facial e bebida cortesia.", price: 140, featured: true, badge: "Mais pedido" }
    ],
    bookLabel: "Agendar"
  },

  /* ----- Galeria (troque os arquivos em /images ou os caminhos aqui) ----- */
  gallery: {
    title: "O trabalho fala por si",
    intro: "Cortes, barbas e o ambiente onde tudo acontece.",
    instagramCta: "Ver mais no Instagram",
    items: [                                   // cada "image" é uma chave de CONFIG.images
      { image: "cut",      caption: "Corte masculino" },
      { image: "beard",    caption: "Barba" },
      { image: "working",  caption: "Barbeiro em ação" },
      { image: "ambiance", caption: "Nosso ambiente" },
      { image: "detail",   caption: "Detalhe de acabamento" },
      { image: "client",   caption: "Cliente e barbeiro" }
    ]
  },

  /* ----- Diferenciais (ícones disponíveis: scissors, gem, user, sparkles, clock, star) ----- */
  features: {
    title: "Por que escolher a Noir Barber",
    items: [
      { icon: "scissors", title: "Profissionais especializados", text: "Barbeiros com formação e prática diária em cortes clássicos e modernos." },
      { icon: "gem",      title: "Ambiente premium",             text: "Espaço reservado, confortável e pensado para você relaxar durante o atendimento." },
      { icon: "user",     title: "Atendimento personalizado",    text: "Ouvimos o que você quer e indicamos o que funciona para o seu rosto e cabelo." },
      { icon: "sparkles", title: "Produtos de alta qualidade",   text: "Linhas profissionais para cabelo e barba, as mesmas que indicamos para o dia a dia." }
    ]
  },

  /* ----- Avaliações (fictícias neste template; troque pelas reais do cliente) ----- */
  testimonials: {
    title: "O que os clientes dizem",
    note: "Avaliações de demonstração.",   // deixe "" para ocultar o aviso quando usar avaliações reais
    items: [
      { name: "Rafael M.", detail: "Cliente há 3 anos",  rating: 5, text: "Pontualidade e acabamento impecáveis. Nunca esperei além do horário marcado e o corte sempre sai como eu pedi." },
      { name: "Bruno T.",  detail: "Combo premium",       rating: 5, text: "Ambiente muito bem cuidado e atendimento de primeira. A toalha quente na barba faz toda a diferença." },
      { name: "Lucas A.",  detail: "Corte + barba",       rating: 5, text: "Encontrei um barbeiro que entende o que eu quero sem eu precisar explicar duas vezes. Virei cliente fixo." },
      { name: "Gustavo P.", detail: "Cliente há 1 ano",   rating: 5, text: "Agendo pelo WhatsApp em um minuto e o resultado é sempre consistente. Recomendo para quem valoriza o detalhe." }
    ]
  },

  /* ----- Chamada final ----- */
  cta: {
    title: "Seu próximo corte já tem horário.",
    text: "Escolha o serviço, envie uma mensagem e confirmamos o seu horário em poucos minutos.",
    button: "Agendar pelo WhatsApp"
  },

  /* ----- Localização ----- */
  location: {
    title: "Venha nos visitar",
    mapsCta: "Abrir no Google Maps",
    mapPlaceholder: "O mapa será exibido aqui"
  },

  /* ----- Rodapé ----- */
  footer: {
    about: "Barbearia premium com hora marcada.",
    copyright: "© {year} {brand}. Todos os direitos reservados.",
    credit: { text: "", url: "" },      // crédito opcional do desenvolvedor; deixe vazio para ocultar
    photoNote: "Fotos de demonstração: Unsplash e Pexels."   // apague ao usar fotos do cliente
  },

  fab: { label: "Agendar pelo WhatsApp" }
};


/* ==========================================================================
   PARTE 2 — MOTOR (não precisa editar para trocar de cliente)
   ========================================================================== */

/* ---------- Ícones (SVG de linha, herdam a cor do texto) ---------- */
const ICONS = {
  whatsapp:  '<path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 20.5l1.7-5.4A8.4 8.4 0 1 1 21 11.5z"/><path d="M9 9.2c.2 2.2 2.6 4.6 4.9 5 .5-.1 1.2-.7 1.2-1.2l-1.7-.9-.8.6c-.9-.4-1.7-1.2-2.1-2.1l.6-.8-.9-1.7c-.6.1-1.2.7-1.2 1.1z"/>',
  instagram: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".6"/>',
  pin:       '<path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/>',
  clock:     '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
  phone:     '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/>',
  scissors:  '<circle cx="6" cy="6" r="3"/><path d="M8.12 8.12 12 12"/><path d="M20 4 8.12 15.88"/><circle cx="6" cy="18" r="3"/><path d="M14.8 14.8 20 20"/>',
  gem:       '<path d="M6 3h12l4 6-10 13L2 9z"/><path d="M11 3 8 9l4 13 4-13-3-6"/><path d="M2 9h20"/>',
  user:      '<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
  sparkles:  '<path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z"/><path d="M19 3v4M21 5h-4"/>',
  star:      '<path d="M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z"/>'
};

const icon = (name, cls = "icon") =>
  `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name] || ""}</svg>`;

/* ---------- Utilitários ---------- */
const $  = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
const get = (path) => path.split(".").reduce((o, k) => (o == null ? o : o[k]), CONFIG);

const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) =>
  ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

const fill = (tpl, vars = {}) =>
  tpl.replace(/\{(\w+)\}/g, (_, k) => (k in vars ? vars[k] : `{${k}}`));

const digits = (s) => String(s || "").replace(/\D/g, "");

const money = (n) =>
  new Intl.NumberFormat(CONFIG.currency.locale, { style: "currency", currency: CONFIG.currency.code }).format(n);

/* ---------- Links gerados a partir do CONFIG ---------- */
function whatsappUrl(service) {
  const tpl = service ? CONFIG.whatsappMessages.service : CONFIG.whatsappMessages.default;
  const msg = fill(tpl, { brand: CONFIG.brand.name, service: service || "" });
  return `https://wa.me/${digits(CONFIG.contact.whatsapp)}?text=${encodeURIComponent(msg)}`;
}

const instagramUrl = () => `https://instagram.com/${CONFIG.contact.instagram.replace(/^@/, "")}`;

function mapsUrl() {
  const c = CONFIG.contact;
  if (c.mapsLink) return c.mapsLink;
  const q = `${c.address.line1}, ${c.address.line2}`;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;
}

/* ---------- Blocos renderizados (listas) ---------- */
const renderers = {

  nav: () => CONFIG.nav.map((i) => `<li><a href="${esc(i.href)}">${esc(i.label)}</a></li>`).join(""),

  "footer-nav": () => CONFIG.nav.map((i) => `<li><a href="${esc(i.href)}">${esc(i.label)}</a></li>`).join(""),

  "about-paragraphs": () => CONFIG.about.paragraphs.map((p) => `<p>${esc(p)}</p>`).join(""),

  "about-stats": () => CONFIG.about.stats.map((s) =>
    `<div><dt>${esc(s.value)}</dt><dd>${esc(s.label)}</dd></div>`).join(""),

  services: () => CONFIG.services.items.map((s) => `
    <article class="service${s.featured ? " service--featured" : ""}">
      <div class="service__media">
        <img data-image="${esc(s.image)}" loading="lazy" decoding="async" width="900" height="560" alt="">
        ${s.badge ? `<span class="service__badge">${esc(s.badge)}</span>` : ""}
      </div>
      <div class="service__body">
        <h3>${esc(s.name)}</h3>
        <p>${esc(s.description)}</p>
        <div class="service__foot">
          <span class="service__price">${money(s.price)}</span>
          <a class="btn ${s.featured ? "btn--gold" : "btn--ghost"} btn--sm" href="${whatsappUrl(s.name)}" target="_blank" rel="noopener">
            ${esc(CONFIG.services.bookLabel)}<span class="visually-hidden"> ${esc(s.name)}</span>
          </a>
        </div>
      </div>
    </article>`).join(""),

  gallery: () => CONFIG.gallery.items.map((g) => `
    <figure class="shot">
      <img data-image="${esc(g.image)}" loading="lazy" decoding="async" width="900" height="900" alt="">
      ${g.caption ? `<figcaption>${esc(g.caption)}</figcaption>` : ""}
    </figure>`).join(""),

  features: () => CONFIG.features.items.map((f) => `
    <li class="feature">
      <span class="feature__icon">${icon(f.icon)}</span>
      <h3>${esc(f.title)}</h3>
      <p>${esc(f.text)}</p>
    </li>`).join(""),

  testimonials: () => CONFIG.testimonials.items.map((t) => `
    <figure class="review">
      <div class="review__stars" role="img" aria-label="${t.rating} de 5 estrelas">${icon("star", "icon icon--star").repeat(t.rating)}</div>
      <blockquote><p>${esc(t.text)}</p></blockquote>
      <figcaption><strong>${esc(t.name)}</strong><span>${esc(t.detail)}</span></figcaption>
    </figure>`).join(""),

  "contact-list": () => {
    const c = CONFIG.contact;
    const rows = [];
    rows.push(`<li>${icon("pin")}<div><h3>Endereço</h3><p>${esc(c.address.line1)}<br>${esc(c.address.line2)}</p></div></li>`);
    rows.push(`<li>${icon("clock")}<div><h3>Horário de funcionamento</h3><dl class="hours">${
      CONFIG.hours.map((h) => `<div><dt>${esc(h.days)}</dt><dd>${esc(h.time)}</dd></div>`).join("")
    }</dl></div></li>`);
    rows.push(`<li>${icon("whatsapp")}<div><h3>WhatsApp</h3><p><a href="${whatsappUrl()}" target="_blank" rel="noopener">${esc(c.whatsappDisplay)}</a></p></div></li>`);
    if (c.phone) rows.push(`<li>${icon("phone")}<div><h3>Telefone</h3><p><a href="tel:+${digits(c.phone)}">${esc(c.phoneDisplay || c.phone)}</a></p></div></li>`);
    rows.push(`<li>${icon("instagram")}<div><h3>Instagram</h3><p><a href="${instagramUrl()}" target="_blank" rel="noopener">@${esc(c.instagram.replace(/^@/, ""))}</a></p></div></li>`);
    return rows.join("");
  },

  map: () => CONFIG.contact.mapsEmbedUrl
    ? `<iframe src="${esc(CONFIG.contact.mapsEmbedUrl)}" title="Mapa com a localização da ${esc(CONFIG.brand.name)}" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe>`
    : `<div class="map__placeholder">${icon("pin", "icon icon--lg")}<p>${esc(CONFIG.location.mapPlaceholder)}</p></div>`,

  "footer-social": () => `
    <li><a href="${instagramUrl()}" target="_blank" rel="noopener" aria-label="Instagram">${icon("instagram")}</a></li>
    <li><a href="${whatsappUrl()}" target="_blank" rel="noopener" aria-label="WhatsApp">${icon("whatsapp")}</a></li>`,

  copyright: () => esc(fill(CONFIG.footer.copyright, { year: new Date().getFullYear(), brand: CONFIG.brand.name })),

  credit: () => {
    const c = CONFIG.footer.credit;
    if (!c || !c.text) return "";
    return c.url ? `<a href="${esc(c.url)}" target="_blank" rel="noopener">${esc(c.text)}</a>` : esc(c.text);
  }
};

/* ---------- Aplicação do CONFIG no HTML ---------- */
function applyConfig() {
  // Textos simples: <el data-text="hero.title">
  $$("[data-text]").forEach((el) => {
    const v = get(el.dataset.text);
    if (v) el.textContent = v; else el.hidden = true;
  });

  // Atributo aria-label vindo do CONFIG
  $$("[data-aria]").forEach((el) => el.setAttribute("aria-label", get(el.dataset.aria)));

  // Ícones: <span data-icon="whatsapp">
  $$("[data-icon]").forEach((el) => { el.innerHTML = icon(el.dataset.icon); el.classList.add("icon-wrap"); });

  // Links: data-link="whatsapp | instagram | maps"
  $$("[data-link]").forEach((a) => {
    const type = a.dataset.link;
    a.href = type === "whatsapp" ? whatsappUrl() : type === "instagram" ? instagramUrl() : mapsUrl();
    a.target = "_blank";
    a.rel = "noopener";
  });

  // Blocos de lista: <div data-render="services">
  $$("[data-render]").forEach((el) => {
    const fn = renderers[el.dataset.render];
    if (fn) el.innerHTML = fn();
  });

  // Imagens: <img data-image="chave"> → busca src/alt em CONFIG.images (com arquivo reserva em /images)
  $$("img[data-image]").forEach((img) => {
    const item = CONFIG.images[img.dataset.image];
    if (!item) return;
    img.alt = item.alt || "";
    if (item.local && item.local !== item.src) {
      img.addEventListener("error", () => { img.src = item.local; }, { once: true });
    }
    img.src = item.src;
  });

  // Logo (com alternativa em texto se o arquivo não carregar)
  $$("img[data-logo]").forEach((img) => {
    img.alt = CONFIG.brand.name;
    img.addEventListener("error", () => {
      const span = document.createElement("span");
      span.className = "brand__text";
      span.textContent = CONFIG.brand.name;
      img.replaceWith(span);
    }, { once: true });
    img.src = CONFIG.brand.logo;
  });

  // Dados estruturados para o Google (negócio local)
  const ld = {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    name: CONFIG.brand.name,
    image: new URL(CONFIG.images.hero.src, location.href).href,
    telephone: "+" + digits(CONFIG.contact.whatsapp),
    address: { "@type": "PostalAddress", streetAddress: CONFIG.contact.address.line1, addressLocality: CONFIG.contact.address.line2 },
    sameAs: [instagramUrl()]
  };
  const tag = document.createElement("script");
  tag.type = "application/ld+json";
  tag.textContent = JSON.stringify(ld);
  document.head.appendChild(tag);
}

/* ---------- Comportamento: header, menu mobile, destaque do menu, botão flutuante ---------- */
function initInteractions() {
  const header = $("#header");
  const toggle = $("#menuToggle");
  const nav = $("#nav");
  const fab = $("#fab");
  const hero = $("#inicio");

  const onScroll = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 24);
    fab.classList.toggle("is-visible", window.scrollY > hero.offsetHeight * 0.6);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  const setMenu = (open) => {
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
    nav.classList.toggle("is-open", open);
    document.body.classList.toggle("menu-open", open);
  };
  toggle.addEventListener("click", () => setMenu(toggle.getAttribute("aria-expanded") !== "true"));
  nav.addEventListener("click", (e) => { if (e.target.closest("a")) setMenu(false); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") setMenu(false); });
  window.matchMedia("(min-width: 960px)").addEventListener("change", (e) => { if (e.matches) setMenu(false); });

  // Marca no menu a seção que está na tela
  const links = $$(".nav__list a");
  const map = new Map(links.map((a) => [a.getAttribute("href").slice(1), a]));
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      links.forEach((a) => a.removeAttribute("aria-current"));
      const a = map.get(en.target.id);
      if (a) a.setAttribute("aria-current", "true");
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  map.forEach((_, id) => { const s = document.getElementById(id); if (s) io.observe(s); });
}

document.addEventListener("DOMContentLoaded", () => {
  applyConfig();
  initInteractions();
});
