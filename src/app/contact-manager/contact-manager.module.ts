import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {FlexLayoutModule} from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MaterialModule} from '../shared/material.module'

import { HttpClientModule } from '@angular/common/http';
import { ContactManagerRoutingModule } from './contact-manager-routing.module';
import { ContactManagerComponent } from './contact-manager.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { UserService } from './services/user.service';
import { NotesComponent } from './components/notes/notes.component';
import { NewContactDialogComponent } from './components/new-contact-dialog/new-contact-dialog.component';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ContactManagerRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ],
  declarations: [
    ContactManagerComponent,
    ToolbarComponent,
    MainContentComponent,
    SidenavComponent,
    NotesComponent,
    NewContactDialogComponent
  ],
  providers:[
    UserService
  ],
  entryComponents: [
    NewContactDialogComponent
  ]
})
export class ContactManagerModule { }
