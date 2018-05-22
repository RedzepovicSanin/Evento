import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EventsListComponent } from './events/events-list/events-list.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { CreateEventComponent } from './events/events-list/create-event.component';
import { Error404Component } from './errors/404.component';

import { EventRouteActivator } from './events/event-details/event-route-activator.service';
import { EventListResolverService } from './events/events-list/event-list-resolver.service';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent']},
      { path: 'events', component: EventsListComponent, resolve: {events: EventListResolverService}},
      { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator]},
      { path: '404', component: Error404Component},
      { path: '', redirectTo: 'events', pathMatch: 'full'},

      { path: 'user', loadChildren: './user/user.module#UserModule' } // lazy loading this module
    ])
  ],
  declarations: [],
  providers: [EventRouteActivator],
  exports: [RouterModule]
})
export class AppRoutingModule { }