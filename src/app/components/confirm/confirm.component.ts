import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {

  itemID: string;

  constructor(
    public dialogRef: MatDialogRef<ConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  closeModal(): void {
    this.dialogRef.close(false);
  }

  ngOnInit() {
  }
  get disableAdd() {
    return this.data.itemID !== this.itemID;
  }
  closeAndDelete() {
    this.dialogRef.close(true);
  }

}
