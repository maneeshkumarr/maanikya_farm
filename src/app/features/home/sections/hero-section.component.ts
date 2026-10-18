import { ChangeDetectionStrategy, Component } from '@angular/core';
import { WHATSAPP_URL } from '../../../core/constants/site.constants';
import { HERO_IMAGE } from '../../../core/data/home-content.data';
import { InViewDirective } from '../../../shared/directives/in-view.directive';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [InViewDirective],
  template: `
    <section
      id="home"
      class="relative overflow-hidden bg-ivory pb-4 pt-8 sm:pt-10 lg:min-h-[460px] lg:pb-8"
    >
      <!-- Decorative botanical line art -->
      <svg
        class="pointer-events-none absolute -left-8 top-24 hidden h-40 w-40 text-gold-light/35 lg:block"
        viewBox="0 0 120 120"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M60 100V55M60 55C60 35 45 25 35 20c0 15 8 28 25 35M60 55c0-20 15-30 25-35-10 18-5 32-25 35Z"
          stroke="currentColor"
          stroke-width="1"
        />
      </svg>

      <div class="container-site">
        <div class="grid items-center gap-10 lg:grid-cols-[48%_52%] lg:gap-8">
          <div class="max-w-xl" appInView>
            <p class="section-eyebrow section-eyebrow-line">
              Nature's Goodness
            </p>
            <h1 class="heading-hero mt-5">
              Fresh Mushrooms,<br />
              for a <span class="text-gold">Healthier Tomorrow</span>
            </h1>
            <p class="body-text mt-5 max-w-lg">
              Naturally cultivated mushrooms with high quality and hygiene
              standards. Fresh from our farm to your table.
            </p>
            <div class="mt-8 flex flex-nowrap items-center gap-2 sm:gap-4">
              <a
                href="#products"
                class="btn-primary inline-flex shrink min-w-0 items-center justify-center gap-1 whitespace-nowrap px-3 text-sm sm:px-5 sm:text-base"
              >
                Explore Products <span aria-hidden="true">→</span>
              </a>

              <a
                [href]="whatsappUrl"
                class="btn-outline inline-flex shrink min-w-0 items-center justify-center gap-1 whitespace-nowrap px-3 text-sm sm:px-5 sm:text-base"
                target="_blank"
                rel="noopener noreferrer"
              >
                <!-- Keep your complete existing WhatsApp SVG and path here -->
                <svg
                  class="h-4 w-4 shrink-0 text-[#25D366]"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <!-- Restore the original WhatsApp path here -->
                </svg>
                Chat on WhatsApp
              </a>
            </div>
          </div>

          <div class="relative lg:min-h-[420px]" appInView>
            <svg
              class="pointer-events-none absolute -right-4 bottom-8 z-20 hidden h-32 w-32 text-gold-light/40 lg:block"
              viewBox="0 0 100 100"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M50 90V45M50 45C50 28 38 18 28 12c0 12 6 22 22 33M50 45c0-17 12-27 22-33-8 14-4 25-22 33Z"
                stroke="currentColor"
                stroke-width="0.9"
              />
            </svg>
            <img
              [src]="heroImage"
              alt="Fresh oyster mushrooms in a basket"
              class="hero-image-mask relative z-10 mx-auto h-[280px] w-full max-w-lg object-cover shadow-[0_18px_45px_rgba(7,61,39,0.12)] sm:h-[340px] lg:absolute lg:right-0 lg:top-1/2 lg:h-[min(420px,90%)] lg:max-w-none lg:-translate-y-1/2"
              width="640"
              height="640"
              fetchpriority="high"
            />
          </div>
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroSectionComponent {
  readonly heroImage = HERO_IMAGE;
  readonly whatsappUrl = WHATSAPP_URL;
}
