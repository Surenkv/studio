import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { PageComponent } from './page/page.component';

const routes: Routes = [
  {path:'first',component:FirstComponent},
  {path:'second',component:SecondComponent},
  {path:'admin',component:SecondComponent},
  {path:'page-not-found',component:PageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
