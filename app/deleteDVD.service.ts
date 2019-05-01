import { Injectable, NgModule } from "@angular/core";
import { Headers, Http } from '@angular/http';
import { DVD } from "./add-dvd/dvd.model";

@NgModule({
    exports: [
        DeleteDVDService
    ]
})

@Injectable()
export class DeleteDVDService {

    constructor(private http: Http) {}
    storeServers(dvd: DVD) {
        let body = JSON.stringify(dvd);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('http://localhost:9000/deleteDVD', body, {headers: headers});
    }
}