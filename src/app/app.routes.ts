import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { DrinkAddComponent } from './drink-add/drink-add.component';
import { DrinkOfDayComponent } from './drink-of-day/drink-of-day.component';
import { DrinkHistoryComponent } from './drink-history/drink-history.component';

export const router: Routes = [
    { path: '', redirectTo: 'profile', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'adddrink', component: DrinkAddComponent },
    { path: 'drinksofday/:dayCode', component: DrinkOfDayComponent },
    { path: 'drinkhistory', component: DrinkHistoryComponent },
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
