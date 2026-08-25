/*
 * Navadav Headless CMS
 *
 * @license
 * Copyright (c) NAVADAV. Todos los derechos reservados.
 */

import { booleanAttribute, Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[sqxIfOnce]',
})
export class IfOnceDirective {
    private hasView = false;

    @Input({ alias: 'sqxIfOnce', transform: booleanAttribute })
    public set condition(value: boolean) {
        if (value && !this.hasView) {
            this.viewContainer.createEmbeddedView(this.templateRef);

            this.hasView = true;
        }
    }

    constructor(
        private templateRef: TemplateRef<any>,
        private viewContainer: ViewContainerRef,
    ) {
    }
}
