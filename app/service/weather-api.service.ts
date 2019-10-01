import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherAPIService {

  //private baseURL = "http://localhost:8080/weatherapi/";
  private baseURL = "/external-weather-api/weatherapi/";
  constructor(private http: HttpClient) { }

  getJSONValue(postalCode: any): Observable<any> {
    return this.http.get(this.baseURL + postalCode).pipe(catchError(this.handleError));
  }
  handleError(error: { error: { message: any; }; status: any; message: any; }) {

    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `client-side error: ${error.error.message}`;
    } else {
      if ((error.status) === 0) {
        errorMessage = "Your spring-boot app server down..."
      } else if ((error.status) == 404) {
        errorMessage = "Weather api not connected..."
      } else {
        errorMessage = `server-side error code: ${error.status}->Message:${error.message}`;
      }
    }
    return throwError(errorMessage);
  }
}