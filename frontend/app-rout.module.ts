import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration.component';
import { LoginComponent } from './login.component';
import { VehicleManagementComponent } from './vehicle-management.component';

const routes: Routes = [
   { path: 'register', component: RegistrationComponent },
   { path: 'login', component: LoginComponent },
   { path: 'dashboard', component: VehicleManagementComponent },
   // Add more routes based on your design and requirements
];

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
})
export class AppRoutingModule {}
