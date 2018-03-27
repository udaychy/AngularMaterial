import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import {MaterialModule} from '../shared/material.module'
import { DemoRoutingModule } from './demo-routing.module';

import { ButtonsComponent } from './buttons/buttons.component';
import { FlexboxComponent } from './flexbox/flexbox.component';


@NgModule({
  imports: [
    DemoRoutingModule,
    CommonModule,
    MaterialModule,
    FormsModule,
    FlexLayoutModule
  ],
  declarations: [ButtonsComponent, FlexboxComponent]
})
export class DemoModule { }
