import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css'],
})
export class ToDoListComponent implements OnInit {
  tasks: string[];
  constructor() {}

  ngOnInit(): void {
    this.tasks = ['example'];
  }

  addTask(task) {
    this.tasks.unshift(task);
    return false;
  }
  removeTask(task) {
    this.tasks.forEach((element, index) => {
      if (element == task) {
        this.tasks.splice(index, 1);
      }
    });
  }
}
