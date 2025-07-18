// src/app/app.routes.ts

import { Routes } from '@angular/router';
import { Home } from './pages/home/home'; // Corrigido

export const routes: Routes = [
    { path: '', component: Home } // Corrigido
];