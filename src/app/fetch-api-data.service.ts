import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, catchError } from 'rxjs';
import { map } from 'rxjs/operators';


//Declaring the api url that will provide data for the client app
const apiUrl = //'https://movie-app-harris-02.herokuapp.com/';
'https://angular-m.herokuapp.com/';
//'https://stormy-taiga-55813.herokuapp.com/';
@Injectable({
  providedIn: 'root'
})
//export class FetchApiDataService {

  //constructor() { }
//}
export class FetchApiDataService {
  // Inject the HttpClient module to the constructor params
 // This will provide HttpClient to the entire class, making it available via this.http
  constructor(private http: HttpClient) {
  }
 // Making the api call for the user registration endpoint
  public userRegistration(userDetails: any): Observable<any> {
    console.log(userDetails);
    return this.http.post(apiUrl + 'users', userDetails).pipe(
    catchError(this.handleError)
    );
  }

  public userLogin(userDetails: any): Observable<any> {
    console.log(userDetails);
    return this.http.post(apiUrl + 'login', userDetails).pipe(
    catchError(this.handleError)
    );
  }

private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
    console.error('Some error occurred:', error.error);
    } else {
    console.error(
        `Error Status code ${JSON.stringify(error.status)}, ` +
        `Error body is: ${JSON.stringify(error.error)}`);
    }
    return throwError(
    'Something bad happened; please try again later.');
  }

  getAllMovies(): Observable<any> {
    const token = localStorage.getItem('token');
    //const newLocal = map(this.extractResponseData);
    const response = this.http.get(apiUrl + 'movies', {headers: new HttpHeaders(
      {
        Authorization: 'Bearer ' + token,
      }),
    });
      return response.pipe(map(this.extractResponseData), catchError(this.handleError)
    );
  }
// Non-typed response extraction
  private extractResponseData(res: any): any {
    const body = res;
    return body || { };
  }

  getSingleMovie(): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.get(apiUrl + 'movies/:Title', {headers: new HttpHeaders(
      {
        Authorization: 'Bearer ' + token,
      })}).pipe(
      map(this.extractResponseData),
      catchError(this.handleError)
    );
  }

  getDirector(Director: any): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.get(apiUrl + 'directors/' + Director, {headers: new HttpHeaders(
      {
        Authorization: 'Bearer ' + token,
      })}).pipe(
      map(this.extractResponseData),
      catchError(this.handleError)
    );
  }
  

  getGenre(Genre: any): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.get(apiUrl + 'movies/genre/' + Genre, {headers: new HttpHeaders(
      {
        Authorization: 'Bearer ' + token,
      })}).pipe(
      map(this.extractResponseData),
      catchError(this.handleError)
    );
  }

 getUserProfile() : Observable<any> {
  const token = localStorage.getItem('token');
  const username = localStorage.getItem('user');
  return this.http.get(apiUrl + `user/${username}`, {headers: new HttpHeaders(
    {
      Authorization: 'Bearer ' + token,
    })}).pipe(
    map(this.extractResponseData),
    catchError(this.handleError)
  );
}

 getFavoriteMovies(): Observable<any> {
  const id = localStorage.getItem('user_id');
  const token = localStorage.getItem('token');
    return this.http.get(apiUrl + 'users', {headers: new HttpHeaders(
      {
        Authorization: 'Bearer ' + token,
      })}).pipe(
      map(this.extractResponseData),
      catchError(this.handleError)
    );
}  

 addFavoriteMovie(Title: string) : Observable<any> {
  const token = localStorage.getItem('token');
  const id = localStorage.getItem('user_id');
  console.log(id);
  return this.http.post(apiUrl +  `users/${id}/movies/${Title}`, {}, {headers: new HttpHeaders(
    {
      Authorization: 'Bearer ' + token,
    })}).pipe(
    map(this.extractResponseData),
    catchError(this.handleError)
  );
}

 editUserProfile() : Observable<any> {
  const token = localStorage.getItem('token');
  const username = localStorage.getItem('user');
  return this.http.put(apiUrl +  `user/${username}`, {headers: new HttpHeaders(
    {
      Authorization: 'Bearer ' + token,
    })}).pipe(
    map(this.extractResponseData),
    catchError(this.handleError)
  );
}

 deleteUserProfile( ): Observable<any> {
  const token = localStorage.getItem('token');
  const username = localStorage.getItem('user');
  return this.http.delete(apiUrl +  `user/${username}`, {headers: new HttpHeaders(
    {
      Authorization: 'Bearer ' + token,
    })}).pipe(
    map(this.extractResponseData),
    catchError(this.handleError)
  );
}

 deleteFavoriteMovie(Title: string): Observable<any> {
  const token = localStorage.getItem('token');
  const id = localStorage.getItem('user_id');
  return this.http.delete(apiUrl +  `users/${id}/movies/${Title}`, {headers: new HttpHeaders(
    {
      Authorization: 'Bearer ' + token,
    })}).pipe(
    map(this.extractResponseData),
    catchError(this.handleError)
  );
  }
}

