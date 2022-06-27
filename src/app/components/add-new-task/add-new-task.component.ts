import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ICreateTask } from 'src/app/common/models/task-manager.model';
import { TasksService } from 'src/app/common/services/tasks.service';

const emptyTask: ICreateTask = {
  id: '',
  title: '',
  description: ''
}

@Component({
  selector: 'add-new-task',
  templateUrl: './add-new-task.component.html',
  styleUrls: ['./add-new-task.component.scss']
})
export class AddNewTaskComponent implements OnInit {

  newTasks: any[] = [];
  inProgress: any[] = [];
  done: any[] = [];

  task: ICreateTask = emptyTask;

  public addNewTask !: FormGroup;

  disabled: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private tasksService: TasksService
  ) { }

  ngOnInit(): void {
    this.addNewTask = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
    })
  }


  fetchNewTasks() {
    this.tasksService.allNewTasks()
      .subscribe((result: any) => this.newTasks = result)
  }

  addTask(task: ICreateTask) {
    // console.log(this.addNewTask.value)
    this.task = this.addNewTask.value;
    this.createTask(task);
    console.log(task, 'task added');
    this.backToDashboard();
    // this.addNewTask.reset();
  }

  createTask(task: ICreateTask) {
    this.tasksService.createNewTask(this.task)
      .subscribe(result => this.fetchNewTasks());
  }

  backToDashboard() {
    this.tasksService.allNewTasks();

    this.router.navigate([''],);
  }

}

