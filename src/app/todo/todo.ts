import {Component, input, output} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-todo',
  imports: [MatButtonModule],
  templateUrl: './todo.html',
  styleUrl: './todo.scss',
})
export class Todo {
  subtitle = input<string>();

  clear = output<void>();

  onClearClick() {
    this.clear.emit();
  }
}
