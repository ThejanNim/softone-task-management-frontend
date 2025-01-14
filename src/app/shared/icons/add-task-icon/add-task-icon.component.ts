import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-add-task-icon',
  imports: [],
  templateUrl: './add-task-icon.component.html',
  styleUrl: './add-task-icon.component.scss',
})
export class AddTaskIconComponent {
  @Input() width: string = '24';
  @Input() height: string = '24';
  @Input() fillColor: string = 'currentColor';
  @Input() strokeColor: string = 'currentColor';
}
