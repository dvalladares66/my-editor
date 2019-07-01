import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AceEditorModule } from 'ng2-ace-editor';
import { ReadFilesService } from './services/read-files.service';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AceEditorModule
  ],
  providers: [
    ReadFilesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
