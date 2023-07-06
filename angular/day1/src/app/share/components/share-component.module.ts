import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TopBarComponent } from './app-top-bar/app-top-bar.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    TopBarComponent,
  ],
  exports: [
    TopBarComponent
  ]
})
export class ShareComponentModule { }
