import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-section-heading',
  standalone: true,
  template: `
    <div class="text-center" [class.text-left]="align() === 'left'">
      <p class="section-eyebrow mb-3 flex items-center justify-center gap-3" [class.justify-start]="align() === 'left'">
        @if (align() === 'center') {
          <span class="h-px w-10 bg-gradient-to-r from-transparent to-gold"></span>
        }
        <span>{{ eyebrow() }}</span>
        @if (align() === 'center') {
          <span class="h-px w-10 bg-gradient-to-l from-transparent to-gold"></span>
        }
      </p>
      <h2 class="heading-section">{{ title() }}</h2>
      @if (subtitle()) {
        <p class="mx-auto mt-4 max-w-2xl text-base text-muted" [class.mx-0]="align() === 'left'">
          {{ subtitle() }}
        </p>
      }
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionHeadingComponent {
  readonly eyebrow = input.required<string>();
  readonly title = input.required<string>();
  readonly subtitle = input<string>();
  readonly align = input<'center' | 'left'>('center');
}
