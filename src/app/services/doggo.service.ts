import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError as observableThrowError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Doggo } from '../models/doggo';

@Injectable()
export class DoggoService {
  private doggosUrl = 'app/doggos'; // URL to web api

  constructor(private http: HttpClient) {}

  getdoggos() {
    return this.http
      .get<Doggo[]>(this.doggosUrl)
      .pipe(map(data => data), catchError(this.handleError));
  }

  getdoggo(id: number): Observable<Doggo> {
    return this.getdoggos().pipe(
      map(doggos => doggos.find(doggo => doggo.id === id))
    );
  }

  save(doggo: Doggo) {
    if (doggo.id) {
      return this.put(doggo);
    }
    return this.post(doggo);
  }

  delete(doggo: Doggo) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const url = `${this.doggosUrl}/${doggo.id}`;

    return this.http.delete<Doggo>(url).pipe(catchError(this.handleError));
  }

  // Add new Doggo
  private post(doggo: Doggo) {
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http
      .post<Doggo>(this.doggosUrl, doggo)
      .pipe(catchError(this.handleError));
  }

  // Update existing Doggo
  private put(doggo: Doggo) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const url = `${this.doggosUrl}/${doggo.id}`;

    return this.http.put<Doggo>(url, doggo).pipe(catchError(this.handleError));
  }

  private handleError(res: HttpErrorResponse | any) {
    console.error(res.error || res.body.error);
    return observableThrowError(res.error || 'Server error');
  }
}
