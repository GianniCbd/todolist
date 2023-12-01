import { Component, OnInit } from '@angular/core';
import { TodosService } from 'src/app/service/todos.service';
import { Info } from 'src/app/models/info';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.scss'],
})
export class CompletedComponent implements OnInit {
  infos: Info[] = [];
  loading = false;

  constructor(private todosService: TodosService) {}

  ngOnInit(): void {
    this.infos = this.todosService.recuperaCompletedInfos();
  }
}
