import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TaskComponent } from "../task/task.component";
import { MatDialog } from '@angular/material/dialog';
import { UpdateTaskComponent } from '../update-task/update-task.component';
import { TasksService } from '../shared/tasks.service';

@Component({
  selector: 'app-task-list',
  imports: [NgFor, TaskComponent],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent {
  private _todos: any[] = [];

  @Input()
  get todos() {
    return this._todos;
  }

  set todos(value: any[]) {
    this._todos = value;
  }

  constructor(
    private dialog: MatDialog,
    private taskService: TasksService
  ) { }

  openUpdateModal(todo: any): void {
    const dialogRef = this.dialog.open(UpdateTaskComponent, {
      width: '600px',
      height: '300px',
      data: { title: 'Update Todo', todo: todo },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        const index = this.todos.findIndex((t) => t.id === todo.id);
        if (index !== -1) {
          this.todos[index] = { ...todo, ...result };
        }
      }
    });
  }

  removeTask(id: string) {
    this.taskService.deleteTask(id).subscribe(
      () => {
        this.todos = this.todos.filter((todo) => todo.id !== id);
      },
      (error) => {
        console.error('Error deleting todo:', error);
      }
    );
  }
}
