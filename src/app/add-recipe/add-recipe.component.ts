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
    private description: string;

    constructor(private router: Router, private _fb: FormBuilder, private _recipeDataService: RecipeDataService) { }

    ngOnInit() {
        this.myForm = this._fb.group({
            id: [this._recipeDataService.getAllRecipes().length],
            name: ['', [Validators.required, Validators.minLength(5)]],
            ingredients: this._fb.array([])

        });

        // add ingredient
        this.addIngredient();

        /* subscribe to ingredients value changes */
        //this.myForm.controls['fileName'].valueChanges.subscribe(x => {
        //   console.log(this.fileName);
       //    alert(this.myForm[4]);
        //})
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

        /* subscribe to individual address value changes */
        // addrCtrl.valueChanges.subscribe(x => {
        //   console.log(x);
        // })
    }

    fileEvent(fileInput: any){
        let file = fileInput.target.files[0];
        this.imageName = file.name;
        //this.myForm.controls['fileName'].setValue(this.fileName);
        //alert("File event function: " + this.imageName)
    }

    removeIngredient(i: number) {
        const control = <FormArray>this.myForm.controls['ingredients'];
        control.removeAt(i);
    }

    save(model: Recipe) {
        // call API to save

        /*
        Flatten array
        var data = [["I", "want", "to"], ["tell", "you", "a"], ["story"]];

        var flatten = function (arr) {

            var flatMap = [];
            arr.forEach(function (value) {
                if (Array.isArray(value)) {
                    flatMap = flatMap.concat(flatten(value))
                } else {
                    flatMap.push(value)
                }
            });
            return flatMap;
        }
        */
        this._recipeDataService.insertRecipe(this.myForm.value, this.imageName, this.description);
        console.log(this._recipeDataService.getAllRecipes());
        this.router.navigate(['/recipedetail', this._recipeDataService.getAllRecipes().length - 1]);
    }

}