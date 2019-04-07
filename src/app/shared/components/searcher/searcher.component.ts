import { Component, OnInit, Output, EventEmitter, OnChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.css']
})
export class SearcherComponent implements OnInit {

  recipeSearchGroup = new FormGroup({
    recipeQuery: new FormControl('')
  });


  @Output() emit = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('HOLAAA')
  }


}
