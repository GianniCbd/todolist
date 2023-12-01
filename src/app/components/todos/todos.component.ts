import { Component, OnInit } from '@angular/core';
import { TodosService } from 'src/app/service/todos.service';
import { Info } from 'src/app/models/info';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  infos: Info[] = [];
  nuovaAttivitaText: string = '';
  loading: boolean = false;

  constructor(private todosService: TodosService) {}

  async ngOnInit(): Promise<void> {
    await this.caricaInfos();
  }

  async caricaInfos(): Promise<void> {
    this.loading = true;
    this.infos = await this.todosService.recuperaInfos();
    this.loading = false;
  }

  async aggiungiAttivita(): Promise<void> {
    this.loading = true;
    const nuovaAttivita = await this.todosService.creaInfo(
      this.nuovaAttivitaText,
      false
    );

    this.nuovaAttivitaText = '';
    this.loading = false;
  }

  async rimuoviAttivita(index: number): Promise<void> {
    this.loading = true;
    await this.todosService.rimuoviInfo(this.infos[index].id);
    this.infos.splice(index, 1);
    this.loading = false;
  }

  async modificaAttivita(
    index: number,
    newText: string,
    newCompleted: boolean
  ): Promise<void> {
    this.loading = true;
    await this.todosService.modificaInfo(
      this.infos[index].id,
      newText,
      newCompleted
    );
    this.infos[index].text = newText;
    this.infos[index].completed = newCompleted;
    this.loading = false;
  }

  getStatoAttivita(info: Info): string {
    return info.completed ? 'Completato' : info.text;
  }
}
