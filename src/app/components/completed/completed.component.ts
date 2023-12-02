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

  constructor(private todosService: TodosService) {}

  ngOnInit(): void {
    this.infos = this.todosService.recuperaCompletedInfos();
  }
}
