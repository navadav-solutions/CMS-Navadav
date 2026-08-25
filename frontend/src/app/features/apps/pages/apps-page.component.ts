/*
 * Navadav Headless CMS
 *
 * @license
 * Copyright (c) NAVADAV. Todos los derechos reservados.
 */

import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { AppDto, AppFormComponent, AppsState, AuthService, DialogModel, FeatureDto, LocalStoreService, ModalDirective, NewsService, Settings, TemplateDto, TemplatesState, TitleComponent, TourState, TourStepDirective, TranslatePipe, UIOptions, UIState } from '@app/shared';
import { AppComponent } from './app.component';
import { NewsDialogComponent } from './news-dialog.component';
import { OnboardingDialogComponent } from './onboarding-dialog.component';

@Component({
    selector: 'sqx-apps-page',
    styleUrls: ['./apps-page.component.scss'],
    templateUrl: './apps-page.component.html',
    imports: [
        AppComponent,
        AppFormComponent,
        AsyncPipe,
        ModalDirective,
        NewsDialogComponent,
        OnboardingDialogComponent,
        TitleComponent,
        TourStepDirective,
        TranslatePipe,
    ],
})
export class AppsPageComponent implements OnInit {
    public addAppDialog = new DialogModel();
    public addAppTemplate?: TemplateDto;

    public onboardingDialog = new DialogModel();

    public newsFeatures?: ReadonlyArray<FeatureDto>;
    public newsDialog = new DialogModel();

    public generalInfo = '';

    public starters = this.templatesState.starters;

    constructor(
        public readonly authState: AuthService,
        public readonly uiState: UIState,
        public readonly appsState: AppsState,
        private readonly localStore: LocalStoreService,
        private readonly newsService: NewsService,
        private readonly templatesState: TemplatesState,
        private readonly tourState: TourState,
        private readonly uiOptions: UIOptions,
    ) {
        if (uiOptions.value.showInfo) {
            this.generalInfo = uiOptions.value.info;
        }
    }

    public ngOnInit() {
        this.appsState.apps.pipe(take(1))
            .subscribe(apps => {
                if (apps.length === 0 &&
                    this.uiOptions.value.hideOnboarding !== true &&
                    this.tourState.snapshot.status !== 'Completed' &&
                    this.tourState.snapshot.status !== 'Started') {
                    this.onboardingDialog.show();
                    return;
                }

                if (this.tourState.snapshot.status !== 'Started') {
                    this.tourState.complete();
                }

                if (!this.uiOptions.value.hideNews) {
                    const newsVersion = this.localStore.getInt(Settings.Local.NEWS_VERSION);

                    this.newsService.getFeatures(newsVersion)
                        .subscribe(result => {
                            if (result.version !== newsVersion) {
                                if (result.features.length > 0) {
                                    this.newsFeatures = result.features;
                                    this.newsDialog.show();
                                }

                                this.localStore.setInt(Settings.Local.NEWS_VERSION, result.version);
                            }
                        });
                }
            });

        this.templatesState.load(false, true);
    }

    public createNewApp(template?: TemplateDto) {
        this.addAppTemplate = template;
        this.addAppDialog.show();
    }

    public leaveApp(app: AppDto) {
        this.appsState.leave(app);
    }
}
