import { Component, OnInit } from '@angular/core';
import { Book } from '../add-book/book.model';
import { MatTableDataSource } from '@angular/material';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-display-books',
  templateUrl: './display-books.component.html',
  styleUrls: ['./display-books.component.css']
})
export class DisplayBooksComponent implements OnInit {

  selectedRow;

  displayedColumns = ['ISBN', 'title', 'sector', 'publicationDate', 'authors', 'publisher', 'noOfPages'];
  dataSource = new MatTableDataSource<Book>();

  constructor(private booksService: BooksService) { }

  ngOnInit() {
    this.dataSource.data = this.booksService.getBooksList();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
