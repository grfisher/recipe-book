import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(recipes: any, term: any): any {

    // Check if search term is undefined
    if(term === undefined) return recipes;

    return recipes.filter(function(recipe){
      return recipe.name.toLowerCase().includes(term.toLowerCase());
    })
  
  }
}
