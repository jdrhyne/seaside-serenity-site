const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');
const utilityActions = document.querySelector('.utility-actions');
const year = document.getElementById('year');

const productOrder = [
  'seaside-sunset-tee',
  'yellow-sun-tee',
  'white-polka-dots-tee',
  'catamaran-sunrise-hoodie',
  'gray-bow-sweatshirt',
  'fish-out-of-the-water-tote',
];

const productCatalog = {
  'seaside-sunset-tee': {
    name: 'Seaside Sunset Tee',
    type: 'Tee',
    price: '$25 target',
    blank: 'Light tee placeholder',
    lede: 'A calm sunset tee with soft bands of sea blue, peach, and warm light. This preview is about the overall feeling and front placement, not the final print file yet.',
    garmentClass: 'garment-tee shell-foam',
    artClass: 'design-sunset',
    designLabel: 'sunset wash',
    garmentTag: 'front art',
    blankNote: 'V1 assumes a light Bella + Canvas-style tee with one centered front print and no extra placements.',
    laterNote: 'If this one stays in the first drop, the later version can test a back-neck detail or a second blank color after samples.',
    pills: ['placeholder preview', 'calm color story', 'front-only v1'],
    focus: [
      'Does the sunset feel calm and dreamy instead of too loud or dramatic?',
      'Should the front artwork sit a little higher, lower, or stay centered?',
      'Would you want this on bright white first, or a softer creamy blank?',
    ],
    palette: [
      { name: 'Coral sky', className: 'swatch-coral' },
      { name: 'Sea blue', className: 'swatch-sea' },
      { name: 'Warm cream', className: 'swatch-cream' },
    ],
    questions: [
      'What is your favorite part of this sunset idea?',
      'Should the artwork feel bigger, smaller, or exactly this size?',
      'Does this still feel peaceful enough for Seaside Serenity?',
      'Would you keep this in the first drop no matter what?',
    ],
  },
  'yellow-sun-tee': {
    name: 'Yellow Sun Tee',
    type: 'Tee',
    price: '$25 target',
    blank: 'Bright white tee placeholder',
    lede: 'This is the simplest piece in the first drop on purpose: one sunny icon, one clear feeling, and enough brightness to feel instantly happy without getting noisy.',
    garmentClass: 'garment-tee shell-sun',
    artClass: 'design-yellow',
    designLabel: 'sun burst',
    garmentTag: 'simple icon',
    blankNote: 'V1 is one front print on a white tee so the yellow stays clean and high-contrast.',
    laterNote: 'A later version could split the idea into a small chest sun and a larger back graphic, but that should wait.',
    pills: ['placeholder preview', 'simple first icon', 'check the brightness'],
    focus: [
      'Does the simple sun already feel strong enough, or does it need more detail?',
      'Is the yellow warm and cheerful, or should it shift softer?',
      'Does this read as playful boutique style instead of a generic summer tee?',
    ],
    palette: [
      { name: 'Golden yellow', className: 'swatch-sun' },
      { name: 'Sky blue', className: 'swatch-sky' },
      { name: 'Soft white', className: 'swatch-foam' },
    ],
    questions: [
      'Would you wear the simple sun, or do you want more detail?',
      'Does this one need more blue, more yellow, or less of both?',
      'Should the sun sit higher on the shirt?',
      'Does this feel like one of the strongest six pieces?',
    ],
  },
  'white-polka-dots-tee': {
    name: 'White Polka Dots Tee',
    type: 'Tee',
    price: '$25 target',
    blank: 'Front-print tee placeholder',
    lede: 'This preview uses a front-only polka-dot composition instead of a full all-over pattern. That keeps the product realistic for a first launch while preserving the playful spirit of the original name.',
    garmentClass: 'garment-tee shell-sky',
    artClass: 'design-dots',
    designLabel: 'dot cluster',
    garmentTag: 'front-only v1',
    blankNote: 'V1 keeps the dots on the front panel only so the product stays easy to produce on a standard tee blank.',
    laterNote: 'If the family still loves the pattern idea after launch, a denser or wraparound version can come later with more production planning.',
    pills: ['placeholder preview', 'safer v1 pattern', 'not all-over print'],
    focus: [
      'Does the front-only dot idea still feel fun enough?',
      'Should the dots be tighter, bigger, or more spread out?',
      'Does this feel classic and cheerful instead of too plain?',
    ],
    palette: [
      { name: 'Powder blue', className: 'swatch-powder' },
      { name: 'Soft sand', className: 'swatch-sand' },
      { name: 'Cream dots', className: 'swatch-cream' },
    ],
    questions: [
      'Would you rather keep this front-only or dream bigger later?',
      'Are the dots sweet enough, or do they need another small detail?',
      'Does this still feel like White Polka Dots even without all-over coverage?',
      'Would this be a yes for launch one?',
    ],
  },
  'catamaran-sunrise-hoodie': {
    name: 'Catamaran Sunrise Hoodie',
    type: 'Hoodie',
    price: '$20 sketch price',
    blank: 'Light hoodie placeholder',
    lede: 'This preview leans into soft sunrise colors and a tiny catamaran moment. The goal is to check whether the hoodie already feels cozy and special before the art becomes fully detailed.',
    garmentClass: 'garment-hoodie shell-sand',
    artClass: 'design-catamaran',
    designLabel: 'sunrise sail',
    garmentTag: 'center front',
    blankNote: 'V1 assumes a light pullover hoodie with one centered front print and no sleeve decoration yet.',
    laterNote: 'A later version could add a sleeve sun or a back-neck detail, but only after the family likes the overall mood.',
    pills: ['placeholder preview', 'cozy sunrise piece', 'check the sail idea'],
    focus: [
      'Does the sunrise sail idea feel clear enough on a hoodie?',
      'Should the art be lower, higher, or wider across the chest?',
      'Does this feel warm and peaceful instead of too sporty?',
    ],
    palette: [
      { name: 'Peach light', className: 'swatch-peach' },
      { name: 'Sea mist', className: 'swatch-sea' },
      { name: 'Sand blank', className: 'swatch-sand' },
    ],
    questions: [
      'Is the catamaran part easy to understand or too subtle?',
      'Would you want this on a sand hoodie or a softer sky color?',
      'Should this one stay extra simple or get a little more detail later?',
      'Does this feel like a first-drop favorite?',
    ],
  },
  'gray-bow-sweatshirt': {
    name: 'Gray Bow Sweatshirt',
    type: 'Sweatshirt',
    price: '$30 target',
    blank: 'Sport grey sweatshirt placeholder',
    lede: 'This is the quietest piece in the first drop. The bow should feel sweet, polished, and calm, not overly fancy and not too plain.',
    garmentClass: 'garment-sweatshirt shell-grey',
    artClass: 'design-bow',
    designLabel: 'soft bow',
    garmentTag: 'quiet favorite',
    blankNote: 'V1 assumes a sport-grey crewneck with one front bow graphic and no extra decoration.',
    laterNote: 'Embroidery and premium finishing can wait until after family review, samples, and a real launch path exist.',
    pills: ['placeholder preview', 'sport grey mood', 'bow scale review'],
    focus: [
      'Does the bow feel sweet and boutique enough already?',
      'Should the bow sit smaller at the chest, or stay as the main front graphic?',
      'Does the grey feel soft and polished, or too plain?',
    ],
    palette: [
      { name: 'Soft grey', className: 'swatch-grey' },
      { name: 'Ribbon blush', className: 'swatch-blush' },
      { name: 'Sea-blue accent', className: 'swatch-sky' },
    ],
    questions: [
      'Would you wear this exactly as a quiet piece, or add another tiny detail?',
      'Should the bow be more delicate or a little bolder?',
      'Does the sweatshirt feel cozy enough for the collection?',
      'Should this stay in the first six?',
    ],
  },
  'fish-out-of-the-water-tote': {
    name: 'Fish Out of the Water Tote',
    type: 'Tote',
    price: '$30 target',
    blank: 'Natural tote placeholder',
    lede: 'This preview is about a playful fish icon on a natural tote. It should feel quirky, giftable, and still part of the same calm coastal world as the apparel.',
    garmentClass: 'garment-tote shell-canvas',
    artClass: 'design-fish',
    designLabel: 'fish charm',
    garmentTag: 'front print',
    blankNote: 'V1 is a one-sided natural tote with one fish graphic and no back print.',
    laterNote: 'A later version can test a heavier tote, a second-side print, or a small slogan on the back.',
    pills: ['placeholder preview', 'natural tote idea', 'check the charm'],
    focus: [
      'Does the fish feel memorable and playful enough?',
      'Should the graphic sit higher on the tote or stay centered?',
      'Does this still feel coastal boutique instead of novelty gift-shop?',
    ],
    palette: [
      { name: 'Canvas', className: 'swatch-canvas' },
      { name: 'Sea blue', className: 'swatch-sea' },
      { name: 'Sunny gold', className: 'swatch-sun' },
    ],
    questions: [
      'Would you carry this tote as-is, or does it need one more detail?',
      'Should the fish be sweeter, funnier, or calmer?',
      'Does the natural tote color feel right for this one?',
      'Should this accessory definitely stay in the first drop?',
    ],
  },
};

