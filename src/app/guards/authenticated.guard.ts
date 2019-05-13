import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthenticatedGuard implements CanActivate {
  constructor(
    private authService: AngularFireAuth,
    private router: Router
  ) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return new Observable((obs) => {
      this.authService.user.subscribe((user) => {
        if (user) {
          obs.next(true);
        } else {
          this.router.navigateByUrl('login');
          obs.next(false);
        }
        obs.complete();
      });
    });
  }
}
