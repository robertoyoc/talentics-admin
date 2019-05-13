import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Kit } from 'src/app/models/kit';
import { MatDialog } from '@angular/material';
import { ConfirmComponent } from 'src/app/components/confirm/confirm.component';
import { AngularFirestore } from '@angular/fire/firestore';

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
    private router: Router
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
      }
    });
  }

}
