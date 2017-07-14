import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators, FormsModule } from '@angular/forms';
import { Recipe } from '../recipe';
import { FileUploader } from 'ng2-file-upload';
import { RecipeDataService } from '../recipe-data/recipe-data.service';

import { RecipeListComponent } from '../recipe-list/recipe-list.component';

import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
    selector: 'app-add-recipe',
    templateUrl: './add-recipe.component.html',
    providers: [RecipeDataService],
    moduleId: module.id
})
export class AddRecipeComponent implements OnInit {

    public myForm: FormGroup;
    public uploader: FileUploader = new FileUploader({ url: 'http://localhost:3001/upload' });
    private imageName: string;
    private description: string;

    constructor(private router: Router, private _fb: FormBuilder, private _recipeDataService: RecipeDataService) { }

    ngOnInit() {
        this.myForm = this._fb.group({
            id: [this._recipeDataService.getAllRecipes().length],
            name: ['', [Validators.required, Validators.minLength(5)]],
            ingredients: this._fb.array([])
        });

        this.addIngredient();
    }

    formErrors = {
        name: '',
        ingredients: [
            { ingredient: '', quantity: '' }
        ]
    };

    validationMessages = {
        name: {
            required: 'Name is required.',
            minlength: 'Nmae must be 3 characters.',
            maxlength: 'Nmae can\'t be longer that 7 characters.'
        },
        ingredients: {
            required: 'Ingredients are required.'
        }
    }

    keyupHandlerFunction(e) {
        this.description = e;
    }

    thisIsATest(e) {

    }

    initIngredient() {
        return this._fb.group({
            ingredient: ['', Validators.required],
            quantity: ['']
        });
    }

    addIngredient() {
        const control = <FormArray>this.myForm.controls['ingredients'];
        const ingredientCtrl = this.initIngredient();

        control.push(ingredientCtrl);
        
    }

    fileEvent(fileInput: any) {
        let file = fileInput.target.files[0];
        this.imageName = file.name;
    }

    removeIngredient(i: number) {
        const control = <FormArray>this.myForm.controls['ingredients'];
        control.removeAt(i);
    }

    save(model: Recipe) {
        // call API to save

        this._recipeDataService.insertRecipe(this.myForm.value, this.imageName, this.description);
        this.router.navigate(['/recipedetail', this._recipeDataService.getAllRecipes().length - 1]);
    }

}