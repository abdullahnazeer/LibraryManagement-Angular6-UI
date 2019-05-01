import { Injectable, NgModule } from "@angular/core";
import { Headers, Http } from '@angular/http';
import { DVD } from "./add-dvd/dvd.model";

@NgModule({
    exports: [
        ReturnDVDService
    ]
})

@Injectable()
export class ReturnDVDService {

    constructor(private http: Http) {}
    storeServers(returnDVD: DVD) {
        let body = JSON.stringify(returnDVD);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('http://localhost:9000/returnDVD', body, {headers: headers});
    }
}