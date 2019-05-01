import { Component, OnInit } from '@angular/core';
import { ReturnBookService } from '../returnBook.service';
import { Book } from '../add-book/book.model';
import { NgForm } from '@angular/forms';
import { BorrowBook } from '../borrow-book/borrowBook.model';
import { BooksService } from '../books.service';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { ReturnFineDialogComponent } from '../return-fine-dialog/return-fine-dialog.component';

@Component({
  selector: 'app-return-book',
  templateUrl: './return-book.component.html',
  styleUrls: ['./return-book.component.css']
})

export class ReturnBookComponent implements OnInit {

  constructor(private returnBookService: ReturnBookService, private booksService: BooksService, private dialog: MatDialog) { }

  private returnedBooks: BorrowBook[] = this.booksService.getBorrowedBooks();

  ngOnInit() {
  }

  onReturnBook(form: NgForm){

    if (form.valid){
      const value = form.value;
      const returnedBook = new Book(value.ISBN, null, null, null, null, null, null, null, null);
      this.returnBookService.storeServers(returnedBook).subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
    );
      const index = this.returnedBooks.findIndex(book => book.ISBN === value.ISBN);
      this.returnedBooks.splice(index, 1);
      this.booksService.setBorrowedBooks(this.returnedBooks);
      
    }
    
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    this.dialog.open(ReturnFineDialogComponent, dialogConfig);
  }

}
