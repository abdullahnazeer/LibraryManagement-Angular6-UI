import { Reader } from "../add-member/reader.model";
import { Date } from "../date.model";

export class Book {
    public ISBN: string;
    public title: string;
    public sector: string;
    public publicationDate: string;
    public borrowedDate: Date;
    public authors: string;
    public publisher: string;
    public noOfPages: number;
    public reader: Reader;

    constructor(ISBN: string, title: string, sector: string, publicationDate: string, borrowedDate: Date, authors: string, publisher: string, noOfPages: number, reader: Reader) {
        this.ISBN = ISBN;
        this.title = title;
        this.sector = sector;
        this.publicationDate = publicationDate;
        this.borrowedDate = borrowedDate;
        this.authors = authors;
        this.publisher = publisher;
        this.noOfPages = noOfPages;
        this.reader = reader;
    }
}