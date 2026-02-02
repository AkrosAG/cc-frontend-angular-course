import {ChangeDetectionStrategy, ChangeDetectorRef, Component, inject} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {JokeService} from './service/joke.service';
import {Observable, Subscription} from 'rxjs';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AsyncPipe],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  private jokeService: JokeService = inject(JokeService);
  title: string = 'Todos'

  public joke$: Observable<string> = this.jokeService.joke$;
}
