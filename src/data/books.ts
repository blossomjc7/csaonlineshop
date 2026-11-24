export interface Book {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: 'devotionals' | 'culinary' | 'poetry' | 'children' | 'discernment' | 'journals';
  categoryLabel: string;
  author: string;
  price: string;
  format: string;
  description: string;
  features: string[];
  excerpt?: string;
  gumroadUrl: string;
  externalReaderUrl?: string;
  badge?: string;
  coverImage?: string;
}

export const booksData: Book[] = [
  // 1. Christian Devotionals & Biblical Typology
  {
    id: 'db-flagship-01',
    slug: 'the-divine-blueprint-series',
    title: 'The Divine Blueprint: Shadows to Substance',
    subtitle: '75-Book Master Devotional Exploring Christ in Every Scripture',
    category: 'devotionals',
    categoryLabel: 'Christian Devotionals & Typology',
    author: 'Christine A.',
    price: '$7.99',
    format: 'Instant PDF / Multi-Lang Audio / ePub',
    description: '30+ years of biblical study brought into accessible, soul-stirring devotionals connecting Genesis to Revelation. Discover the prophetic archetypes, ancient Hebrew types, and the unbroken redemptive thread pointing relentlessly to Jesus Christ.',
    features: [
      'Tailored for 3 distinct learning journeys (Seekers, New Believers, Kids)',
      'Rich typological breakdown from Genesis to Revelation',
      'Accompanied by interactive multi-language audio narration'
    ],
    excerpt: 'The Old Testament is not a relic of an obsolete covenant; it is a tapestry woven with living threads of promise, every shadow longing for the substance of Christ.',
    gumroadUrl: 'https://blossomjc7.gumroad.com/l/divineblueprint?wanted=true',
    externalReaderUrl: 'https://spiritualbooks.csaonlineshop.com',
    badge: 'Flagship Devotional'
  },
  {
    id: 'db-tabernacle-02',
    slug: 'the-wilderness-sanctuary',
    title: 'The Wilderness Sanctuary: Christ in the Tabernacle',
    subtitle: 'Every Curtain, Pillar & Sacrifice Decoded',
    category: 'devotionals',
    categoryLabel: 'Christian Devotionals & Typology',
    author: 'Christine A.',
    price: '$6.99',
    format: 'Instant PDF & ePub',
    description: 'Step into the ancient desert encampment and see how every bronze hook, silver socket, and layer of badger skin illustrates the character, sacrifice, and eternal priesthood of Jesus.',
    features: [
      'Full architectural and priestly typology explained simply',
      'Step-by-step walkthrough of the Outer Court, Holy Place, and Holy of Holies',
      'Practical prayer reflections for modern believers'
    ],
    gumroadUrl: 'https://blossomjc7.gumroad.com/l/wilderness-sanctuary?wanted=true',
    badge: 'Popular Study'
  },

  // 2. Culinary Arts & Quick Dinners
  {
    id: 'cul-20u20-01',
    slug: '20-under-20-quick-weeknight-dinners',
    title: '20 Under 20: Quick Dinners That Nourish',
    subtitle: 'Vibrant, Wholesome Gourmet Meals in 20 Minutes or Less',
    category: 'culinary',
    categoryLabel: 'Culinary Arts & Cookery',
    author: 'Christine A.',
    price: '$9.99',
    format: 'Interactive Digital Cookbook & Printable Cards',
    description: 'Practical, restorative recipes crafted by a professionally trained culinary artist. Designed for busy families, students, and home cooks who refuse to sacrifice nutrition or rich culinary craft for speed.',
    features: [
      '20 complete meals ready in 20 minutes from start to plate',
      'Nutrient-dense, clean ingredients with zero ultra-processed shortcuts',
      'Smart mise-en-place guides & batch-prep tips'
    ],
    excerpt: 'Cooking for others is an everyday act of quiet grace. A steaming plate of wholesome food speaks peace into a chaotic world.',
    gumroadUrl: 'https://blossomjc7.gumroad.com/l/20under20?wanted=true',
    badge: "Chef's Selection"
  },
  {
    id: 'cul-table-grace-02',
    slug: 'the-sacred-table-gathering',
    title: 'The Table of Grace: Culinary Musings & Gatherings',
    subtitle: 'A Chef’s Reflection on Hospitality, Food History & Grace',
    category: 'culinary',
    categoryLabel: 'Culinary Arts & Cookery',
    author: 'Christine A.',
    price: '$8.49',
    format: 'Illustrated Ebook & Recipe Collection',
    description: 'A feast for both soul and palate. Explore the theology of biblical tables, historical culinary customs, and hearty European recipes crafted to turn ordinary suppers into sacred sanctuaries.',
    features: [
      'Essays on the biblical theology of meals and shared bread',
      '15 signature heirloom recipes with detailed cultural backstories',
      'Beautiful culinary photography and plating guides'
    ],
    gumroadUrl: 'https://blossomjc7.gumroad.com/l/thesacredtable?wanted=true'
  },

  // 3. Poetry, Musings & Reflections
  {
    id: 'poet-whispers-01',
    slug: 'whispers-across-the-waters',
    title: 'Whispers Across the Waters: Poems of Faith & Journey',
    subtitle: 'Contemplative Verses Written Under Scandinavian Skies',
    category: 'poetry',
    categoryLabel: 'Poetry & Reflections',
    author: 'Christine A.',
    price: '$5.99',
    format: 'Literary Ebook & Printable Pocket Edition',
    description: 'Intimate reflections on faith, resilience, quiet solitude, and divine wonder. Born in the calm stillness of Swedish landscapes, each poem invites the weary soul into peaceful contemplation.',
    features: [
      'Over 60 original lyrical poems and contemplative vignettes',
      'Reflections on nature, seasons of waiting, and God’s whisper',
      'Cross-linked with the author travel journal'
    ],
    excerpt: 'In the stillness where the pine trees bow, silence is not emptiness—it is the breath of God waiting to be heard.',
    gumroadUrl: 'https://blossomjc7.gumroad.com/l/whispersacross?wanted=true',
    externalReaderUrl: 'https://christinea.csatravellers.com',
    badge: 'Soulful Verse'
  },
  {
    id: 'poet-pilgrim-02',
    slug: 'echoes-of-the-pilgrim-path',
    title: 'Echoes of the Pilgrim Path',
    subtitle: 'Sonnets & Reflections on Walking With Christ',
    category: 'poetry',
    categoryLabel: 'Poetry & Reflections',
    author: 'Christine A.',
    price: '$5.49',
    format: 'Ebook Edition',
    description: 'A poetic companion for the valleys, peaks, and quiet roads of the believer’s pilgrimage. Lyrical reminders that we are citizens of an unshakeable heavenly kingdom.',
    features: [
      'Meditative verses arranged according to spiritual seasons',
      'Accompanied by brief devotional commentary',
      'Elegant, print-ready typography'
    ],
    gumroadUrl: 'https://blossomjc7.gumroad.com/l/pilgrimpath?wanted=true'
  },

  // 4. Children’s Illustrated & Bedtime Adventures
  {
    id: 'kids-prophecy-01',
    slug: 'the-young-prophecy-detectives',
    title: 'The Young Prophecy Detectives: The Secret King',
    subtitle: 'A Wholesome Family Bedtime Adventure',
    category: 'children',
    categoryLabel: "Children's Illustrated & Family",
    author: 'Christine A.',
    price: '$6.99',
    format: 'Illustrated PDF with Printable Certificate',
    description: 'Join curious young detectives on an exhilarating treasure hunt through ancient scrolls to find the promised King. Wholesome, exciting storytelling grounded purely in Scripture without worldly noise.',
    features: [
      'Full-color captivating illustrations and engaging mystery format',
      'Includes the official printable "Prophecy Detective Certificate"',
      'Discussion questions for family bedtime reading'
    ],
    excerpt: 'Clues were hidden everywhere in the ancient desert—and every clue pointed straight to the greatest Prince who ever lived.',
    gumroadUrl: 'https://blossomjc7.gumroad.com/l/prophecydetectives?wanted=true',
    badge: "Ages 6-12"
  },
  {
    id: 'kids-creation-02',
    slug: 'wonder-in-the-wild-kingdom',
    title: 'Wonder in the Wild Kingdom: Animal Parables for Kids',
    subtitle: 'Bedtime Stories of Faith, Kindness & Courage',
    category: 'children',
    categoryLabel: "Children's Illustrated & Family",
    author: 'Christine A.',
    price: '$5.99',
    format: 'Illustrated Ebook & Coloring Sheets',
    description: 'Delightful animal parables teaching honesty, loyalty, forgiveness, and trust in God’s fatherly care. Includes 10 printable scripture-themed coloring pages.',
    features: [
      '12 heartwarming illustrated animal stories',
      '10 downloadable high-res coloring canvases',
      'Simple memory verses paired with each story'
    ],
    gumroadUrl: 'https://blossomjc7.gumroad.com/l/wildkingdom?wanted=true'
  },

  // 5. Biblical Dream Interpretation & Spiritual Discernment
  {
    id: 'disc-dreams-01',
    slug: 'the-discerning-heart-biblical-dreams',
    title: 'The Discerning Heart: Biblical Keys to Dreams & Visions',
    subtitle: 'A Scripture-Tested Guide to Hearing God in the Night Watches',
    category: 'discernment',
    categoryLabel: 'Spiritual Discernment & Dreams',
    author: 'Christine A.',
    price: '$8.99',
    format: 'Comprehensive Study Guide & Journal Template',
    description: 'A grounded, Scripture-tested manual explaining how the Lord communicated through dreams to Joseph, Daniel, and the early Church—completely uncompromised by New Age mysticism or subjective guesswork.',
    features: [
      'Testing every impression rigorously against the Word of God',
      'Biblical symbolism index with extensive Scripture references',
      'Practical protocols for recording, discerning, and praying over night dreams'
    ],
    excerpt: 'God speaks once, yes twice, yet man does not perceive it—in a dream, in a vision of the night, when deep sleep falls on men (Job 33:14-15).',
    gumroadUrl: 'https://blossomjc7.gumroad.com/l/discerningheart?wanted=true',
    badge: 'Scripture-Tested'
  },
  {
    id: 'disc-watchman-02',
    slug: 'walking-in-spiritual-discernment',
    title: 'Walking in Spiritual Discernment in Perilous Times',
    subtitle: 'Guarding Your Mind, Home & Heart in 2026',
    category: 'discernment',
    categoryLabel: 'Spiritual Discernment & Dreams',
    author: 'Christine A.',
    price: '$7.49',
    format: 'Ebook & Assessment Checklist',
    description: 'How to cultivate spiritual clarity, biblical discernment, and peace of mind when cultural confusion and noise are at an all-time high.',
    features: [
      'Foundations of spiritual vigilance from Proverbs and the Epistles',
      'How to recognize subtle deception and emotional manipulation',
      'Daily prayers for peace, wisdom, and steadfast clarity'
    ],
    gumroadUrl: 'https://blossomjc7.gumroad.com/l/spiritualdiscernment?wanted=true'
  },

  // 6. Activity, Journals & Low-Content
  {
    id: 'journ-secret-01',
    slug: 'the-90-day-secret-place-journal',
    title: 'The 90-Day Secret Place Prayer & Study Journal',
    subtitle: 'A Guided Canvas for Deep Communion and Scripture Tracking',
    category: 'journals',
    categoryLabel: 'Activity, Journals & Planners',
    author: 'Christine A.',
    price: '$6.49',
    format: 'High-Res Printable PDF (A4 & US Letter)',
    description: 'A thoughtfully crafted prayer journal offering structured daily space for gratitude, Scripture observation, prayer petitions, and quiet reflections in the secret place of the Most High.',
    features: [
      '90 daily guided reflection spreads with room for deep study',
      'Weekly Sabbath review prompts and answered prayer logs',
      'Printable as many times as you like for personal use'
    ],
    gumroadUrl: 'https://blossomjc7.gumroad.com/l/secretplacejournal?wanted=true',
    badge: 'Printable Companion'
  },
  {
    id: 'journ-scripture-02',
    slug: 'scripture-coloring-canvas-psalms',
    title: 'Grace & Truth: Scripture Coloring Meditations from the Psalms',
    subtitle: 'Hand-Lettered Floral & Geometric Bible Verses to Color',
    category: 'journals',
    categoryLabel: 'Activity, Journals & Planners',
    author: 'Christine A.',
    price: '$4.99',
    format: 'Printable PDF Coloring Book (35 Pages)',
    description: '35 hand-lettered verses from the Psalms framed by elegant botanicals. An unhurried, meditative way to memorize Scripture and rest your thoughts in God’s truth.',
    features: [
      '35 intricate, clean-line coloring pages',
      'Full verses from the Psalms for daily contemplation',
      'High-resolution vector line art optimized for home printing'
    ],
    gumroadUrl: 'https://blossomjc7.gumroad.com/l/psalmscoloring?wanted=true'
  }
];