if (year) {
  year.textContent = new Date().getFullYear();
}

if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    const open = siteNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(open));
    if (utilityActions) {
      utilityActions.classList.toggle('open', open);
    }
  });
}

if (siteNav) {
  siteNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      siteNav.classList.remove('open');
      navToggle?.setAttribute('aria-expanded', 'false');
      utilityActions?.classList.remove('open');
    });
  });
}

function setText(id, value) {
  const element = document.getElementById(id);
  if (element) {
    element.textContent = value;
  }
}

function renderList(id, items) {
  const element = document.getElementById(id);
  if (!element) {
    return;
  }

  element.innerHTML = '';
  items.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = item;
    element.appendChild(li);
  });
}

function renderPills(id, items) {
  const element = document.getElementById(id);
  if (!element) {
    return;
  }

  element.innerHTML = '';
  items.forEach((item) => {
    const span = document.createElement('span');
    span.className = 'preview-pill';
    span.textContent = item;
    element.appendChild(span);
  });
}

function renderPalette(id, items) {
  const element = document.getElementById(id);
  if (!element) {
    return;
  }

  element.innerHTML = '';
  items.forEach((item) => {
    const swatch = document.createElement('div');
    swatch.className = 'swatch-card';

    const chip = document.createElement('span');
    chip.className = `swatch-chip ${item.className}`;
    chip.setAttribute('aria-hidden', 'true');

    const label = document.createElement('strong');
    label.textContent = item.name;

    swatch.append(chip, label);
    element.appendChild(swatch);
  });
}

