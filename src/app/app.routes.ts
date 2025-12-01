import { Routes } from '@angular/router';
import {Todo} from './todo/todo';
import {TodoDetail} from './todo-detail/todo-detail';

export const routes: Routes = [
  {
    path: '',
    component: Todo,
  },
  {
    path: 'detail/:id',
    component: TodoDetail,
  },
];
