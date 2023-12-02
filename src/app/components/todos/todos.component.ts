import { Component, OnInit } from '@angular/core';
import { TodosService } from 'src/app/service/todos.service';
import { Info } from 'src/app/models/info';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  infos: Info[] = [];
  nuovaAttivitaText: string = '';
  loading: boolean = false;

  getEmojiForFood(food: string): string {
    let emoji: string;

    switch (food.toLowerCase()) {
      case 'peperoni':
        emoji = '🌶️';
        break;
      case 'melanzane':
        emoji = '🍆';
        break;
      case 'patate':
        emoji = '🥔';
        break;
      case 'carote':
        emoji = '🥕 ';
        break;
      case 'latte':
        emoji = '🥛';
        break;
      case 'burger':
        emoji = '🍔';
        break;
      case 'manzo':
        emoji = '🍖';
        break;
      case 'broccoli':
        emoji = '🥦';
        break;
      case 'curry':
        emoji = '🍛';
        break;

      default:
        emoji = '❓';
        break;
    }

    return emoji;
  }

  constructor(private todosService: TodosService, private router: Router) {}

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

  // bottoni
  async Attivita(index: number): Promise<void> {
    this.loading = true;
    const removedInfo = this.infos[index];
    removedInfo.completed = true;
    this.infos.splice(index, 1);
    this.todosService.aggiungiACompleted(removedInfo);
    this.loading = false;
  }

  eliminaAttivita(index: number): void {
    this.loading = true;

    this.infos.splice(index, 1);

    this.loading = false;
  }
  //

  getStatoAttivita(info: Info): string {
    return info.completed ? 'Aggiunto al carrello' : info.text;
  }
}
