import {Component} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {TodoItem} from './model/todo-item';
import {DashesPipe} from '../utils/dashes-pipe';
import {RouterLink} from '@angular/router';
import {MatError, MatFormField, MatInput, MatLabel} from '@angular/material/input';
import {FormControl, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-todo',
  imports: [MatButtonModule, DashesPipe, RouterLink, MatFormField, MatInput, MatLabel, ReactiveFormsModule, MatError, FormsModule],
  templateUrl: './todo.html',
  styleUrl: './todo.scss',
})
export class Todo {

  subtitle: string = 'Offene Todos'

  todos: TodoItem[] = [
    {id: 1, label: 'Geschirr spülen'},
    {id: 2, label: 'Wäsche waschen'},
    {id:3, label: 'Alle Fenster putzen'}
  ]

  todoInput = new FormControl('', [Validators.minLength(3)]);

  onClear() {
    console.log('Todos zurücksetzen');
  }

  protected onSubmit() {
    if(this.todoInput.value && this.todoInput.valid){
      this.todos.push({id: this.todos.length + 1, label: this.todoInput.value})
      this.todoInput.reset()
    }
  }
}
