import { Injectable, NgModule } from "@angular/core";
import { Headers, Http } from '@angular/http';
import { BorrowBook } from "./borrow-book/borrowBook.model";

@NgModule({
    exports: [
        ReserveDVDService
    ]
})

@Injectable()
export class ReserveDVDService {

    constructor(private http: Http) {}

    storeServers(reservedDVD: BorrowBook) {
        let body = JSON.stringify(reservedDVD);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('http://localhost:9000/reserveDVD', body, {headers: headers});
    }

}