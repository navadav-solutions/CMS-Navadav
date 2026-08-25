/*
 * Navadav Headless CMS
 *
 * @license
 * Copyright (c) NAVADAV. Todos los derechos reservados.
 */

import { Component, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CodeComponent, FormHintComponent, FormRowComponent, TranslatePipe, TriggerForm } from '@app/shared';

@Component({
    selector: 'sqx-schema-changed-trigger',
    styleUrls: ['./schema-changed-trigger.component.scss'],
    templateUrl: './schema-changed-trigger.component.html',
    imports: [
        CodeComponent,
        FormHintComponent,
        FormRowComponent,
        FormsModule,
        ReactiveFormsModule,
        TranslatePipe,
    ],
})
export class SchemaChangedTriggerComponent {
    @Input({ required: true })
    public triggerForm!: TriggerForm;
}
