import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingComponents } from './app-routing/app-routing.module';
import { RouterModule }   from '@angular/router';
import { AppComponent }   from './app.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeDataService } from './recipe-data/recipe-data.service';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { IngredientsComponent } from './add-recipe/ingredients.component';
import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';
import { EditRecipeDetailComponent } from './edit-recipe-detail/edit-recipe-detail.component';
import { DeleteRecipeComponent } from './delete-recipe/delete-recipe.component';
import { DeleteRecipeDetailComponent } from './delete-recipe-detail/delete-recipe-detail.component';
import { FileSelectDirective, FileDropDirective } from 'ng2-file-upload';
import { SimpleTinyComponent } from './tinymce-editor/simple-tiny.component';
import { FilterPipe } from './search/filter.pipe';

@NgModule({
  imports:      [ 
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [ 
    AppComponent, 
    routingComponents, 
    RecipeDetailComponent, 
    AddRecipeComponent, 
    IngredientsComponent, 
    EditRecipeComponent, 
    EditRecipeDetailComponent, 
    DeleteRecipeComponent, 
    DeleteRecipeDetailComponent,
    FileSelectDirective, 
    FileDropDirective,
    SimpleTinyComponent,
    FilterPipe],
    bootstrap:    [ AppComponent ],
})
export class AppModule { }

