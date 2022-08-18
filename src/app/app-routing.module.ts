import { ColorsComponent } from './utils/colors/colors.component';
import { Page1Component } from './page1/page1.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page2Component } from './page2/page2.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  { path: 'page1', component: Page1Component, title: '頁面1' },
  { path: 'page2', component: Page2Component, title: '頁面2' },
  { path: 'dashboard', component: DashboardComponent, title: '儀錶板' },
  // { path: 'utils/colors', component: ColorsComponent, title: '工具 / 顏色' },
  { path: 'utils', children: [
    { path: 'colors', component: ColorsComponent, title: '工具 / 顏色' },
  ] },
  // { path: '**', pathMatch: 'full', redirectTo: 'dashboard' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
