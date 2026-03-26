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
    lede: 'Soft sunset tones and an easy fit give this tee a calm, bright feel that is easy to wear every day.',
    garmentClass: 'garment-tee shell-foam',
    artClass: 'design-sunset',
    designLabel: 'sunset glow',
    garmentTag: 'front detail',
    blankNote: 'Made to feel light, relaxed, and easy from the first wear.',
    laterNote: 'A washed sunset palette keeps the piece soft, peaceful, and full of quiet color.',
    pills: ['Tee', 'Soft sunset color', 'First collection'],
    focus: [
      'Soft sunset tones that feel bright without feeling loud.',
      'An easy front detail that keeps the look clean.',
      'A calm color story that fits the heart of the collection.',
    ],
    palette: [
      { name: 'Coral sky', className: 'swatch-coral' },
      { name: 'Sea blue', className: 'swatch-sea' },
      { name: 'Warm cream', className: 'swatch-cream' },
    ],
    questions: [
      'Sunset color with a calm, everyday mood.',
      'Easy shape that feels relaxed and wearable.',
      'A gentle front detail that keeps the piece light.',
      'One of the most peaceful styles in the collection.',
    ],
  },
  'yellow-sun-tee': {
    name: 'Yellow Sun Tee',
    type: 'Tee',
    lede: 'Bright, simple, and cheerful, this tee brings a little sunshine into everyday style.',
    garmentClass: 'garment-tee shell-sun',
    artClass: 'design-yellow',
    designLabel: 'sun glow',
    garmentTag: 'front detail',
    blankNote: 'Made with an easy tee shape so the color stays clean and the look stays light.',
    laterNote: 'The simple sun motif gives this piece its charm without taking away from the calm feel of the collection.',
    pills: ['Tee', 'Sunny favorite', 'First collection'],
    focus: [
      'A warm yellow note that feels cheerful and clean.',
      'A simple graphic that keeps the tee easy to style.',
      'A bright piece that still feels soft and approachable.',
    ],
    palette: [
      { name: 'Golden yellow', className: 'swatch-sun' },
      { name: 'Sky blue', className: 'swatch-sky' },
      { name: 'Soft white', className: 'swatch-foam' },
    ],
    questions: [
      'A sunny detail that lifts the whole look.',
      'Simple enough for everyday wear.',
      'Bright color balanced by a calm shape.',
      'A cheerful favorite in the first collection.',
    ],
  },
  'white-polka-dots-tee': {
    name: 'White Polka Dots Tee',
    type: 'Tee',
    lede: 'Playful dots and a light, easy feel give this tee a classic charm with a little extra personality.',
    garmentClass: 'garment-tee shell-sky',
    artClass: 'design-dots',
    designLabel: 'polka dots',
    garmentTag: 'front detail',
    blankNote: 'Designed to feel fresh, light, and easy to wear from morning to evening.',
    laterNote: 'The dot pattern keeps the piece playful while the overall shape stays clean and simple.',
    pills: ['Tee', 'Playful classic', 'First collection'],
    focus: [
      'Playful dots that keep the piece light and lively.',
      'A simple shape that makes the pattern easy to wear.',
      'Classic charm with a cheerful coastal feel.',
    ],
    palette: [
      { name: 'Powder blue', className: 'swatch-powder' },
      { name: 'Soft sand', className: 'swatch-sand' },
      { name: 'Cream dots', className: 'swatch-cream' },
    ],
    questions: [
      'Light, playful pattern with an easy everyday mood.',
      'A classic piece with extra personality.',
      'Soft color that keeps the dots feeling fresh.',
      'A cheerful style that brightens the whole collection.',
    ],
  },
  'catamaran-sunrise-hoodie': {
    name: 'Catamaran Sunrise Hoodie',
    type: 'Hoodie',
    lede: 'Soft sunrise color and a calm seaside mood make this hoodie cozy, bright, and easy to love.',
    garmentClass: 'garment-hoodie shell-sand',
    artClass: 'design-catamaran',
    designLabel: 'sunrise sail',
    garmentTag: 'front detail',
    blankNote: 'Designed as a comfortable everyday layer with a warm, easy feel.',
    laterNote: 'Sunrise color and a quiet sailing detail give the piece its gentle coastal character.',
    pills: ['Hoodie', 'Cozy sunrise layer', 'First collection'],
    focus: [
      'A cozy shape that feels easy and relaxed.',
      'Sunrise tones that keep the hoodie bright without feeling loud.',
      'A quiet seaside detail that gives the piece its charm.',
    ],
    palette: [
      { name: 'Peach light', className: 'swatch-peach' },
      { name: 'Sea mist', className: 'swatch-sea' },
      { name: 'Sand blank', className: 'swatch-sand' },
    ],
    questions: [
      'A warm layer with a soft sunrise mood.',
      'Comfort-first shape with an easy coastal feel.',
      'A subtle sailing note that keeps it memorable.',
      'One of the coziest pieces in the collection.',
    ],
  },
  'gray-bow-sweatshirt': {
    name: 'Gray Bow Sweatshirt',
    type: 'Sweatshirt',
    lede: 'A soft bow detail gives this sweatshirt a sweet, polished feel without losing its calm, easy comfort.',
    garmentClass: 'garment-sweatshirt shell-grey',
    artClass: 'design-bow',
    designLabel: 'soft bow',
    garmentTag: 'front detail',
    blankNote: 'Made to feel cozy, understated, and easy to reach for.',
    laterNote: 'The bow brings softness and charm while the muted palette keeps the look polished.',
    pills: ['Sweatshirt', 'Quiet charm', 'First collection'],
    focus: [
      'A soft bow detail that feels sweet without feeling fussy.',
      'A calm palette that keeps the whole piece polished.',
      'An easy sweatshirt shape made for everyday comfort.',
    ],
    palette: [
      { name: 'Soft grey', className: 'swatch-grey' },
      { name: 'Ribbon blush', className: 'swatch-blush' },
      { name: 'Sea-blue accent', className: 'swatch-sky' },
    ],
    questions: [
      'A quiet piece with plenty of personality.',
      'Soft color that keeps the look calm and wearable.',
      'A polished bow detail that feels light and sweet.',
      'One of the gentlest styles in the collection.',
    ],
  },
  'fish-out-of-the-water-tote': {
    name: 'Fish Out of the Water Tote',
    type: 'Tote',
    lede: 'Playful and easy to carry, this tote brings a little seaside humor into the collection without losing its calm feel.',
    garmentClass: 'garment-tote shell-canvas',
    artClass: 'design-fish',
    designLabel: 'fish detail',
    garmentTag: 'front detail',
    blankNote: 'Designed as an everyday carryall with a light coastal point of view.',
    laterNote: 'The fish motif adds personality while the natural tote keeps the piece simple and useful.',
    pills: ['Tote', 'Everyday tote', 'First collection'],
    focus: [
      'A playful fish detail that gives the tote its personality.',
      'A simple shape that makes it easy to carry every day.',
      'A calm coastal mood that keeps it charming instead of novelty-driven.',
    ],
    palette: [
      { name: 'Canvas', className: 'swatch-canvas' },
      { name: 'Sea blue', className: 'swatch-sea' },
      { name: 'Sunny gold', className: 'swatch-sun' },
    ],
    questions: [
      'An everyday tote with a little coastal humor.',
      'Natural color that keeps the piece easy and versatile.',
      'A playful motif that still feels polished.',
      'A useful favorite with extra charm.',
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
    count.textContent = `Highlight ${index + 1}`;

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

  document.title = `${product.name} — Seaside Serenity`;
  document.querySelector('meta[name="description"]')?.setAttribute(
    'content',
    `${product.name} from the first Seaside Serenity collection. ${product.lede}`
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

  renderPills('product-pills', product.pills);
  renderList('review-focus', product.focus);
  renderPalette('color-story', product.palette);
  renderQuestions('question-grid', product.questions);

  const nextLinks = ['next-preview-link', 'next-preview-link-bottom'];
  nextLinks.forEach((id) => {
    const link = document.getElementById(id);
    if (link) {
      link.href = `product.html?product=${nextId}`;
      link.textContent = `Next style: ${nextProduct.name}`;
    }
  });
}

renderProductPage();
