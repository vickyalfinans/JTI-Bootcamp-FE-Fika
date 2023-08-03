import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../todo';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];
  constructor(
    private todoService: TodoService
  ) {}
  ngOnInit() {
    this.todoService.getTodos().subscribe({
      next: (todos) => {
        console.log(todos);
        this.todos = todos;
      },

      error: (error) => {
        console.log(error);
      },
    });
  }
}
