import {
  mobile,
  backend,
  ux,
  prototyping,
  javascript,
  kotlin,
  html,
  css,
  android_studio,
  arduino,
  C,
  Cpp,
  python,
  git,
  figma,
  php,
  sqlLite,
  Flutter, 
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Mobile App Developer',
    icon: mobile,
  },
  {
    title: 'FullStack Developer',
    icon: backend,
  },
  {
    title: 'UI/UX Design',
    icon: ux,
  },
  {
    title: 'Robotics Prototyping',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'Kotlin',
    icon: kotlin,
  },
  {
    name: 'Android studio',
    icon: android_studio,
  },
  {
    name: 'Arduino',
    icon: arduino,
  },
  {
    name: 'C',
    icon: C,
  },
  {
    name: 'C++',
    icon: Cpp,
  },
  {
    name: 'Flutter',
    icon: Flutter,
  },
  {
    name: 'python',
    icon: python,
  },
  {
    name: 'sqlLite',
    icon: sqlLite,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'php',
    icon: php,
  },
];

const experiences = [
  {
    title: 'High School Diploma in Technical Science',
    company_name: 'at Farabi High School',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'September 2021 - June 2022',
  },
  {
    title: 'Member of the Robotics Club',
    company_name: 'at Faculty of Sciences Rabat (FSR)',
    icon: microverse,
    iconBg: '#333333',
    date: 'September 2023 - Present',
  },
  {
    title: 'First-Year Certificate in Digital Development',
    company_name: 'at City of Trades and Skills, Rabat Sale Kenitra',
    icon: kelhel,
    iconBg: '#333333',
    date: 'June 2023 - June 2024',
  },
  {
    title: 'Second-Year Training in Mobile Application Development',
    company_name: 'at City of Trades and Skills, Rabat Sale Kenitra',
    icon: dcc,
    iconBg: '#333333',
    date: 'September 2024 - June 2025',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'MunchBot',
    description: 'MunchBot is a device controlled via a mobile app, allowing pet owners to schedule and manage feeding times automatically.',
    image: komikult,
    repo: 'https://github.com/0yaser0/MunchBotApp',
    demo: 'https://github.com/0yaser0/MunchBotApp',
  },
  {
    id: 'project-2',
    name: 'Leaderboard',
    description:
      'A leaderboard list app that displays scores submitted by different players.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: leaderboard,
    repo: 'https://github.com/shaqdeff/Leaderboard',
    demo: 'https://shaqdeff.github.io/Leaderboard/',
  },
  {
    id: 'project-3',
    name: 'Math Magicians',
    description: 'This is a single-page calculator app built with React',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: math,
    repo: 'https://github.com/shaqdeff/Math-Magicians',
    demo: 'https://inspiring-medovik-37d3b3.netlify.app/',
  },
  {
    id: 'project-4',
    name: 'Movie Metro',
    description: `A single-page application that allows users to search for any movie or show's ratings and its details.`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: movie,
    repo: 'https://github.com/shaqdeff/Movie-Metro',
    demo: 'https://movie-metro.netlify.app/',
  },
  {
    id: 'project-5',
    name: 'Nyeusi Fest Site',
    description:
      'This is a demo concert website for a music festival called Nyeusi.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: nyeusi,
    repo: 'https://github.com/shaqdeff/Nyeusi-Fest-Site',
    demo: 'https://shaqdeff.github.io/Nyeusi-Fest-Site/',
  },
];

export { services, technologies, experiences, projects };
