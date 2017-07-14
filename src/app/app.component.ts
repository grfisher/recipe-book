import { Component } from '@angular/core';
import { FilterPipe } from './search/filter.pipe';
import { NgForm } from '@angular/forms';
import { RecipeDataService } from "app/recipe-data/recipe-data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ RecipeDataService ]
})
export class AppComponent {

  show: boolean = true;
  recipes: any;

  constructor(private recipeDataService: RecipeDataService){
    this.recipes = recipeDataService.getAllRecipes();
  }
}
