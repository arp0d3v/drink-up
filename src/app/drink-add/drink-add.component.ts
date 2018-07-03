import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService, BeverageService, DrinkService } from 'services';
import { User, BeverageModel, DrinkModel } from 'models';
@Component({
  selector: 'drink-add',
  templateUrl: './drink-add.component.html',
})
export class DrinkAddComponent implements OnInit {
  beverages: BeverageModel[];
  beverage: BeverageModel;
  constructor(
    private sharedService: SharedService,
    private router: Router,
    private beverageService: BeverageService,
    private drinkService: DrinkService
  ) {
    this.beverages = beverageService.getBeverages();
   }

  ngOnInit() {
  }
  setBeverage(item: BeverageModel) {
    this.beverage = item;
  }
  addDrink() {
    if (this.beverage === undefined) {
      this.sharedService.toastWarning('', 'Select a beverage.');
      return;
    }
    this.drinkService.addDrink(this.beverage);
    this.router.navigateByUrl('/drinkstatus');
  }
  addDrinkQuick(size: number) {
    this.beverage.size = size;
    this.drinkService.addDrink(this.beverage);
    this.router.navigateByUrl('/drinkstatus');
  }
}
