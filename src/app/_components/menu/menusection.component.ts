import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'menusection',
  templateUrl: './menusection.component.html',
})
export class MenuSectionComponent implements OnInit {
  @Input() sectiondata: any;
  constructor() {}

  ngOnInit(): void {}
}
