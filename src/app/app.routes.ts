import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';

export const router: Routes = [
    { path: '', redirectTo: 'profile', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'profile', component: ProfileComponent },

]

export const routes: ModuleWithProviders = RouterModule.forRoot(router);