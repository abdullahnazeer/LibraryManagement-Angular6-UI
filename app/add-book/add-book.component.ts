import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Book } from './book.model';
import { BooksService } from '../books.service';
import { AddBookService } from '../addBook.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  constructor(private booksService: BooksService, private addBookService: AddBookService) { }

  ngOnInit() {
  }

  onAddBook(form: NgForm){

    if (form.valid){
      const value = form.value;
      const newBook = new Book(value.ISBN, value.title, value.sector, value.publicationDate, null, value.authors, value.publisher, value.noOfPages, null);
      //Adding To ArrayList In Angular BooksService Class
      this.booksService.addBook(newBook);
      //Sending To Play Framework
      this.addBookService.storeServers(newBook).subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
    );
    this.addBookService.storeBook(newBook).subscribe(
      (response : Response) => {
        console.log(response);
      }
    );
    }
    
  }


}
