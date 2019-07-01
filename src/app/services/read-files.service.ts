import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
   providedIn: 'root'
})
export class ReadFilesService {

   public fileData: any;

   public fileLoaded = false;
   public fileUrl = 'assets/logic/index.js';

   constructor(public http: HttpClient) {
      this.loadFile();
   }

   parseFile(data) {
      this.fileData = data;
      console.log('parseFile: ' + this.fileData);
      this.fileLoaded = true;
   }

   loadFile() {
      this.http.get(this.fileUrl, {responseType: 'text'}).subscribe((data: any) => this.parseFile(data));
   }


}