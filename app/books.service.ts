import { Book } from "./add-book/book.model";
import { BorrowBook } from "./borrow-book/borrowBook.model";

export class BooksService {
    private books: Book[] = [];
    private borrowedBooks: BorrowBook[] = [];

    addBook(bookInfo: Book){
        this.books.push(bookInfo);
    }

    addBorrowedBook(bookInfo: BorrowBook){
        this.borrowedBooks.push(bookInfo);
    }

    getBorrowedBooks(): BorrowBook[]{
       return [...this.borrowedBooks];
    }

    getBooks(): Book[]{
        return [...this.books];
     }

    getBooksList(){
        return this.books.slice();
    }

    setBooks(books: Book[]){
        this.books = books;
    }

    setBorrowedBooks(books: BorrowBook[]){
        this.borrowedBooks = books;
    }
}