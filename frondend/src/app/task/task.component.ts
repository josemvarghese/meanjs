import { Component, OnInit } from '@angular/core';
import { TaskItem } from '../services/taskItem';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
  providers:[TaskService]
})
export class TaskComponent implements OnInit {
  private request:any;
  constructor(private _task:TaskService) { }

  ngOnInit() {
    console.log("task component");
    this.request = this._task.listTask().subscribe(data=>{
      console.log(data);
    });
  }

}
