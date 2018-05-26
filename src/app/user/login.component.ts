import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./form-styles.component.css']
})

export class LoginComponent {
    username;
    password;
    mouseoverLogin;

    constructor(private authService: AuthService, private router: Router) {
    }

    // method for logging user in
    login(formValues) {
        this.authService.loginUser(formValues.username, formValues.password);
        this.router.navigate(['/events']);
    }
    // rerouting user after clicking cancel
    cancel() {
        this.router.navigate(['/events']);
    }
}
