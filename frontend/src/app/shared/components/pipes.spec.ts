/*
 * Navadav Headless CMS
 *
 * @license
 * Copyright (c) NAVADAV. Todos los derechos reservados.
 */

import { ScriptNamePipe } from './pipes';

describe('ScriptNamePipe', () => {
    const pipe = new ScriptNamePipe();

    it('should return titlecase for schema name', () => {
        const actual = pipe.transform('create');

        expect(actual).toEqual('Create');
    });

    it('should return custom name for queryPre', () => {
        const actual = pipe.transform('queryPre');

        expect(actual).toEqual('Prepare Query');
    });
});
