import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  email:any;
  psw:any;
  pswrepeat:any;
  constructor() { }

  ngOnInit() {
  }
  signUp(event,signupForm){

    console.log(signupForm);

  }

}
