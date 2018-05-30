import { Directive } from '@angular/core';
import { Validator, FormGroup, NG_VALIDATORS } from '@angular/forms';

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[validateLocation]',
    // adding custom validator to angular validators by setting multi to true
    providers: [{provide: NG_VALIDATORS, useExisting: LocationValidator, multi: true}]
})

export class LocationValidator implements Validator {

    validate(formGroup: FormGroup): { [key: string]: any } {
        const addressControl = formGroup.controls['address'];
        const cityControl = formGroup.controls['city'];
        const countryControl = formGroup.controls['country'];
        const onlineUrlControl = (<FormGroup>formGroup.root).controls['onlineUrl'];

        if ((addressControl && addressControl.value &&
             cityControl && cityControl.value &&
             countryControl && countryControl.value) || (onlineUrlControl && onlineUrlControl.value)) {
                 return null;
             } else {
                 return {validateLocation: false};
             }
    }
}
