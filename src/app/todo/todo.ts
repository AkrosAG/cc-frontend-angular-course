import {Component, input, output} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {TodoItem} from './model/todo-item';
import {DashesPipe} from '../utils/dashes-pipe';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-todo',
  imports: [MatButtonModule, DashesPipe, RouterLink],
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

  onClear() {
    console.log('Todos zurücksetzen');
  }
}
