import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators, FormsModule } from '@angular/forms';
//import { Recipe } from './recipe.interface';
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

    constructor(private router: Router, private _fb: FormBuilder, private _recipeDataService: RecipeDataService) { }

    ngOnInit() {
        

        // add ingredient
        this.addIngredient();

        /* subscribe to ingredients value changes */
        //this.myForm.controls['fileName'].valueChanges.subscribe(x => {
        //   console.log(this.fileName);
       //    alert(this.myForm[4]);
        //})
    }

    fileEvent(fileInput: any){
        let file = fileInput.target.files[0];
        this.imageName = file.name;
        
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

    removeIngredient(i: number) {
        const control = <FormArray>this.myForm.controls['ingredients'];
        control.removeAt(i);
    }

    save(model: Recipe) {
        // call API to save

        this._recipeDataService.insertRecipe(this.myForm.value, this.imageName);
        this.router.navigate(['/recipedetail', this._recipeDataService.getAllRecipes().length - 1]);
    }
}