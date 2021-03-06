import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'services';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  constructor(
    private sharedService: SharedService,
    private router: Router
  ) {
  }
  ngOnInit() {
  }
  logout() {
    this.sharedService.logout();
  }
}
