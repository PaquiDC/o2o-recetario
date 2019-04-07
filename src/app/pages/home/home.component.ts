import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/shared/services/recipe.service';
import { Recipe } from 'src/app/shared/models/recipe';
import { RecipesResp } from 'src/app/shared/models/recipes-resp';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  query: String;
  recipes: Recipe[];

  constructor(private recipeService: RecipeService) {
    
  }

  ngOnInit() {

    this.recipeService.findByQuery('brocoli')
    .then((resp: RecipesResp) => {
      console.info(resp);
      this.recipes = resp.results;
    })
    .catch(err => console.log(err));

  }

}
