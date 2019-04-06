import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.css']
})
export class SearcherComponent implements OnInit {

  recipeQuery: String = ''

  @Output() emit = new EventEmitter();

  constructor() { }

  ngOnInit() {

 
  }

}
