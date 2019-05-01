import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BorrowBook } from './borrowBook.model';
import { BorrowBookService } from '../borrowBook.service';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-borrow-book',
  templateUrl: './borrow-book.component.html',
  styleUrls: ['./borrow-book.component.css']
})
export class BorrowBookComponent implements OnInit {

  constructor(private borrowBookService: BorrowBookService, private booksService: BooksService) { }

  ngOnInit() {
  }

  onBorrowBook(form: NgForm){

    if (form.valid){
      const value = form.value;
      const borrowedBook = new BorrowBook(value.ISBN, value.memberID, null, null, null);
      this.booksService.addBorrowedBook(borrowedBook);
      this.borrowBookService.storeServers(borrowedBook).subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
    );
      console.log("Action Performed!");
    }
    
  }


}
