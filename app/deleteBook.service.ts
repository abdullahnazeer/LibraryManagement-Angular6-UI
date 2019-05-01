import { Injectable, NgModule } from "@angular/core";
import { Headers, Http } from '@angular/http';
import { Book } from "./add-book/book.model";

@NgModule({
    exports: [
        DeleteBookService
    ]
})

@Injectable()
export class DeleteBookService {

    constructor(private http: Http) {}
    storeServers(book: Book) {
        let body = JSON.stringify(book);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('http://localhost:9000/deleteBook', body, {headers: headers});
    }
}