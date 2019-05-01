import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MembersService } from '../members.service';
import { Reader } from '../add-member/reader.model';
import { DeleteMembersService } from '../deleteMembers.service';

@Component({
  selector: 'app-delete-member',
  templateUrl: './delete-member.component.html',
  styleUrls: ['./delete-member.component.css']
})
export class DeleteMemberComponent implements OnInit {

  constructor(private membersService: MembersService, private deleteMembersService: DeleteMembersService) { }

  private members: Reader[] = this.membersService.getMembers();

  ngOnInit() {
  }

  onDeleteMember(form: NgForm){

    if (form.valid){
      const value = form.value;
      const member = new Reader(null, null, null, null, value.memberID);
      this.deleteMembersService.storeServers(member).subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
    );
      const index = this.members.findIndex(member => member.memberID === value.memberID);
      this.members.splice(index, 1);
      this.membersService.setMembers(this.members);
    }
    
  }

}
