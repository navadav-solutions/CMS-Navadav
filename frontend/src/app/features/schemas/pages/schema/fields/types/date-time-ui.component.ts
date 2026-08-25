/*
 * Navadav Headless CMS
 *
 * @license
 * Copyright (c) NAVADAV. Todos los derechos reservados.
 */


import { Component, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule, UntypedFormGroup } from '@angular/forms';
import { DateTimeFieldEditorValues, DateTimeFieldPropertiesDto, FieldDto, FloatConverter, FormRowComponent } from '@app/shared';

@Component({
    selector: 'sqx-date-time-ui',
    styleUrls: ['date-time-ui.component.scss'],
    templateUrl: 'date-time-ui.component.html',
    imports: [
        FormRowComponent,
        FormsModule,
        ReactiveFormsModule,
    ],
})
export class DateTimeUIComponent {
    public readonly converter = FloatConverter.INSTANCE;
    public readonly editors = DateTimeFieldEditorValues;

    @Input({ required: true })
    public fieldForm!: UntypedFormGroup;

    @Input({ required: true })
    public field!: FieldDto;

    @Input({ required: true })
    public properties!: DateTimeFieldPropertiesDto;
}
