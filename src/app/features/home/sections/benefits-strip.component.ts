import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TRUST_BADGES } from '../../../core/data/home-content.data';
import { InViewDirective } from '../../../shared/directives/in-view.directive';

@Component({
  selector: 'app-benefits-strip',
  standalone: true,
  imports: [InViewDirective],
  template: `
    <section id="quality" class="border-y border-gold-border/60 bg-cream py-6 sm:py-7" aria-label="Quality highlights">
      <div class="container-site">
        <div
          class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6 lg:divide-x lg:divide-gold-border/70"
          appInView
        >
          @for (badge of badges; track badge.id) {
            <div class="flex items-start gap-4 px-0 lg:px-6 lg:first:pl-0 lg:last:pr-0">
              <span class="shrink-0 text-gold" aria-hidden="true">
                @switch (badge.icon) {
                  @case ('leaf') {
                    <svg class="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25">
                      <path d="M12 3C8 8 5 10 5 14a7 7 0 0 0 14 0c0-4-3-6-7-11Z" />
                      <path d="M12 14v7" stroke-linecap="round" />
                    </svg>
                  }
                  @case ('shield') {
                    <svg class="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25">
                      <path d="M12 3 4 7v6c0 5 3.5 8 8 8s8-3 8-8V7l-8-4Z" />
                      <path d="m9 12 2 2 4-4" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  }
                  @case ('quality') {
                    <svg
                      class="h-8 w-8"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path
                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 0 0 .95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 0 0-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 0 0-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 0 0-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 0 0 .951-.69l1.519-4.674Z"
                      />
                    </svg>
                  }
                  @case ('package') {
                    <svg class="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25">
                      <path d="M12 3 3 7.5 12 12l9-4.5L12 3Z" />
                      <path d="M3 7.5V16.5L12 21l9-4.5V7.5" />
                      <path d="M12 12v9" />
                    </svg>
                  }
                }
              </span>
              <div>
                <p class="text-sm font-semibold text-deep-green">{{ badge.title }}</p>
                <p class="mt-0.5 text-xs leading-snug text-muted">{{ badge.subtitle }}</p>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BenefitsStripComponent {
  readonly badges = TRUST_BADGES;
}
