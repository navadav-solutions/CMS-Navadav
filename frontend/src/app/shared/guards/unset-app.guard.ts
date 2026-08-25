/*
 * Navadav Headless CMS
 *
 * @license
 * Copyright (c) NAVADAV. Todos los derechos reservados.
 */

import { inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { AppsState } from '../state/apps.state';

export const unsetAppGuard = () => {
    const appsState = inject(AppsState);

    return appsState.select(null).pipe(map(a => a === null));
};
