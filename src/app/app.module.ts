import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToasterModule } from 'angular2-toaster';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { DrinkAddComponent } from './drink-add/drink-add.component';
import { DrinkOfDayComponent } from './drink-of-day/drink-of-day.component';
import { DrinkHistoryComponent } from './drink-history/drink-history.component';
import { DrinkStatusComponent } from './drink-status/drink-status.component';
import { NotificationComponent } from './notification/notification.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ModalModule } from 'ngx-bootstrap/modal';

import { routes } from './app.routes';
import { GetErrorPipeModule } from 'pipes/get-error';
import { SharedService, BeverageService, DrinkService, CordovaService, AuthGuard } from 'services';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    DrinkAddComponent,
    DrinkOfDayComponent,
    DrinkHistoryComponent,
    DrinkStatusComponent,
    NotificationComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    ToasterModule,
    GetErrorPipeModule,
    ModalModule,
    ModalModule.forRoot(),
    routes
  ],
  providers: [
    SharedService,
    BeverageService,
    DrinkService,
    CordovaService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
