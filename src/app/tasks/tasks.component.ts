import { Component, OnInit } from '@angular/core';
import { TasksService } from './shared/tasks.service';
import { catchError, Subject, takeUntil, tap } from 'rxjs';
import { TaskListComponent } from "./task-list/task-list.component";
import { MatDialog } from '@angular/material/dialog';
import { CreateTaskComponent } from './create-task/create-task.component';
import { AddTaskIconComponent } from "../shared/icons/add-task-icon/add-task-icon.component";
import { Task } from './shared/task.interface';

@Component({
  selector: 'app-tasks',
  imports: [TaskListComponent, AddTaskIconComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss',
})
export class TasksComponent implements OnInit {

  unsubscribe$ = new Subject<void>();

  todos: Task[] = [];
  
  constructor(
    private tasksService: TasksService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    const userId = localStorage.getItem('userId') || '';
    
    this.tasksService.getTaskList(userId)
    .pipe(
      takeUntil(this.unsubscribe$),
      tap((res: Task[]) => {
        this.todos = res;
      }),
      catchError((err)=>{
        console.log(err);
        return err;
      })
    ).subscribe();
  }

  openCreateModal(): void {
    const dialogRef = this.dialog.open(CreateTaskComponent, {
      width: '600px',
      height: '300px',
      data: { title: 'Create Todo' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.todos.push(result);
      }
    });
  }
}
