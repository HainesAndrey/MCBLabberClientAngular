import { Role } from './role';

export class User {
    Id: number;
    Name: string;
    Password: string;
    RoleId: number;
    Role: Role
}
