import { Reader } from "./add-member/reader.model";
import { Injectable } from "@angular/core";

@Injectable()
export class MembersService {
    private members: Reader[] = [];

    constructor() {}

    getMembersList(){
          return [...this.members];
    }

    addMember(memberInfo: Reader){
        this.members.push(memberInfo);
    }

    getMembers(): Reader[]{
        return [...this.members];
    }

    setMembers(members: Reader[]){
        this.members = members;
    }

}