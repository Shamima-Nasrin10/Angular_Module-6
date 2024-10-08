import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LocationComponent } from './location/location.component';
import { CreatelocationComponent } from './location/createlocation/createlocation.component';
import { UpdatelocationComponent } from './location/updatelocation/updatelocation.component';
import { ViewstudentComponent } from './student/viewstudent/viewstudent.component';
import { CreatestudentComponent } from './student/createstudent/createstudent.component';
import { UpdatestudentComponent } from './student/updatestudent/updatestudent.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  {path:"location", component:LocationComponent},
  {path:"createlocation", component:CreatelocationComponent},
  {path:"updatelocation/:id", component:UpdatelocationComponent},
  {path:"student", component:ViewstudentComponent},
  {path:"createstudent", component:CreatestudentComponent},
  {path:"updatestudent/:id", component:UpdatestudentComponent},
  {path:"registration", component: RegistrationComponent},
  {path: 'login', component:LoginComponent},
  {path:'home', component:HomeComponent},
  {path:'logout', component:LogoutComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
