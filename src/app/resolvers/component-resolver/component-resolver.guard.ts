import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Componente } from 'src/app/models/componente';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ComponentResolverGuard implements Resolve<Componente> {
  constructor(
    private db: AngularFirestore
  ) { }
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<Componente> | Promise<Componente> | Componente {
      const id = route.params.id;
      const subscriber = this.db.doc<Componente>(`components/${id}`).valueChanges();
      return new Observable((obs) => {
        subscriber.subscribe((item: Componente) => {
          obs.next(item);
          obs.complete();
        });
      });
  }
}
