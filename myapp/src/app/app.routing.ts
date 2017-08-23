import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AllMatchesComponent} from './all-matches/all-matches.component';
import {MatchComponent} from './match/match.component';

const appRoutes : Routes = [
    {path : '', component: AllMatchesComponent},
    {path : 'matches', component: AllMatchesComponent},
    {path : 'match/:id', component: MatchComponent},    
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);