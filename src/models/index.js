import { createState } from 'shuttle-state';
const useValue = createState({
  navigatorList: [
    {
      icon: 'home',
      text: 'HOME',
      link: '/'
    },
    {
      icon: 'calendar',
      text: 'BLOG',
      link: '/blog'
    },
    {
      icon: 'profile',
      text: 'TIMELINE',
      link: '/archive'
    },
    {
      icon: 'user',
      text: 'ABOUT',
      link: '/me'
    },
  ],
});

export { useValue };