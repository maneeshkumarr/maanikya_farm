import { MEDIA } from '../constants/media.constants';
import { Product } from '../models/product.model';

export const PRODUCTS: readonly Product[] = [
  {
    id: '1',
    slug: 'oyster-mushroom',
    name: 'Oyster Mushroom',
    description:
      'Fresh, tender and versatile. Suitable for home cooking, restaurants and bulk orders.',
    imageUrl: MEDIA.products.oyster,
    imageAlt: 'Fresh oyster mushrooms',
  },
  {
    id: '2',
    slug: 'button-mushroom',
    name: 'Button Mushroom',
    description: 'A popular mushroom variety for a range of everyday dishes.',
    imageUrl: MEDIA.products.button,
    imageAlt: 'White button mushrooms',
    comingSoon: true,
  },
  {
    id: '3',
    slug: 'milky-mushroom',
    name: 'Milky Mushroom',
    description: 'A firm-textured variety with a distinctive appearance.',
    imageUrl: MEDIA.products.milky,
    imageAlt: 'Milky mushrooms',
    comingSoon: true,
  },
] as const;
