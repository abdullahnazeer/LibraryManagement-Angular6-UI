import { Injectable, NgModule } from "@angular/core";
import { Headers, Http } from '@angular/http';
import { Book } from "./add-book/book.model";

@NgModule({
    exports: [
        AddBookService
    ]
})

@Injectable()
export class AddBookService {

    constructor(private http: Http) {}
    storeServers(book: Book) {
        //Posting to Play Framework and string it in an ArrayList
        let body = JSON.stringify(book);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('http://localhost:9000/insertBook', body, {headers: headers});
    }

    storeBook(book: Book){
        //Inserting the Book into a Database provided by Firebase
        let body = JSON.stringify(book); 
        return this.http.post('https://library-management-96943.firebaseio.com/books.json', body);
    }
}