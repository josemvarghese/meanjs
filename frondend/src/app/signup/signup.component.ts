import { Component, OnInit,OnDestroy } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
    providers:[LoginService]
})
export class SignupComponent implements OnInit,OnDestroy {
  email:any;
  psw:any;
  pswrepeat:any;
  private signupReq:any
  constructor(private _login:LoginService) { }

  ngOnInit() {
  }
  signUp(event,signupForm){

   
    console.log(signupForm.form._value);
    event.preventDefault();
        if(signupForm.form._value.psw===signupForm.form._value.pswrepeat){
            var userInfo = {
              email:signupForm.form._value.email,
              password:signupForm.form._value.psw
            };
            this.signupReq  = this._login.signup(userInfo).subscribe(data=>{
                console.log("data");
                console.log(data);
                this.email = '';
                this.psw = '';
                this.pswrepeat = '';
            });

        }
        

        

  }


    ngOnDestroy(){
    this.signupReq.unsubscribe();
    // this.addnewtask.unsubscribe();
    // this.deleTask.unsubscribe();
    // this.statusUpdate.unsubscribe();
    
  }

}
