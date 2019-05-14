import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Component } from 'src/app/models/component';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ComponentResolverGuard implements Resolve<Component> {
  constructor(
    private db: AngularFirestore
  ) { }
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<Component> | Promise<Component> | Component {
      const id = route.params.id;
      const subscriber = this.db.doc<Component>(`components/${id}`).valueChanges();
      return new Observable((obs) => {
        subscriber.subscribe((item: Component) => {
          obs.next(item);
          obs.complete();
        });
      });
  }
}
