/*
 * Navadav Headless CMS
 *
 * @license
 * Copyright (c) NAVADAV. Todos los derechos reservados.
 */


import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TooltipDirective } from './modals/tooltip.directive';

@Component({
    selector: 'sqx-status-icon',
    styleUrls: ['./status-icon.component.scss'],
    templateUrl: './status-icon.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        TooltipDirective,
    ],
})
export class StatusIconComponent {
    @Input({ required: true })
    public status?: 'Started' | 'Failed' | 'Success' | 'Completed' | 'Pending' | string;

    @Input()
    public statusText: string | undefined | null;

    @Input()
    public size: 'lg' | 'sm' = 'lg';
}
