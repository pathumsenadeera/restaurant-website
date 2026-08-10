import heroBg from '../assets/hero_restaurant_bg_1786330244827.png';
import dishSteak from '../assets/dish_truffle_steak_1786330254967.png';
import dishRisotto from '../assets/dish_seafood_risotto_1786330264871.png';
import dishSalmon from '../assets/dish_salmon_1786330278077.png';
import dishDessert from '../assets/dish_dessert_1786330288997.png';
import expRooftop from '../assets/exp_rooftop_1786330299739.png';
import expWineCellar from '../assets/exp_wine_cellar_1786330312792.png';
import expChefCounter from '../assets/exp_chef_counter_1786330325664.png';

export const ASSETS = {
  heroBg,
  dishSteak,
  dishRisotto,
  dishSalmon,
  dishDessert,
  expRooftop,
  expWineCellar,
  expChefCounter
};

export const CATEGORIES = [
  { id: 'all', label: 'All Creations' },
  { id: 'specials', label: "Chef's Tasting" },
  { id: 'steaks', label: 'Prime Cuts' },
  { id: 'seafood', label: 'Seafood & Coastal' },
  { id: 'desserts', label: 'Artisanal Desserts' },
  { id: 'cocktails', label: 'Vintage Cellar & Bar' }
];

export const MENU_ITEMS = [
  {
    id: 'wagyu-truffle-steak',
    name: 'A5 Wagyu Striploin & Black Truffle',
    category: 'steaks',
    price: 118,
    rating: 4.9,
    reviewsCount: 342,
    badge: 'Signature',
    description: 'Dry-aged Japanese A5 Wagyu striploin seared to perfection over binchotan charcoal, paired with shaved Périgord black truffle, smoked shallot jus, and pomme purée.',
    ingredients: ['A5 Miyazaki Wagyu', 'Black Périgord Truffle', 'Smoked Shallot Demiglace', 'Maldon Sea Salt', 'French Butter Purée'],
    winePairing: '2016 Château Margaux Premier Grand Cru Classé',
    dietaryTags: ['Gluten-Free', 'Chef Recommendation'],
    prepTime: '25 min',
    image: dishSteak,
    isPopular: true
  },
  {
    id: 'saffron-seafood-risotto',
    name: 'Saffron Royal Seafood Risotto',
    category: 'seafood',
    price: 84,
    rating: 4.8,
    reviewsCount: 289,
    badge: 'Popular',
    description: 'Carnaroli rice infused with Iranian red saffron, pan-seared Hokkaido scallops, wild Mediterranean tiger prawns, edible gold leaf, and lemon verbena foam.',
    ingredients: ['Carnaroli Rice', 'Iranian Saffron', 'Hokkaido Sea Scallops', 'Tiger Prawns', '24k Gold Leaf', 'Aged Parmigiano Reggiano'],
    winePairing: '2020 Dom Pérignon Vintage Champagne',
    dietaryTags: ['Pescatarian', 'Gluten-Free Option'],
    prepTime: '20 min',
    image: dishRisotto,
    isPopular: true
  },
  {
    id: 'pan-seared-king-salmon',
    name: 'Ora King Salmon & Sea Caviar',
    category: 'seafood',
    price: 76,
    rating: 4.9,
    reviewsCount: 195,
    badge: 'Seasonal',
    description: 'Crispy skin Ora King salmon over wild watercress & pea emerald velouté, finished with Royal Osetra caviar, shaved shaved fennel bulb, and Meyer lemon reduction.',
    ingredients: ['Ora King Salmon', 'Royal Osetra Caviar', 'Watercress Velouté', 'Meyer Lemon', 'Shaved Fennel'],
    winePairing: '2019 Domaine Leflaive Puligny-Montrachet',
    dietaryTags: ['Pescatarian', 'Omega-3 Rich'],
    prepTime: '18 min',
    image: dishSalmon,
    isPopular: true
  },
  {
    id: 'belgian-chocolate-sphere',
    name: 'Obsidian Belgian Chocolate Sphere',
    category: 'desserts',
    price: 36,
    rating: 4.95,
    reviewsCount: 410,
    badge: 'Pastry Chef Special',
    description: '70% Valrhona dark chocolate sphere filled with Tahitian vanilla bean gelato and hazelnut praline crunch, melted tableside with warm roasted wild raspberry coulis.',
    ingredients: ['Valrhona 70% Dark Chocolate', 'Tahitian Vanilla', 'Piedmont Hazelnut Praline', 'Wild Raspberry Coulis', 'Gold Leaf'],
    winePairing: '2015 Taylor Fladgate 20 Year Old Tawny Port',
    dietaryTags: ['Vegetarian', 'Tableside Show'],
    prepTime: '15 min',
    image: dishDessert,
    isPopular: true
  },
  {
    id: 'roasted-duck-breast',
    name: 'Honey Lavender Glazed Duck',
    category: 'specials',
    price: 92,
    rating: 4.85,
    reviewsCount: 164,
    badge: 'Chef Selection',
    description: 'Dry-spiced Heritage duck breast roasted with Provence lavender honey, caramelized parsnip mousseline, tart cherry gastrique, and charred broccolini.',
    ingredients: ['Heritage Duck Breast', 'Provence Lavender Honey', 'Parsnip Mousseline', 'Morello Cherry Gastrique'],
    winePairing: '2018 Domaine Dujac Morey-Saint-Denis Pinot Noir',
    dietaryTags: ['Dairy-Free Option'],
    prepTime: '22 min',
    image: dishSteak,
    isPopular: false
  },
  {
    id: 'smokey-old-fashioned',
    name: 'The AURA Smoked Reserve Cocktail',
    category: 'cocktails',
    price: 32,
    rating: 4.9,
    reviewsCount: 220,
    badge: 'Bar Masterpiece',
    description: 'Japanese Yamazaki 12yr Single Malt, raw Demerara sugar, cherry bark bitters, infusing under hickory smoke in a crystal decanter with hand-carved ice sphere.',
    ingredients: ['Yamazaki 12yr Single Malt', 'Cherry Bark Bitters', 'Demerara', 'Hickory Smoke', 'Hand-cut Crystal Ice'],
    winePairing: 'Served with Artisanal Dark Chocolate Truffles',
    dietaryTags: ['Artisanal Mixology'],
    prepTime: '8 min',
    image: dishDessert,
    isPopular: false
  }
];

