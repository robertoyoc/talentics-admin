import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MatIconModule } from '@angular/material';
import { By } from '@angular/platform-browser';
import { RouterLinkWithHref } from '@angular/router';


describe('AppComponent', () => {
  let fixture;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        MatIconModule,
        RouterTestingModule
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
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
      return de.attributes['routerLink'] === 'logout';
    });
    expect(index).toBeGreaterThan(-1);
  });
});
