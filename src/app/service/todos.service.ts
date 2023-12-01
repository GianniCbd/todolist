import { Injectable } from '@angular/core';
import { Info } from '../models/info';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  info: Info[] = [
    // { id: 1, text: 'Fare la spesa', completed: false },
    // { id: 2, text: 'Studiare Angular', completed: true },
    // { id: 3, text: 'mangiare', completed: false },
    // { id: 4, text: 'pulire casa', completed: true },
  ];

  constructor() {}

  private delay(): Promise<void> {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
  }

  recuperaInfos(): Promise<Info[]> {
    return this.delay().then(() => this.info);
  }

  recuperaInfo(id: number): Promise<Info | undefined> {
    return this.delay().then(() => this.info.find((info) => info.id === id));
  }

  creaInfo(text: string, completed: boolean): Promise<Info> {
    return this.delay().then(() => {
      const newId = this.info.length + 1;
      const newInfo: Info = { id: newId, text, completed };
      this.info.push(newInfo);
      return newInfo;
    });
  }

  rimuoviInfo(id: number): Promise<void> {
    return this.delay().then(() => {
      const index = this.info.findIndex((info) => info.id === id);
      if (index !== -1) {
        this.info.splice(index, 1);
      }
    });
  }

  modificaInfo(
    id: number,
    newText: string,
    newCompleted: boolean
  ): Promise<void> {
    return this.delay().then(() => {
      const index = this.info.findIndex((info) => info.id === id);
      if (index !== -1) {
        this.info[index] = {
          ...this.info[index],
          text: newText,
          completed: newCompleted,
        };
      }
    });
  }
}
