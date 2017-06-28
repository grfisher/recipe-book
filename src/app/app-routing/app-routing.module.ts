import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeListComponent } from '../recipe-list/recipe-list.component';
import { RecipeDetailComponent } from '../recipe-detail/recipe-detail.component';
import { AddRecipeComponent } from '../add-recipe/add-recipe.component';
import { EditRecipeComponent } from '../edit-recipe/edit-recipe.component';
import { EditRecipeDetailComponent } from '../edit-recipe-detail/edit-recipe-detail.component';
import { DeleteRecipeComponent } from '../delete-recipe/delete-recipe.component';
import { DeleteRecipeDetailComponent } from '../delete-recipe-detail/delete-recipe-detail.component';

const routes: Routes = [
  { path: 'recipes', component: RecipeListComponent },
  { path: 'addrecipe', component: AddRecipeComponent },
  { path: 'editrecipe', component: EditRecipeComponent},
  { path: 'editrecipedetail/:id', component: EditRecipeDetailComponent},
  { path: 'recipedetail/:id', component: RecipeDetailComponent},
  { path: 'deleterecipe', component: DeleteRecipeComponent},
  { path: 'deleterecipedetail/:id', component: DeleteRecipeDetailComponent}
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
}) 
export class AppRoutingModule { }
export const routingComponents = [RecipeListComponent, AddRecipeComponent, RecipeDetailComponent, EditRecipeComponent, EditRecipeDetailComponent, DeleteRecipeComponent, DeleteRecipeDetailComponent];