export interface Recipe {
    id: string;
    name: string;
    description: string;
    ingredients: Ingredient[];
    image: string;
}

export interface Ingredient {
    ingredient: string;
    quantity: string;
}