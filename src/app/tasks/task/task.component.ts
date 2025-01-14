import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EditTaskIconComponent } from "../../shared/icons/edit-task-icon/edit-task-icon.component";
import { DeleteTaskIconComponent } from "../../shared/icons/delete-task-icon/delete-task-icon.component";

@Component({
  selector: 'app-task',
  imports: [EditTaskIconComponent, DeleteTaskIconComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {
  private _todo: any;

  @Input()
  get todo() {
    return this._todo;
  }

  set todo(value: any) {
    this._todo = value;
  }

  @Output() update = new EventEmitter<any>();
  @Output() delete = new EventEmitter<string>();

  onUpdate() {
    this.update.emit(this.todo);
  }

  onDelete() {
    this.delete.emit(this.todo.id);
  }
}
