import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public apiData;

  constructor(private http:HttpClient) {}
  getApiData(){
    return this.http.get('https://indian-cities-api-nocbegfhqg.now.sh/cities');
  }
}
