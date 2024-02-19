import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { MenuSectionComponent } from './components/menu-section/menu-section.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: HomePageComponent
  // },
  // {
  //   path: 'section/:id',
  //   component: MenuSectionComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
