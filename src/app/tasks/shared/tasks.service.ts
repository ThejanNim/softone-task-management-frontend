import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private httpClient: HttpClient) { }

  getTaskList(userId: string) {
    return this.httpClient.get('https://localhost:7002/api/Task/'+userId);
  }

  addTask(task: any) {
    return this.httpClient.post<any>('https://localhost:7002/api/Task/', task);
  }

  updateTask(task: any) {
    return this.httpClient.patch('https://localhost:7002/api/Task/', {
      id: task.id,
      title: task.title,
      description: task.description,
      userId: task.userId
    });
  }

  deleteTask(taskId: string) {
    return this.httpClient.delete('https://localhost:7002/api/Task/'+taskId);
  }
}