function renderQuestions(id, items) {
  const element = document.getElementById(id);
  if (!element) {
    return;
  }

  element.innerHTML = '';
  items.forEach((item, index) => {
    const card = document.createElement('article');
    card.className = index % 3 === 0 ? 'board-card note-card' : index % 3 === 1 ? 'board-card wash-card' : 'board-card lined-card';

    const count = document.createElement('p');
    count.className = 'eyebrow';
    count.textContent = `Question ${index + 1}`;

    const prompt = document.createElement('h3');
    prompt.textContent = item;

    card.append(count, prompt);
    element.appendChild(card);
  });
}

function renderProductPage() {
  if (!document.body.dataset.productPage) {
    return;
  }

  const requestedId = new URLSearchParams(window.location.search).get('product');
  const productId = productCatalog[requestedId] ? requestedId : productOrder[0];
  const product = productCatalog[productId];
  const currentIndex = productOrder.indexOf(productId);
  const nextId = productOrder[(currentIndex + 1) % productOrder.length];
  const nextProduct = productCatalog[nextId];

  document.title = `${product.name} Preview — Seaside Serenity`;
  document.querySelector('meta[name="description"]')?.setAttribute(
    'content',
    `${product.name} placeholder preview for family review before production art and sampling.`
  );

  setText('product-name', product.name);
  setText('product-lede', product.lede);
  setText('design-label', product.designLabel);
  setText('garment-tag', product.garmentTag);
  setText('blank-note', product.blankNote);
  setText('later-note', product.laterNote);

  const garment = document.getElementById('garment');
  if (garment) {
    garment.className = `garment ${product.garmentClass}`;
  }

  const designMark = document.getElementById('design-mark');
  if (designMark) {
    designMark.className = `design-mark ${product.artClass}`;
  }

  renderPills('product-pills', [product.type, product.price, product.blank]);
  renderList('review-focus', product.focus);
  renderPalette('color-story', product.palette);
  renderQuestions('question-grid', product.questions);

  const nextLinks = ['next-preview-link', 'next-preview-link-bottom'];
  nextLinks.forEach((id) => {
    const link = document.getElementById(id);
    if (link) {
      link.href = `product.html?product=${nextId}`;
      link.textContent = `Next preview: ${nextProduct.name}`;
    }
  });
}

renderProductPage();
