/*
 * Navadav Headless CMS
 *
 * @license
 * Copyright (c) NAVADAV. Todos los derechos reservados.
 */

export const Settings = {
    AppProperties: {
        HIDE_API: 'ui.api.hide',
        HIDE_ASSETS: 'ui.assets.hide',
        HIDE_CONTENTS: (schema: any) => `ui.contents.${schema}.hide`,
        HIDE_SCHEMAS: 'ui.schemas.hide',
        HIDE_SETTINGS: 'ui.settings.hide',
    },
    Local: {
        ASSETS_MODE: 'navadav.assets.list-view',
        CONTENT_LANGUAGE: (schema: any) => `navadav.schemas.${schema}.language`,
        CONTENT_ID_INPUT: 'navadav.contents.idField',
        DASHBOARD_CHART_STACKED: 'dashboard.charts.stacked',
        DISABLE_ONBOARDING: (key: any) => `navadav.onboarding.disable.${key}`,
        FIELD_ALL: (schema: any, field: any) => `navadav.schemas.${schema}.fields.${field}.show-all`,
        FIELD_COLLAPSED: (schema: any, field: any) => `navadav.schemas.${schema}.fields.${field}.closed`,
        FIELD_EDITOR_COLLAPSED: (schema: any, field: any) => `navadav.schemas.${schema}.editor.fields.${field}.closed`,
        HIDE_MAP: 'hideMap',
        NEWS_VERSION: 'navadav.news.version',
        NOTIFICATION_VERSION: 'notifications.version',
        SCHEMA_CATEGORY_COLLAPSED: (category: any) => `navadav.schema.category.${category}.collapsed`,
        SCHEMA_PREVIEW: (schema: any) => `navadav.schemas.${schema}.preview-button`,
        SCHEMAS_COLLAPSED: 'content.schemas.collapsed',
    },
};
