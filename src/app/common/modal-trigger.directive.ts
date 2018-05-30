import { Directive, OnInit, Inject, ElementRef, Input } from '@angular/core';
import { JQ_TOKEN } from './jquery.service';
@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[modal-trigger]'
})

export class ModalTriggerDirective implements OnInit {
    private el: HTMLElement;
    // tslint:disable-next-line:no-input-rename
    @Input('modal-trigger') modalId: string;

    constructor(@Inject(JQ_TOKEN) private $: any,
                elRef: ElementRef) {
        this.el = elRef.nativeElement;
    }

    ngOnInit() {
        this.el.addEventListener('click', e => {
            this.$(`#${this.modalId}`).modal({});
        });
    }
}
