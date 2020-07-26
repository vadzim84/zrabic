import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from 'src/app/shared/models/task.model';
import { FormControl, Validators } from '@angular/forms';
import { TaskService } from 'src/app/shared/services/task-service/task.service';
import { CONFIG } from 'src/app/shared/config';

@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.scss']
})
export class DoneComponent implements OnInit {

  hide = false;
  noTasks = false;
  tasks: Observable<Task[]>;;

  title = new FormControl('', [Validators.required]);
  body = new FormControl('', [Validators.required]);
  date = new FormControl('', [Validators.required]);


  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    if (localStorage.getItem(CONFIG.localStorageUserId)) {
      this.tasks = this.taskService.getDTasks()



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
      state:  CONFIG.done
    }
    this.taskService.addTaskD(task, CONFIG.done).subscribe()
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
