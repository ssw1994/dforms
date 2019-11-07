import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DformComponent } from "./DForm/dform.component";
import { PreviewComponent } from "./preview/preview.component";
@NgModule({
  imports:      [ BrowserModule, FormsModule,ReactiveFormsModule ],
  declarations: [ 
    AppComponent, 
    HelloComponent,
    DformComponent,
    PreviewComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
