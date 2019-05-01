import { Injectable, NgModule } from "@angular/core";
import { Headers, Http } from '@angular/http';
import { Book } from "./add-book/book.model";

@NgModule({
    exports: [
        ReturnBookService
    ]
})

@Injectable()
export class ReturnBookService {

    constructor(private http: Http) {}
    storeServers(returnBook: Book) {
        let body = JSON.stringify(returnBook);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('http://localhost:9000/returnBook', body, {headers: headers});
    }
}