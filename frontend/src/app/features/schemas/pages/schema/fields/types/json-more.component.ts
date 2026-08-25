/*
 * Navadav Headless CMS
 *
 * @license
 * Copyright (c) NAVADAV. Todos los derechos reservados.
 */

import { Component, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule, UntypedFormGroup } from '@angular/forms';
import { CodeEditorComponent, FieldDto, FormRowComponent, JsonFieldPropertiesDto } from '@app/shared';

@Component({
    selector: 'sqx-json-more',
    styleUrls: ['json-more.component.scss'],
    templateUrl: 'json-more.component.html',
    imports: [
        CodeEditorComponent,
        FormRowComponent,
        FormsModule,
        ReactiveFormsModule,
    ],
})
export class JsonMoreComponent {
    @Input({ required: true })
    public fieldForm!: UntypedFormGroup;

    @Input({ required: true })
    public field!: FieldDto;

    @Input({ required: true })
    public properties!: JsonFieldPropertiesDto;
}
