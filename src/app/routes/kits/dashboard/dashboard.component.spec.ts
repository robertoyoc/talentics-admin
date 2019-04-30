import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterLinkWithHref } from '@angular/router';

describe('Kits-DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardComponent ],
      imports: [
        FlexLayoutModule,
        RouterTestingModule,
        MatIconModule
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
  it('should have a logout button', () => {
    const body: HTMLElement = fixture.nativeElement;
    const p = body.querySelector('mat-icon');
    expect(p.textContent).toEqual('call_made');
  });
  it('should have 1 router link', () => {
    const debugElements = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));
    expect(debugElements.length).toBe(1);

  });
  it('can logout', () => {
    const debugElements = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));
    const index = debugElements.findIndex(de => {
      return de.properties['href'] === '/logout';
    });
    console.log(debugElements);
    expect(index).toBeGreaterThan(-1);
  });
});
