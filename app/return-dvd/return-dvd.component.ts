import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DVD } from '../add-dvd/dvd.model';
import { ReturnDVDService } from '../returnDVD.service';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { ReturnFineDialogComponent } from '../return-fine-dialog/return-fine-dialog.component';

@Component({
  selector: 'app-return-dvd',
  templateUrl: './return-dvd.component.html',
  styleUrls: ['./return-dvd.component.css']
})

export class ReturnDVDComponent implements OnInit {

  constructor(private returnDVDService: ReturnDVDService, private dialog: MatDialog) { }

  ngOnInit() {
  }

  onReturnDVD(form: NgForm){

    if (form.valid){
      const value = form.value;
      const returnedDVD = new DVD(value.ISBN, null, null, null, null, null, null, null, null, null);
      this.returnDVDService.storeServers(returnedDVD).subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
    );
      console.log("Action Performed!");
    }
    
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    this.dialog.open(ReturnFineDialogComponent, dialogConfig);
  }

}
