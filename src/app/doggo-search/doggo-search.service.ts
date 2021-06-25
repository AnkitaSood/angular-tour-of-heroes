import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError as observableThrowError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Doggo } from '../models/doggo';

@Injectable()
export class doggoSearchService {
  constructor(private http: HttpClient) {}

  search(term: string): Observable<Doggo[]> {
    return this.http
      .get<Doggo[]>(`app/doggos/?name=${term}`)
      .pipe(catchError(this.handleError));
  }

  private handleError(res: HttpErrorResponse) {
    console.error(res.error);
    return observableThrowError(res.error || 'Server error');
  }
}
