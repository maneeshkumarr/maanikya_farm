export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  comingSoon?: boolean;
}
