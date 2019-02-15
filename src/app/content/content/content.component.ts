import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { Conteudo } from 'src/app/content';
import { HttpClient } from '@angular/common/http';

//import { ContentService } from './content.service';
//<table *ngIf="conteudosObservable | async as conteudos else empty">
//<td>{{ conteudos.autnresponse.responsedata.autnhit[0].autncontent.DOCUMENT[0].DRECONTENT[0].$ }}</td>
//<td>{{ conteudos.autnresponse.responsedata.autnhit[0].autncontent.DOCUMENT[0].DRETITLE[0].$ }}</td>
//this.conteudosObservable = this.httpClient.get<Conteudo[]>("http://localhost:8080/trainings/action=query&text=historia");

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  template:  `
              <form autocomplete="off"></form>
              <div class="container">
              <input type="text" name="search">
              <button type="submit" value="search">Search</button>
              <br /><br />
              <table class="table table-hover" *ngIf="conteudosObservable | async as conteudos else empty">
              <thead>
                <tr>
                  <th  scope="col-md-4">Title</th>
                  <th  scope="col-md-8">Summary</th>
                </tr>
              </thead>
               <tbody>
                <tr scope="row">
                  <td *ngIf="conteudosObservable | async as conteudos else empty">{{ conteudos.autnresponse.responsedata.autnhit[0].autncontent.DOCUMENT[0].DRETITLE[0].$ }}</td>
                  <td>{{ conteudos.autnresponse.responsedata.autnhit[0].autnsummary.$ }}</td>
                </tr>
              </table>
              </div>
            `
})

export class ContentComponent implements OnInit{

  private text: string;
  conteudosObservable : Observable<Conteudo[]>;
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.getContent("query",this.getSearch("Alexandria João I"));
  }

  getContent(a: string, t: string) {
    return this.conteudosObservable = this.httpClient.get<Conteudo[]>("http://localhost:8080/trainings/action="+a+"&text="+t);
  }

  getSearch(text:string){
    return this.text = text;
  }
}