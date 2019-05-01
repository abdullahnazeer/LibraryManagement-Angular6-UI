import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BorrowBookService } from '../borrowBook.service';
import { BorrowBook } from '../borrow-book/borrowBook.model';
import { BorrowDVDService } from '../borrowDVD.model';

@Component({
  selector: 'app-borrow-dvd',
  templateUrl: './borrow-dvd.component.html',
  styleUrls: ['./borrow-dvd.component.css']
})
export class BorrowDVDComponent implements OnInit {

  constructor(private borrowDVDService: BorrowDVDService) { }

  ngOnInit() {
  }

  onBorrowDVD(form: NgForm){

    if (form.valid){
      const value = form.value;
      const borrowedBook = new BorrowBook(value.ISBN, value.memberID, null, null, null);
      this.borrowDVDService.storeServers(borrowedBook).subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
    );
      console.log("Action Performed!");
    }
    
  }


}
