// modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-router.component';
import { HttpClientModule } from '@angular/common/http';
// components
import { AppComponent } from './app.component';
import { EventsListComponent } from './events/events-list/events-list.component';
import { EventThumbnailComponent } from './events/events-list/event-thumbnail.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { CreateEventComponent } from './events/events-list/create-event.component';
import { SessionListComponent } from './events/event-details/session-list.component';
import { NavBarComponent } from './nav/navbar.component';
import { Error404Component } from './errors/404.component';
import { CreateSessionComponent } from './events/event-details/create-session.component';
import { CollapsibleWellComponent } from './common/collapsible-well.component';
import { SimpleModalComponent } from './common/simple-modal.component';
import { UpvoteComponent } from './events/event-details/upvote.component';
import { ModalTriggerDirective } from './common/modal-trigger.directive';
import { LocationValidator } from './events/events-list/location-validator.directive';
// services
import { EventService } from './events/shared/event.service';
import { TOASTR_TOKEN, IToastr } from './common/toastr.service';
import { JQ_TOKEN } from './common/jquery.service';
import { EventListResolverService } from './events/events-list/event-list-resolver.service';
import { EventResolverService } from './events/events-list/event-resolver.service';
import { AuthService } from './user/auth.service';
import { VoterService } from './events/event-details/voter.service';
// pipes
import { DurationPipe } from './events/shared/duration.pipe';

// third party variables for dependency injection
const toastr: IToastr = window['toastr'];
const jQuery = window['$'];

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    CreateEventComponent,
    CreateSessionComponent,
    SessionListComponent,
    NavBarComponent,
    Error404Component,
    CollapsibleWellComponent,
    SimpleModalComponent,
    UpvoteComponent,
    ModalTriggerDirective,
    LocationValidator,
    DurationPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    EventService,
    EventListResolverService,
    EventResolverService,
    AuthService,
    VoterService,
    { provide: TOASTR_TOKEN, useValue: toastr },
    { provide: JQ_TOKEN, useValue: jQuery },
    { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState}
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }

// function for unsaved forms and canceling them
export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm('You haven\'t saved this event, do you really want to cancel?');
  } else {
    return true;
  }
}
