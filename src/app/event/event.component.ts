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

  ngOnInit(): void {
    const id = +this.route.snapshot.params.id;
  }
}
