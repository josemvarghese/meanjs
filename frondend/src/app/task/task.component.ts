import { Component, OnInit,OnDestroy } from '@angular/core';
import { TaskItem } from '../services/taskItem';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
  providers:[TaskService]
})
export class TaskComponent implements OnInit,OnDestroy {
  private request:any;
  private addnewtask:any;
  private deleTask:any;
  private statusUpdate:any;
  
  taskList:[TaskItem];
  newTask:String;

  constructor(private _task:TaskService) { }
  ngOnInit() {
    console.log("task component");
    this.request = this._task.listTask().subscribe(data=>{
      console.log(data);
      this.taskList  = data as [TaskItem];
      // console.log(this.taskList);
    });
  }

  addTask(event,addTaskForm){
        // console.log(addTaskForm);
        event.preventDefault();
        console.log(this.newTask);
        let title = this.newTask;
        var taskNew = {
          title:this.newTask,
          isDone:false
        };

        this.addnewtask  = this._task.addTask(taskNew).subscribe(data=>{
          console.log("data");
          console.log(data);
          this.taskList.push(data);
          this.newTask = '';
        })
  }
  deleteTask(deleTask,index){
    console.log(deleTask);
    console.log(index);
     this.deleTask  = this._task.removeTask(deleTask).subscribe(data=>{
          console.log("data");
          console.log(data);
          if(data.n===1){
            this.taskList.splice(index,1);
          }
          // this.taskList.push(data);
          // this.newTask = '';
        })
  }
updateStatus(updateTask){
             console.log(updateTask);
        this.statusUpdate  = this._task.updateTaskStatus(updateTask).subscribe(data=>{
          console.log("data");
          console.log(data);
          // this.taskList.push(data);
          // this.newTask = '';
        });
  }


  ngOnDestroy(){
    this.request.unsubscribe();
    this.addnewtask.unsubscribe();
    this.deleTask.unsubscribe();
    this.statusUpdate.unsubscribe();
    
  }


}
