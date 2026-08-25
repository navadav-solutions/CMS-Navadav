/*
 * Navadav Headless CMS
 *
 * @license
 * Copyright (c) NAVADAV. Todos los derechos reservados.
 */

import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AppDto, AppsState, AvatarComponent, ConfirmClickDirective, defined, DialogService, FileDropDirective, FormErrorComponent, FormHintComponent, FormRowComponent, LayoutComponent, ListViewComponent, ProgressBarComponent, SidebarMenuDirective, Subscriptions, TooltipDirective, TourStepDirective, TranslatePipe, Types, UpdateAppForm } from '@app/shared';

@Component({
    selector: 'sqx-more-page',
    styleUrls: ['./more-page.component.scss'],
    templateUrl: './more-page.component.html',
    imports: [
        AsyncPipe,
        AvatarComponent,
        ConfirmClickDirective,
        FileDropDirective,
        FormErrorComponent,
        FormHintComponent,
        FormRowComponent,
        FormsModule,
        LayoutComponent,
        ListViewComponent,
        ProgressBarComponent,
        ReactiveFormsModule,
        RouterLink,
        RouterLinkActive,
        RouterOutlet,
        SidebarMenuDirective,
        TooltipDirective,
        TourStepDirective,
        TranslatePipe,
    ],
})
export class MorePageComponent implements OnInit {
    private readonly subscriptions = new Subscriptions();

    public app!: AppDto;

    public isEditable = false;
    public isEditableImage = false;
    public isDeletable = false;

    public uploading = false;
    public uploadProgress = 10;

    public updateForm = new UpdateAppForm();

    constructor(
        private readonly appsState: AppsState,
        private readonly dialogs: DialogService,
        private readonly router: Router,
    ) {
    }

    public ngOnInit() {
        this.subscriptions.add(
            this.appsState.selectedApp.pipe(defined())
                .subscribe(app => {
                    this.app = app;

                    this.isDeletable = app.canDelete;
                    this.isEditable = app.canUpdateGeneral;
                    this.isEditableImage = app.canUpdateImage;

                    this.updateForm.load(app);
                    this.updateForm.setEnabled(this.isEditable);
                }));

        this.appsState.reloadApps();
    }

    public save() {
        if (!this.isEditable) {
            return;
        }

        const value = this.updateForm.submit();
        if (!value) {
            return;
        }

        this.appsState.update(this.app, value)
            .subscribe({
                next: app => {
                    this.updateForm.submitCompleted({ newValue: app });
                },
                error: error => {
                    this.dialogs.notifyError(error);

                    this.updateForm.submitFailed(error);
                },
            });
    }

    public uploadImage(file: ReadonlyArray<File>) {
        if (!this.isEditableImage) {
            return;
        }

        this.uploading = true;
        this.uploadProgress = 0;

        this.appsState.uploadImage(this.app, file[0])
            .subscribe({
                next: value => {
                    if (Types.isNumber(value)) {
                        this.uploadProgress = value;
                    }
                },
                error: () => {
                    this.uploading = false;
                },
                complete: () => {
                    this.uploading = false;
                },
            });
    }

    public removeImage() {
        if (!this.isEditableImage) {
            return;
        }

        this.appsState.removeImage(this.app);
    }

    public deleteApp() {
        if (!this.isDeletable) {
            return;
        }

        this.appsState.delete(this.app)
            .subscribe(() => {
                this.router.navigate(['/app']);
            });
    }
}
