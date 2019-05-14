import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Cambio } from 'src/app/models/cambio';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  items: Cambio[];

  constructor(
    private db: AngularFirestore
  ) {}

  ngOnInit() {
    this.db.collection<Cambio>('changes', ref => ref.limit(15).orderBy('fechaCambio', 'desc')).valueChanges()
    .subscribe((items: Cambio[]) => {
      this.items = items;
    });

  }

}
