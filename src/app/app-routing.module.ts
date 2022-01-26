import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MasterComponent} from "./components/layouts/master/master.component";

import {LoginComponent} from "./components/pages/login/login.component";
import {RegisterComponent} from "./components/pages/register/register.component";

import {AdminAuthGuard} from "./helper/admin-auth-guard";
import {AdminComponent} from "./components/pages/admin/admin.component";
import {HomeComponent} from "./components/pages/home/home.component";

const routes: Routes = [
  {
    path: "",
    component: MasterComponent,
    children: [
      {
        path: "",
        component: HomeComponent,
    },
      {
        path: "house",
        loadChildren: () => import('./components/house/house.module').then(module => module.HouseModule)
    },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path:'admin',
        canActivate: [AdminAuthGuard],
        component: AdminComponent
      }
    ],

  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
