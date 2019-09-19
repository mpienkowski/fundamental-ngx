import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FundamentalNgxCoreModule } from '@fundamental-ngx/core';
import { MenuModule } from './components/menu/menu.module';
import { ActionModule } from './components/action/action.module';
import { MenuComponent } from './components/menu/menu-comp/menu.component';
import { MenuItemComponent } from './components/menu/menu-comp/menu-item.component';

@NgModule({
    imports: [
        CommonModule,
        FundamentalNgxCoreModule
    ],
    exports: [
        MenuModule,
        ActionModule
    ]
})
export class FundamentalNgxPlatformModule {
}
