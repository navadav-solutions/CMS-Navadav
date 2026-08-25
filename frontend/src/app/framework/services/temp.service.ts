/*
* Navadav Headless CMS
*
* @license
* Copyright (c) NAVADAV. Todos los derechos reservados.
*/

import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class TempService {
    private value: any = null;

    public put(value: any) {
        this.value = value;
    }

    public fetch() {
        const result = this.value;

        this.value = null;

        return result;
    }
}
