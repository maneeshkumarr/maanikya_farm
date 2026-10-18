/** Paths are served from `public/` at runtime (see angular.json assets). */
export const MEDIA = {
  hero: '/assets/images/Hero.png',
  farmInterior: '/assets/images/interior.png',
  products: {
    oyster: '/assets/images/Oster.png',
    button: '/assets/images/button.png',
    milky: '/assets/images/milky.png',
  },
} as const;
