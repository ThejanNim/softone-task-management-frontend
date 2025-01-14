import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TaskComponent } from "../task/task.component";
import { MatDialog } from '@angular/material/dialog';
import { UpdateTaskComponent } from '../update-task/update-task.component';
import { TasksService } from '../shared/tasks.service';
import { Task } from '../shared/task.interface';

@Component({
  selector: 'app-task-list',
  imports: [NgFor, TaskComponent],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent {
  private _todos: Task[] = [];

  @Input()
  get todos() {
    return this._todos;
  }

  set todos(value: Task[]) {
    this._todos = value;
  }

  constructor(
    private dialog: MatDialog,
    private taskService: TasksService
  ) { }

  openUpdateModal(todo: Task): void {
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

  removeTask(id: string): void {
    this.taskService.deleteTask(id).subscribe({
      next: () => {
        this.todos = this.todos.filter((todo) => todo.id !== id);
      },
      error: (error) => {
        console.error('Error deleting todo:', error);
      }
    });
  }

  updateTaskCompletion(todo: Task): void {
    const updatedTodo = { ...todo };
    this.taskService.updateTask(updatedTodo).subscribe({
      next: (updated: Task) => {
        
          const index = this.todos.findIndex((t) => t.id === updated.id);
          if (index !== -1) {
            this.todos[index] = updated;
          }
      },
      error: (error) => {
          console.error('Error updating task status:', error);
      }
    });
  }
}
