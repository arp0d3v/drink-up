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

import { routes } from './app.routes';
import { GetErrorPipeModule } from 'pipes/get-error';
import { SharedService, BeverageService, DrinkService } from 'services';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    DrinkAddComponent,
    DrinkOfDayComponent,
    DrinkHistoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    ToasterModule,
    GetErrorPipeModule,
    routes
  ],
  providers: [
    SharedService,
    BeverageService,
    DrinkService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
