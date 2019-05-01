import { Injectable, NgModule } from "@angular/core";
import { Headers, Http } from '@angular/http';
import { BorrowBook } from "./borrow-book/borrowBook.model";

@NgModule({
    exports: [
        BorrowDVDService
    ]
})

@Injectable()
export class BorrowDVDService {

    constructor(private http: Http) {}
    storeServers(borrowedDVD: BorrowBook) {
        let body = JSON.stringify(borrowedDVD);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('http://localhost:9000/borrowDVD', body, {headers: headers});
    }
}