import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/'),
    },
    {
      text: 'About us',
      href: getPermalink('/about'),
    },
    {
      text: 'Events & Resources',
      href: getPermalink('/events-and-resources'),
    },
    {
      text: 'Community',
      href: getPermalink('/community'),
    },
  ],
  // actions: [
  //   { text: 'Join us', href: 'http://tiny.cc/wateratlasinterest', target: '_blank', icon: 'tabler:external-link' },
  // ],
};

export const footerData = {
  links: [
    {
      title: 'Information',
      links: [
        { text: 'About us', href: getPermalink('/about') },
        { text: 'Community', href: getPermalink('/community') },
      ],
    },
    {
      title: 'Events & Resources',
      links: [
        { text: 'Events', href: getPermalink('/category/events') },
        { text: 'Tutorials', href: getPermalink('/category/tutorials') },
      ],
    },
    {
      title: 'Contact Us',
      links: [
        { text: 'Email', href: 'mailto:torontowateratlas@gmail.com' },
      ],
    }
  ],
  secondaryLinks: [],
  socialLinks: [],
  footNote: 'Website and project development led by Taneea S Agrawaal © Creative Commons license',
};
