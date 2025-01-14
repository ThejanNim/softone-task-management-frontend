import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-edit-task-icon',
  imports: [],
  templateUrl: './edit-task-icon.component.html',
  styleUrl: './edit-task-icon.component.scss'
})
export class EditTaskIconComponent {
  @Input() width: string = '24';
  @Input() height: string = '24';
  @Input() fillColor: string = 'currentColor';
  @Input() strokeColor: string = 'currentColor';
}
