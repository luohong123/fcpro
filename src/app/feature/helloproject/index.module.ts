import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Routers } from './index.route';
import {
  FcbasicModule,
  FclayoutModule,
  FcadModule,
  FcnavModule
} from 'fccomponent';
import { FccoreModule } from 'fccore';
import { HellofcService } from './services/hellofc.service';
import { SpreadService } from './services/spread.service';
@NgModule({
  imports: [
    RouterModule.forChild(Routers),
    FcbasicModule,
    FclayoutModule,
    FcadModule,
    FcnavModule,
    FccoreModule
  ],
  exports: [

  ],
  declarations: [
  ],
  providers: [
    HellofcService,
    SpreadService
  ]
})
export class HelloModule { }