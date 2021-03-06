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
   addTask(newTask){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(endpoint+'tasks',JSON.stringify(newTask),{headers:headers})
                .map(response=>response.json())
                .catch(this.handleError)
   }
   removeTask(taskId){
      return this.http.delete(endpoint+'task/'+taskId)
                .map(response=>response.json())
                .catch(this.handleError)
   }
   updateTaskStatus(updateTask){
     var upTask = {
       _id:updateTask._id,
       title:updateTask.title,
       isDone:!updateTask.isDone
     };
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put(endpoint+'task/'+updateTask._id,JSON.stringify(upTask),{headers:headers})
                .map(response=>response.json())
                .catch(this.handleError)
   }

   private handleError(error:any, caught:any): any{
      console.log(error, caught)
    }

}
