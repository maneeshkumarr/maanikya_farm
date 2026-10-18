import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NAV_LINKS, WHATSAPP_URL } from '../../core/constants/site.constants';
import { BrandLogoComponent } from '../../shared/ui/brand-logo/brand-logo.component';

@Component({
  selector: 'app-site-header',
  standalone: true,
  imports: [BrandLogoComponent, RouterLink],
  template: `
    <header class="sticky top-0 z-[100] border-b border-header-border bg-ivory">
      <div class="container-site flex h-[68px] items-center justify-between gap-4">
        <app-brand-logo />

        <nav class="hidden items-center gap-7 lg:flex" aria-label="Primary">
          @for (link of navLinks; track link.fragment) {
            <a
              routerLink="/"
              [fragment]="link.fragment"
              class="relative text-[13px] font-medium text-nav transition hover:text-gold"
              [class.text-active]="link.fragment === 'home'"
            >
              {{ link.label }}
              @if (link.fragment === 'home') {
                <span class="absolute -bottom-1.5 left-0 h-0.5 w-full rounded-full bg-gold"></span>
              }
            </a>
          }
        </nav>

        <div class="flex items-center gap-3">
          <a
            [href]="whatsappUrl"
            class="btn-accent hidden sm:inline-flex"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M4 5h16v14H4V5Z"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linejoin="round"
              />
              <path d="m4 7 8 6 8-6" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
            </svg>
            Get in Touch
          </a>

          <button
            type="button"
            class="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-deep-green lg:hidden"
            [attr.aria-expanded]="menuOpen()"
            aria-controls="mobile-nav"
            aria-label="Toggle menu"
            (click)="toggleMenu()"
          >
            @if (menuOpen()) {
              <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M6 6l12 12M18 6 6 18" stroke-linecap="round" />
              </svg>
            } @else {
              <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M4 7h16M4 12h16M4 17h16" stroke-linecap="round" />
              </svg>
            }
          </button>
        </div>
      </div>

      @if (menuOpen()) {
        <nav
          id="mobile-nav"
          class="border-t border-header-border bg-ivory px-5 pb-6 pt-2 lg:hidden"
          aria-label="Mobile"
        >
          @for (link of navLinks; track link.fragment) {
            <a
              routerLink="/"
              [fragment]="link.fragment"
              class="block border-b border-border py-3 text-sm font-medium text-nav"
              (click)="closeMenu()"
            >
              {{ link.label }}
            </a>
          }
          <a
            [href]="whatsappUrl"
            class="btn-accent mt-4 w-full"
            target="_blank"
            rel="noopener noreferrer"
            (click)="closeMenu()"
          >
            Get in Touch
          </a>
        </nav>
      }
    </header>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiteHeaderComponent {
  readonly navLinks = NAV_LINKS;
  readonly whatsappUrl = WHATSAPP_URL;
  readonly menuOpen = signal(false);

  toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }
}
