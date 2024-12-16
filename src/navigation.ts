import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

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
  ],
  actions: [{ text: 'Join us', href: 'http://tiny.cc/wateratlasinterest', target: '_blank', icon: 'tabler:external-link' }],
};

export const footerData = {
  links: [
    {
      title: 'Information',
      links: [
        { text: 'About us', href: getPermalink('/about') },
      ],
    },
  ],
  secondaryLinks: [
  ],
  socialLinks: [],
  footNote: 'All rights reserved.',
};
