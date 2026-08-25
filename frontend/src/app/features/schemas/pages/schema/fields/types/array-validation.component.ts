/*
 * Navadav Headless CMS
 *
 * @license
 * Copyright (c) NAVADAV. Todos los derechos reservados.
 */

import { Component, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule, UntypedFormGroup } from '@angular/forms';
import { ArrayFieldPropertiesDto, FieldDto, FormRowComponent, TagEditorComponent, TranslatePipe } from '@app/shared';

@Component({
    selector: 'sqx-array-validation',
    styleUrls: ['array-validation.component.scss'],
    templateUrl: 'array-validation.component.html',
    imports: [
        FormRowComponent,
        FormsModule,
        ReactiveFormsModule,
        TagEditorComponent,
        TranslatePipe,
    ],
})
export class ArrayValidationComponent {
    @Input({ required: true })
    public fieldForm!: UntypedFormGroup;

    @Input({ required: true })
    public field!: FieldDto;

    @Input({ required: true })
    public properties!: ArrayFieldPropertiesDto;
}
