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
 /**
  * Function that makes the api call for the user registration endpoint
  * @param userDetails 
  * @returns 
  */
  public userRegistration(userDetails: any): Observable<any> {
    console.log(userDetails);
    return this.http.post(apiUrl + 'users', userDetails).pipe(
    catchError(this.handleError)
    );
  }

  /**
   * Function used to create user login 
   * @param userDetails 
   * @returns 
   */
  public userLogin(userDetails: any): Observable<any> {
    console.log(userDetails);
    return this.http.post(apiUrl + 'login', userDetails).pipe(
    catchError(this.handleError)
    );
  }

  /**
   * Functions that handles error and returns a message if there is an error
   * @param error 
   * @returns 
   */
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

  /**
   * Function to get movies establish from the backend
   * @returns 
   */
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

  /**
   * Function that will get a single movie 
   * @returns 
   */

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

  /**
   * Function that will retrive directors info
   * @param Director 
   * @returns 
   */

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
  
  /**
   * Function that get genre information
   * @param Genre 
   * @returns 
   */

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

/**
 * Function that gets user profile once they register
 * @returns 
 */

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

/**
 * Function that returns users favortie movies
 * @returns 
 */

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

/**
 * Function that returns users favorite movies
 * @param Title 
 * @returns 
 */

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

/**
 * Function that changes the user profile
 * @returns 
 */

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

/**
 * Function that deletes user profile
 * @returns 
 */

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

/**
 * Function that deletes favorite movie
 * @param Title 
 * @returns 
 */

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

