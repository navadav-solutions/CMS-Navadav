/*
 * Navadav Headless CMS
 *
 * @license
 * Copyright (c) NAVADAV. Todos los derechos reservados.
 */

export function compareStrings(a: string, b: string) {
    return a.localeCompare(b, undefined, { sensitivity: 'base' });
}
