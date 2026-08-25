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
import { ApiUrlConfig, HTTP, pretifyError, Resource, ScriptCompletions, StringHelper, VersionOrTag } from '@app/framework';
import { DynamicCreateRuleDto, DynamicRuleDto, DynamicRulesDto, DynamicUpdateRuleDto, RuleElementDto, RuleEventsDto, RuleTriggerDto, SimulatedRuleEventsDto } from './../model';

export type RuleTriggerMetadataDto = Readonly<{
    description: string;
    display: string;
    iconColor?: string;
    iconCode?: string | null;
    iconImage?: string;
    hasProperties?: boolean;
    title?: string;
    readMore?: string;
}>;

export const ALL_TRIGGERS: Record<string, RuleTriggerMetadataDto> = {
    AssetChanged: {
        description: 'Para cambios en recursos como subidos, actualizados (resubidos), renombrados, eliminados...',
        display: 'Asset changed',
        iconColor: '#3389ff',
        iconCode: 'assets',
        hasProperties: true,
        title: 'Recurso modificado',
    },
    Comment: {
        description: 'Cuando un usuario es mencionado en cualquier comentario...',
        display: 'User mentioned',
        iconColor: '#3389ff',
        iconCode: 'comments',
        hasProperties: true,
        title: 'Usuario mencionado',
    },
    ContentChanged: {
        description: 'Para cambios en el contenido como creado, actualizado, publicado, despublicado...',
        display: 'Content changed',
        iconColor: '#3389ff',
        iconCode: 'contents',
        hasProperties: true,
        title: 'Contenido modificado',
    },
    CronJob: {
        description: 'Para ejecutar tareas periódicamente, según una expresión cron...',
        display: 'CronJob',
        iconColor: '#3389ff',
        iconCode: 'clock',
        hasProperties: true,
        title: 'CronJob programado',
    },
    Manual: {
        description: 'Para invocar procesos manualmente, por ejemplo para actualizar tu sitio estático...',
        display: 'Manually triggered',
        iconColor: '#3389ff',
        iconCode: 'play-line',
        hasProperties: false,
        title: 'Activado manualmente',
    },
    SchemaChanged: {
        description: 'Cuando la definición de un esquema ha sido creada, actualizada, publicada o eliminada...',
        display: 'Schema changed',
        iconColor: '#3389ff',
        iconCode: 'schemas',
        hasProperties: true,
        title: 'Esquema modificado',
    },
    Usage: {
        description: 'Cuando las llamadas mensuales a la API superan un límite específico una vez al mes...',
        display: 'Usage exceeded',
        iconColor: '#3389ff',
        iconCode: 'dashboard',
        hasProperties: true,
        title: 'Uso',
    },
};

export type StepsDto = Readonly<{ [name: string]: RuleElementDto }>;

@Injectable({
    providedIn: 'root',
})
export class RulesService {
    constructor(
        private readonly http: HttpClient,
        private readonly apiUrl: ApiUrlConfig,
    ) {
    }

    public getSteps(): Observable<StepsDto> {
        const url = this.apiUrl.buildUrl('api/rules/steps');

        return this.http.get<Record<string, any>>(url).pipe(
            map(body => {
                const result: { [name: string]: RuleElementDto } = {};
                for (const [key, value] of Object.entries(body)) {
                    result[key] = RuleElementDto.fromJSON(value);
                }

                return result;
            }),
            pretifyError('i18n:rules.loadFailed'));
    }

    public getRules(appName: string): Observable<DynamicRulesDto> {
        const url = this.apiUrl.buildUrl(`api/apps/${appName}/rules`);

        return this.http.get<any>(url).pipe(
            map(body => {
                return DynamicRulesDto.fromJSON(body);
            }),
            pretifyError('i18n:rules.loadFailed'));
    }

    public postRule(appName: string, dto: DynamicCreateRuleDto): Observable<DynamicRuleDto> {
        const url = this.apiUrl.buildUrl(`api/apps/${appName}/rules`);

        return HTTP.postVersioned(this.http, url, dto.toJSON()).pipe(
            map(({ payload }) => {
                return DynamicRuleDto.fromJSON(payload.body);
            }),
            pretifyError('i18n:rules.createFailed'));
    }

    public putRule(appName: string, resource: Resource, dto: DynamicUpdateRuleDto, version: VersionOrTag): Observable<DynamicRuleDto> {
        const link = resource._links['update'];

        const url = this.apiUrl.buildUrl(link.href);

        return HTTP.requestVersioned(this.http, link.method, url, version, dto.toJSON()).pipe(
            map(({ payload }) => {
                return DynamicRuleDto.fromJSON(payload.body);
            }),
            pretifyError('i18n:rules.updateFailed'));
    }

