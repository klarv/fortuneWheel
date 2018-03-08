import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PrizeComponent } from './prize/prize.component';


export const router: Routes = [
    { path: 'prizes/', component: PrizeComponent },
    { path: 'prizes/:brand_name', component: PrizeComponent }

];
export const routes: ModuleWithProviders = RouterModule.forRoot(router);
