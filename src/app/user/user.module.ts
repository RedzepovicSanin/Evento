import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ProfileComponent } from './profile.component';
import { LoginComponent } from './login.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild([
            {path: 'profile', component: ProfileComponent},
            {path: 'login', component: LoginComponent}
        ])
    ],
    declarations: [
        ProfileComponent,
        LoginComponent
    ],
    providers: []
})

export class UserModule { }
