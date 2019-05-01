import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-return-fine-dialog',
  templateUrl: './return-fine-dialog.component.html',
  styleUrls: ['./return-fine-dialog.component.css']
})
export class ReturnFineDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ReturnFineDialogComponent>) { }

  ngOnInit() {
  }

  close() {
    this.dialogRef.close();
  }

}
