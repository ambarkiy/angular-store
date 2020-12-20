import { Injectable } from "@angular/core";
import { Role, User } from "../models";

const usernameAdmin = 'a';
const passwordAdmin = 'a';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    private _user: User;

    constructor() { }

    login(username: string, password: string): boolean {
        if (!this.isAuthorized(username, password)) {
            return false;
        }
        this._user = { username, role: Role.ADMIN };
        return true;
    }

    get user(): User {
        return this._user;
    }

    private isAuthorized(username: string, password: string) {
        return username === usernameAdmin && password === passwordAdmin;
    }
}