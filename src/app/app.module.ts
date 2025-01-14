import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { TasksService } from "./tasks/shared/tasks.service";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { CreateTaskComponent } from "./tasks/create-task/create-task.component";
import { TasksModule } from "./tasks/tasks.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    TasksModule,
    CreateTaskComponent,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
],
  providers: [TasksService, provideAnimationsAsync()],
  bootstrap: [AppComponent]
})
export class AppModule { }