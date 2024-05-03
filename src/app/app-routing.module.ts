import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { SaleListComponent } from './sale-list/sale-list.component';
import { SettingsComponent } from './settings/settings.component';
import { NewLoginComponent } from './new-login/new-login.component';
import { LogoutComponent } from './logout/logout.component';
import { OrderComponent } from './order/order.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent},
  { path: 'users', component: UsersComponent},
  { path: 'salelist', component: SaleListComponent},
  { path: 'orders', component: OrderComponent},
  { path: 'settings', component: SettingsComponent},
  { path: 'newlogin', component: NewLoginComponent},
  { path: 'logout', component: LogoutComponent},
  { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
