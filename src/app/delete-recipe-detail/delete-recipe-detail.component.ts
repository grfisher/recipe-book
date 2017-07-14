import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeDataService } from '../recipe-data/recipe-data.service';

@Component({
  templateUrl: 'delete-recipe-detail.component.html',
  providers: [RecipeDataService],
    styleUrls:['delete-recipe-detail.component.css']
})

export class DeleteRecipeDetailComponent implements OnInit {

  private recipeId;
  public recipe;
  public recipes = [];

  constructor(private route: ActivatedRoute, private router: Router, private recipeDataService: RecipeDataService) { }

  ngOnInit() {

    this.recipes = this.recipeDataService.getAllRecipes();

    this.route.params.subscribe((params: Params) => {
      let id = parseInt(params['id']);
      this.recipeId = id;

      this.recipe = this.recipeDataService.getRecipeById(this.recipeId);
    });
  }

  onSelect(recipe) {

    //console.log(recipe.id);
    this.recipeId = recipe.id;
    this.router.navigate(['/deleterecipedetail', this.recipeId]);

  }

  onDelete(){
    this.recipeDataService.deleteRecipe(this.recipeId);
    this.router.navigate(['/deleterecipe']);
  }

  goPrevious() {
    let previousId = this.recipeId - 1;
    this.router.navigate(['/deleterecipedetail', previousId]);
  }

  goNext() {
    let nextId = this.recipeId + 1;
    this.router.navigate(['/deleterecipedetail', nextId]);
  }

}

