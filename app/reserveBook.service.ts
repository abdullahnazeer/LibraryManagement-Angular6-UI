import { Injectable, NgModule } from "@angular/core";
import { Headers, Http } from '@angular/http';
import { BorrowBook } from "./borrow-book/borrowBook.model";

@NgModule({
    exports: [
        ReserveBookService
    ]
})

@Injectable()
export class ReserveBookService {

    constructor(private http: Http) {}

    storeServers(reservedBook: BorrowBook) {
        let body = JSON.stringify(reservedBook);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('http://localhost:9000/reserveBook', body, {headers: headers});
    }

}