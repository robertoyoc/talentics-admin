import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ComposeComponent } from './compose/compose.component';
import { DetailComponent } from './detail/detail.component';
import { ComponentResolverGuard } from 'src/app/resolvers/component-resolver/component-resolver.guard';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'new',
    component: ComposeComponent
  },
  {
    path: ':id',
    children: [
      {
        path: '',
        resolve: {
          item: ComponentResolverGuard
        },
        component: DetailComponent,
      },
      {
        path: 'edit',
        resolve: {
          item: ComponentResolverGuard
        },
        component: ComposeComponent
      },
      {
        pathMatch: '**',
        redirectTo: ''
      }
    ]
  },
  {
    pathMatch: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
