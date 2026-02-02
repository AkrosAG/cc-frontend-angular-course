import {Injectable, inject} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {delay, map, Observable, shareReplay} from 'rxjs';

interface ApiResponse {
  value: string;
}

@Injectable({
  providedIn: 'root',
})
export class JokeService {

  private httpClient: HttpClient = inject(HttpClient)
  private readonly apiUrl = 'https://api.chucknorris.io/jokes/random';

  joke$: Observable<string> = this.httpClient.get<ApiResponse>(this.apiUrl).pipe(
    delay(5000),
    map(res =>  res.value),
    shareReplay(1)
  )

}
