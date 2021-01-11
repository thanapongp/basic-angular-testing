import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class UserServiceStub {
  search(searchTerm: string): Observable<string> {
    return of('mock result');
  }
}
