import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
const endpoint = 'http://localhost:3000/api/'; 

@Injectable()
export class TaskService {

  constructor(private http:Http) {
    console.log("task service ");
   }
   listTask(){
     return this.http.get(endpoint+'tasks')
                .map(response=>response.json())
                .catch(this.handleError)
   }

   private handleError(error:any, caught:any): any{
      console.log(error, caught)
    }

}
