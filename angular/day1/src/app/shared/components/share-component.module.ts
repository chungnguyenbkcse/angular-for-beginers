import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TopBarComponent } from './app-top-bar/app-top-bar.component';
import { LeftPanelComponent } from './left-panel/left-panel.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { PageSettingComponent } from './page-setting/page-setting.component';
import { TabSettingComponent } from './page-setting/tab-setting/tab-setting.component';
import { MenuComponent } from './app-menu/menu.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    TopBarComponent,
    LeftPanelComponent,
    PageHeaderComponent,
    PageSettingComponent,
    TabSettingComponent,
    MenuComponent,
  ],
  exports: [
    TopBarComponent,
    LeftPanelComponent,
    PageHeaderComponent,
    PageSettingComponent,
    MenuComponent,
  ]
})
export class ShareComponentModule { }
