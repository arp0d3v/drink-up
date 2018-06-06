import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'services';
import { User } from 'models';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit {
  user: User = new User();
  birthYear: string;
 birthMonth: string;
 birthDay: string;
 isRegistered = true;
 calculateDrinkAmount = false;
  constructor(private sharedService: SharedService, private router: Router) {
    sharedService.onUserUpdated.subscribe(result => {
      if (result) {
        this.isRegistered  = true;
        this.user = result;
        if (this.user.birthDate) {
          const dateparts = this.user.birthDate.split('/');
          this.birthYear = dateparts[0];
          this.birthMonth = dateparts[1];
          this.birthDay = dateparts[2];
        }
      } else {
        this.user = new User();
        this.isRegistered = false;
        this.calculateDrinkAmount = true;
      }
    });
    sharedService.reloadUser();
   }

  ngOnInit() {
  }
  update() {
    this.user.birthDate = `${this.birthYear}/${this.birthMonth}/${this.birthDay}`;
    this.sharedService.saveUser(this.user);
    this.router.navigateByUrl('/home');
    this.sharedService.toastSuccess('Profile', 'Your information saved successfuly.');
  }
  logout() {
    this.sharedService.logout();
  }
  howMuchToDrink() {
    if (this.calculateDrinkAmount === false) {
      return;
    }
    let drinkAmount = 0;
    let weightIncreaseCount = 0;
    if (this.user.weight > 30) {
      let weight = this.user.weight;
      if (weight > 70) {
        weight = 70;
      }
      weight -= 30;
      weightIncreaseCount = (weight / 10);
    }
    if (this.user.gender === 1) {
      drinkAmount = 1000;
      if (this.user.dailySport) {
        drinkAmount += 700;
      }
    } else if (this.user.gender === 2) {
      drinkAmount = 700;
      if (this.user.dailySport) {
        drinkAmount += 700;
      }
    }
    drinkAmount += weightIncreaseCount * 500;
    this.user.drinkAmount = drinkAmount;
}
}
