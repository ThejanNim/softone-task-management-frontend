import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-delete-task-icon',
  imports: [],
  templateUrl: './delete-task-icon.component.html',
  styleUrl: './delete-task-icon.component.scss',
})
export class DeleteTaskIconComponent {
  @Input() width: string = '24';
  @Input() height: string = '24';
  @Input() fillColor: string = 'currentColor';
  @Input() strokeColor: string = 'currentColor';
}
