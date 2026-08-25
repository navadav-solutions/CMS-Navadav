/*
 * Navadav Headless CMS
 *
 * @license
 * Copyright (c) NAVADAV. Todos los derechos reservados.
 */

import { DynamicFlowDefinitionDto, RuleTriggerDto } from '@app/shared';

export class RuleConfigured {
    constructor(
        public readonly trigger: RuleTriggerDto,
        public readonly flow: DynamicFlowDefinitionDto,
    ) { }
}
