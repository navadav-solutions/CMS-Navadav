/*
 * Navadav Headless CMS
 *
 * @license
 * Copyright (c) NAVADAV. Todos los derechos reservados.
 */

import { inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { LanguagesState } from '@app/shared/internal';

export const loadLanguagesGuard = () => {
    const languagesState = inject(LanguagesState);

    return languagesState.load().pipe(map(_ => true));
};
