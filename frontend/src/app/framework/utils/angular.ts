/*
 * Navadav Headless CMS
 *
 * @license
 * Copyright (c) NAVADAV. Todos los derechos reservados.
 */

import { SimpleChange } from '@angular/core';

export type TypedSimpleChange<T> = Omit<SimpleChange, SimpleChange['previousValue'] | SimpleChange['currentValue']>
    & { previousValue: T; currentValue: T };

export type TypedSimpleChanges<T> = {
    [K in keyof T]: TypedSimpleChange<T[K]>;
};