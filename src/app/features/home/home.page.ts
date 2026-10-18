import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BenefitsStripComponent } from './sections/benefits-strip.component';
import { ConnectSectionComponent } from './sections/connect-section.component';
import { FarmSectionComponent } from './sections/farm-section.component';
import { HeroSectionComponent } from './sections/hero-section.component';
import { ProductsSectionComponent } from './sections/products-section.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    HeroSectionComponent,
    BenefitsStripComponent,
    ProductsSectionComponent,
    FarmSectionComponent,
    ConnectSectionComponent,
  ],
  template: `
    <app-hero-section />
    <app-benefits-strip />
    <app-products-section />
    <app-farm-section />
    <app-connect-section />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage {}
