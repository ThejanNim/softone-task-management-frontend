import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TasksService } from '../shared/tasks.service';

@Component({
  selector: 'app-create-task',
  imports: [MatFormFieldModule, ReactiveFormsModule, FormsModule, MatButtonModule, MatInputModule],
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.scss'
})
export class CreateTaskComponent {
  todoForm: FormGroup;

  constructor(
    private taskService: TasksService,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<CreateTaskComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { todo?: any }
  ) {
    this.todoForm = this.fb.group({
      id: [data.todo ? data.todo.id : ''],
      title: [data.todo ? data.todo.title : ''],
      description: [data.todo ? data.todo.description : '']
    });
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    if (this.todoForm.valid) {

      const userId = localStorage.getItem('userId') || '';

      this.taskService.addTask({
        title: this.todoForm.value.title,
        description: this.todoForm.value.description,
        userId: userId
      }).subscribe(
        (response: any) => {

          this.todoForm.patchValue({
            id: response.id
          });

          this.dialogRef.close(this.todoForm.value);
        },
        (error) => {
          console.error("Error saving task", error);
        }
      );
    }
  }
}
