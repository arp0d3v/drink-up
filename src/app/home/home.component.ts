import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService, DrinkService } from 'services';
import { User } from 'models';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentDrinkAmount = 0;
  @ViewChild('glassFill') glassFill: ElementRef;
  user: User;
  constructor(
    private sharedService: SharedService,
    private drinkService: DrinkService,
    private router: Router) {
    this.sharedService.reloadUser();
    this.user = this.sharedService.user;
    if (sharedService.isUserRegistered === false) {
        router.navigateByUrl('/profile');
    }
  }

  ngOnInit() {
    this.fillGlass();
  }
  fillGlass() {
    if (!this.sharedService.user) { return ; }
    const glassHeight = 250;
    let height = 0;
    const drinkAmount = this.drinkService.calculateDrinkAmountInDay(this.sharedService.currentDayCode);
    this.currentDrinkAmount = drinkAmount;
    height = (drinkAmount * glassHeight) / (this.user.drinkAmount + 500);
    if (height > glassHeight) {
      height = glassHeight;
    }
    this.glassFill.nativeElement.style.height = height + 'px';
  }
  drinksOfToday() {
    this.router.navigateByUrl('/drinksofday/' + this.sharedService.currentDayCode.toString());
  }
}
