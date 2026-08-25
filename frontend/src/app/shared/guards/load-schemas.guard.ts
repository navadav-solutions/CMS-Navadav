/*
 * Navadav Headless CMS
 *
 * @license
 * Copyright (c) NAVADAV. Todos los derechos reservados.
 */

import { inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { SchemasState } from '@app/shared/internal';

export const loadSchemasGuard = () => {
    const schemasState = inject(SchemasState);

    return schemasState.load().pipe(map(_ => true));
};