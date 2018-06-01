import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'services';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private sharedService: SharedService,
    private router: Router) {
    if (sharedService.isUserRegistered === false) {
        router.navigateByUrl('/profile');
    }
  }

  ngOnInit() {
  }

}
