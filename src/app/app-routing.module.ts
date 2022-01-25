import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeDetailComponent} from "./home-detail/home-detail.component";

const routes: Routes = [
  {
    path: 'detail/:id', component: HomeDetailComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
