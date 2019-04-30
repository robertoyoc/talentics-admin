import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KitsRoutingModule } from './kits-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatIconModule} from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatIconModule,
    KitsRoutingModule
  ],
  declarations: [DashboardComponent]
})
export class KitsModule { }
