import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  readonly RECIPE_URL = '/api/';

  constructor(private http: HttpClient) {}

  /**
   * Find recipe by query
   * 
   * @param query 
   */
  findByQuery(query: string): Promise<any> {

    let params = new HttpParams();
    params = params.append('q', query);

    return this.http.get(this.RECIPE_URL, {params: params}).toPromise()
  }

}
