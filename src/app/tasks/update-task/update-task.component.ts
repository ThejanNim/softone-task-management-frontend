import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TasksService } from '../shared/tasks.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Task } from '../shared/task.interface';

@Component({
  selector: 'app-update-task',
  imports: [MatFormFieldModule, ReactiveFormsModule, FormsModule, MatButtonModule, MatInputModule],
  templateUrl: './update-task.component.html',
  styleUrl: './update-task.component.scss'
})
export class UpdateTaskComponent {
  todoForm: FormGroup;
  
    constructor(
      private taskService: TasksService,
      private fb: FormBuilder,
      public dialogRef: MatDialogRef<UpdateTaskComponent>,
      @Inject(MAT_DIALOG_DATA) public data: { todo?: Task }
    ) {
      this.todoForm = this.fb.group({
        title: [data.todo ? data.todo.title : ''],
        description: [data.todo ? data.todo.description : '']
      });
    }
  
    onCancel(): void {
      this.dialogRef.close();
    }
  
    onSave(): void {
      if (this.todoForm.valid && this.data.todo) {
        const updatedTask: Task = {
          id: this.data.todo.id,
          title: this.todoForm.value.title,
          description: this.todoForm.value.description,
          userId: this.data.todo.userId,
          isChecked: this.data.todo.isChecked
        };

        this.taskService.updateTask(updatedTask).subscribe();
        this.dialogRef.close(this.todoForm.value);
      }
    }
}