    public deleteRule(appName: string, resource: Resource, version: VersionOrTag): Observable<any> {
        const link = resource._links['delete'];

        const url = this.apiUrl.buildUrl(link.href);

        return HTTP.requestVersioned(this.http, link.method, url, version).pipe(
            pretifyError('i18n:rules.deleteFailed'));
    }

    public runRule(appName: string, resource: Resource): Observable<any> {
        const link = resource._links['run'];

        const url = this.apiUrl.buildUrl(link.href);

        return this.http.request(link.method, url, {}).pipe(
            pretifyError('i18n:rules.runFailed'));
    }

    public runRuleFromSnapshots(appName: string, resource: Resource): Observable<any> {
        const link = resource._links['run/snapshots'];

        const url = this.apiUrl.buildUrl(link.href);

        return this.http.request(link.method, url, {}).pipe(
            pretifyError('i18n:rules.runFailed'));
    }

    public runCancel(appName: string): Observable<any> {
        const url = this.apiUrl.buildUrl(`api/apps/${appName}/rules/run`);

        return this.http.delete(url).pipe(
            pretifyError('i18n:rules.cancelFailed'));
    }

    public triggerRule(appName: string, resource: Resource): Observable<any> {
        const link = resource._links['trigger'];

        const url = this.apiUrl.buildUrl(link.href);

        return this.http.request<any>(link.method, url, { body: {} }).pipe(
            pretifyError('i18n:rules.triggerFailed'));
    }

    public getEvents(appName: string, take: number, skip: number, ruleId?: string): Observable<RuleEventsDto> {
        const url = this.apiUrl.buildUrl(`api/apps/${appName}/rules/events${StringHelper.buildQuery({ take, skip, ruleId })}`);

        return this.http.get<any>(url).pipe(
            map(body => {
                return RuleEventsDto.fromJSON(body);
            }),
            pretifyError('i18n:rules.ruleEvents.loadFailed'));
    }

    public getSimulatedEvents(appName: string, ruleId: string): Observable<SimulatedRuleEventsDto> {
        const url = this.apiUrl.buildUrl(`api/apps/${appName}/rules/${ruleId}/simulate`);

        return this.http.get<any>(url).pipe(
            map(body => {
                return SimulatedRuleEventsDto.fromJSON(body);
            }),
            pretifyError('i18n:rules.ruleEvents.loadFailed'));
    }

    public postSimulatedEvents(appName: string, dto: DynamicCreateRuleDto): Observable<SimulatedRuleEventsDto> {
        const url = this.apiUrl.buildUrl(`api/apps/${appName}/rules/simulate`);

        return this.http.post<any>(url, dto.toJSON()).pipe(
            map(body => {
                return SimulatedRuleEventsDto.fromJSON(body);
            }),
            pretifyError('i18n:rules.ruleEvents.loadFailed'));
    }

    public enqueueEvent(appName: string, resource: Resource): Observable<any> {
        const link = resource._links['update'];

        const url = this.apiUrl.buildUrl(link.href);

        return HTTP.requestVersioned(this.http, link.method, url).pipe(
            pretifyError('i18n:rules.ruleEvents.enqueueFailed'));
    }

    public cancelEvents(appName: string, resource: Resource): Observable<any> {
        const link = resource._links['cancel'];

        const url = this.apiUrl.buildUrl(link.href);

        return HTTP.requestVersioned(this.http, link.method, url).pipe(
            pretifyError('i18n:rules.ruleEvents.cancelFailed'));
    }

    public validateTrigger(appName: string, dto: RuleTriggerDto): Observable<DynamicRuleDto> {
        const url = this.apiUrl.buildUrl(`api/apps/${appName}/rules/validate/trigger`);

        return this.http.post<any>(url, dto.toJSON()).pipe(
            pretifyError('i18n:rules.ruleEvents.validationFailed'));
    }

    public validateStep(appName: string, dto: Record<string, any>): Observable<DynamicRuleDto> {
        const url = this.apiUrl.buildUrl(`api/apps/${appName}/rules/validate/step`);

        return this.http.post<any>(url, dto).pipe(
            pretifyError('i18n:rules.ruleEvents.validationFailed'));
    }

    public getCompletions(appName: string, actionType: string): Observable<ScriptCompletions> {
        const url = this.apiUrl.buildUrl(`api/apps/${appName}/rules/completion/${actionType}`);

        return this.http.get<ScriptCompletions>(url);
    }

    public getTimezones(appName: string): Observable<ReadonlyArray<string>> {
        const url = this.apiUrl.buildUrl(`api/apps/${appName}/rules/timezones`);

        return this.http.get<ReadonlyArray<string>>(url);
    }
}