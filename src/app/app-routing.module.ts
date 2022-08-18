import { ColorsComponent } from './utils/colors/colors.component';
import { Page1Component } from './page1/page1.component';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { Page2Component } from './page2/page2.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
      { path: 'page1', component: Page1Component, title: '頁面1' },
      { path: 'page2', component: Page2Component, title: '頁面2' },
      { path: 'dashboard', component: DashboardComponent, title: '儀錶板' },
      // { path: 'utils/colors', component: ColorsComponent, title: '工具 / 顏色' },
      {
        path: 'utils',
        children: [
          { path: 'colors', pathMatch: 'full', redirectTo: 'colors/123' },
          {
            path: 'colors/:type',
            component: ColorsComponent,
            title: '工具 / 顏色',
          },
        ],
      },
      {
        path: 'pages',
        loadChildren: () =>
          import('./pages/pages.module').then((m) => m.PagesModule),
      },
    ]
  },
  // { path: '**', pathMatch: 'full', redirectTo: 'dashboard' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      preloadingStrategy: PreloadAllModules
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
