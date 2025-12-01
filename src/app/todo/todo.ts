import {Component, inject} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {TodoItem} from './model/todo-item';
import {DashesPipe} from '../utils/dashes-pipe';
import {RouterLink} from '@angular/router';
import {MatError, MatFormField, MatInput, MatLabel} from '@angular/material/input';
import {FormControl, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {TodoService} from '../service/todo.service';

@Component({
  selector: 'app-todo',
  imports: [MatButtonModule, DashesPipe, RouterLink, MatFormField, MatInput, MatLabel, ReactiveFormsModule, MatError, FormsModule],
  templateUrl: './todo.html',
  styleUrl: './todo.scss',
})
export class Todo {

  subtitle: string = 'Offene Todos';
  todos: TodoItem[];
  private readonly todoService = inject(TodoService);

  todoInput = new FormControl('', [Validators.minLength(3)]);

  constructor() {
    this.todos = this.todoService.getTodos();
  }

  onClear() {
    this.todoService.clearTodos();
    this.todos = this.todoService.getTodos();
  }

  protected onSubmit() {
    if(this.todoInput.value && this.todoInput.valid){
      this.todoService.addTodo(this.todoInput.value);
      this.todos = this.todoService.getTodos();
      this.todoInput.reset();
    }
  }
}
