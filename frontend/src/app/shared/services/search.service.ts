/*
 * Navadav Headless CMS
 *
 * @license
 * Copyright (c) NAVADAV. Todos los derechos reservados.
 */

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiUrlConfig, pretifyError, StringHelper } from '@app/framework';
import { SearchResultDto } from './../model';

@Injectable({
    providedIn: 'root',
})
export class SearchService {
    constructor(
        private readonly http: HttpClient,
        private readonly apiUrl: ApiUrlConfig,
    ) {
    }

    public getResults(appName: string, query: string): Observable<ReadonlyArray<SearchResultDto>> {
        const url = this.apiUrl.buildUrl(`api/apps/${appName}/search${StringHelper.buildQuery({ query })}`);

        return this.http.get<any[]>(url).pipe(
            map(body => {
                return body.map(SearchResultDto.fromJSON);
            }),
            pretifyError('i18n:search.searchFailed'));
    }
}
