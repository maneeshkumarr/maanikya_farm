import { NavLink } from '../models/nav-link.model';

export const SITE_NAME = 'Maanikya Naturals';
export const SITE_TAGLINE = "Nature's goodness, from our farm to your table.";

/** Replace with your business WhatsApp number (country code, no + or spaces). */
export const WHATSAPP_NUMBER = '919999999999';
export const WHATSAPP_MESSAGE = encodeURIComponent(
  'Hi Maanikya Naturals! I would like to know more about your fresh mushrooms.'
);
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

export const CONTACT_EMAIL = 'hello@maanikyanaturals.com';
export const INSTAGRAM_URL = 'https://instagram.com/';

export const NAV_LINKS: readonly NavLink[] = [
  { label: 'Home', fragment: 'home' },
  { label: 'Products', fragment: 'products' },
  { label: 'Our Farm', fragment: 'farm' },
  { label: 'Quality', fragment: 'quality' },
  { label: 'Contact', fragment: 'contact' },
] as const;
