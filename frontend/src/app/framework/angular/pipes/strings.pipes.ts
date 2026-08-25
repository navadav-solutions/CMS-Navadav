/*
 * Navadav Headless CMS
 *
 * @license
 * Copyright (c) NAVADAV. Todos los derechos reservados.
 */

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'sqxJoin',
    pure: true,
})
export class JoinPipe implements PipeTransform {
    public transform(value: ReadonlyArray<string>) {
        return value?.join(', ') || '';
    }
}