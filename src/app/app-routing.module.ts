import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './routes/dashboard/dashboard.component';
import { AuthenticatedGuard } from './guards/authenticated.guard';
import { LogoutComponent } from './routes/logout/logout.component';
import { LoginComponent } from './routes/login/login.component';
import { LogoutGuard } from './guards/logout/logout.guard';
import { LoginGuard } from './guards/login/login.guard';
import { RegisterGuard } from './guards/register/register.guard';
import { RegisterComponent } from './routes/register/register.component';
import { ForgotComponent } from './routes/forgot/forgot.component';
import { ResetComponent } from './routes/reset/reset.component';


const routes: Routes = [
  {
    path: 'dashboard',
    canActivate: [AuthenticatedGuard],
    component: DashboardComponent
  },
  {
    path: 'login',
    canActivate: [LoginGuard],
    component: LoginComponent
  },
  {
    path: 'forgot',
    canActivate: [LoginGuard],
    component: ForgotComponent
  },
  {
    path: 'change',
    canActivate: [LoginGuard],
    component: ResetComponent
  },
  {
    path: 'logout',
    canActivate: [LogoutGuard],
    component: LogoutComponent
  },
  {
    path: 'register',
    canActivate: [RegisterGuard],
    component: RegisterComponent
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
