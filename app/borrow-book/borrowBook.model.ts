export class BorrowBook{

    public ISBN: string;
    public memberID: number;
    public dateWithdrawn: string;
    public daysCurrentlyBorrowed: number;
    public pendingFines: any;

    constructor(ISBN: string, memberID: number, dateWithdrawn: string, daysCurrentlyBorrowed: number, pendingFines:any){
        this.ISBN = ISBN;
        this.memberID = memberID;
        this.dateWithdrawn = dateWithdrawn;
        this.daysCurrentlyBorrowed = daysCurrentlyBorrowed;
        this.pendingFines = pendingFines;
    }

}