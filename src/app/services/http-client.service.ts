import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpclient: HttpClient) { }

  create() {
  }

  read(path: String): Observable<any> {
    return this.httpclient.get(`${environment.API_URL}/${path}`);

  }
  update(id: String, value: any) {

  }
  delete(id: String) {

  }
}
