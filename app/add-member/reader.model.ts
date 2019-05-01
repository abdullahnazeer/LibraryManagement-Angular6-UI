export class Reader {
    public firstName: string;
    public lastName: string;
    public email: string;
    public contact: string;
    public memberID: number;

    constructor(firstName: string, lastName: string, email: string, contact: string, memberID: number ){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.contact = contact;
        this.memberID = memberID;
    }
}