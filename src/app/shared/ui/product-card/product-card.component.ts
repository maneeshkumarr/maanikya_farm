import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Product } from '../../../core/models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  template: `
    <article
      class="flex h-full flex-col overflow-hidden rounded-[10px] border border-border bg-card transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(7,61,39,0.08)]"
    >
      <div class="relative h-[165px] overflow-hidden sm:h-[180px]">
        <img
          [src]="product().imageUrl"
          [alt]="product().imageAlt"
          class="h-full w-full object-cover"
          loading="lazy"
        />
        @if (product().comingSoon) {
          <span
            class="absolute right-2 top-2 rounded-full bg-gold px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-white"
          >
            Coming Soon
          </span>
        }
      </div>
      <div class="flex flex-1 flex-col p-4">
        <h3 class="text-base font-semibold text-deep-green">{{ product().name }}</h3>
        <p class="mt-2 flex-1 text-[13px] leading-[1.5] text-text">{{ product().description }}</p>
        <a
          [href]="product().comingSoon ? '/#contact' : '/#products'"
          class="btn-outline-gold-text mt-4 w-fit px-4 py-2.5 text-[13px]"
        >
          View Details
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </article>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent {
  readonly product = input.required<Product>();
}
