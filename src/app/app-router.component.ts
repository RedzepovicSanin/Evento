import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';

import { EventsListComponent } from './events/events-list/events-list.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { CreateEventComponent } from './events/events-list/create-event.component';
import { CreateSessionComponent } from './events/event-details/create-session.component';
import { Error404Component } from './errors/404.component';

import { EventListResolverService } from './events/events-list/event-list-resolver.service';
import { EventResolverService } from './events/events-list/event-resolver.service';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent']},
      { path: 'events', component: EventsListComponent, resolve: {events: EventListResolverService}},
      { path: 'events/:id', component: EventDetailsComponent, resolve: {event: EventResolverService}},
      { path: 'events/session/new', component: CreateSessionComponent},
      { path: '404', component: Error404Component},
      { path: '', redirectTo: 'events', pathMatch: 'full'},

      { path: 'user', loadChildren: './user/user.module#UserModule' } // lazy loading this module
    ])
    // { preloadingStrategy: PreloadAllModules } adding this could improve production environment because it loads
    //                                           all modules when application is started
  ],
  declarations: [],
  providers: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
