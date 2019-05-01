import { Component, OnInit, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BorrowBook } from '../borrow-book/borrowBook.model';
import { ReserveBookService } from '../reserveBook.service';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ReserveDialogComponent } from '../reserve-dialog/reserve-dialog.component';

@Component({
  selector: 'app-reserve-book',
  templateUrl: './reserve-book.component.html',
  styleUrls: ['./reserve-book.component.css']
})
export class ReserveBookComponent implements OnInit {

  constructor(private reserveBookService: ReserveBookService, private dialog: MatDialog) { }

  ngOnInit() {
  }

  onReserveBook(form: NgForm){

    if (form.valid){
      const value = form.value;
      const reservedBook = new BorrowBook(value.ISBN, value.memberID, null, null, null);
      this.reserveBookService.storeServers(reservedBook).subscribe(
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
