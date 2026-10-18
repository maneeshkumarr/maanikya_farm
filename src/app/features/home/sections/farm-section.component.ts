import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FARM_IMAGE } from '../../../core/data/home-content.data';
import { InViewDirective } from '../../../shared/directives/in-view.directive';

@Component({
  selector: 'app-farm-section',
  standalone: true,
  imports: [InViewDirective, RouterLink],
  template: `
    <section id="farm" class="relative bg-cream py-12 sm:py-14 lg:py-16">
      <svg
        class="pointer-events-none absolute bottom-12 right-[8%] hidden h-36 w-36 text-gold-light/35 lg:block"
        viewBox="0 0 120 120"
        fill="none"
        aria-hidden="true"
      >
        <path d="M60 15c-12 22-30 28-30 48a30 30 0 0 0 60 0c0-20-18-26-30-48Z" stroke="currentColor" stroke-width="1" />
      </svg>

      <div class="container-site">
        <div class="grid items-center gap-10 lg:grid-cols-[45%_55%] lg:gap-12">
          <div class="relative order-2 lg:order-1" appInView>
            <img
              [src]="farmImage"
              alt="Mushroom cultivation facility with growing racks"
              class="h-[260px] w-full object-cover sm:h-[300px] lg:h-[360px]"
              loading="lazy"
              width="560"
              height="360"
            />
          </div>

          <div class="order-1 lg:order-2" appInView>
            <p class="section-eyebrow section-eyebrow-line">Our Farm</p>
            <h2 class="heading-section mt-4">
              Grown with Care, From Our Farm to Your Table
            </h2>
            <p class="body-text-sm mt-5 max-w-xl leading-[1.6]">
              We focus on cultivation practices, careful harvesting, hygienic handling and thoughtful
              packaging to deliver quality mushrooms.
            </p>
            <a routerLink="/our-farm" class="btn-accent mt-8">
              Learn More
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FarmSectionComponent {
  readonly farmImage = FARM_IMAGE;
}
