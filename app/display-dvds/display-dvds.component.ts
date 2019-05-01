import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { DVD } from '../add-dvd/dvd.model';
import { DVDService } from '../dvd.service';

@Component({
  selector: 'app-display-dvds',
  templateUrl: './display-dvds.component.html',
  styleUrls: ['./display-dvds.component.css']
})
export class DisplayDVDsComponent implements OnInit {
  displayedColumns = ['ISBN', 'title', 'sector', 'publicationDate', 'languages', 'subtitles', 'producer', 'actors'];
  dataSourceDVD = new MatTableDataSource<DVD>();

  constructor(private dvdService: DVDService) { }

  ngOnInit() {
    this.dataSourceDVD.data = this.dvdService.getDVDsList();
  }

  applyFilter(filterValue: string) {
    this.dataSourceDVD.filter = filterValue.trim().toLowerCase();
  }


}
