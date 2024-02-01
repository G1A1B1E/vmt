import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
   providedIn: 'root'
})
export class AuthService {
   private apiUrl = 'http://localhost:8080';

   constructor(private http: HttpClient) {}

   register(user: any): Observable<any> {
      // Implement user registration API call
   }

   login(credentials: any): Observable<any> {
      // Implement user login API call and save JWT
   }

   getAuthHeaders(): HttpHeaders {
      // Get JWT from local storage and set in headers
   }
}
