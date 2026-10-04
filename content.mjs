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
