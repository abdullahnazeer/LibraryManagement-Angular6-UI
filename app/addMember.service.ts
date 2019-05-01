import { Injectable, NgModule } from "@angular/core";
import { Headers, Http } from '@angular/http';
import { Reader } from "./add-member/reader.model";

@NgModule({
    exports: [
        AddMemberService
    ]
})

@Injectable()
export class AddMemberService {

    private basePath = '/app';

    constructor(private http: Http) {}
    storeServers(member: Reader) {
        //Posting to Play Framework and string it in an ArrayList
        let body = JSON.stringify(member);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('http://localhost:9000/insertMember', body, {headers: headers});
    }

    storeMembers(member: Reader){
        //Inserting the new Member into a Database provided by Firebase
        let body = JSON.stringify(member);
        return this.http.post('https://library-management-96943.firebaseio.com/members.json', body);
    }
}