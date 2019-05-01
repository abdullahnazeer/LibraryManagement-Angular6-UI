import { Component, OnInit } from '@angular/core';
import { Book } from '../add-book/book.model';
import { MatTableDataSource } from '@angular/material';
import { BooksService } from '../books.service';
import { DVDService } from '../dvd.service';
import { DVD } from '../add-dvd/dvd.model';

@Component({
  selector: 'app-generate-report-dvd',
  templateUrl: './generate-report-dvd.component.html',
  styleUrls: ['./generate-report-dvd.component.css']
})
export class GenerateReportDVDComponent implements OnInit {
  displayedColumns = ['ISBN', 'memberID', 'dateWithdrawn', 'daysCurrentlyBorrowed', 'pendingFines'];
  dataSource = new MatTableDataSource<DVD>();

  constructor(private dvdService: DVDService) { }

  ngOnInit() {
    this.dataSource.data = this.dvdService.getDVDsList();
  }

}
