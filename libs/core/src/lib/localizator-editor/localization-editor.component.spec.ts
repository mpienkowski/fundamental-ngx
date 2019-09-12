import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalizationEditorComponent } from './localization-editor.component';
import { LocalizationEditorModule } from './localization-editor.module';
import { CommonModule } from '@angular/common';
import { ButtonModule, FormModule, InputGroupModule, MenuModule, PopoverModule } from '@fundamental-ngx/core';

describe('LocalizatorEditorComponent', () => {
    let component: LocalizationEditorComponent;
    let fixture: ComponentFixture<LocalizationEditorComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                CommonModule, PopoverModule, FormModule, InputGroupModule, MenuModule, ButtonModule,
            ],
            declarations: [
                LocalizationEditorComponent
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LocalizationEditorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('Should add class', () => {
        expect(fixture.nativeElement.className).toBe('fd-localization-editor');
    });
});
