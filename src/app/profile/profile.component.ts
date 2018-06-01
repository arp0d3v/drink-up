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
}
