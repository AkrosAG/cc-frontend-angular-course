import {Component, input, output} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {TodoItem} from './model/todo-item';

@Component({
  selector: 'app-todo',
  imports: [MatButtonModule],
  templateUrl: './todo.html',
  styleUrl: './todo.scss',
})
export class Todo {
  subtitle = input<string>();
  todos = input<TodoItem[]>();

  clear = output<void>();

  onClearClick() {
    this.clear.emit();
  }
}
