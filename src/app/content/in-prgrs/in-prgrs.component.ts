import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/shared/services/task-service/task.service';
import { FormControl, Validators } from '@angular/forms';
import { CONFIG } from 'src/app/shared/config';
import { Task } from 'src/app/shared/models/task.model';
import { Observable, BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-in-prgrs',
  templateUrl: './in-prgrs.component.html',
  styleUrls: ['./in-prgrs.component.scss']
})
export class InPrgrsComponent implements OnInit {

  hide = false;
  noTasks = false;
  tasks: Observable<Task[]>;;

  title = new FormControl('', [Validators.required]);
  body = new FormControl('', [Validators.required]);
  date = new FormControl('', [Validators.required]);


  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    if (localStorage.getItem(CONFIG.localStorageUserId)) {
      this.tasks = this.taskService.getIPTasks()



      // this.taskService.getIPTasks()
      //   .subscribe((data: Task[]) => {
      //     if (!data) {
      //       this.noTasks = true;
      //     } else {
      //       this.noTasks = false
      //       this.tasksIP = data
      //     }
      //   }
      //   )
    }
  }

  onCreateTask(){
    if(this.title.valid && this.body.valid && this.date.valid){
    const task = {
      title: `${this.title.value}`,
      body: `${this.body.value}`,
      date: `${this.date.value} `,
      state:  CONFIG.inProgress
    }
    this.taskService.addTaskIP(task, CONFIG.inProgress).subscribe()
    this.closeForm()
  }
}

  closeForm() {
    this.hide = false;
    this.title.reset();
    this.body.reset();
    this.date.reset();
  }

}