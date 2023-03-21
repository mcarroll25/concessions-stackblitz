import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GoogleMap, MapType } from '@nativescript/google-maps';

map: GoogleMap;
//Map.mapType = MapType.Hybrid
@Component({
  selector: 'ns-details',
  templateUrl: './event.component.html',
})
export class EventComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  section1data = {
    name: 'Drinks',
    cols: '*,*,*,*,*,*',
    colcount: 6,
    options: [
      {
        name: 'Miller Lite',
        image: 'https://s3.amazonaws.com/app.bevcarts.v2/inventory/6/beer1.jpg',
      },
      {
        name: 'Vodka',
        image:
          'https://s3.amazonaws.com/app.bevcarts.v2/inventory/8/moscow-mule-mug.jpg',
      },
      {
        name: 'Coors Light',
        image:
          'https://s3.amazonaws.com/app.bevcarts.v2/inventory/6/coorslight.jpeg',
      },
      {
        name: 'Kettle One',
        image:
          'https://s3.amazonaws.com/app.bevcarts.v2/inventory/kettleone.png',
      },

      {
        name: 'Coffee',
        image:
          'https://s3.amazonaws.com/app.bevcarts.v2/inventory/8/1519246829-delish-irish-coffee.jpg',
      },
      {
        name: 'Spiked Lemonade',
        image:
          'https://s3.amazonaws.com/app.bevcarts.v2/inventory/8/Spiked-Lemonade_EXPS_THSUM18_37199_D02_01_8b.jpg',
      },
    ],
  };
  section2data = {
    name: 'Food',
    cols: '*,*,*,*,*',
    colcount: 5,
    options: [
      {
        name: 'Hot Dog',
        image:
          'https://s3.amazonaws.com/app.bevcarts.v2/inventory/6/hotdog.jpg',
      },
      {
        name: 'Cheese Burger',
        image:
          'https://s3.amazonaws.com/app.bevcarts.v2/inventory/billycaldwell/cheeseburger.jpg',
      },
      {
        name: 'Cheese Curds',
        image:
          'https://s3.amazonaws.com/app.bevcarts.v2/inventory/8/download+(1).jpg',
      },
      {
        name: 'Snickers',
        image:
          'https://s3.amazonaws.com/app.bevcarts.v2/inventory/snickers.jpg',
      },
      {
        name: 'Chef Salad',
        image:
          'https://s3.amazonaws.com/app.bevcarts.v2/inventory/8/download+(2).jpg',
      },
    ],
  };
  section3data = {
    name: 'Merchandise',
    cols: '*,*,*,*,*',
    colcount: 5,
    options: [
      {
        name: 'Umbrella',
        image:
          'https://s3.amazonaws.com/app.bevcarts.v2/inventory/umbrella.jpg',
      },
      {
        name: 'Golf Balls',
        image:
          'https://s3.amazonaws.com/app.bevcarts.v2/inventory/golfballs.jpg',
      },
    ],
  };

  section4data = {
    name: 'Merchandise',
    cols: '*,*,*,*,*',
    colcount: 5,
    options: [
      {
        name: 'Umbrella',
        image:
          'https://s3.amazonaws.com/app.bevcarts.v2/inventory/umbrella.jpg',
      },
      {
        name: 'Golf Balls',
        image:
          'https://s3.amazonaws.com/app.bevcarts.v2/inventory/golfballs.jpg',
      },
    ],
  };

  ngOnInit(): void {
    const id = +this.route.snapshot.params.id;
  }
}
