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
      { name: 'Root Beer' },
      { name: 'Vodka' },
      { name: 'Miller Lite' },
      { name: 'Coors' },
      { name: 'Water' },
      { name: 'Tea' },
    ],
  };
  section2data = {
    name: 'Food',
    cols: '*,*,*,*,*',
    colcount: 5,
    options: [
      { name: 'Hot Dog' },
      { name: 'Cheese Burger' },
      { name: 'Turkey Sandwich' },
      { name: 'Snickers' },
      { name: 'Reeses' },
    ],
  };
  section3data = {
    name: 'Merchandise',
    cols: '*,*,*,*,*',
    colcount: 5,
    options: [{ name: 'Umbrella' }, { name: 'Golf Balls' }],
  };

  ngOnInit(): void {
    const id = +this.route.snapshot.params.id;
  }
}
