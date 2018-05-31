import { Injectable, EventEmitter } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { IEvent, ISession } from './event.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()

export class EventService {

  constructor(private http: HttpClient) { }

  // getting all events
  getEvents(): Observable<IEvent[]> {
    return this.http.get<IEvent[]>('/api/events')
               .pipe(catchError(this.handleError<IEvent[]>('getEvents', [])));
  }
  // getting specific event
  getEvent(id: number): Observable<IEvent> {
    return this.http.get<IEvent>('/api/events/' + id)
               .pipe(catchError(this.handleError<IEvent>('getEvent')));
  }
  // saving our new event and adding new id to it
  saveEvent(event) {
    const options = { headers: new HttpHeaders({'Content-type': 'application/json'})};
    return this.http.post<IEvent>('/api/events', event, options)
             .pipe(catchError(this.handleError<IEvent>('saveEvent')));
  }
  // giving back results of searched term
  searchSessions(searchTerm: string): Observable<ISession[]> {
    return this.http.get<ISession[]>('/api/sessions/search?search=' + searchTerm)
               .pipe(catchError(this.handleError<ISession[]>('searchSessions')));
  }
  // method for handling errors on observables
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
       console.error(error);
       return of(result as T);
    };
  }
}
