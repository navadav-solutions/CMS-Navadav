/*
 * Navadav Headless CMS
 *
 * @license
 * Copyright (c) NAVADAV. Todos los derechos reservados.
 */

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export class StockPhotoDto {
    constructor(
        public readonly url: string,
        public readonly thumbUrl: string,
        public readonly user: string,
        public readonly userProfileUrl: string,
    ) {
    }
}

@Injectable({
    providedIn: 'root',
})
export class StockPhotoService {
    public getImages(query: string, page = 1): Observable<ReadonlyArray<StockPhotoDto>> {
        // Servicio de fotos de stock no configurado
        return of([]);
    }
}
