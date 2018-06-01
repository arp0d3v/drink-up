import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GetErrorPipe } from './get-error.pipe';

@NgModule({
    declarations: [
        GetErrorPipe
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    providers: [
    ],
    exports: [
        GetErrorPipe
    ]
})
export class GetErrorPipeModule {
}
