import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  CONTACT_EMAIL,
  INSTAGRAM_URL,
  NAV_LINKS,
  WHATSAPP_URL,
} from '../../core/constants/site.constants';
import { BrandLogoComponent } from '../../shared/ui/brand-logo/brand-logo.component';

@Component({
  selector: 'app-site-footer',
  standalone: true,
  imports: [BrandLogoComponent, RouterLink],
  template: `
    <footer class="border-t border-border bg-ivory py-6 sm:py-7">
      <div class="container-site">
        <div class="flex flex-col items-center gap-6 lg:flex-row lg:justify-between">
          <app-brand-logo />

          <nav
            class="flex flex-wrap items-center justify-center gap-x-2 gap-y-2 text-[13px] text-text"
            aria-label="Footer"
          >
            @for (link of navLinks; track link.fragment; let last = $last) {
              <a
                routerLink="/"
                [fragment]="link.fragment"
                class="transition hover:text-gold"
              >
                {{ link.label }}
              </a>
              @if (!last) {
                <span class="hidden text-border sm:inline" aria-hidden="true">|</span>
              }
            }
          </nav>

          <div class="flex items-center gap-2.5">
            <a
              [href]="instagramUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="flex h-9 w-9 items-center justify-center text-social transition hover:text-gold"
              aria-label="Instagram"
            >
              <svg class="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a
              [href]="whatsappUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="flex h-9 w-9 items-center justify-center text-social transition hover:text-gold"
              aria-label="WhatsApp"
            >
              <svg class="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M12 2a10 10 0 0 0-8.7 14.9L2 22l5.3-1.3A10 10 0 1 0 12 2Zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-3.1.8.8-3-.2-.3A8 8 0 1 1 12 20Zm4.5-5.9c-.2-.1-1.4-.7-1.6-.8s-.4-.1-.6.1-.7.8-.9.9-.3.2-.6.1a7.8 7.8 0 0 1-2.3-1.4 8.6 8.6 0 0 1-1.6-2c-.2-.3 0-.5.1-.6l.4-.5.6-.7c.2-.2 0-.4 0-.6s-.6-1.5-.8-2.1-.4-.5-.6-.5h-.5a1 1 0 0 0-.7.3 2.8 2.8 0 0 0-.9 2.1 4.9 4.9 0 0 0 1 2.4 11.2 11.2 0 0 0 4.3 3.8c.6.3 1.1.4 1.5.5a3.6 3.6 0 0 0 1.7-.1 2.7 2.7 0 0 0 1.8-1.3 2.2 2.2 0 0 0 .2-1.3c-.1-.1-.2-.1-.4-.2Z"
                />
              </svg>
            </a>
            <a
              [href]="'mailto:' + email"
              class="flex h-9 w-9 items-center justify-center text-social transition hover:text-gold"
              aria-label="Email"
            >
              <svg class="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M4 6h16v12H4V6Z" />
                <path d="m4 8 8 6 8-6" stroke-linejoin="round" />
              </svg>
            </a>
          </div>
        </div>

        <p class="mt-6 text-center text-xs text-muted">
          © {{ year }} Maanikya Naturals
        </p>
      </div>
    </footer>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiteFooterComponent {
  readonly navLinks = NAV_LINKS;
  readonly whatsappUrl = WHATSAPP_URL;
  readonly instagramUrl = INSTAGRAM_URL;
  readonly email = CONTACT_EMAIL;
  readonly year = new Date().getFullYear();
}
