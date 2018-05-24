import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../shared/event.service';

@Component({
    templateUrl: './create-event.component.html',
    styleUrls: ['./create-event.component.css']
})

export class CreateEventComponent {
    newEvent = {};
    isDirty = true;

    constructor(private router: Router, private eventService: EventService) {
    }

    saveEvent(formValues) {
        this.eventService.saveEvent(formValues);
        this.isDirty = false;
        this.router.navigate(['events']);
    }

    cancel() {                              // passing route via code
        this.router.navigate(['events']);
    }
 }
