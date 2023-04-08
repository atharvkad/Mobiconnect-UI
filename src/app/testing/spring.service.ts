import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Spring {

  private apiUrl = 'https://restcountries.com/v3.1/all';

  constructor(private http: HttpClient) { }

  sendPostRequest(body :any ) {
     // Replace with your data
    this.http.post('http://localhost:8080/employee', body).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      }
    );
  }
  getallreq(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:8080/employees');
  }
  getreq(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:8080/employee/3 ');
  }

  sendPutRequest(body :any ) {
    // Replace with your data
   this.http.put('http://localhost:8080/employee/2', body).subscribe(
     response => {
       console.log(response);
     },
     error => {
       console.log(error);
     }
   );
 }
}