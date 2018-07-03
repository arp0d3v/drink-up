import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { SharedService } from './shared.service';
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(public sharedService: SharedService, public router: Router) {}
  canActivate(): boolean {
    if (!this.sharedService.getuser()) {
      this.router.navigate(['profile']);
      return false;
    }
    return true;
  }
}
