/*
 * Navadav Headless CMS
 *
 * @license
 * Copyright (c) NAVADAV. Todos los derechos reservados.
 */

import { of } from 'rxjs';
import { canDeactivateGuard } from './can-deactivate.guard';

describe('CanDeactivateGuard', () => {
    it('should call component', () => {
        let called = false;

        const component = {
            canDeactivate: () => {
                called = true;

                return of(true);
            },
        };

        const result = canDeactivateGuard(component);

        expect(result).toBeDefined();
        expect(called).toBeTruthy();
    });
});
