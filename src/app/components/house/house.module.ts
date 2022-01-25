import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HouseListComponent } from './house-list/house-list.component';
import { HouseCreateComponent } from './house-create/house-create.component';
import { HouseUpdateComponent } from './house-update/house-update.component';
import { HouseDetailComponent } from './house-detail/house-detail.component';
import {RouterModule, Routes} from "@angular/router";
import {CommentListComponent} from "./comment-list/comment-list.component";
import {ReactiveFormsModule} from "@angular/forms";


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
    HouseDetailComponent,
    CommentListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule

  ],
  exports: [

  ]
})
export class HouseModule { }
