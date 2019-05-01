import { Injectable, NgModule } from "@angular/core";
import { Headers, Http } from '@angular/http';
import { DVD } from "./add-dvd/dvd.model";

@NgModule({
    exports: [
        AddDVDService
    ]
})

@Injectable()
export class AddDVDService {

    constructor(private http: Http) {}
    storeServers(dvd: DVD) {
        //Posting to Play Framework and string it in an ArrayList
        let body = JSON.stringify(dvd);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('http://localhost:9000/insertDVD', body, {headers: headers});
    }

    storeDVD(dvd: DVD){
        //Inserting the DVD into a Database provided by Firebase
        let body = JSON.stringify(dvd); 
        return this.http.post('https://library-management-96943.firebaseio.com/dvds.json', body);
    }
}