import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResult } from '../interfaces/apiresult';
import { Movies } from '../interfaces/movies';
import { HttpClientService } from './http-client.service';

@Injectable({
  providedIn: 'root'
})
export class HttpMoviesService {

  constructor(private httpservice: HttpClientService) { }

  read(path: String): Observable<ApiResult> {
    return this.httpservice.read(path);
  }
  update(id: String, value: Movies) {

  }
  delete(id: String) {

  }
}
