class Recipe {
    constructor(id,categoryIds,title, affordability,complexity,
        imageUrl, duration, ingredients,isVegan, isVegetarian, steps, isGlutenFree,isLactoseFree){
        this.id= id
        this.categoryIds= categoryIds
        this.title= title
        this.affordability= affordability
        this.complexity= complexity
        this.imageUrl= imageUrl
        this.duration= duration
        this.ingredients= ingredients
        this.isVegan= isVegan
        this.isVegetarian= isVegetarian
        this.steps= steps
        this.isGlutenFree=isGlutenFree
        this.isLactoseFree=isLactoseFree
    }
}
export default Recipe;