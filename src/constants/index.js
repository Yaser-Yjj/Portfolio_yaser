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
    name: 'Soni Liya',
    description:
      'This contact management app enables users to easily manage contacts with features like calling, messaging, and searching, offering a simple and intuitive interface.',
    image: leaderboard,
    repo: 'https://github.com/0yaser0/ContactApp_V2',
    demo: 'https://github.com/0yaser0/ContactApp_V2',
  },
  {
    id: 'project-3',
    name: 'Alarmini',
    description: 'Alarmini Compose is an Android app built with Jetpack Compose and MVVM architecture, designed to help users efficiently manage alarms, view active alarms, and receive notifications when alarms go off',
    image: math,
    repo: 'https://github.com/0yaser0/Alarmini_Compose',
    demo: 'https://github.com/0yaser0/Alarmini_Compose',
  },
  {
    id: 'project-4',
    name: 'web recipes',
    description: `Explore a variety of delicious recipes with easy-to-follow instructions, all optimized for quick meals and healthy eating. I also worked with Three.js to create 3D models, enhancing interactive recipe visualization.`,
    image: movie,
    repo: 'https://github.com/0yaser0/Project_school',
    demo: 'https://github.com/0yaser0/Project_school',
  },
  {
    id: 'project-5',
    name: 'Robotic',
    description:
      'As a member of the robotics club, I\'ve contributed to the design and assembly of various robots, enhancing my skills in robotics and technology. Using Three.js, I\’ve also developed 3D models to showcase the mechanical aspects of these robots, improving our projects\' interactivity and presentation.',
    image: nyeusi,
    repo: 'https://github.com/0yaser0',
    demo: 'https://github.com/0yaser0',
  },
];

export { services, technologies, experiences, projects };
