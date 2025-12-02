import {Component} from '@angular/core';
import {Todo} from './todo/todo';

@Component({
  selector: 'app-root',
  imports: [Todo],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  title: string = 'Todos'
  subtitle: string = 'Offene Todos'

  onClear() {
    console.log('Clear-Event empfangen!');
  }
}
