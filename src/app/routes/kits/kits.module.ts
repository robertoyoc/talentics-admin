import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KitsRoutingModule } from './kits-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatIconModule, MatTableModule, MatPaginatorModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatSortModule} from '@angular/material';
import { ComposeComponent } from './compose/compose.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailComponent } from './detail/detail.component';


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
    KitsRoutingModule
  ],
  declarations: [DashboardComponent, ComposeComponent, DetailComponent]
})
export class KitsModule { }
