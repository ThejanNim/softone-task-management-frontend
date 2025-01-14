import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from './task.interface';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private httpClient: HttpClient) { }

  getTaskList(userId: string) {
    return this.httpClient.get<Task[]>('https://localhost:7002/api/Task/'+userId);
  }

  addTask(task: Task) {
    return this.httpClient.post<Task>('https://localhost:7002/api/Task/', task);
  }

  updateTask(task: Task) {
    return this.httpClient.patch<Task>('https://localhost:7002/api/Task/', {
      id: task.id,
      title: task.title,
      description: task.description,
      userId: task.userId,
      isChecked: task.isChecked
    });
  }

  deleteTask(taskId: string) {
    return this.httpClient.delete('https://localhost:7002/api/Task/'+taskId);
  }
}
