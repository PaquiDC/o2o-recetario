import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  readonly RECIPE_URL = 'http://www.recipepuppy.com/api/?q=';

  constructor(private http: HttpClient) { }

  /**
   * Find recipe by query
   * 
   * @param query 
   */
  findByQuery(query: String): Promise<any> {
    return this.http.get(this.RECIPE_URL + query).toPromise()
  }

}
