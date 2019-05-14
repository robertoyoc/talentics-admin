import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Componente as Model } from 'src/app/models/componente';
import { MatDialog } from '@angular/material';
import { ConfirmComponent } from 'src/app/components/confirm/confirm.component';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  item: Model;

  constructor(
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private db: AngularFirestore,
    private router: Router,
    private authService: AngularFireAuth

  ) { }

  ngOnInit() {
    this.item = this.route.snapshot.data.item || {};
  }
  delete() {
    const dialogRef = this.dialog.open(ConfirmComponent, {
      width: '400px',
      data: {itemID: this.item.id}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.db.collection('components').doc(this.item.id).delete().then(() => {
          this.router.navigateByUrl('../');
        });
        this.authService.user.subscribe((user) => {
          const id = this.db.createId();
          const change = {
            id: id,
            mensaje: `El usuario ${user.email} ha borrado el componente ${this.item.nombre}`,
            fechaCambio: Date.now(),
            usuario: user.email
          };
          this.db.collection('changes').doc(id).set(change);
        });
      }
    });
  }

}
