import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Component as Model } from 'src/app/models/component';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-compose',
  templateUrl: './compose.component.html',
  styleUrls: ['./compose.component.css']
})
export class ComposeComponent implements OnInit {
  item: Model;
  form: FormGroup;
  collection: AngularFirestoreCollection<Model>;

  constructor(
    private db: AngularFirestore,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AngularFireAuth
  ) { }

  ngOnInit() {
    this.item = this.route.snapshot.data.item || {};
    this.form = new FormGroup({
      nombre: new FormControl(this.item.nombre, [Validators.required]),
      precio: new FormControl(this.item.precio, [Validators.required]),
      fechaRegistro: new FormControl(this.item.fechaRegistro, [Validators.required]),
      descripcion: new FormControl(this.item.descripcion, [Validators.required]),
      id: new FormControl(this.item.id)
    });
    if (this.form.controls.fechaRegistro.invalid) {
      this.form.controls.fechaRegistro.setValue(Date.now());
    }
    this.collection = this.db.collection<Model>('components');

  }

  create() {
    if (this.form.dirty && this.form.controls.id.value) {
      this.update();
    } else {
      let id = this.db.createId();
      this.form.controls.id.setValue(id);
      this.collection.doc(this.form.controls.id.value).set(this.form.value);
      this.authService.user.subscribe((user) => {
        id = this.db.createId();
        const change = {
          id: id,
          mensaje: `El usuario ${user.email} ha creado el componente ${this.form.value.nombre}`,
          fechaCambio: Date.now(),
          usuario: user.email
        };
        this.db.collection('changes').doc(id).set(change);
      });
      this.router.navigateByUrl('../');
    }
  }
  update() {
    this.collection.doc(this.form.controls.id.value).set(this.form.value);
    this.authService.user.subscribe((user) => {
      const id = this.db.createId();
      const change = {
        id: id,
        mensaje: `El usuario ${user.email} ha actualizado el componente ${this.form.value.nombre}`,
        fechaCambio: Date.now(),
        usuario: user.email
      };
      this.db.collection('changes').doc(id).set(change);
    });
    this.router.navigateByUrl('../');
  }

}
