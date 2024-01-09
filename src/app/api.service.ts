import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // private SERVER_URL = "http://localhost:3000";
  constructor(private httpClient: HttpClient) { }

  public get(): Observable<any>{  
		const apiUrl = "assets/books.json";
    return this.httpClient.get<any>(apiUrl);
	} 
}
