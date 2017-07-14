import { Component, OnInit } from '@angular/core';
import { RecipeDataService } from '../recipe-data/recipe-data.service';
import { FilterPipe } from './filter.pipe';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css'],
  providers: [RecipeDataService]
})
export class SearchComponent implements OnInit {

  recipes = [];

  constructor(private recipeDataService: RecipeDataService) { }

  ngOnInit() {
    this.recipes = this.recipeDataService.getAllRecipes();
  }
}
