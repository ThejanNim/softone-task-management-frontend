import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EditTaskIconComponent } from "../../shared/icons/edit-task-icon/edit-task-icon.component";
import { DeleteTaskIconComponent } from "../../shared/icons/delete-task-icon/delete-task-icon.component";
import { Task } from '../shared/task.interface';

@Component({
  selector: 'app-task',
  imports: [EditTaskIconComponent, DeleteTaskIconComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {
  private _todo!: Task;

  @Input()
  get todo() {
    return this._todo;
  }

  set todo(value: Task) {
    this._todo = value;
  }

  @Output() update = new EventEmitter<Task>();
  @Output() delete = new EventEmitter<string>();
  @Output() completeTodo = new EventEmitter<Task>();

  onUpdate() {
    this.update.emit(this.todo);
  }

  onDelete() {
    this.delete.emit(this.todo.id);
  }

  onCheckboxChange(event: any) {
    this.todo.isChecked = event.target.checked;
    this.completeTodo.emit(this.todo);
  }
}
