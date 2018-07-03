import { Injectable, EventEmitter } from '@angular/core';
import { User, ToastModel, BeverageModel } from 'models';
import { Observable } from 'rxjs/observable';

@Injectable()
export class BeverageService {
    private beverages = [
        new BeverageModel('Water', 'water.png', 100, 1),
        new BeverageModel('Coffee', 'coffee.png', 100, 0.8),
        new BeverageModel('Beer', 'beer.png', 100, 0.8),
        new BeverageModel('Fruit Juice', 'fruitjuice.jpg', 100, 0.5),
    ];
    getBeverages() {
        return this.beverages.slice(0);
    }
}
