import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HouseListComponent } from './house-list/house-list.component';
import { HouseCreateComponent } from './house-create/house-create.component';
import { HouseUpdateComponent } from './house-update/house-update.component';
import { HouseDetailComponent } from './house-detail/house-detail.component';
import {RouterModule, Routes} from "@angular/router";
import {AppModule} from "../../app.module";
import {CommentListComponent} from "./comment-list/comment-list.component";
import {CommentCreateComponent} from "./comment-create/comment-create.component";
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
    CommentListComponent,
    CommentCreateComponent
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
