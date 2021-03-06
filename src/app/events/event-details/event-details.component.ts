import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ActivatedRoute, Params } from '@angular/router';
import { IEvent, ISession } from '../shared/event.model';

@Component({
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})

export class EventDetailsComponent implements OnInit {
  event: IEvent;
  addMode: boolean;
  filterBy = 'all';
  sortBy = 'name';

  constructor(private eventService: EventService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    // showing specific event
    this.route.data.forEach((data) => {
        this.event = data['event'];
        this.addMode = false;
      });
  }

  addSession() {
    // turning flag to true
    this.addMode = true;
  }

  saveNewSession(session: ISession) {
    // getting max id of sessions array
    const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id));

    // adding 1 to max id of that array
    session.id = nextId + 1;

    // adding session to sessions array
    this.event.sessions.push(session);

    // saving our event
    this.eventService.saveEvent(this.event).subscribe();

    // toggling off flag so it shows sessions again
    this.addMode = false;
  }

  cancelAddSession() {
    this.addMode = false;
  }

}
