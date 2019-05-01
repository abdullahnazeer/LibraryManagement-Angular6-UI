import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Reader } from '../add-member/reader.model';
import { MembersService } from '../members.service';

@Component({
  selector: 'app-display-members',
  templateUrl: './display-members.component.html',
  styleUrls: ['./display-members.component.css']
})
export class DisplayMembersComponent implements OnInit {

  displayedColumns = ['firstName', 'lastName', 'email', 'contact', 'memberID'];
  dataSource = new MatTableDataSource<Reader>();

  constructor(private membersService: MembersService) { }

  ngOnInit() {
    this.dataSource.data = this.membersService.getMembersList();
  }

}
