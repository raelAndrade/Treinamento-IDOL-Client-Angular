import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Conteudo } from 'src/app/content';


@Injectable({
  providedIn: 'root'
})
export class ContentService {
  /*contentUrl =  "http://localhost:8080/trainings";

  constructor(private httpClient: HttpClient) { }

  getContent() : Observable<any>{
    return this.httpClient.get(`${this.contentUrl}/actions=query&text=historia`);
  }*/

}
