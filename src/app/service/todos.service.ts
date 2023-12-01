import { Injectable } from '@angular/core';
import { Info } from '../models/info';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  info: Info[] = [];

  constructor() {}

  delay(): Promise<void> {
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

  async modificaInfo(
    id: number,
    text: string,
    completed: boolean
  ): Promise<void> {
    if (completed) {
      const completedInfo = this.info.find((info) => info.id === id);
      if (completedInfo) {
        this.info.push(completedInfo);
      }
    }
  }
  aggiungiACompleted(info: Info): void {
    info.completed = true;
    this.info.push(info);
  }
  recuperaCompletedInfos(): Info[] {
    return this.info;
  }
}
