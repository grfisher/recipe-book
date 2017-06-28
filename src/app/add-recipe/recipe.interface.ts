export interface Recipe {
    name: string;
    description: string;
    ingredients: Ingredient[];
}

export interface Ingredient {
    ingredient: string;
    quantity: string;
}