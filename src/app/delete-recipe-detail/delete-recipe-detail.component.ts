import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeDataService } from '../recipe-data/recipe-data.service';

@Component({
  templateUrl: 'delete-recipe-detail.component.html',
  providers: [RecipeDataService]
})

export class DeleteRecipeDetailComponent implements OnInit {

  private recipeId;
  public recipe;
  public recipes = [];

  constructor(private route: ActivatedRoute, private router: Router, private _recipeDataService: RecipeDataService) { }

  ngOnInit() {
    this.recipes = this._recipeDataService.getAllRecipes();

    this.route.params.subscribe((params: Params) => {
      let id = parseInt(params['id']);
      this.recipeId = id;
      //alert(this._recipeDataService.getRecipeById(this.recipeId));

      this.recipe = this._recipeDataService.getRecipeById(this.recipeId);
    });
  }

  onSelect(_recipe) {

    this.router.navigate(['/deleterecipedetail', _recipe.id]);
    
  }

    goPrevious(){
      let previousId = this.recipeId - 1;
      this.router.navigate(['/deleterecipedetail', previousId]);
    }

    goNext(){
      let nextId = this.recipeId + 1;
      this.router.navigate(['/deleterecipedetail', nextId]);
    }

}

