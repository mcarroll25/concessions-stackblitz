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
    name: 'Section 1',
    row: 2,
  };
  section2data = {
    name: 'Section 2',
    row: 4,
  };
  section3data = {
    name: 'Section 3',
    row: 6,
  };

  ngOnInit(): void {
    const id = +this.route.snapshot.params.id;
  }
}
