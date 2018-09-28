import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { PageComponent } from './page/page.component';
import { AdminComponent } from './admin/admin.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AdmindetailComponent } from './admindetail/admindetail.component';

const routes: Routes = [
  {path: '', redirectTo:'page',pathMatch:'full'},
  {path:'page',component:PageComponent,children:[
    {path: '', redirectTo:'first',pathMatch:'full'},
    {path:'first',component:FirstComponent},
    {path:'second',component:SecondComponent}
  ]},
  {path:'admin',component:AdminComponent,children:[
    {path: '', redirectTo:'detail',pathMatch:'full'},
    {path:'detail',component:AdmindetailComponent}
  ]},
  {path:'page-not-found',component:NotfoundComponent},
  {path:'**',redirectTo:'page-not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
