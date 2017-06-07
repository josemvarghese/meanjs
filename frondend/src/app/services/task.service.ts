import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
const endpoint = 'http://localhost:3000/api/'; 

@Injectable()
export class TaskService {

  constructor() { }

}
