/*
 * Navadav Headless CMS
 *
 * @license
 * Copyright (c) NAVADAV. Todos los derechos reservados.
 */

/* eslint-disable @angular-eslint/directive-selector */

import { Directive, TemplateRef } from '@angular/core';

@Directive({
    selector: '[sidebarMenu]',
})
export class SidebarMenuDirective {
    constructor(
        public readonly templateRef: TemplateRef<unknown>,
    ) {
    }
}