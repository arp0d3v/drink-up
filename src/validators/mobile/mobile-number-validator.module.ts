import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MobileNumberValidator } from './mobile-number.validator';

@NgModule({
    declarations: [
        MobileNumberValidator
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    providers: [
    ],
    exports: [
        MobileNumberValidator
    ]
})
export class MobileNumberValidatorModule {
}
