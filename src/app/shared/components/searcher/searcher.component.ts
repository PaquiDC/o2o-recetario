import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.css']
})
export class SearcherComponent implements OnInit {

  @Output() inputQuery = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSubmit(event) {
    this.inputQuery.emit(event);
  }
}
