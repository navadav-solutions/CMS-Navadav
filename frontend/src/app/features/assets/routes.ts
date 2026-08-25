/*
 * Navadav Headless CMS
 *
 * @license
 * Copyright (c) NAVADAV. Todos los derechos reservados.
 */

import { Routes } from '@angular/router';
import { AssetsFiltersPageComponent } from './pages/assets-filters-page.component';
import { AssetsPageComponent } from './pages/assets-page.component';

export const ASSETS_ROUTES: Routes = [
    {
        path: '',
        component: AssetsPageComponent,
        children: [
            {
                path: 'filters',
                component: AssetsFiltersPageComponent,
            },
        ],
    },
];