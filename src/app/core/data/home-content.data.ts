import { AudienceSegment } from '../models/audience-segment.model';
import { TrustBadge } from '../models/trust-badge.model';
import { MEDIA } from '../constants/media.constants';

export const TRUST_BADGES: readonly TrustBadge[] = [
  {
    id: 'natural',
    title: 'Natural Cultivation',
    subtitle: 'Careful growing practices',
    icon: 'leaf',
  },
  {
    id: 'hygienic',
    title: 'Clean & Hygienic',
    subtitle: 'Careful handling',
    icon: 'shield',
  },
  {
    id: 'quality',
    title: 'Quality Focused',
    subtitle: 'Selected with care',
    icon: 'quality',
  },
  {
    id: 'packaging',
    title: 'Thoughtful Packaging',
    subtitle: 'Reduce unnecessary waste',
    icon: 'package',
  },
] as const;

export const AUDIENCE_SEGMENTS: readonly AudienceSegment[] = [
  { id: 'home', label: 'Home Customers', icon: 'home' },
  { id: 'wholesale', label: 'Wholesale Buyers', icon: 'wholesale' },
  { id: 'restaurant', label: 'Hotels & Restaurants', icon: 'restaurant' },
] as const;

export const HERO_IMAGE = MEDIA.hero;
export const FARM_IMAGE = MEDIA.farmInterior;
