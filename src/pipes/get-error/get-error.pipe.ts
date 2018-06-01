import { Pipe, PipeTransform } from '@angular/core';
import { AbstractControl } from '@angular/forms';
@Pipe({ name: 'getError', pure: false })
export class GetErrorPipe implements PipeTransform {
    constructor() { }
    transform(control: AbstractControl, inputTitle: string): string {
        let errorMessage = '';
        const re = /[{}]/gi;
        if (control.dirty === false) {
            return '';
        }
        for (const key in control.errors) {
            if (key === 'required') {
                errorMessage = `${inputTitle} is required.`;
            } else if (key === 'invalidmobilenumber') {
                errorMessage = `${inputTitle} must be 11 character length.`;
            }
        }
        errorMessage = errorMessage.replace(re, ''); // + " \u2022 ";
        return errorMessage;
    }
}