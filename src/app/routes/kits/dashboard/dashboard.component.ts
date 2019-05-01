import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Kit } from 'src/app/models/kit';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { MatTableDataSource, MatPaginator, MatSort, MatSortable } from '@angular/material';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  items: Observable<Kit[]>;
  displayedColumns: string[] = ['nombre', 'fechaRegistro', 'precio'];
  dataSource: MatTableDataSource<Kit>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;



  constructor(
    private db: AngularFirestore,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    
    this.db.collection<Kit>('kits').valueChanges().subscribe((items: Kit[]) => {
      this.setData(items);
    });
    this.sort.sort(<MatSortable>{
      id: 'nombre',
      start: 'asc'
    });
    
  }
  setData(items: Kit[]) {
    this.dataSource = new MatTableDataSource(items);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

}
