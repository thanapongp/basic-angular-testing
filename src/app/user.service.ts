import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private httpClient: HttpClient) {}

  search(searchTerm: string): Observable<string> {
    return this.httpClient.get<string>(`/some-api/search?q=${searchTerm}`);
  }
}
