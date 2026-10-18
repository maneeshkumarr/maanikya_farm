import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ProductService } from '../../../core/services/product.service';
import { InViewDirective } from '../../../shared/directives/in-view.directive';
import { ProductCardComponent } from '../../../shared/ui/product-card/product-card.component';

@Component({
  selector: 'app-products-section',
  standalone: true,
  imports: [ProductCardComponent, InViewDirective],
  template: `
    <section id="products" class="bg-ivory py-12 sm:py-14 lg:py-16">
      <div class="container-site">
        <div class="mb-10 flex flex-col gap-4 sm:mb-12 sm:flex-row sm:items-end sm:justify-between" appInView>
          <div>
            <p class="section-eyebrow mb-2">Our Products</p>
            <div class="flex flex-wrap items-center gap-3">
              <h2 class="heading-section">Our Mushrooms</h2>
              <span class="hidden h-px w-14 bg-gold-light/80 sm:inline-block" aria-hidden="true"></span>
            </div>
          </div>
          <a href="#products" class="btn-link shrink-0">
            View All Products
            <span aria-hidden="true">→</span>
          </a>
        </div>

        <div class="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          @for (product of products; track product.id) {
            <div appInView>
              <app-product-card [product]="product" />
            </div>
          }
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsSectionComponent {
  private readonly productService = inject(ProductService);
  readonly products = this.productService.getAll();
}
