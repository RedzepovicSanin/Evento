import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-router.component';

import { AppComponent } from './app.component';
import { EventsListComponent } from './events/events-list/events-list.component';
import { EventThumbnailComponent } from './events/events-list/event-thumbnail.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { CreateEventComponent } from './events/events-list/create-event.component';
import { NavBarComponent } from './nav/navbar.component';
import { Error404Component } from './errors/404.component';

import { EventService } from './events/shared/event.service';
import { ToastrService } from './common/toastr.service';
import { EventRouteActivator } from './events/event-details/event-route-activator.service';
import { EventListResolverService } from './events/events-list/event-list-resolver.service';
import { AuthService } from './user/auth.service';
import { CreateSessionComponent } from './events/event-details/create-session.component';

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    CreateEventComponent,
    CreateSessionComponent,
    NavBarComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    EventService,
    ToastrService,
    EventRouteActivator,
    EventListResolverService,
    AuthService,
    { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm('You haven\'t saved this event, do you really want to cancel?');
  } else {
    return true;
  }
}
