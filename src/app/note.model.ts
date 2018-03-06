export class Note {
    firstName: string;
    lastName: string;
    reasonForNote: string;
    message: string;
    email: string;
    company: string;
    topPosition: number;
    leftPosition: number;

    constructor(firstName: string, lastName: string, reason: string, message: string, email: string, company: string) {

        this.firstName = firstName;
        this.lastName = lastName;
        this.reasonForNote = reason;
        this.message = message;
        this.email = email;
        this.company = company;
    }
}
