import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators, NgForm, FormBuilder } from '@angular/forms';

import { RecipeDataService } from '../recipe-data/recipe-data.service';
import { Recipe } from "app/recipe";

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './edit-recipe-detail.component.html',
  providers: [RecipeDataService],
  styleUrls:['edit-recipe-detail.component.css']
})
export class EditRecipeDetailComponent implements OnInit {
  private id: number;
  private editMode = true;
  private recipeForm: FormGroup;
  private description: string;
  private recipes = [];
  private recipe: any;
  private recipeId: number;
  public myForm: FormGroup;
 
  // myForm = {
  //   id: '',
  //   name: '',
  //   description: '',
  //   ingredients: [{ ingredient: '', quantity: '' }],
  //   imagePath: ''
  // }

  constructor(private _fb: FormBuilder, private route: ActivatedRoute,
    private recipeDataService: RecipeDataService,
    private router: Router) {

  }

  ngOnInit() {

    this.route.params.subscribe((params: Params) => {

      let id = parseInt(params['id']);
      this.recipeId = id;

    });

    this.recipes = this.recipeDataService.getAllRecipes();

    this.recipe = this.recipeDataService.getRecipeById(this.recipeId);

    this.initForm(this.recipe);
  }

  onSelect(_recipe) {

    this.recipe = this.recipeDataService.getRecipeById(_recipe.id);
    this.initForm(this.recipe);

  }

  private initForm(recipe: Recipe) {
    let recipeName = '';
    let recipeImagePath = '';
    //let recipeDescription = '';
    let recipeIngredients = new FormArray([]);

    if (this.editMode) {
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;

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
      
      'ingredients': recipeIngredients
    });
  }

  onSubmit(form: Recipe) {
    form.description = this.description;
    this.recipeDataService.updateRecipe(this.recipeId, form);
    this.router.navigate(['/editrecipe']);
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

  keyupHandlerFunction(e) {
    this.description = e;
  }
}