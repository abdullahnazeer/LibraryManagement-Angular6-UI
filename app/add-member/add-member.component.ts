import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Reader } from './reader.model';
import { MembersService } from '../members.service';
import { AddMemberService } from '../addMember.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.css']
})
export class AddMemberComponent implements OnInit {

  constructor(private membersService: MembersService, private addMemberService: AddMemberService) {

   }

  ngOnInit() {
    
  }

  onAddMember(form: NgForm){

    if (form.valid){
      const value = form.value;
      const newMember = new Reader(value.firstName, value.lastName, value.email, value.contact, value.idNumber);
      this.membersService.addMember(newMember);
      this.addMemberService.storeServers(newMember).subscribe(
          (response) => console.log(response),
          (error) => console.log(error)
      );
      this.addMemberService.storeMembers(newMember).subscribe(
        (response : Response) => {
          console.log(response);
        }
      );
    }
  }

}
