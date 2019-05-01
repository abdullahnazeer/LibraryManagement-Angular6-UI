import { Injectable, NgModule } from "@angular/core";
import { Headers, Http } from '@angular/http';
import { Reader } from "./add-member/reader.model";

@NgModule({
    exports: [
        DeleteMembersService
    ]
})

@Injectable()
export class DeleteMembersService {

    constructor(private http: Http) {}
    storeServers(member: Reader) {
        let body = JSON.stringify(member);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('http://localhost:9000/deleteMember', body, {headers: headers});
    }
}