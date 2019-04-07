import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../models/recipe';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.css']
})
export class RecipeCardComponent implements OnInit {

  @Input() recipe: Recipe;

  defaultImage = 'assets/img/cooking-pot-icon.jpg'

  constructor() { }

  ngOnInit() {
  }

  getImagen(): String {

    if (isNullOrUndefined(this.recipe.thumbnail) || this.recipe.thumbnail.trim().length === 0) {
      return this.defaultImage;
    } else {
      return this.recipe.thumbnail;
    }

  } 

  goToLink(url: string){
    window.open(url, "_blank");
}


}
