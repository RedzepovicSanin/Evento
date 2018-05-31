import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { EventService } from '../shared/event.service';

@Injectable()

export class EventResolverService implements Resolve<any> {

    constructor(private eventService: EventService) {
    }
    // resolve automaticaly subscribes to an Obserable and 'id' params
    // is same as the one we're naming it in router specification (/events/:id)
    resolve(route: ActivatedRouteSnapshot) {
        return this.eventService.getEvent(route.params['id']);
    }
}
