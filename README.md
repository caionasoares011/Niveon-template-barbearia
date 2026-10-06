# Template Barbearia — Niveon

Site estático (HTML + CSS + JavaScript puro, sem backend e sem dependências).
Demo: **NOIR BARBER**. Para abrir, dê dois cliques em `index.html`.

## Estrutura

```
/
├── index.html        Estrutura e SEO (não contém dados do cliente, exceto title/description)
├── css/style.css     Visual: cores, fontes e layout
├── js/script.js      CONFIG do cliente (topo do arquivo) + código que monta a página
├── images/           logo.png + arquivos reserva (hero.jpg, barber-1.jpg … barber-4.jpg)
└── README.md
```

## Fluxo para um novo cliente

1. Duplique a pasta e renomeie (ex.: `cliente-fulano`).
2. Edite o bloco `CONFIG` no topo de `js/script.js`.
3. Troque `<title>` e `<meta name="description">` (e as tags `og:`) no `<head>` do `index.html`.
4. Substitua as imagens em `images/` (mantendo os nomes) e a logo.
5. Ajuste as cores em `css/style.css` (bloco `:root`).
6. Teste no celular e publique.

## Onde editar cada informação

| O quê | Onde |
|---|---|
| Nome, slogan, logo | `CONFIG.brand` |
| WhatsApp (só números, com 55 + DDD) | `CONFIG.contact.whatsapp` |
| Telefone, Instagram, endereço | `CONFIG.contact` |
| Google Maps | `CONFIG.contact.mapsEmbedUrl` |
| Horário de funcionamento | `CONFIG.hours` |
| Mensagens enviadas no WhatsApp | `CONFIG.whatsappMessages` |
| Textos do hero, sobre, CTA, diferenciais | `CONFIG.hero`, `.about`, `.cta`, `.features` |
| Serviços e preços | `CONFIG.services.items` |
| Depoimentos | `CONFIG.testimonials.items` |
| Todas as fotos (hero, sobre, galeria, serviços, CTA) | `CONFIG.images` |
| Ordem e legendas da galeria | `CONFIG.gallery.items` |
| Itens do menu | `CONFIG.nav` |
| Cores e fontes | `css/style.css` → `:root` |
| Title e description (SEO) | `index.html` → `<head>` |

## Imagens e logo

**Todas as fotos ficam em um único lugar:** `CONFIG.images` em `js/script.js`. Cada foto tem uma chave (`hero`, `about`, `cta`, `cut`, `beard`, `working`, `ambiance`, `detail`, `client`), e as seções só apontam para a chave. Trocar uma foto = mudar o `src` e o `alt` dessa chave. Nada mais.

```js
hero: { src: "images/minha-foto-hero.jpg",     // arquivo local (ou uma URL)
        local: "images/hero.jpg",               // reserva, usada se o src falhar
        alt: "Descrição da foto" }
```

| Chave | Onde aparece |
|---|---|
| `hero` | Fundo da primeira tela |
| `about` | Seção Sobre (moldura em arco) |
| `cta` | Fundo da chamada final |
| `cut`, `beard`, `working`, `detail`, `client` | Galeria **e** cards de serviço |
| `ambiance` | Galeria |

- **Galeria:** a ordem e as legendas ficam em `CONFIG.gallery.items`; cada item aponta para uma chave de `CONFIG.images`. Para ter mais fotos, crie novas chaves e novos itens.
- **Serviços:** cada serviço aponta para uma chave em `image:`.
- **Para usar fotos do cliente:** coloque os arquivos em `images/`, troque os `src` por `"images/arquivo.jpg"` e apague a linha `photoNote` do rodapé.
- **Tamanhos recomendados:** hero 1920×1080 · demais fotos 900 a 1200 px de largura · JPG, qualidade ~80, idealmente abaixo de 300 KB.
- **Logo:** `images/logo.png`, fundo transparente, proporção ~3:1 (altura exibida: 46 px). Caminho em `CONFIG.brand.logo`.
- **Tom das fotos:** o CSS aplica o mesmo tratamento a todas (`--photo-grade` no `:root`), para fotos de fontes diferentes parecerem do mesmo ensaio. Para desligar, use `filter: none` nessa variável.

### Fotos de demonstração usadas

As fotos vêm do Unsplash (licença Unsplash) e do Pexels (licença Pexels), ambas gratuitas para uso comercial. São só para demonstração: troque pelas fotos reais do cliente antes de entregar. Se uma foto externa não carregar (sem internet, link removido), o site usa o arquivo reserva da pasta `images/`.

## Cores

No `:root` de `css/style.css`:

- `--color-bg`: fundo · `--color-surface`: cards
- `--color-accent`, `--color-accent-light`, `--color-accent-dark`: dourado (troque as três para mudar a cor de destaque)
- `--color-on-accent`: cor do texto sobre botões de destaque
- `--font-display` e `--font-body`: fontes (se trocar, atualize também o link do Google Fonts no `index.html`)

## WhatsApp, endereço, serviços e preços

- **WhatsApp:** `CONFIG.contact.whatsapp`, em um único lugar. Todos os botões (menu, hero, serviços, CTA, rodapé, botão flutuante) usam esse valor. Cada serviço envia uma mensagem já com o nome do serviço.
- **Endereço:** `CONFIG.contact.address` (`line1` e `line2`). O link "Abrir no Google Maps" é gerado a partir dele.
- **Serviços:** adicione, remova ou edite itens em `CONFIG.services.items`. O preço é um número (`55` vira R$ 55,00); `featured: true` destaca o card.
- **Mapa:** no Google Maps, escolha Compartilhar → Incorporar um mapa → copie só o valor do `src` do iframe para `mapsEmbedUrl`.

## Observações

- Os textos são montados por JavaScript. Os buscadores modernos leem esse conteúdo, mas `title` e `description` ficam no HTML de propósito.
- As avaliações do template são fictícias e vêm com o aviso "Avaliações de demonstração". Ao usar avaliações reais, deixe `testimonials.note` vazio.
- Para publicar: qualquer hospedagem estática (Netlify, Vercel, GitHub Pages, Cloudflare Pages ou hospedagem comum). Depois de publicar, troque `og:image` por uma URL completa.
