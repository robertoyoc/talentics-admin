import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailComponent } from './detail/detail.component';
import { ComposeComponent } from './compose/compose.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatIconModule,
  MatTableModule,
  MatPaginatorModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatSortModule,
  MatDialogModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    MatDialogModule,
    ComponentsRoutingModule
  ],
  declarations: [DashboardComponent, DetailComponent, ComposeComponent]
})
export class ComponentsModule { }
