import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./form-styles.component.css']
})

export class LoginComponent {
    userName;
    password;
    mouseoverLogin;
    loginInvalid = false;

    constructor(private authService: AuthService, private router: Router) {
    }

    // method for logging user in
    login(formValues) {
        this.authService.loginUser(formValues.userName, formValues.password)
                        .subscribe(response => {
                            if (!response) {
                                this.loginInvalid = true;
                            } else {
                                this.router.navigate(['events']);
                            }
                        });
    }
    // rerouting user after clicking cancel
    cancel() {
        this.router.navigate(['/events']);
    }
}
