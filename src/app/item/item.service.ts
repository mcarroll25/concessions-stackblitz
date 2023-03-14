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
      image: 'https://s3.amazonaws.com/app.bevcarts.v2/americanflag.jpg',
      bgColor: '#3c495e',
    },
    {
      id: 2,
      name: 'Orlando',
      description: 'March 31 - April 2 // Orange County National',
      image: 'https://s3.amazonaws.com/app.bevcarts.v2/americanflag.jpg',
      bgColor: 'lightgray',
    },
    {
      id: 2,
      name: 'Adelaide',
      description: 'April 21-23 // The Grange Golf Club',
      image: 'https://s3.amazonaws.com/app.bevcarts.v2/australiaflag.png',
      bgColor: 'lightgray',
    }
  );

  getItems(): Array<Item> {
    return this.items;
  }

  getItem(id: number): Item {
    return this.items.filter((item) => item.id === id)[0];
  }
}
