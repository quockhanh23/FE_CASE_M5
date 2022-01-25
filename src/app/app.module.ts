import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { CommentListComponent } from './comment-list/comment-list.component';
import { HomeListComponent } from './home-list/home-list.component';
import { CommentCreateComponent } from './comment-create/comment-create.component';
import { HomeDetailComponent } from './home-detail/home-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    CommentListComponent,
    HomeListComponent,
    CommentCreateComponent,
    HomeDetailComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
