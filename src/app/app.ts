import {Component} from '@angular/core';
import {Todo} from './todo/todo';
import {TodoItem} from './todo/model/todo-item';

@Component({
  selector: 'app-root',
  imports: [Todo],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  title: string = 'Todos'
  subtitle: string = 'Offene Todos'

  todos: TodoItem[] = [
    {id: 1, label: 'abc'},
    {id: 2, label: 'def'},
    {id:3, label: 'ghi'}
  ]

  onClear() {
    console.log('Clear-Event empfangen!');
  }
}
