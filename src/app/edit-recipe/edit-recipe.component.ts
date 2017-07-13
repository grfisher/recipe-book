import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeDataService } from '../recipe-data/recipe-data.service';

@Component({
  templateUrl: './edit-recipe.component.html',
  providers: [RecipeDataService]
})
export class EditRecipeComponent implements OnInit {

  public selectedId;
  private recipeId: any;
  recipes = [];
  public recipe;

  constructor(private route: ActivatedRoute, private router: Router, private _recipeDataService: RecipeDataService){}

  ngOnInit(){

    this.recipes = this._recipeDataService.getAllRecipes();

    this.route.params.subscribe((params: Params) => {
      let id = parseInt(params['id']);
      this.recipeId = id;

      this.recipe = this._recipeDataService.getRecipeById(this.recipeId);

      //alert("recipe-detail: " + this.recipe.imagePath);
    });
    
  }

  //isSelected(recipe) { return recipe.id === this.selectedId; }

  onSelect(_recipe) {
    alert("Here is the problem: " + _recipe.id);

    this.recipeId = _recipe.id;
    this.router.navigate(['/editrecipedetail', this.recipe.id]);
   // Relative Path
   // this.router.navigate([department.id], { relativeTo: this.route });
  }
}