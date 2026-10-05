// Single source of truth for every version.
// Edit copy here, then run `node build.mjs`.

export const content = {
  name: 'RAZZ',
  greeting: "hey, i'm razz.",
  hero: 'I edit films, produce music, build brands and vibecode professionally.',

  then: {
    line: "I've been making things for as long as I can remember.",
    img: { src: '../assets/child.jpg', alt: 'Emanuel as a child, wearing studio headphones', w: 640, h: 480 },
  },
  now: {
    line: 'And I still am.',
    img: { src: '../assets/today.jpg', alt: 'Emanuel today, sitting on a bench', w: 1500, h: 2000 },
  },

  currentlyLabel: 'CURRENTLY',
  currently: [
    {
      label: 'FILM',
      years: '2021 – today',
      role: 'Full-time Film Editing Student',
      at: 'Filmakademie Baden-Württemberg',
      lines: [
        "One of the world's leading film schools.",
      ],
    },
    {
      label: 'MUSIC',
      years: '2022 – today',
      role: 'Co-Founder',
      at: 'STRAIGHTUPGLOBAL',
      lines: [
        'Multi-Platinum Producer / Sample Maker, working with the biggest names in hip-hop.',
      ],
    },
    {
      label: 'EDITING',
      years: '2025 – today',
      role: 'Founder',
      at: 'RippleEdit',
      lines: ['Video editing brand working with the biggest creators in music production.'],
    },
    {
      label: 'VIBECODING',
      role: null,
      at: null,
      lines: ['Websites, internal tools, client tools and personal experiments.'],
    },
  ],

  // Short "magnifier" notes shown when hovering fabw, straightupglobal and rippleedit (V09). Draft copy, edit freely.
  orgs: {
    fabw: {
      name: 'Film Academy Baden-Württemberg',
      label: 'fabw',
      logo: 'img/logo-fabw-badge.svg',
      href: 'https://www.filmakademie.de',
      text: 'Film school in Ludwigsburg, Germany. Its students have won Student Academy Awards, BAFTA Student Awards and more.',
    },
    sug: {
      name: 'STRAIGHTUPGLOBAL',
      label: 'straightupglobal',
      logo: 'img/logo-sug-badge.jpg',
      href: 'https://www.instagram.com/straightupglobal/',
      text: 'Producer collective making samples that end up in songs with the biggest names in hip-hop.',
    },
    rippleedit: {
      name: 'RippleEdit',
      label: 'rippleedit',
      logo: 'img/logo-rippleedit-badge.jpg',
      href: 'https://ripple-edit.com',
      text: 'Video editing services for the biggest music production creators and their content across social media.',
    },
  },

  // Hover cards for the work section (V09). Draft copy, edit freely.
  cards: {
    hausAmHang: {
      title: 'Halfway House',
      text: 'Short film. In a youth detention facility in the Black Forest, the disciplined Jurek is thrown off balance by the new inmate Sascha. Directed by Konstantin Münzel, cinematography by Paul Ader, edited by me.',
      img: 'img/haus-am-hang-graded.jpg',  // still: MDR / Paul Ader, highlights gently pulled down
      href: 'https://youtu.be/LbID0HTj_wI',  // trailer (English title: Halfway House)
    },
    rippleeditSite: {
      title: 'RippleEdit, portfolio website',
      text: 'The brand’s business card: a clean portfolio with scroll effects that serve the story, and a direct way to send inquiries.',
      img: 'img/logo-rippleedit-badge.jpg',
      href: 'https://ripple-edit.com',
    },
    fukagawa: {
      title: 'Fukagawa Fine Dining, website and brand',
      text: 'Bringing the restaurant online the way it feels in person: a precise, warm room and the art of ikebana. Built for a close friend, the owner.',
    },
    sugStore: {
      title: 'STRAIGHTUPGLOBAL, Shopify store',
      text: 'A professional home with a clear brand identity that gives producers access to our samples.',
      img: 'img/logo-sug-badge.jpg',
      href: 'https://7b4b9b.myshopify.com',
    },
    rippleReview: {
      title: 'RippleReview',
      text: 'Client-internal tool for RippleEdit clients: Frame.io-inspired video review, sharing and revisions.',
      img: 'img/logo-ripplereview-badge.jpg',
    },
    rippleLab: {
      title: 'RippleLab',
      text: 'Internal tool for RippleEdit: thumbnail ideation, packaging and preview.',
      img: 'img/logo-ripplelab-badge.jpg',
    },
    // Songs: artist + monthly listeners first, then the story. Listener numbers from the STRAIGHTUPGLOBAL deck data (Aug 2026).
    'HAUNTED BY FAME': {
      title: 'Haunted by Fame',
      text: 'Offset, 18.4M monthly listeners. The title track of his album Haunted by Fame, built on a sample of ours.',
    },
    'ONLY TIME': {
      title: 'Only Time',
      text: 'Gucci Mane, 19.7M monthly listeners. Built on a sample of ours.',
    },
    'GUCCI SPECIAL': {
      title: 'Gucci Special',
      text: 'Gucci Mane, 19.7M monthly listeners. A beat of ours that sat on a hard drive for two years before it got placed.',
    },
    // Creators: who they are, then their reach. Numbers checked on YouTube and Instagram, Oct 2026.
    ProducerGrind: {
      title: 'ProducerGrind',
      text: 'Was the biggest podcast and hub for producers, with interviews with Metro Boomin, Zaytoven, Timbaland and more. 244K YouTube subscribers · 281K Instagram followers.',
    },
    MACSHOOTER: {
      title: 'MACSHOOTER',
      text: 'Producer and creator with credits for Future, Polo G, Young Thug and G Herbo. 69K YouTube subscribers · 51.8K Instagram followers.',
    },
    'Ayo Sim': {
      title: 'Ayo Sim',
      text: 'Platinum producer behind songs for Gunna, Lil Baby and Lil Durk. Started his content in late 2025 and runs it at a seriously high level. 4.67K YouTube subscribers · 13.4K Instagram followers.',
    },
    sugPacks: {
      title: 'SUG Packs',
      text: 'Internal tool for STRAIGHTUPGLOBAL: a smart library for our samples.',
      img: 'img/logo-sugpacks-badge.jpg',
    },
  },

  workLabel: 'SELECTED WORK',

  film: {
    label: 'FILM',
    title: 'HAUS AM HANG',
    meta: 'Short Film — Editor',
    awards: [
      ['BAFTA Student Award', 'Student Choice Award'],
      ['Deutscher Kamerapreis', 'Paul Ader, Cinematography'],
      ['Kurzsüchtig', 'Best Cinematography'],
      ['Kurzsüchtig', 'Jury Prize'],
      ['Kurzsüchtig', 'Audience Award'],
      ['Filmschau Baden-Württemberg', 'Best Short Film'],
    ],
    stills: ['Still 01', 'Still 02', 'Still 03'],
    preview: { src: 'img/haus-am-hang.jpg', ratio: 800 / 446, credit: 'still: MDR / Paul Ader' },
    link: null, // e.g. a trailer URL once it exists
  },

  music: {
    label: 'MUSIC',
    about: 'STRAIGHTUPGLOBAL: Producer collective focused on making beats, samples and songs with the biggest artists on the planet.',
    intro: 'SONGS MY TEAM AND I PRODUCED',
    songs: [
      { title: 'HAUNTED BY FAME', artist: 'Offset', preview: 'img/cover-haunted-by-fame.jpg', href: 'https://open.spotify.com/track/2pHnTA5XactfK9TvlHBKsu' },
      { title: 'ONLY TIME', artist: 'Gucci Mane', preview: 'img/cover-only-time.jpg', href: 'https://open.spotify.com/track/3jZr9yjhzg2GGnvhRsJiua' },
      { title: 'GUCCI SPECIAL', artist: 'Gucci Mane', preview: 'img/cover-gucci-special.jpg', href: 'https://open.spotify.com/track/094tyHLH13FLZvQ7HyrMTG' },
    ],
    more: 'and many more...',
  },

  rippleedit: {
    label: 'RIPPLEEDIT',
    intro: 'Video editing for some of the biggest music production creators.',
    clientsLabel: 'SELECTED CLIENTS',
    clients: ['ProducerGrind', 'MACSHOOTER', 'Ayo Sim'],
    // instagram profile picture + profile of each client
    clientWork: {
      ProducerGrind: { preview: 'img/ig-producergrind.jpg', href: 'https://www.instagram.com/producergrind/' },
      MACSHOOTER: { preview: 'img/ig-macshooter.jpg', href: 'https://www.instagram.com/macshooter49/' },
      'Ayo Sim': { preview: 'img/ig-ayo-sim.jpg', href: 'https://www.instagram.com/1ayosim/' },
    },
  },

  vibecoded: {
    label: 'VIBECODED',
    intro: "Websites and tools I've built.",
    websitesLabel: 'WEBSITES',
    websites: [
      { title: 'RIPPLEEDIT', meta: 'Video Editing Brand / Website', preview: 'img/site-rippleedit.jpg', href: 'https://ripple-edit.com' },
      { title: 'FUKAGAWA FINE DINING', meta: 'Website / Brand', preview: 'img/site-fukagawa.jpg' },
      { title: 'STRAIGHTUPGLOBAL', meta: 'E-Commerce / Music', preview: 'img/site-sug-store.jpg' },
    ],
    toolsLabel: 'TOOLS',
    tools: [
      { title: 'RIPPLEREVIEW', meta: 'Frame.io-inspired video review, sharing and revision tool.', preview: 'img/tool-ripplereview.jpg' },
      { title: 'RIPPLELAB', meta: 'Thumbnail ideation, packaging and preview tool.', preview: 'img/tool-ripplelab.jpg' },
    ],
  },

  connect: {
    text: 'I like meeting people who are curious, passion-driven, and just as obsessed with the things they care about.',
    cta: "Let's connect.",
    links: [
      { label: 'Instagram', value: '@made.by.razz', href: 'https://instagram.com/made.by.razz' },
      { label: 'Email', value: 'madebyrazz@gmail.com', href: 'mailto:madebyrazz@gmail.com' },
    ],
  },

  footer: {
    domain: 'madebyrazz.com',
    imprint: 'Imprint / Impressum',
    imprintHref: '../imprint/',
    privacy: 'Privacy / Datenschutz',
    privacyHref: '../privacy/',
  },
};

// Temporary placeholder for assets that don't exist yet.
// `ratio` is width/height. Each version styles `.ph` its own way.
export const ph = (label, ratio = 1, cls = '') =>
  `<div class="ph ${cls}" style="aspect-ratio:${ratio}" role="img" aria-label="${label} (placeholder)"><span>${label}</span></div>`;

export const img = (i, cls = '', loading = 'lazy') =>
  `<img class="${cls}" src="${i.src}" alt="${i.alt}" width="${i.w}" height="${i.h}" loading="${loading}" decoding="async">`;

export const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
