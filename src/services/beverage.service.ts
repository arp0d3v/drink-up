import { Injectable, EventEmitter } from '@angular/core';
import { User, ToastModel, BeverageModel } from 'models';
import { Observable } from 'rxjs/observable';

@Injectable()
export class BeverageService {
    private beverages = [
        new BeverageModel('Water', 'water.png', 100, 1),
        new BeverageModel('Coffee', 'Coffee.png', 100, 0.8),
    ];
    getBeverages() {
        return this.beverages.slice(0);
    }
}
