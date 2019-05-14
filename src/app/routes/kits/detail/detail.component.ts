import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Kit } from 'src/app/models/kit';
import { MatDialog } from '@angular/material';
import { ConfirmComponent } from 'src/app/components/confirm/confirm.component';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  item: Kit;

  constructor(
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private db: AngularFirestore,
    private router: Router,
    private authService: AngularFireAuth,
    private storage: AngularFireStorage

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
        this.db.collection('kits').doc(this.item.id).delete().then(() => {
          this.router.navigateByUrl('../');
        });
        this.authService.user.subscribe((user) => {
          const id = this.db.createId();
          const change = {
            id: id,
            mensaje: `El usuario ${user.email} ha borrado el kit ${this.item.nombre}`,
            fechaCambio: Date.now(),
            usuario: user.email
          };
          this.db.collection('changes').doc(id).set(change);
        });
      }
    });
  }
  upload(event) {
    const file = event.target.files[0];
    const filePath = `manuales/${this.item.id}.pdf`;
    const ref = this.storage.ref(filePath);
    const task = ref.put(file);
    task.snapshotChanges().pipe(
      finalize(() => {

        ref.getDownloadURL().subscribe((url) => {
          this.item.manual = url;
          this.authService.user.subscribe((user) => {
            const id = this.db.createId();
            const change = {
              id: id,
              mensaje: `El usuario ${user.email} ha actualizado el manual del kit ${this.item.nombre}`,
              fechaCambio: Date.now(),
              usuario: user.email
            };
            this.db.collection('kits').doc(this.item.id).set(this.item);
            this.db.collection('changes').doc(id).set(change);
          });
        });
      })
   )
    .subscribe(() => {
    });
  }

}
