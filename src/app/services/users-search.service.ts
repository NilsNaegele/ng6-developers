import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UsersSearchService {

  private searchUsersUrl = 'https://api.github.com/search/users?q=';
  private getUserDetailsUrl = 'https://api.github.com/users/';

  constructor(private http: HttpClient) { }

  public getUsersByLocationAndLanguage(city: string, skill: string) {
    let url: string;
    if (city && !skill ) {
        url = `${this.searchUsersUrl}location:${city}`;
    } else if (!city && skill) {
        url = `${this.searchUsersUrl}language:${skill}`;
    } else {
      url = `${this.searchUsersUrl}location:${city}+language:${skill}`;
    }

    return this.http.get<any>(url).pipe(
      map(this.extractData),
      catchError(this.handleError('getUsers', []))
    );
  }

  public getUserDetailsByName(userName: string) {
    if (userName) {
      const url = `${this.getUserDetailsUrl}${userName}`;
      return this.http.get<any>(url).pipe(
        catchError(this.handleError('getUserDetails', []))
      );
    }
  }


  private extractData(response: HttpResponse<any>) {
    return response['items'] || {};
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send error to remote logging infrastructure
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      // let app keep running by returning an empty result
      return of(result as T);
    };
  }

}
