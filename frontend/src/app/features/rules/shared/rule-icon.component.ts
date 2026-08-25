/*
 * Navadav Headless CMS
 *
 * @license
 * Copyright (c) NAVADAV. Todos los derechos reservados.
 */


import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RuleTriggerMetadataDto, SafeHtmlPipe } from '@app/shared';

@Component({
    selector: 'sqx-rule-icon',
    styleUrls: ['./rule-icon.component.scss'],
    templateUrl: './rule-icon.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        SafeHtmlPipe,
    ],
})
export class RuleIconComponent {
    @Input({ required: true })
    public elementInfo!: RuleTriggerMetadataDto;

    @Input()
    public size: 'sm' | 'md' | 'lg' = 'sm';
}
