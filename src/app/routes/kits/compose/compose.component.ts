import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Kit } from 'src/app/models/kit';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-compose',
  templateUrl: './compose.component.html',
  styleUrls: ['./compose.component.css']
})
export class ComposeComponent implements OnInit {

  form: FormGroup;
  collection: AngularFirestoreCollection<Kit>;

  constructor(
    private db: AngularFirestore,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    const item = {} as Kit;
    this.form = new FormGroup({
      nombre: new FormControl(item.nombre, [Validators.required]),
      precio: new FormControl(item.precio, [Validators.required]),
      fechaRegistro: new FormControl(item.fechaRegistro, [Validators.required]),
      descripcion: new FormControl(item.descripcion, [Validators.required])
    });
    if (this.form.controls.fechaRegistro.invalid) {
      this.form.controls.fechaRegistro.setValue(Date.now());
    }
    this.collection = this.db.collection<Kit>('kits');

  }

  create() {
    this.collection.add(this.form.value);
    this.router.navigateByUrl('../')
  }

}
