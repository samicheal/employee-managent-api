import { EmployeesService } from './service/employees.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import {ReactiveFormsModule} from "@angular/forms";
import { ViewRegisterationComponent } from './components/view-registeration/view-registeration.component';
import {AuthService} from "./service/auth.service";
import {CallbackComponent} from "./components/callback/callback.component";
import {AuthGuard} from "./service/authguard.service";


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HomeComponent,
    ViewRegisterationComponent,
    CallbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [EmployeesService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
