import { Injectable } from '@angular/core';

@Injectable()
export class RecipeDataService {

  private recipes;

  constructor() { 
    this.ngOnInit();
  }

  ngOnInit(){
    this.recipes = [
      {"id": 1, "name": "Chicken Cacciatore", "description": "<p>Hsdaas sfsasdf asfdsadfsf, asfsd d fsdfsa fsdf sfdsafsadf s sd sd sdf sa fasasfsadfsfasdfsfsaf \
        safsafsaf. Bdd safasfggd sadfsa ded er ret gf d asfasfsdfasfdddfsf asf asf sad fasdf safaf sadf s \
        as safsaasfs. M as fasfsafasfdsf sdf asf asf as f asdf asdf assadf sad sad asdfasdf.</p> \
        <p>A sfdsadfsf, asfsd d fsdfsa fsdf sfdsafsadf s sd sd sdf sa fasasfsadfsfasdfsfsaf \
        safsafsaf. Bdd safasfggd sadfsa ded er ret gf d asfasfsdfasfdddfsf asf asf sad fasdf safaf sadf s \
        as safsaasfs. M as fasfsafasfdsf sdf asf asf as f asdf asdf assadf sad sad asdfasdf. \
        Esafasfggd sadfsa ded er ret gf d asfasfsdfasfdddfsf asf asf sad fasdf safaf sadf s \
        as safsaasfs. M as fasfsafasfdsf sdf asf asf as f asdf asdf assadf sad sad asdfasdf. Hsfsdf asfsa \
        safasfggd sadfsa ded er ret gf d asfasfsdfasfdddfsf asf asf sad fasdf safaf sadf s \
        as safsaasfs. M as fasfsafasfdsf sdf asf asf as f asdf asdf assadf sad sad asdfasdf.</p> \
        as safsaasfs. M as fasfsafasfdsf sdf asf asf as f asdf asdf assadf sad sad asdfasdf...</p>", "ingredients": "Salt", "image": "../assets/chickencacciatore.jpg"},

      {"id": 2, "name": "Au Grautin Potatos", "description": "<p>Gsaf sfsasdf asfdsadfsf, asfsd d fsdfsa fsdf sfdsafsadf s sd sd sdf sa fasasfsadfsfasdfsfsaf \
        safsafsaf. Bdd safasfggd sadfsa ded er ret gf d asfasfsdfasfdddfsf asf asf sad fasdf safaf sadf s \
        as safsaasfs. M as fasfsafasfdsf sdf asf asf as f asdf asdf assadf sad sad asdfasdf.</p> \
        <p>A sfdsadfsf, asfsd d fsdfsa fsdf sfdsafsadf s sd sd sdf sa fasasfsadfsfasdfsfsaf \
        safsafsaf. Bdd safasfggd sadfsa ded er ret gf d asfasfsdfasfdddfsf asf asf sad fasdf safaf sadf s \
        as safsaasfs. M as fasfsafasfdsf sdf asf asf as f asdf asdf assadf sad sad asdfasdf. \
        Esafasfggd sadfsa ded er ret gf d asfasfsdfasfdddfsf asf asf sad fasdf safaf sadf s \
        as safsaasfs. M as fasfsafasfdsf sdf asf asf as f asdf asdf assadf sad sad asdfasdf. Hsfsdf asfsa \
        safasfggd sadfsa ded er ret gf d asfasfsdfasfdddfsf asf asf sad fasdf safaf sadf s \
        as safsaasfs. M as fasfsafasfdsf sdf asf asf as f asdf asdf assadf sad sad asdfasdf.</p> \
        <p>Sfsasdf asfdsadfsf, asfsd d fsdfsa fsdf sfdsafsadf s sd sd sdf sa fasasfsadfsfasdfsfsaf \
        safsafsaf. Bdd safasfggd sadfsa ded er ret gf d asfasfsdfasfdddfsf asf asf sad fasdf safaf sadf s \
        as safsaasfs. M as fasfsafasfdsf sdf asf asf as f asdf asdf assadf sad sad asdfasdf...</p>", "ingredients": "Salt", "image": "../assets/potatos.jpg"},

      {"id": 3, "name": "Steak Tar Tar", "description": "<p>A fsdfsa fsdf sfdsafsadf s sd sd sdf sa fasasfsadfsfasdfsfsaf \
        safsafsaf. Bdd safasfggd sadfsa ded er ret gf d asfasfsdfasfdddfsf asf asf sad fasdf safaf sadf s \
        as safsaasfs. M as fasfsafasfdsf sdf asf asf as f asdf asdf assadf sad sad asdfasdf.</p> \
        <p>A sfdsadfsf, asfsd d fsdfsa fsdf sfdsafsadf s sd sd sdf sa fasasfsadfsfasdfsfsaf \
        safsafsaf. Bdd safasfggd sadfsa ded er ret gf d asfasfsdfasfdddfsf asf asf sad fasdf safaf sadf s \
        as safsaasfs. M as fasfsafasfdsf sdf asf asf as f asdf asdf assadf sad sad asdfasdf. \
        <p>Sfsasdf asfdsadfsf, asfsd d fsdfsa fsdf sfdsafsadf s sd sd sdf sa fasasfsadfsfasdfsfsaf \
        safsafsaf. Bdd safasfggd sadfsa ded er ret gf d asfasfsdfasfdddfsf asf asf sad fasdf safaf sadf s \
        as safsaasfs. M as fasfsafasfdsf sdf asf asf as f asdf asdf assadf sad sad asdfasdf...</p>", "ingredients": "Salt", "image": "../assets/steak.jpg"},

      {"id": 4, "name": "Persian Eggplant", "description": "<p>Gsaf sfsasdf asfdsadfsf, asfsd d fsdfsa fsdf sfdsafsadf s sd sd sdf sa fasasfsadfsfasdfsfsaf \
        safsafsaf. Bdd safasfggd sadfsa ded er ret gf d asfasfsdfasfdddfsf asf asf sad fasdf safaf sadf s \
        as safsaasfs. M as fasfsafasfdsf sdf asf asf as f asdf asdf assadf sad sad asdfasdf.</p> \
        <p>A sfdsadfsf, asfsd d fsdfsa fsdf sfdsafsadf s sd sd sdf sa fasasfsadfsfasdfsfsaf \
        safsafsaf. Bdd safasfggd sadfsa ded er ret gf d asfasfsdfasfdddfsf asf asf sad fasdf safaf sadf s \
        as safsaasfs. M as fasfsafasfdsf sdf asf asf as f asdf asdf assadf sad sad asdfasdf. \
        Esafasfggd sadfsa ded er ret gf d asfasfsdfasfdddfsf asf asf sad fasdf safaf sadf s \
        as safsaasfs. M as fasfsafasfdsf sdf asf asf as f asdf asdf assadf sad sad asdfasdf. Hsfsdf asfsa \
        safasfggd sadfsa ded er ret gf d asfasfsdfasfdddfsf asf asf sad fasdf safaf sadf s \
        as safsaasfs. M as fasfsafasfdsf sdf asf asf as f asdf asdf assadf sad sad asdfasdf.</p> \
        <p>Sfsasdf asfdsadfsf, asfsd d fsdfsa fsdf sfdsafsadf s sd sd sdf sa fasasfsadfsfasdfsfsaf \
        safsafsaf. Bdd safasfggd sadfsa ded er ret gf d asfasfsdfasfdddfsf asf asf sad fasdf safaf sadf.", "ingredients": "Salt", "image": "../assets/eggplant.jpg"},

      {"id": 5, "name": "Buttermilk Fried Chicken", "description": "<p>Sfsasdf asfdsadfsf, asfsd d fsdfsa fsdf sfdsafsadf s sd sd sdf sa fasasfsadfsfasdfsfsaf \
        safsafsaf. Bdd safasfggd sadfsa ded er ret gf d asfasfsdfasfdddfsf asf asf sad fasdf safaf sadf s \
        as safsaasfs. M as fasfsafasfdsf sdf asf asf as f asdf asdf assadf sad sad asdfasdf.</p> \
        <p>A sfdsadfsf, asfsd d fsdfsa fsdf sfdsafsadf s sd sd sdf sa fasasfsadfsfasdfsfsaf \
        safsafsaf. Bdd safasfggd sadfsa ded er ret gf d asfasfsdfasfdddfsf asf asf sad fasdf safaf sadf s \
        as safsaasfs. M as fasfsafasfdsf sdf asf asf as f asdf asdf assadf sad sad asdfasdf. \
        Esafasfggd sadfsa ded er ret gf d asfasfsdfasfdddfsf asf asf sad fasdf safaf sadf s \
        as safsaasfs. M as fasfsafasfdsf sdf asf asf as f asdf asdf assadf sad sad asdfasdf. Hsfsdf asfsa \
        safasfggd sadfsa ded er ret gf d asfasfsdfasfdddfsf asf asf sad fasdf safaf sadf s \
        as safsaasfs. M as fasfsafasfdsf sdf asf asf as f asdf asdf assadf sad sad asdfasdf.</p> \
        <p>Sfsasdf asfdsadfsf, asfsd d fsdfsa fsdf sfdsafsadf s sd sd sdf sa fasasfsadfsfasdfsfsaf \
        safsafsaf. Bdd safasfggd sadfsa ded er ret gf d asfasfsdfasfdddfsf asf asf sad fasdf safaf sadf s \
        as safsaasfs. M as fasfsafasfdsf sdf asf asf as f asdf asdf assadf sad sad asdfasdf...</p>", "ingredients": "Salt", "image": "../assets/chicken.jpg"}
    ];
  }

  getRecipes(){
    return  this.recipes;
  }

  getRecipeById(id){
    var result = {
      id: "",
      name: "",
      description: "",
      ingredients: "",
      image: ""
    }
    
    for (let i = 0; i < this.recipes.length; i++){
      if (this.recipes[i].id == id) {
        result.id = this.recipes[i].id;
        result.name = this.recipes[i].name;
        result.description = this.recipes[i].description;
        result.ingredients = this.recipes[i].ingredients;
        result.image = this.recipes[i].image;
      }
    }

    return result;
  }
}
