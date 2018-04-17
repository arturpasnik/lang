import {Ingredient} from '../shared/ingredient.model';

export class Recipe
{
	public name: string;
	public desc: string;
	public imagePath: string;
	public created_at: string;
	public ingredients: Ingredient[];

	constructor(name:string, desc: string, imagePath: string, ingredients: Ingredient[]){
		this.name = name;
		this.desc = desc;
		this.imagePath = imagePath;
		this.ingredients = ingredients;
		this.created_at = '2018-03-30 21:01:18';
	}
}