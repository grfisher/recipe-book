import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeDataService } from '../recipe-data/recipe-data.service';

@Component({
  templateUrl: 'recipe-detail.component.html',
  providers: [ RecipeDataService ]
})
export class RecipeDetailComponent implements OnInit {

  private recipeId;
  public recipe;
  public recipes = [];

  constructor(private route: ActivatedRoute, private router: Router, private _recipeDataService: RecipeDataService) { }

  ngOnInit() {
    this.recipes = this._recipeDataService.getAllRecipes();

    this.route.params.subscribe((params: Params) => {
      let id = parseInt(params['id']);
      this.recipeId = id;
      
      this.recipe = this._recipeDataService.getRecipeById(this.recipeId);
    });
  }

  onSelect(_recipe) {
    this.recipe = this._recipeDataService.getRecipeById(this.recipeId);
    this.router.navigate(['/recipedetail', _recipe.id]);
  }

    goPrevious(){
      let previousId = this.recipeId - 1;
      this.router.navigate(['/recipedetail', previousId]);
    }

    goNext(){
      let nextId = this.recipeId + 1;
      this.router.navigate(['/recipedetail', nextId]);
    }

}
