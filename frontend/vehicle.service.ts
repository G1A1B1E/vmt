import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
   providedIn: 'root'
})
export class VehicleService {
   private apiUrl = 'http://localhost:8080/api/vehicles';

   constructor(private http: HttpClient) {}

   getVehicles(): Observable<any> {
      // Implement API call to get vehicles
   }

   addVehicle(vehicle: any): Observable<any> {
      // Implement API call to add a new vehicle
   }

   updateVehicle(id: number, vehicle: any): Observable<any> {
      // Implement API call to update a vehicle
   }

   deleteVehicle(id: number): Observable<any> {
      // Implement API call to delete a vehicle
   }
}
