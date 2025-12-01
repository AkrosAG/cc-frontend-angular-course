import {Injectable} from '@angular/core';
import {TodoItem} from '../todo/model/todo-item';

@Injectable({
  providedIn: 'root',
})
export class TodoService {

  private readonly todosDefault: TodoItem[] = [
    {id: 1, label: 'Geschirr spülen'},
    {id: 2, label: 'Wäsche waschen'},
    {id: 3, label: 'Alle Fenster putzen'}
  ];

  private readonly LOCAL_STORAGE_KEY = 'todos';

  private todos: TodoItem[] = [...this.todosDefault];

  constructor() {
    const storedTodos = localStorage.getItem(this.LOCAL_STORAGE_KEY);
    if (storedTodos) {
      this.todos = JSON.parse(storedTodos);
    }
  }

  public addTodo(label: string) {
    this.todos.push({id: this.todos.length + 1, label});
    this.saveToLocalStorage();
  }

  public getTodos(): TodoItem[] {
    return [...this.todos];
  }

  public getTodo(id: number): TodoItem {
    const todo = this.todos.find(todo => todo.id === id);
    return todo!;
  }

  public clearTodos() {
    this.todos = [...this.todosDefault];
    this.saveToLocalStorage();
  }

  private saveToLocalStorage() {
    localStorage.setItem(this.LOCAL_STORAGE_KEY, JSON.stringify(this.todos));
  }

}
