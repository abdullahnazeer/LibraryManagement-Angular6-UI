import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { BooksService } from '../books.service';
import { BorrowBook } from '../borrow-book/borrowBook.model';

@Component({
  selector: 'app-generate-report',
  templateUrl: './generate-report.component.html',
  styleUrls: ['./generate-report.component.css']
})
export class GenerateReportComponent implements OnInit {
  displayedColumns = ['ISBN', 'memberID', 'dateWithdrawn', 'daysCurrentlyBorrowed', 'pendingFines'];
  dataSource = new MatTableDataSource<BorrowBook>();

  constructor(private booksService: BooksService) { }

  ngOnInit() {
    this.dataSource.data = this.booksService.getBorrowedBooks();
  }

}
