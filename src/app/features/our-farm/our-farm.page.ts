import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { WHATSAPP_URL } from '../../core/constants/site.constants';
import { FARM_IMAGE } from '../../core/data/home-content.data';

@Component({
  selector: 'app-our-farm-page',
  standalone: true,
  imports: [RouterLink],
  template: `
    <article class="bg-ivory pb-16 pt-10 sm:pt-12">
      <div class="container-site">
        <p class="section-eyebrow section-eyebrow-line">Our Farm</p>
        <h1 class="heading-section mt-4 max-w-3xl">Grown with care, every step of the way</h1>
        <p class="body-text mt-5 max-w-2xl">
          Maanikya Naturals focuses on controlled cultivation, careful harvesting, hygienic handling and
          thoughtful packaging — so the mushrooms you receive reflect the standards we hold on the farm.
        </p>

        <img
          [src]="farmImage"
          alt="Indoor mushroom growing facility"
          class="mt-10 h-[240px] w-full object-cover sm:h-[320px] lg:h-[400px]"
          width="960"
          height="400"
        />

        <div class="mt-12 grid gap-10 lg:grid-cols-3">
          <div class="rounded-[10px] border border-border bg-card p-6">
            <h2 class="font-serif text-lg font-semibold text-deep-green">Cultivation</h2>
            <p class="mt-3 text-sm leading-relaxed text-text">
              Mushrooms are grown in a managed environment with attention to substrate quality, humidity
              and temperature — supporting consistent harvests through the season.
            </p>
          </div>
          <div class="rounded-[10px] border border-border bg-card p-6">
            <h2 class="font-serif text-lg font-semibold text-deep-green">Quality practices</h2>
            <p class="mt-3 text-sm leading-relaxed text-text">
              Harvest and post-harvest steps follow clean handling routines so produce stays fresh from
              packing through delivery to your kitchen or business.
            </p>
          </div>
          <div class="rounded-[10px] border border-border bg-card p-6">
            <h2 class="font-serif text-lg font-semibold text-deep-green">Packaging</h2>
            <p class="mt-3 text-sm leading-relaxed text-text">
              We use packaging suited to the product and journey — balancing protection, freshness and
              practical use for home and bulk customers.
            </p>
          </div>
        </div>

        <div class="mt-12 flex flex-wrap gap-4">
          <a routerLink="/" fragment="products" class="btn-primary">Explore Products</a>
          <a [href]="whatsappUrl" class="btn-outline" target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
        </div>
      </div>
    </article>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OurFarmPage {
  readonly farmImage = FARM_IMAGE;
  readonly whatsappUrl = WHATSAPP_URL;
}
