/*
 * Navadav Headless CMS
 *
 * @license
 * Copyright (c) NAVADAV. Todos los derechos reservados.
 */

import { inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { UIState } from '../state/ui.state';

export const loadSettingsGuard = () => {
    const uiState = inject(UIState);

    return uiState.load().pipe(map(() => true));
};
