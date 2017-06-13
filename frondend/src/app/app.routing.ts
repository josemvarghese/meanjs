import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskComponent } from './task/task.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';


const appRoutes:Routes = [
  {
      path:"",
      component: SigninComponent,
  },
  {
    path:"signup",
    component:SignupComponent,
  },
  {
    path:"task",
    component:TaskComponent,
  },
  
]
@NgModule({

  imports: [
      RouterModule.forRoot(appRoutes)
  ],
  exports:[
      RouterModule
  ]

})
export class AppRoutingModule {}
