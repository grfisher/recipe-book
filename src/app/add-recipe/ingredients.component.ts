import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: 'ingredient',
    templateUrl: 'ingredients.component.html'
})
export class IngredientsComponent {
    @Input('group')
    public ingredientForm: FormGroup;
}