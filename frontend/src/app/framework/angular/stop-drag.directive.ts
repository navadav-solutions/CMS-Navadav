/*
 * Navadav Headless CMS
 *
 * @license
 * Copyright (c) NAVADAV. Todos los derechos reservados.
 */

import { booleanAttribute, Directive, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[sqxStopDrag]',
})
export class StopDragDirective {
    @Input({ alias: 'sqxStopDrag', transform: booleanAttribute })
    public shouldStop = true;

    @HostListener('dragstart', ['$event'])
    public onDragStart(event: Event) {
        const shouldStop: any = this.shouldStop;

        if (shouldStop || shouldStop === '') {
            event.preventDefault();
        }
    }
}
