import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-example',
  templateUrl: './filter-example.component.html',
  styleUrls: ['./filter-example.component.css']
})
export class FilterExampleComponent implements OnInit {
  filterInput = '';

  names = [
    'Artur',
    'Robert',
    'Diana'
  ];

  constructor() { }

  ngOnInit() {
  }

}
