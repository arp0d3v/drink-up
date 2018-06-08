import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SharedService, DrinkService } from 'services';
import { User, DayActivityModel } from 'models';
@Component({
  selector: 'drink-history',
  templateUrl: './drink-history.component.html',
})
export class DrinkHistoryComponent implements OnInit {
  days: DayActivityModel[];
  constructor(
    private sharedService: SharedService,
    private router: Router,
    private route: ActivatedRoute,
    private drinkService: DrinkService
  ) {
    this.days = drinkService.getDaysWithDrink();
    if (this.days) {
      this.days.reverse();
    }
   }

  ngOnInit() {
  }
  goToDay(item: DayActivityModel) {
    this.router.navigateByUrl(`/drinksofday/${item.dayCode}`);
  }
}
