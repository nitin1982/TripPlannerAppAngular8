import { Directive, Input } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';


@Directive({
    selector: '[appMatchTwoStrings]',
    providers: [{provide: NG_VALIDATORS, useExisting: MatchTwoStrings, multi: true}]
})
export class MatchTwoStrings implements Validator{
    @Input('stringToBeMatchedWith') stringToBeMatchedWith: string;

    validate(control: AbstractControl): {[key: string]: any} | null {
        return (this.stringToBeMatchedWith && (this.stringToBeMatchedWith != control.value))? 
            {"PasswordsNotMatch": true} : null;
    }
}