export const articlesData = [
  {
    id: 'art-01',
    slug: 'christ-in-the-wilderness-tabernacle',
    title: 'Finding Christ in the Wilderness Tabernacle: Why Every Curtain & Pole Points to the Cross',
    category: 'Biblical Typology',
    date: 'November 2026',
    author: 'Christine A.',
    readTime: '6 min read',
    excerpt: 'When we look past the ancient measurements in Exodus, a breathtaking portrait of redemption emerges. The bronze altar, the golden lampstand, and the veil itself all whisper the name of Jesus.',
    coverImage: '/images/covers/the-wilderness-sanctuary.svg'
  },
  {
    id: 'art-02',
    slug: 'the-sacred-table-grace',
    title: 'The Sacred Table: Why Cooking for Others is an Everyday Act of Grace',
    category: 'Culinary Reflections',
    date: 'October 2026',
    author: 'Christine A.',
    readTime: '4 min read',
    excerpt: 'In a world of disposable meals and frantic speed, taking 20 minutes to prepare a nourishing dish from whole ingredients is a quiet rebellion of love and hospitality.',
    coverImage: '/images/covers/20-under-20-quick-weeknight-dinners.svg'
  },
  {
    id: 'art-03',
    slug: 'unshakable-hope-2026',
    title: 'Unshakable Hope in Shifting Times: Anchoring Our Hearts in 2026',
    category: 'Spiritual Discernment',
    date: 'September 2026',
    author: 'Christine A.',
    readTime: '5 min read',
    excerpt: 'Navigating shifting global tides with biblical discernment, serenity, and an unshakeable trust in God’s sovereign promises. True peace is found only in the truth.',
    coverImage: '/images/covers/the-discerning-heart-biblical-dreams.svg'
  }
];
