import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HouseListComponent } from './house-list/house-list.component';
import { HouseCreateComponent } from './house-create/house-create.component';
import { HouseUpdateComponent } from './house-update/house-update.component';
import { HouseDetailComponent } from './house-detail/house-detail.component';
import {RouterModule, Routes} from "@angular/router";


const routes: Routes = [
  {
    path: '',
    component: HouseListComponent
  }, {
    path: 'detail/:id',
    component: HouseDetailComponent
  }, {
    path: 'update/:id',
    component: HouseUpdateComponent
  }, {
    path: 'create',
    component: HouseCreateComponent
  },

]
@NgModule({
  declarations: [
    HouseListComponent,
    HouseCreateComponent,
    HouseUpdateComponent,
    HouseDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [

  ]
})
export class HouseModule { }
