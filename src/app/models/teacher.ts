import { User } from './user';

export class Teacher{
    UserId: number;
    User: User;
    Surname: string;
    FirstName: string;
    SecondName: string;
    
    constructor(userId: number, surname: string, firstName: string, secondName: string) {
        this.UserId = userId;
        this.Surname = surname;
        this.FirstName = firstName;
        this.SecondName = secondName;
    }

    getShortName() : string{
        return "{this.Surname} {this.FirstName}. {this.SecondName}.";
    }
}