import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule, MatTableModule, MatSortModule, MatPaginatorModule } from '@angular/material';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterLinkWithHref } from '@angular/router';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('Kits-DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardComponent ],
      imports: [
        FlexLayoutModule,
        RouterTestingModule,
        MatIconModule,
        MatTableModule,
        MatSortModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule,
        MatPaginatorModule,
        BrowserAnimationsModule

      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
