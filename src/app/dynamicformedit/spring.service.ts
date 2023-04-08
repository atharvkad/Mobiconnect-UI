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
  getreq(x : any): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:8080/employee/'+x);
  }

  getallreq(x : any): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:8080/employees');
  }
  sendPutRequest(body :any , x:any) {
    // Replace with your data
   this.http.put('http://localhost:8080/employee/'+x, body).subscribe(
     response => {
       console.log(response);
     },
     error => {
       console.log(error);
     }
   );
 }
}