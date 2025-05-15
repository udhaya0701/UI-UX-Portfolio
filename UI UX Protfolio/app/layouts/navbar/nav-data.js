import config from '~/config.json';

export const navLinks = [
  {
    label: 'Projects',
    pathname: '/#project-1',
  },
  {
    label: 'Details',
    pathname: '/#details',
  },
  {
    label: 'My Journey',
    pathname: '/articles',
  },
  {
    label: 'Contact',
    pathname: '/contact',
  },
];

export const socialLinks = [
  {
    label: 'github',
    url: `https://drive.google.com/file/d/1MAZqSZXN0Sqz5eqWL6r0yL6tkmIzP8Hu/view?usp=sharing${config.github}`,
    icon: 'github',
  },
  {
    label: 'Linkedin',
    url: `https://www.linkedin.com/in/udhayakumar-devadass-659a54289/${config.Linkedin}`,
    icon: 'bluesky',
  },
  {
    label: 'Behance',
    url: `https://www.behance.net/udhayakumar59/${config.Behance}`,
    icon: 'figma',
  },
];
