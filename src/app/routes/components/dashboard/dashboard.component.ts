import { Component, OnInit, ViewChild } from '@angular/core';
import { Component as Model} from 'src/app/models/component';
import { Observable } from 'rxjs';
import { MatTableDataSource, MatPaginator, MatSort, MatSortable } from '@angular/material';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  items: Observable<Model[]>;
  displayedColumns: string[] = ['nombre', 'fechaRegistro', 'precio'];
  dataSource: MatTableDataSource<Model>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;



  constructor(
    private db: AngularFirestore,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.db.collection<Model>('components').valueChanges().subscribe((items: Model[]) => {
      this.setData(items);
    });
    this.sort.sort(<MatSortable>{
      id: 'nombre',
      start: 'asc'
    });
  }
  setData(items: Model[]) {
    this.dataSource = new MatTableDataSource(items);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

}
