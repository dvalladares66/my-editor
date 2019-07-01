import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { AceEditorComponent } from 'ng2-ace-editor';
import { ReadFilesService } from './services/read-files.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  name = 'Angular 8';

  constructor(public logicFile: ReadFilesService) { }

  @ViewChild( AceEditorComponent, { static: false }) editor: AceEditorComponent;

  ngAfterViewInit() {
    this.editor.getEditor().setOptions({
      showLineNumbers: true,
      tabSize: 2
    });

    this.editor.mode = 'javascript';
    this.editor.setTheme('eclipse');
    console.log('ngAfterViewInit: fileLoaded 1 ' + this.logicFile.fileLoaded);
    setTimeout(() => this.editor.value = this.logicFile.fileData, 1000);
    console.log('ngAfterViewInit: fileLoaded 2 ' + this.logicFile.fileLoaded);
    //this.editor.value = this.logicFile.fileData;
    /*this.editor.value = `function testThis() {
  console.log("it's working!");
}`;*/

    this.editor.getEditor().commands.addCommand({
      name: 'showOtherCompletions',
      bindKey: 'Ctrl-.',
      exec: function (editor) {

      }
    })
  }

  getValue() {
    console.log(this.editor.value)
    console.log(eval(this.editor.value));
  }
}
