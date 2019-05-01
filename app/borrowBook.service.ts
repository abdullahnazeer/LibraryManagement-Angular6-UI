import { Injectable, NgModule } from "@angular/core";
import { Headers, Http } from '@angular/http';
import { BorrowBook } from "./borrow-book/borrowBook.model";

@NgModule({
    exports: [
        BorrowBookService
    ]
})

@Injectable()
export class BorrowBookService {

    constructor(private http: Http) {}

    storeServers(borrowedBook: BorrowBook) {
        let body = JSON.stringify(borrowedBook);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('http://localhost:9000/borrowBook', body, {headers: headers});
    }

}