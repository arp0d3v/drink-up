import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SharedService, BeverageService, DrinkService } from 'services';
import { User, BeverageModel, DrinkModel } from 'models';
@Component({
  selector: 'drink-of-day',
  templateUrl: './drink-of-day.component.html',
})
export class DrinkOfDayComponent implements OnInit {
  drinks: DrinkModel[];
  dayCode: number;
  dateName: string;
  dayDrinkAmount = 0;
  constructor(
    private sharedService: SharedService,
    private router: Router,
    private route: ActivatedRoute,
    private beverageService: BeverageService,
    private drinkService: DrinkService
  ) {
   }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.dayCode = +params['dayCode'] || 0;
      const day = this.dayCode.toString();
      this.dateName = `${day.substring(0, 4)}-${day.substring(4, 6)}-${day.substring(6, 8)}`;
      this.drinks = this.drinkService.getDayDrinks(this.dayCode);
      this.dayDrinkAmount = this.drinkService.calculateDrinkAmountInDay(this.dayCode);
    });
  }
  deleteDrink(drinkId: number) {
    this.drinkService.deleteDrink(drinkId);
    this.router.navigateByUrl('/home');
    this.drinks = this.drinkService.getDayDrinks(this.dayCode);
  }
}
