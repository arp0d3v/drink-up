import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { DrinkAddComponent } from './drink-add/drink-add.component';
import { DrinkOfDayComponent } from './drink-of-day/drink-of-day.component';
import { DrinkHistoryComponent } from './drink-history/drink-history.component';
import { DrinkStatusComponent } from './drink-status/drink-status.component';
import { NotificationComponent } from './notification/notification.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

export const router: Routes = [
    { path: '', redirectTo: 'drinkstatus', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'adddrink', component: DrinkAddComponent },
    { path: 'drinksofday/:dayCode', component: DrinkOfDayComponent },
    { path: 'drinkhistory', component: DrinkHistoryComponent },
    { path: 'drinkstatus', component: DrinkStatusComponent },
    { path: 'notification', component: NotificationComponent },
    { path: 'contactus', component: ContactUsComponent },
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router, { useHash: true});
