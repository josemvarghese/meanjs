import { Component, OnInit } from '@angular/core';
// import { VideoItem } from '../videos/video';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
  providers:[TaskService]
})
export class TaskComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
