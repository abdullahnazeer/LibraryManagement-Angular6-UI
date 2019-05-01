import { Component, OnInit } from '@angular/core';
import { DeleteBookService } from '../deleteBook.service';
import { NgForm } from '@angular/forms';
import { Book } from '../add-book/book.model';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css']
})
export class DeleteBookComponent implements OnInit {

  constructor(private deleteBookService: DeleteBookService, private booksService: BooksService) { }

  private books: Book[] = this.booksService.getBooks();

  ngOnInit() {
  }

  onDeleteBook(form: NgForm){

    if (form.valid){
      const value = form.value;
      const book = new Book(value.ISBN, null, null, null, null, null, null, null, null);
      this.deleteBookService.storeServers(book).subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
    );
    const index = this.books.findIndex(book => book.ISBN === value.ISBN);
      this.books.splice(index, 1);
      this.booksService.setBooks(this.books);
    }
    
  }

}
