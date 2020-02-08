import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import {HomeComponent} from "./components/home/home.component";
import {ViewRegisterationComponent} from "./components/view-registeration/view-registeration.component";
import {CallbackComponent} from "./components/callback/callback.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'admin/view/:id',
    component: ViewRegisterationComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'callback',
    component: CallbackComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
