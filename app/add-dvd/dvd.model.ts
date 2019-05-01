import { Date } from "../date.model";
import { Reader } from "../add-member/reader.model";

export class DVD {
    public ISBN: string;
    public title: string;
    public sector: string;
    public publicationDate: string;
    public borrowedDate: Date;
    public languages: string;
    public subtitles: string;
    public producer: string;
    public actors: string;
    public reader: Reader;

    constructor(ISBN: string, title: string, sector: string, publicationDate: string, borrowedDate: Date, languages: string, subtitles: string, producer: string, actors: string, reader: Reader) {
        this.ISBN = ISBN;
        this.title = title;
        this.sector = sector;
        this.publicationDate = publicationDate;
        this.borrowedDate = borrowedDate;
        this.languages = languages;
        this.subtitles = subtitles;
        this.producer = producer;
        this.actors = actors;
        this.reader = reader;
    }
}