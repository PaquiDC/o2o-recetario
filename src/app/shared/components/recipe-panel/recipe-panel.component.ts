import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../models/recipe';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-recipe-panel',
  templateUrl: './recipe-panel.component.html',
  styleUrls: ['./recipe-panel.component.css']
})
export class RecipePanelComponent implements OnInit {

  @Input() recipes: Recipe[] = [];

  isSearching: boolean = false;

  constructor() { }

  ngOnInit() { }

  areThereRecipes(): boolean {
    return isNullOrUndefined(this.recipes) || this.recipes.length === 0;
  }
}
