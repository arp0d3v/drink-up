import { Injectable, EventEmitter } from '@angular/core';
import { User, ToastModel, DrinkModel, BeverageModel, DayActivityModel } from 'models';
import { SharedService } from 'services';
import { Observable } from 'rxjs/observable';
@Injectable()
export class DrinkService {
    constructor(private sharedService: SharedService) {
    }
    addDrink(beverage: BeverageModel) {
        const drinks = this.getAllDrinks();
        const drink = new DrinkModel(
            beverage.name,
            beverage.imageName,
            Math.round(beverage.size * beverage.waterPercent || 1),
            this.sharedService.currentDate,
            this.sharedService.currentTime,
            this.sharedService.currentDayCode,
            this.generateID()
        );
        drinks.push(drink);
        this.saveDrinks(drinks);
        this.addDayActivity(drink, false);
    }
    getDayDrinks(dayCode: number): DrinkModel[] {
        const drinks = this.getAllDrinks();
        const todayDrinks = drinks.filter(x => x.dayCode === dayCode);
        return todayDrinks;
    }
    getAllDrinks(): DrinkModel[] {
        const drinks: DrinkModel[] = JSON.parse(localStorage.getItem('drinks') || '[]') as DrinkModel[];
        return drinks;
    }
    deleteDrink(drinkId: number) {
        const drinks = this.getAllDrinks();
        const drink = drinks.find(x => x.drinkId === drinkId);
        const filteredDrinks = drinks.filter(x => x.drinkId !== drinkId);
        this.saveDrinks(filteredDrinks);
        this.addDayActivity(drink, true);
    }
    saveDrinks(drinks: DrinkModel[]) {
        localStorage.setItem('drinks', JSON.stringify(drinks));
    }
    clearHistory() {
        localStorage.removeItem('drinks');
    }
    generateID(): number {
        const currentDate = this.sharedService.currentDate.replace(/-/g, '');
        const currentTime = this.sharedService.currentTime.replace(/:/g, '');
        const id = `${currentDate}${currentTime}`;
        return parseInt(id, 10);
    }
    calculateDrinkAmountInDay(dayCode: number): number {
        let drinkAmount = 0;
        const drinks = this.getDayDrinks(this.sharedService.currentDayCode);
        drinks.forEach((d) => {
            drinkAmount += d.size;
        });
        return drinkAmount;
    }
    private addDayActivity(drink: DrinkModel, isDeleted: boolean) {
        const days = this.getDaysWithDrink();
        let day = days.find(x => x.dayCode === drink.dayCode);
        if (day === undefined) {
            day = new DayActivityModel(drink.dayCode, drink.date, 0);
            days.push(day);
        }
        if (isDeleted) {
            day.count -= 1;
        } else {
            day.count += 1;
        }
        localStorage.setItem('days', JSON.stringify(days));
    }
    getDaysWithDrink() {
        const days: DayActivityModel[] = JSON.parse(localStorage.getItem('days') || '[]') as DayActivityModel[];
        return days;
    }
}
