import { Component, OnInit } from '@angular/core';
import { TodosService } from 'src/app/service/todos.service';
import { Info } from 'src/app/models/info';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.scss'],
})
export class CompletedComponent implements OnInit {
  constructor(
    private todosService: TodosService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {}
}
