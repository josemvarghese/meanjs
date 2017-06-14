import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
const endpoint = 'http://localhost:3000/api/'; 

@Injectable()
export class LoginService {

  constructor(private http:Http) {
    console.log("task service ");
   }
   /* sign up */
   signup(userInfo){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(endpoint+'signup',JSON.stringify(userInfo),{headers:headers})
                .map(response=>response.json())
                .catch(this.handleError)
   }

    private handleError(error:any, caught:any): any{
      console.log(error, caught)
    }
}
