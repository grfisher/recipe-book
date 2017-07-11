import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import { RecipeDataService } from '../recipe-data/recipe-data.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './edit-recipe-detail.component.html',
  providers: [RecipeDataService]
})
export class EditRecipeDetailComponent implements OnInit {
  private id: number;
  private editMode = true;
  private recipeForm: FormGroup;
  private description: string;

  constructor(private route: ActivatedRoute,
    private recipeDataService: RecipeDataService,
    private router: Router) {

  }

  ngOnInit() {
    this.route.params
      .subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        this.initForm();
      }
      );
  }

  onSubmit() {
    // const newRecipe = new Recipe(
    //   this.recipeForm.value['name'],
    //   this.recipeForm.value['description'],
    //   this.recipeForm.value['imagePath'],
    //   this.recipeForm.value['ingredients']);

    this.recipeDataService.updateRecipe(this.id, this.recipeForm.value);

    this.onCancel();
  }

  onAddIngredient() {
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'ingredient': new FormControl(null, Validators.required),
        'quantity': new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/)
        ])
      })
    );
  }

  onDeleteIngredient(index: number) {
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  private initForm() {
    let recipeName = '';
    let recipeImagePath = '';
    //let recipeDescription = '';
    let recipeIngredients = new FormArray([]);

    if (this.editMode) {
      const recipe = this.recipeDataService.getRecipe(this.id);
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;

      //$("#description").val(recipe.description)
      //recipeDescription = recipe.description;
      //recipeDescription = "Booooo";
      if (recipe['ingredients']) {
        for (let ingredient of recipe.ingredients) {
          recipeIngredients.push(
            new FormGroup({
              'ingredient': new FormControl(ingredient.ingredient, Validators.required),
              'quantity': new FormControl(ingredient.quantity, [
                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/)
              ])
            })
          );
        }
      }
    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName, Validators.required),
      'imagePath': new FormControl(recipeImagePath, Validators.required),
      //'description': new FormControl(recipeDescription, Validators.required),
      'ingredients': recipeIngredients
    });
  }

  keyupHandlerFunction(e) {
    //alert("NOOOOWWW");
    this.description = e;
  }

  thisIsATest(e) {
    alert(this.description);
  }
}
