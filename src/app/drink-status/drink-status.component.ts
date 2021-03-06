import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService, DrinkService, BeverageService } from 'services';
import { User, BeverageModel } from 'models';
import { ModalDirective } from 'ngx-bootstrap/modal';
@Component({
  selector: 'drink-status',
  templateUrl: './drink-status.component.html',
  styleUrls: ['./drink-status.component.css']
})
export class DrinkStatusComponent implements OnInit {
  currentDrinkAmount = 0;
  currentDrinkPercent = 0;
  @ViewChild('glassFill') glassFill: ElementRef;
  user: User;
  beverages: BeverageModel[];
  beverage: BeverageModel;
  constructor(
    private sharedService: SharedService,
    private drinkService: DrinkService,
    private beverageService: BeverageService,
    private router: Router) {
    this.sharedService.reloadUser();
    this.user = this.sharedService.user;
    if (sharedService.isUserRegistered === false) {
        router.navigateByUrl('/profile');
    }
  }

  ngOnInit() {
    this.fillGlass();
    this.beverages = this.beverageService.getBeverages();
  }
  fillGlass() {
    if (!this.sharedService.user) { return ; }
    const glassHeight = 250;
    let height = 0;
    const drinkAmount = this.drinkService.calculateDrinkAmountInDay(this.sharedService.currentDayCode);
    this.currentDrinkAmount = drinkAmount;
    height = (drinkAmount * glassHeight) / (this.user.drinkAmount + 500);
    this.currentDrinkPercent = Math.round((drinkAmount * 100) / (this.user.drinkAmount));
    if (height > glassHeight) {
      height = glassHeight;
    }
    this.glassFill.nativeElement.style.height = height + 'px';
  }
  drinksOfToday() {
    this.router.navigateByUrl('/drinksofday/' + this.sharedService.currentDayCode.toString());
  }
  setBeverage(item: BeverageModel) {
    this.beverage = item;
  }
  addDrink(modal: ModalDirective) {
    if (this.beverage === undefined) {
      this.sharedService.toastWarning('', 'Select a beverage.');
      return;
    }
    this.drinkService.addDrink(this.beverage);
    modal.hide();
    this.fillGlass();
  }
  addDrinkQuick(size: number, modal: ModalDirective) {
    this.beverage.size = size;
    this.drinkService.addDrink(this.beverage);
    modal.hide();
    this.fillGlass();
  }
}
