import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SITE_NAME } from '../../../core/constants/site.constants';

@Component({
  selector: 'app-brand-logo',
  standalone: true,
  imports: [RouterLink],
  template: `
    @if (link()) {
      <a
        routerLink="/"
        fragment="home"
        class="group inline-flex items-center gap-3 no-underline"
        [attr.aria-label]="siteName + ' home'"
      >
        <span
          class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/35 bg-gold/10 text-gold transition group-hover:border-gold/55"
          aria-hidden="true"
        >
          <svg class="h-[22px] w-[22px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 3C8 8 5 10 5 14a7 7 0 0 0 14 0c0-4-3-6-7-11Z"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linejoin="round"
            />
            <path d="M12 14v7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
          </svg>
        </span>
        @if (showText()) {
          <span class="flex flex-col leading-none">
            <span class="font-serif text-xl font-medium tracking-wide text-deep-green sm:text-2xl">MAANIKYA</span>
            <span class="mt-1 text-[10px] font-medium tracking-[0.32em] text-gold sm:text-[11px]">N A T U R A L S</span>
          </span>
        }
      </a>
    } @else {
      <span class="inline-flex items-center gap-3">
        <span
          class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/35 bg-gold/10 text-gold"
          aria-hidden="true"
        >
          <svg class="h-[22px] w-[22px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 3C8 8 5 10 5 14a7 7 0 0 0 14 0c0-4-3-6-7-11Z"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linejoin="round"
            />
            <path d="M12 14v7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
          </svg>
        </span>
        @if (showText()) {
          <span class="flex flex-col leading-none">
            <span class="font-serif text-xl font-medium tracking-wide text-deep-green sm:text-2xl">MAANIKYA</span>
            <span class="mt-1 text-[10px] font-medium tracking-[0.32em] text-gold sm:text-[11px]">N A T U R A L S</span>
          </span>
        }
      </span>
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrandLogoComponent {
  readonly siteName = SITE_NAME;
  readonly showText = input(true);
  readonly link = input(true);
}
