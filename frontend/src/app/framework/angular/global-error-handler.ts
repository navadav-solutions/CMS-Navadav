/*
 * Navadav Headless CMS
 *
 * @license
 * Copyright (c) NAVADAV. Todos los derechos reservados.
 */

import { ErrorHandler, Injectable, NgZone } from '@angular/core';
import { DialogService } from '../internal';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
    constructor(
        private readonly dialogs: DialogService,
        private readonly zone: NgZone,
    ) {
    }

    public handleError(error: any): void {
        const chunkFailedMessage = /Loading chunk [\d]+ failed/;

        if (chunkFailedMessage.test(error.message)) {
            this.zone.run(() => {
                this.dialogs.confirm('i18n:common.errors.chunkLoadingTitle', 'i18n:common.errors.chunkLoadingText')
                    .subscribe(() => {
                        location.reload();
                    });
            });
        }
    }
}