import {Injectable, inject} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JokeService {

  private httpClient: HttpClient = inject(HttpClient)
  private readonly apiUrl = 'https://api.chucknorris.io/jokes/random';

  getJoke(): Observable<any> {
    return this.httpClient.get(this.apiUrl);
  }

}
