import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Kit } from 'src/app/models/kit';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class KitResolverGuard implements Resolve<Kit> {
  constructor(
    private db: AngularFirestore
  ) { }
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<Kit> | Promise<Kit> | Kit {
      const id = route.params.id;
      const subscriber = this.db.doc<Kit>(`kits/${id}`).valueChanges();
      return new Observable((obs) => {
        subscriber.subscribe((item: Kit) => {
          obs.next(item);
          obs.complete();
        });
      });
  }
}
