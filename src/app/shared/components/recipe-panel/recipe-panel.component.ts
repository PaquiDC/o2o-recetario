import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Recipe } from '../../models/recipe';

@Component({
  selector: 'app-recipe-panel',
  templateUrl: './recipe-panel.component.html',
  styleUrls: ['./recipe-panel.component.css']
})
export class RecipePanelComponent implements OnInit, OnChanges {

  @Input() recipes: Recipe[] = [{
    title: 'Hola',
    ingredients: 'lechuga, tomate',
    thumbnail: '',
    href: '#'
  },
  {
    title: 'Hola',
    ingredients: 'lechuga, tomate',
    thumbnail: '',
    href: '#'
  },
  {
    title: 'Hola',
    ingredients: 'lechuga, tomate',
    thumbnail: '',
    href: '#'
  }, {
    title: 'Hola',
    ingredients: 'lechuga, tomate',
    thumbnail: '',
    href: '#'
  }
    , {
      title: 'Hola',
    ingredients: 'lechuga, tomate',
    thumbnail: '',
    href: '#'
  },
  {
    title: 'Hola',
    ingredients: 'lechuga, tomate',
    thumbnail: '',
    href: '#'
  },
  {
    title: 'Hola',
    ingredients: 'lechuga, tomate',
    thumbnail: '',
    href: '#'
  }];

  isSearching: boolean = false;

  constructor() { }

  ngOnInit() { }

  ngOnChanges(changes: SimpleChanges): void {
    throw new Error("Method not implemented.");
  }


}
