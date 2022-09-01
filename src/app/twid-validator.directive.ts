import { Directive } from '@angular/core';
import { Validator, NG_VALIDATORS, FormControl } from '@angular/forms';

@Directive({
  selector: '[twid][ngModel]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: TwidValidatorDirective, multi: true }
  ]
})

export class TwidValidatorDirective implements Validator {
  validate(c: FormControl): { [key: string]: any } | null {
    if (!c.value) {
      return null;
    }

    if (c.value !== '1') {
      return null;
    }

    return {
      twid: true
    };
  }
}
