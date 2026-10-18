import { ChangeDetectionStrategy, Component } from '@angular/core';
import { WHATSAPP_URL } from '../../../core/constants/site.constants';
import { AUDIENCE_SEGMENTS } from '../../../core/data/home-content.data';
import { InViewDirective } from '../../../shared/directives/in-view.directive';

@Component({
  selector: 'app-connect-section',
  standalone: true,
  imports: [InViewDirective],
  template: `
    <section id="contact" class="relative overflow-hidden bg-forest py-10 text-white sm:py-12 lg:py-14">
      <div
        class="pointer-events-none absolute inset-0 opacity-[0.12]"
        aria-hidden="true"
        style="background-image: url('data:image/svg+xml,%3Csvg width=&quot;160&quot; height=&quot;160&quot; viewBox=&quot;0 0 160 160&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cpath d=&quot;M80 20c-10 18-32 24-32 48a32 32 0 0 0 64 0c0-24-22-30-32-48Z&quot; fill=&quot;none&quot; stroke=&quot;%23D4AE61&quot; stroke-width=&quot;1&quot;/%3E%3C/svg%3E'); background-size: 160px 160px;"
      ></div>

      <div class="container-site relative">
        <div class="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <div appInView>
            <p class="text-xs font-semibold uppercase tracking-[0.18em] text-gold-light">Let's Connect</p>
            <h2 class="heading-section mt-3 text-white">Looking for Fresh Mushrooms?</h2>
            <p class="mt-4 max-w-lg text-sm leading-relaxed text-contact-muted sm:text-base">
              For home customers, wholesale buyers, restaurants and caterers.
            </p>
            <a [href]="whatsappUrl" class="btn-cta-ivory mt-7" target="_blank" rel="noopener noreferrer">
              Get in Touch on WhatsApp
              <span aria-hidden="true">→</span>
            </a>
          </div>

          <div
            class="grid gap-6 border-t border-gold/40 pt-8 sm:grid-cols-3 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0"
            appInView
          >
            @for (segment of segments; track segment.id) {
              <div class="flex flex-col items-center gap-3 text-center lg:items-start lg:text-left">
                <span
                  class="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-gold-light/70 text-gold-light"
                  aria-hidden="true"
                >
                  @switch (segment.icon) {
                    @case ('home') {
                      <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                        <path d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1v-9.5Z" />
                      </svg>
                    }
                    @case ('wholesale') {
                      <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                        <path d="M3 7h18v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7Z" />
                        <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                      </svg>
                    }
                    @case ('restaurant') {
                      <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                        <path d="M8 3v8a4 4 0 0 0 8 0V3M12 11v10M6 21h12" stroke-linecap="round" />
                      </svg>
                    }
                  }
                </span>
                <p class="text-sm font-medium text-white/95">{{ segment.label }}</p>
              </div>
            }
          </div>
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConnectSectionComponent {
  readonly segments = AUDIENCE_SEGMENTS;
  readonly whatsappUrl = WHATSAPP_URL;
}
