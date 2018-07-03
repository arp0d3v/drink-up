import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService, CordovaService } from 'services';
import { User } from 'models';
@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
})
export class NotificationComponent implements OnInit {
  user: User;
  constructor (
    private sharedService: SharedService,
    private cordovaService: CordovaService,
    private router: Router
  ) {
    sharedService.reloadUser();
    this.user = sharedService.user;
  }
  ngOnInit() {
  }
  update(showToast?: boolean) {
    this.sharedService.saveUser(this.user);
    if (!this.cordovaService.onCordova) {
      this.router.navigateByUrl('/drinkstatus');
      return;
    }
    this.cordovaService.setNotification(this.user);
    if (showToast) {
      this.sharedService.toastSuccess('Notify Center', 'settings updated.');
    }
    this.router.navigateByUrl('/drinkstatus');
  }
}
