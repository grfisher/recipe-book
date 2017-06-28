import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { Recipe } from './recipe.interface';
import { FileUploader } from 'ng2-file-upload';


@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  moduleId: module.id,
})
export class AddRecipeComponent implements OnInit {

  public myForm: FormGroup;
  public uploader: FileUploader = new FileUploader({url:'http://localhost:3001/upload'});
  
    constructor(private _fb: FormBuilder) { }

    ngOnInit() {
        this.myForm = this._fb.group({
            name: ['', [Validators.required, Validators.minLength(5)]],
            description: ['', [Validators.required, Validators.minLength(5)]],
            recipePicture: ['', [Validators.required]],
            ingredients: this._fb.array([])
        });
        
        // add ingredient
        this.addIngredient();
        
        /* subscribe to ingredients value changes */
        // this.myForm.controls['ingredients'].valueChanges.subscribe(x => {
        //   console.log(x);
        // })
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

    removeIngredient(i: number) {
        const control = <FormArray>this.myForm.controls['ingredients'];
        control.removeAt(i);
    }

    save(model: Recipe) {
        // call API to save
        // ...
        console.log(model);
    }
}