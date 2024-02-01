import { Component, OnInit } from '@angular/core';
import { VehicleService } from './vehicle.service';

@Component({
   selector: 'app-vehicle-management',
   templateUrl: './vehicle-management.component.html',
   styleUrls: ['./vehicle-management.component.css']
})
export class VehicleManagementComponent implements OnInit {
   vehicles: any[];

   constructor(private vehicleService: VehicleService) {}

   ngOnInit(): void {
      this.getVehicles();
   }

   getVehicles(): void {
      // Implement logic to get vehicles using vehicleService
   }

   addVehicle(vehicle: any): void {
      // Implement logic to add a new vehicle using vehicleService
   }

   updateVehicle(id: number, vehicle: any): void {
      // Implement logic to update a vehicle using vehicleService
   }

   deleteVehicle(id: number): void {
      // Implement logic to delete a vehicle using vehicleService
   }
}
