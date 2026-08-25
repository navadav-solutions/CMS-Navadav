/*
 * Navadav Headless CMS
 *
 * @license
 * Copyright (c) NAVADAV. Todos los derechos reservados.
 */

import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'sqx-random-cat-card',
    styleUrls: ['./random-cat-card.component.scss'],
    templateUrl: './random-cat-card.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RandomCatCardComponent {
    public get random() {
        return new Date().getTime();
    }
}
