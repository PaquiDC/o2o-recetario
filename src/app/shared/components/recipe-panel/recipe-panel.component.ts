import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Recipe } from '../../models/recipe';
import { isNullOrUndefined } from 'util';

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
  }] as Recipe[];

  isSearching: boolean = false;

  constructor() { }

  ngOnInit() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  areThereRecipes(): boolean {
    return isNullOrUndefined(this.recipes) || this.recipes.length === 0;
  }


}
