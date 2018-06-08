import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'services';
@Component({
  selector: 'contact-us',
  templateUrl: './contact-us.component.html',
})
export class ContactUsComponent implements OnInit {
  constructor(
    private sharedService: SharedService,
    private router: Router
  ) {
  }
  ngOnInit() {
  }
}
