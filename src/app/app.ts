import {Component, computed, inject, signal, Signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {JokeService} from './service/joke.service';
import {MatButton} from '@angular/material/button';
import {toSignal} from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatButton],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  private jokeService: JokeService = inject(JokeService);
  title: string = 'Todos'

  public joke: Signal<string | undefined> = toSignal(this.jokeService.joke$);
  public counter = signal<number>(0);
  public isCounterEven = computed(() => {
    return this.counter() % 2 === 0;
  })

  protected incrementCounter() {
    this.counter.update(counter => counter + 1);
  }

  protected decrementCounter() {
    this.counter.update(counter => counter - 1);
  }
}
