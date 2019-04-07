import { Recipe } from './recipe';

export interface RecipesResp {

    title: String;
    version: String;
    href: String;
    results: Recipe[];
}