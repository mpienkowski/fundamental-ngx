import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FundamentalNgxCoreModule } from '@fundamental-ngx/core';
import { MenuModule } from './components/menu/menu.module';
@NgModule({
    imports: [
        CommonModule,
        FundamentalNgxCoreModule
    ],
    exports: [
        MenuModule
    ]
})
export class FundamentalNgxPlatformModule {
}
