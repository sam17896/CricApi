import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


import { AllSeriesComponent } from './all-series/all-series.component';

const appRoutes : Routes = [
    {
        path : '',
        component: AllSeriesComponent
    }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);