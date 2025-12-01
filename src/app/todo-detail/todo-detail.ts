import {Component, inject} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TodoItem} from '../todo/model/todo-item';
import {TodoService} from '../service/todo.service';

@Component({
  selector: 'app-todo-detail',
  imports: [],
  templateUrl: './todo-detail.html',
  styleUrl: './todo-detail.scss',
})
export class TodoDetail {
  private readonly route = inject(ActivatedRoute);
  private readonly todoService = inject(TodoService);

  id = this.route.snapshot.paramMap.get('id');
  todo: TodoItem;

  constructor() {
    this.todo = this.todoService.getTodo(+this.id!);
  }


}
