import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./layout/main-layout/main-layout.component').then((m) => m.MainLayoutComponent),
    children: [
      {
        path: '',
        loadComponent: () => import('./features/home/home.page').then((m) => m.HomePage),
      },
      {
        path: 'our-farm',
        loadComponent: () => import('./features/our-farm/our-farm.page').then((m) => m.OurFarmPage),
      },
    ],
  },
  { path: '**', redirectTo: '' },
];
