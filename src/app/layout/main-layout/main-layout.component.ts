import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SiteFooterComponent } from '../site-footer/site-footer.component';
import { SiteHeaderComponent } from '../site-header/site-header.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [SiteHeaderComponent, SiteFooterComponent, RouterOutlet],
  template: `
    <div class="flex min-h-dvh flex-col">
      <app-site-header />
      <main class="flex-1">
        <router-outlet />
      </main>
      <app-site-footer />
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainLayoutComponent {}
