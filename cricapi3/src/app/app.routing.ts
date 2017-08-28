import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


import { AllSeriesComponent } from './all-series/all-series.component';

import { OngoingseriesComponent } from './ongoingseries/ongoingseries.component'

const appRoutes : Routes = [
    {
        path : '',
        component: AllSeriesComponent
    },
    {
        path:'current',
        component : OngoingseriesComponent
    }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);