/*
 * Navadav Headless CMS
 *
 * @license
 * Copyright (c) NAVADAV. Todos los derechos reservados.
 */

type UILanguage = { iso2Code: string; localName: string };

export module UILanguages {
    export const ALL: ReadonlyArray<UILanguage> = [{
        iso2Code: 'es',
        localName: 'Español',
    }, {
        iso2Code: 'en',
        localName: 'English',
    }];
}
