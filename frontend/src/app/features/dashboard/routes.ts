/*
 * Navadav Headless CMS
 *
 * @license
 * Copyright (c) NAVADAV. Todos los derechos reservados.
 */

import { Routes } from '@angular/router';
import { DashboardPageComponent } from './pages/dashboard-page.component';

export const DASHBOARD_ROUTES: Routes = [
    {
        path: '',
        component: DashboardPageComponent,
    },
];