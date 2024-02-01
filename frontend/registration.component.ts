import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
   selector: 'app-registration',
   templateUrl: './registration.component.html',
   styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
   constructor(private authService: AuthService) {}

   register(user: any): void {
      // Implement user registration logic using authService
   }
}
