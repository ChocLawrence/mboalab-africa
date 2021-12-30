import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // home
  { path: '', loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule), data: { breadcrumb: 'Homepage' } },
  // Auth
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
