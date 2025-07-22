// src/app/app.routes.ts

import { Routes } from '@angular/router';
import { Home } from './pages/home/home'; 
import { Flooring } from './pages/flooring/flooring';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'flooring', component: Flooring }];