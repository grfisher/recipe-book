import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import { RecipeDataService } from '../recipe-data/recipe-data.service';
import { Recipe } from "app/recipe";

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './edit-recipe-detail.component.html',
  providers: [RecipeDataService],
})
export class EditRecipeDetailComponent implements OnInit {
  private id: number;
  private editMode = true;
  private recipeForm: FormGroup;
  private description: string;
  private recipes = [];
  private recipe: any;
  private recipeId: number;

  constructor(private route: ActivatedRoute,
    private recipeDataService: RecipeDataService,
    private router: Router) {

  }

  ngOnInit() {
    this.recipes = this.recipeDataService.getAllRecipes();
    // alert("Now: " + this.recipeId);
    // this.recipe = this.recipeDataService.getRecipeById(this.recipeId);

    this.route.params.subscribe((params: Params) => {
      let id = parseInt(params['id']);
      this.recipeId = id;
      //alert("recipe-detail ID: " + this.recipeId);
    });

    this.recipe = this.recipeDataService.getRecipeById(this.recipeId);

    this.initForm(this.recipe);
  }

  onSelect(_recipe) {
    // alert("recipe-detail ID: " + _recipe.id);
    this.recipe = this.recipeDataService.getRecipeById(_recipe.id);
    //alert("recipe-detail ID: " + this.recipe.description);
    this.initForm(this.recipe);
    //this.router.navigate(['/editrecipedetail', _recipe.id]);
  }

  private initForm(recipe: Recipe) {
    let recipeName = '';
    let recipeImagePath = '';
    //let recipeDescription = '';
    let recipeIngredients = new FormArray([]);

    if (this.editMode) {
      //const recipe = this.recipeDataService.getRecipe(this.id);
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      //$("#description").val(recipe.description)
      //recipeDescription = recipe.description;
      //console.log(recipe);
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
      //'mydescription': new FormControl(recipeDescription, Validators.required),
      'ingredients': recipeIngredients
    });
    console.log(this.recipeForm);
  }

  onSubmit() {
    // const newRecipe = new Recipe(
    //  this.recipeForm.value['name'],
    console.log("ID: " + this.id);
    this.recipeForm.value['description'] = this.description;
    console.log("Description: " + this.description);

    //   this.recipeForm.value['imagePath'],
    //   this.recipeForm.value['ingredients']);

    this.recipeDataService.updateRecipe(this.id, this.recipeForm.value);
    this.router.navigate(['/editrecipe']);
    //this.onCancel();
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
    //this.router.navigate(['../'], { relativeTo: this.route });
  }

  keyupHandlerFunction(e) {
    //alert("NOOOOWWW");
    this.description = e;
  }

  // thisIsATest(e) {
  //   return this.description;
  // }
}