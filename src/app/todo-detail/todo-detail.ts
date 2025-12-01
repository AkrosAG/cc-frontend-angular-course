import {Component, inject} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-todo-detail',
  imports: [],
  templateUrl: './todo-detail.html',
  styleUrl: './todo-detail.scss',
})
export class TodoDetail {
  private route = inject(ActivatedRoute);

  id = this.route.snapshot.paramMap.get('id');
  label = this.route.snapshot.queryParamMap.get('label');

}
