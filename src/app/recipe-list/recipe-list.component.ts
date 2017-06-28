import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { RecipeDataService } from '../recipe-data/recipe-data.service';


@Component({
  //selector: 'app-recipe-list',
  templateUrl: 'recipe-list.component.html',
  providers: [RecipeDataService]
})

export class RecipeListComponent { 
  public selectedId;
  /*recipes = [
    {"id": 1, "name": "Chicken Cacciatore"},
    {"id": 2, "name": "Au Grautin Potatos"},
    {"id": 3, "name": "Steak Tar Tar"},
    {"id": 4, "name": "Persian Eggplant"},
    {"id": 5, "name": "Buttermilk Fried Chicken"}
  ]*/

  recipes = [];

  constructor(private router: Router, private _recipeDataService: RecipeDataService){}

  ngOnInit(){
    this.recipes = this._recipeDataService.getRecipes();
  }

  //isSelected(recipe) { return recipe.id === this.selectedId; }

  onSelect(recipe) {
    alert(recipe.id);

    this.router.navigate(['/recipedetail', recipe.id]);
   // Relative Path
   // this.router.navigate([department.id], { relativeTo: this.route });
    
  }
}

