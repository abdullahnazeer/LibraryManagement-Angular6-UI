import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BorrowBook } from '../borrow-book/borrowBook.model';
import { ReserveDVDService } from '../reserveDVD.service';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { ReserveDialogComponent } from '../reserve-dialog/reserve-dialog.component';

@Component({
  selector: 'app-reserve-dvd',
  templateUrl: './reserve-dvd.component.html',
  styleUrls: ['./reserve-dvd.component.css']
})
export class ReserveDVDComponent implements OnInit {

  constructor(private reserveDVDService: ReserveDVDService, private dialog: MatDialog) { }

  ngOnInit() {
  }

  onReserveDVD(form: NgForm){

    if (form.valid){
      const value = form.value;
      const reservedDVD = new BorrowBook(value.ISBN, value.memberID, null, null, null);
      this.reserveDVDService.storeServers(reservedDVD).subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
    );
      console.log("Action Performed!");
    }
    
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    this.dialog.open(ReserveDialogComponent, dialogConfig);
  }


}