export const TRUST_BADGES = [
  {
    icon: 'Leaf',
    title: 'Farm-to-Table Freshness',
    subtitle: '100% organic produce harvested daily from local coastal micro-farms.'
  },
  {
    icon: 'Award',
    title: 'Michelin Culinary Art',
    subtitle: 'Crafted under Executive Chef Julian Vance with precision & flair.'
  },
  {
    icon: 'Wine',
    title: '500+ Vintage Sommelier Cellar',
    subtitle: 'Award-winning curated wine cellar featuring rare global reserves.'
  },
  {
    icon: 'Sparkles',
    title: 'Bespoke Ambiance',
    subtitle: 'Panoramic oceanfront views, candlelight, and custom acoustic soundscapes.'
  }
];

export const DINING_EXPERIENCES = [
  {
    id: 'rooftop-sunset',
    title: 'Rooftop Sunset Lounge',
    subtitle: 'Open-air panoramic dining with ocean horizon views',
    capacity: '2-4 Guests',
    price: 'From $150 / person',
    image: expRooftop,
    features: ['Panoramic Coastal Views', 'Live Sunset DJ & Acoustic Violins', 'Signature Cocktail Bar']
  },
  {
    id: 'wine-vault',
    title: 'Subterranean Wine Vault',
    subtitle: 'Private brick wine cellar for exclusive candlelit dinners',
    capacity: '6-12 Guests',
    price: 'From $220 / person',
    image: expWineCellar,
    features: ['500+ Vintage Bottle Wall', 'Dedicated Master Sommelier', 'Exclusive 8-Course Pairing']
  },
  {
    id: 'chef-counter',
    title: 'Chef\'s Interactive Counter',
    subtitle: 'Front-row seats to master culinary plating & live fire cooking',
    capacity: '1-6 Guests',
    price: 'From $190 / person',
    image: expChefCounter,
    features: ['Front-Row Kitchen View', 'Direct Chef Interaction', 'Surprise Intermezzo Courses']
  }
];

export const SEATING_AREAS = [
  { id: 'main', name: 'Main Ocean Dining Room', note: 'Romantic ocean views & warm candlelight' },
  { id: 'rooftop', name: 'Rooftop Terrace Lounge', note: 'Open-air, sunset & stars experience' },
  { id: 'vault', name: 'Private Wine Cellar', note: 'Intimate mahogany table surrounded by rare vintages' },
  { id: 'chef', name: 'Chef\'s Tasting Counter', note: 'Interactive front-row kitchen seats' }
];

export const TIME_SLOTS = [
  '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM'
];

export const REVIEWS = [
  {
    id: 1,
    author: 'Elena Rostova',
    role: 'Food & Wine Critic',
    avatar: 'ER',
    rating: 5,
    date: '2 days ago',
    text: 'AURA delivered the single finest dining experience I have had this decade. The Wagyu striploin with Périgord truffle literally melted. The sommelier pairing was extraordinary!'
  },
  {
    id: 2,
    author: 'Marcus & Sophia Vance',
    role: 'Anniversary Dinner Guests',
    avatar: 'MV',
    rating: 5,
    date: '1 week ago',
    text: 'We reserved the Subterranean Wine Vault for our 10th anniversary. The atmosphere, candlelit ambience, and 7-course tasting menu blew us and our guests away!'
  },
  {
    id: 3,
    author: 'David Chen',
    role: 'Verified Diner',
    avatar: 'DC',
    rating: 5,
    date: '3 weeks ago',
    text: 'The Saffron Seafood Risotto with gold leaf is pure perfection. Booking online was effortless, and the rooftop sunset lounge view is unmatched.'
  }
];
