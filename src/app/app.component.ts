import { Component, OnInit } from '@angular/core';
import { AuthService } from './user/auth.service';
import { IEvent } from './events/shared/event.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.authService.checkAuthenticationStatus();
  }
}
