import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './routes/dashboard/dashboard.component';
import { AuthenticatedGuard } from './guards/authenticated.guard';
import { LogoutComponent } from './routes/logout/logout.component';


const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'logout',
    component: LogoutComponent
  },
  {
    path: 'kits',
    canActivate: [AuthenticatedGuard],
    loadChildren: './routes/kits/kits.module#KitsModule',
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'dashboard'
  }

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
