import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeDataService } from '../recipe-data/recipe-data.service';

@Component({
  templateUrl: './edit-recipe.component.html',
  providers: [RecipeDataService]
})
export class EditRecipeComponent implements OnInit {

 public selectedId;

  recipes = [];

  constructor(private router: Router, private _recipeDataService: RecipeDataService){}

  ngOnInit(){
    this.recipes = this._recipeDataService.getRecipes();
  }

  //isSelected(recipe) { return recipe.id === this.selectedId; }

  onSelect(recipe) {
    //alert(recipe.id);

    this.router.navigate(['/editrecipedetail', recipe.id]);
   // Relative Path
   // this.router.navigate([department.id], { relativeTo: this.route });
    
  }
}

