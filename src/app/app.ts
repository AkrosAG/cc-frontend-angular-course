import {ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, OnDestroy, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {JokeService} from './service/joke.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App implements OnInit, OnDestroy{
  private jokeService: JokeService = inject(JokeService);
  private cdr = inject(ChangeDetectorRef);
  private subscription: Subscription | undefined;

  title: string = 'Todos'

  public joke: String | undefined;

  ngOnInit(): void {
    this.subscription = this.jokeService.getJoke().subscribe(res => {
      this.joke = res?.value;
      this.cdr.markForCheck();
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

}
