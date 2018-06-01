import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { ToasterService, ToasterContainerComponent, Toast, ToasterConfig } from 'angular2-toaster';

import { SharedService } from 'services';
import { ToastModel } from 'models';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  public toasterConfig: ToasterConfig = new ToasterConfig({
    positionClass: 'toast-top-center',
    showCloseButton: true,
    timeout: 10000,
    tapToDismiss: false
  });
  constructor(
    private sharedService: SharedService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private toaster: ToasterService) {
    this.router.events
      .filter(event => event instanceof NavigationEnd)
      .map(() => this.activatedRoute)
      .map(route => {
        while (route.firstChild) { route = route.firstChild; }
        return route;
      })
      .filter(route => route.outlet === 'primary')
      .mergeMap(route => route.data)
      .subscribe((event) => {
        //this.titleService.setTitle(event['title']);
      });
    this.sharedService.onToastError.subscribe(t => { this.toastError(t); });
    this.sharedService.onToastInfo.subscribe(t => { this.toastInfo(t); });
    this.sharedService.onToastSuccess.subscribe(t => { this.toastSuccess(t); });
    this.sharedService.onToastWarning.subscribe(t => { this.toastWarning(t); });
  }
  ngOnInit() {
    this.sharedService.reloadUser();
  }

  addToast(toasType: string, title: string, body: string, toastConfig?: ToasterConfig): Toast {
    // translate message, then pop it ;)
    if (toastConfig) {
      const toast: Toast = {
        type: toasType,
        title: title,
        body: body
      };
      return this.toaster.pop(toast);
    } else {
      return this.toaster.pop(toasType, title, body);
    }
  }
  get toastPosition(): string {
    if (window.innerWidth < this.sharedService.breakpoint_md) {
      return 'toast-bottom-full-width';
    }
    return 'toast-bottom-center';
  }
  toastSuccess(toast: ToastModel): Toast {
    this.toasterConfig.positionClass = this.toastPosition;
    this.toasterConfig.timeout = 5000;
    return this.addToast('success', toast.title, toast.body);
  }
  toastError(toast: ToastModel): Toast {
    this.toasterConfig.positionClass = this.toastPosition;
    this.toasterConfig.timeout = 8000;
    return this.addToast('error', toast.title, toast.body);
  }
  toastWarning(toast: ToastModel): Toast {
    this.toasterConfig.positionClass = this.toastPosition;
    this.toasterConfig.timeout = 8000;
    return this.addToast('warning', toast.title, toast.body);
  }
  toastInfo(toast: ToastModel): Toast {
    this.toasterConfig.positionClass = this.toastPosition;
    this.toasterConfig.timeout = 5000;
    return this.addToast('info', toast.title, toast.body);
  }

}
