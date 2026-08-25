/*
 * Navadav Headless CMS
 *
 * @license
 * Copyright (c) NAVADAV. Todos los derechos reservados.
 */

import { booleanAttribute, Directive, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[sqxStopClick]',
})
export class StopClickDirective {
    @Input({ alias: 'sqxStopClick', transform: booleanAttribute })
    public shouldStop: any = true;

    @HostListener('click', ['$event'])
    public onClick(event: Event) {
        const shouldStop: any = this.shouldStop;

        if (shouldStop || shouldStop === '') {
            event.stopPropagation();
            event.stopImmediatePropagation();
        }
    }
}
