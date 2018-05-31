import { Component, OnInit } from '@angular/core';

import { AuthService } from '../user/auth.service';
import { EventService } from '../events/shared/event.service';
import { ISession, IEvent } from '../events/shared/event.model';

@Component({
    selector: 'app-nav-bar',
    templateUrl: 'navbar.component.html',
    styles: [`
        .nav.navbar-nav { font-size: 15px; }
        #searchForm { margin-right: 100px; }
        @media (max-width: 1200px) { #searchForm {display:none} }
        li > a.active { color: #F97924 }
    `]
})

export class NavBarComponent implements OnInit {
    searchTerm = '';
    foundSessions: ISession[];
    events;

    constructor(private authService: AuthService,
                private eventService: EventService) {
    }
    // method for subscribing on eventService to search form
    searchSessions(searchTerm) {
        this.eventService.searchSessions(searchTerm).subscribe(sessions => {
                this.foundSessions = sessions;
            });
    }

    ngOnInit() {
        this.eventService.getEvents().subscribe(events => {
            this.events = events;
        });
    }
 }
