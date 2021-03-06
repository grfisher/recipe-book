import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { RecipeDataService } from '../recipe-data/recipe-data.service';


@Component({
  templateUrl: 'recipe-list.component.html',
  providers: [RecipeDataService]
})

export class RecipeListComponent { 
  public selectedId;

  public recipes = [];

  constructor(private router: Router, private _recipeDataService: RecipeDataService){}

  ngOnInit(){

    this.recipes = this._recipeDataService.getAllRecipes();
    
  }

  onSelect(recipe) {

    this.router.navigate(['/recipedetail', recipe.id]);
   // Relative Path
   // this.router.navigate([department.id], { relativeTo: this.route });
    
  }
}