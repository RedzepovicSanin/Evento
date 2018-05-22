import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ProfileComponent } from './profile.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
            {path: 'profile', component: ProfileComponent}
        ])
    ],
    declarations: [
        ProfileComponent
    ],
    providers: []
})

export class UserModule { }
