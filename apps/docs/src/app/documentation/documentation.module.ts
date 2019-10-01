import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MarkdownModule } from 'ngx-markdown';

import { RouterModule } from '@angular/router';

// components
import { DocumentationComponent } from './core-helpers/documentation/documentation.component';
import { PlayGroundComponent } from './core-helpers/playground/playground.component';
import { CodeExampleComponent } from './core-helpers/code-example/code-example.component';
import { HeaderComponent } from './core-helpers/header/header.component';
import { DescriptionComponent } from './core-helpers/description/description';
import { SeparatorComponent } from './core-helpers/seperator/seperator.component';
import { ImportComponent } from './core-helpers/import/import.component';
import { DirectionalityComponent } from './core-helpers/directionality/directionality.component';
import { ComponentExampleComponent } from './core-helpers/component-example/component-example.component';
import { ExampleBackgroundComponent } from './core-helpers/example-background/example-background.component';

// services
import { CopyService } from './services/copy.service';
import { ApiDocsService } from './services/api-docs.service';
import { HttpClientModule } from '@angular/common/http';
import { CdkTableModule } from '@angular/cdk/table';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ROUTES } from './documentation.routes';


@NgModule({
    declarations: [
        DocumentationComponent,
        PlayGroundComponent,
        CodeExampleComponent,
        HeaderComponent,
        DescriptionComponent,
        SeparatorComponent,
        ImportComponent,
        DirectionalityComponent,
        ComponentExampleComponent,
        ExampleBackgroundComponent,
    ],

    imports: [
        MarkdownModule.forChild(),
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(ROUTES),
        HttpClientModule,
        CdkTableModule,
        DragDropModule
    ],
    providers: [CopyService, ApiDocsService],
    exports: [
        DocumentationComponent,
        PlayGroundComponent,
        CodeExampleComponent,
        HeaderComponent,
        DescriptionComponent,
        SeparatorComponent,
        ImportComponent,
        DirectionalityComponent,
        ComponentExampleComponent,
        ExampleBackgroundComponent,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        CdkTableModule,
        DragDropModule
    ]
})
export class DocumentationModule {}
