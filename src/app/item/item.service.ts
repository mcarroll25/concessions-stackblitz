import { Injectable } from '@angular/core';

import { Item } from './item';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  private items = new Array<Item>(
    {
      id: 1,
      name: 'Tuscon',
      description: 'March 17-19 // The Gallery Golf Club',
    },
    {
      id: 2,
      name: 'Orlando',
      description: 'March 31 - April 2 // Orange County National',
    }
  );

  getItems(): Array<Item> {
    return this.items;
  }

  getItem(id: number): Item {
    return this.items.filter((item) => item.id === id)[0];
  }
}
