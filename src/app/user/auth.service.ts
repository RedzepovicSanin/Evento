import { Injectable } from '@angular/core';
import { IUser } from './user.model';

@Injectable()

export class AuthService {
    currentUser: IUser;

    // hardcoded user for login
    loginUser(userName: string, password: string) {
        this.currentUser = {
            id: 1,
            userName: userName,
            firstName: 'Sanin',
            lastName: 'Redzepovic'
        };
    }
    // returns boolean type of current user if he exists
    isAuthenticated() {
        return !!this.currentUser;
    }
    // update current user
    updateCurrentUser(firstName: string, lastName: string) {
        this.currentUser.firstName = firstName;
        this.currentUser.lastName = lastName;
    }
}
