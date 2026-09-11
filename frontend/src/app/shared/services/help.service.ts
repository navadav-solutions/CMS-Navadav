/*
 * Navadav Headless CMS
 *
 * @license
 * Copyright (c) NAVADAV. Todos los derechos reservados.
 */

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface SDKEntry {
    // The display name.
    name: string;

    // The link to the repository.
    repository: string;

    // The link to the documentation.
    documentation: string;

    // The instructions as markdown.
    instructions: string;

    // The SVG logo.
    logo: string;
}

@Injectable({
    providedIn: 'root',
})
export class HelpService {
    public getHelp(helpPage: string): Observable<string> {
        // Documentación interna no configurada
        return of('');
    }

    public getSDKs(): Observable<Record<string, SDKEntry>> {
        // SDK list no configurado
        return of({});
    }
}
