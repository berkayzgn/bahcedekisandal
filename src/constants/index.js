// Navigation
export const NAV_ITEMS = [
  { id: 'home', label: 'Ana Sayfa' },
  { id: 'about', label: 'Hakkımızda' },
  { id: 'members', label: 'Üyeler' },
  { id: 'concerts', label: 'Konserlerimiz' },
  { id: 'videos', label: 'Videolar' },
];

// Member Categories Order
export const MEMBER_CATEGORIES = {
  'Orkestra Şefi': [],
  Solist: [],
  Bateri: [],
  Gitar: [],
  Klavye: [],
  Keman: [],
  'Bas Gitar': [],
  Vokaller: [],
  Bağlama: [],
  'Yan Flüt': [],
  Akordiyon: [],
  Klarnet: [],
};

// Member Status
export const MEMBER_STATUS = {
  CURRENT: 'current',
  FORMER: 'former',
};

// Filter Options
export const FILTER_OPTIONS = {
  ALL: 'all',
  CURRENT: 'current',
  FORMER: 'former',
};

// Image Paths
export const IMAGE_PATHS = {
  GALLERY: '/images/gallery',
  BACKGROUNDS: '/images/backgrounds',
  MEMBERS: '/images/members-img',
};

// Carousel Settings
export const CAROUSEL_SETTINGS = {
  TRANSITION_DURATION: 500,
  AUTO_PLAY_INTERVAL: 3000,
  PAUSE_RESUME_DELAY: 10000,
};

// Primary Role Mapping
export const PRIMARY_ROLE_MAPPING = {
  'Orkestra Şefi': 'Orkestra Şefi',
  Solist: 'Solist',
  Vokal: 'Vokaller',
  Keman: 'Keman',
  'Bas Gitar': 'Bas Gitar',
  Bağlama: 'Bağlama',
  'Yan Flüt': 'Yan Flüt',
  Akordiyon: 'Akordiyon',
  Gitar: 'Gitar',
  Klavye: 'Klavye',
  Bateri: 'Bateri',
  Klarnet: 'Klarnet',
};

// Helper function to get primary category from role
export const getPrimaryCategory = (role) => {
  const primaryRole = role.split(' - ')[0].split(' & ')[0].trim();
  return PRIMARY_ROLE_MAPPING[primaryRole] || 'Diğer';
};
