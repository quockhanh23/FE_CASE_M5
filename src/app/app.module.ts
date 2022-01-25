import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './components/pages/login/login.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { MasterComponent } from './components/layouts/master/master.component';
import { HeaderComponent } from './components/layouts/header/header.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {HomeComponent} from "./components/pages/home/home.component";
import {AdminComponent} from "./components/pages/admin/admin.component";
import {AdminAuthGuard} from "./helper/admin-auth-guard";
import {AuthGuard} from "./helper/auth-guard";




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MasterComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AdminComponent,
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,

  ],
  providers: [
    AdminAuthGuard,
    AuthGuard
  ],
  exports: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
