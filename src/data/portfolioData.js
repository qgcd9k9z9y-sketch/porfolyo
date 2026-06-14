// All app content lives here — no backend required.
// Edit these objects to personalize the portfolio.

export const profile = {
  name: 'Murat Keskin',
  title: 'Mobile & Full-Stack Developer',
  bio: 'I build clean, performant mobile and web experiences. Passionate about React Native, thoughtful UI, and shipping products that people love to use.',
  // Set to a real image URL to replace the initials avatar placeholder.
  avatarUrl: null,
  location: 'Istanbul, Turkey',
  stats: [
    { label: 'Projects', value: '12+' },
    { label: 'Experience', value: '5 yrs' },
    { label: 'Clients', value: '20+' },
  ],
};

export const projects = [
  {
    id: '1',
    title: 'TaskFlow',
    description:
      'A cross-platform task manager with offline sync, reminders, and a focus timer. Built for speed and a distraction-free workflow.',
    tech: ['React Native', 'Expo', 'SQLite', 'Reanimated'],
    github: 'https://github.com/muratkeskin/taskflow',
    live: 'https://taskflow.app',
  },
  {
    id: '2',
    title: 'Marketly',
    description:
      'An e-commerce storefront with cart, payments, and an admin dashboard. Optimized for fast load times and high conversion.',
    tech: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
    github: 'https://github.com/muratkeskin/marketly',
    live: 'https://marketly.shop',
  },
  {
    id: '3',
    title: 'Weatherly',
    description:
      'A minimal weather app with hourly forecasts, animated backgrounds, and location-based alerts.',
    tech: ['React Native', 'TypeScript', 'OpenWeather API'],
    github: 'https://github.com/muratkeskin/weatherly',
    live: null,
  },
  {
    id: '4',
    title: 'DevNotes',
    description:
      'A markdown note-taking app for developers with code highlighting, tags, and full-text search.',
    tech: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com/muratkeskin/devnotes',
    live: 'https://devnotes.dev',
  },
];

export const skills = [
  {
    category: 'Frontend',
    icon: 'phone-portrait-outline',
    items: [
      { name: 'React Native', level: 0.92 },
      { name: 'React', level: 0.9 },
      { name: 'TypeScript', level: 0.85 },
      { name: 'Next.js', level: 0.8 },
    ],
  },
  {
    category: 'Backend',
    icon: 'server-outline',
    items: [
      { name: 'Node.js', level: 0.86 },
      { name: 'Express', level: 0.82 },
      { name: 'PostgreSQL', level: 0.78 },
      { name: 'MongoDB', level: 0.75 },
    ],
  },
  {
    category: 'Tools',
    icon: 'construct-outline',
    items: [
      { name: 'Git & GitHub', level: 0.9 },
      { name: 'Docker', level: 0.7 },
      { name: 'Figma', level: 0.72 },
      { name: 'CI/CD', level: 0.68 },
    ],
  },
];

export const contact = {
  name: 'Murat Keskin',
  email: 'muratkeskin1988@gmail.com',
  socials: [
    {
      label: 'GitHub',
      handle: '@muratkeskin',
      icon: 'logo-github',
      url: 'https://github.com/muratkeskin',
    },
    {
      label: 'LinkedIn',
      handle: '/in/muratkeskin',
      icon: 'logo-linkedin',
      url: 'https://linkedin.com/in/muratkeskin',
    },
    {
      label: 'Twitter',
      handle: '@muratkeskin',
      icon: 'logo-twitter',
      url: 'https://twitter.com/muratkeskin',
    },
  ],
};
