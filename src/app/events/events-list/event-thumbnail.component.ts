import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-event-thumbnail',
    templateUrl: 'event-thumbnail.component.html',
    styles: [`
        .green { color: #003300 !important; }
        .bold { font-weight: bold; }
        .pad-left { margin-left: 10px; }
        .well div { color: #bbb; }
        .thumbnail { min-height:230px; }
    `]
})

export class EventThumbnailComponent {

    @Input() event: any;

    getStartTimeClass() {
        if (this.event && this.event.time === '8:00 am') {
        return ['green', 'bold'];
        } else {
            return [];
        }
    }
}