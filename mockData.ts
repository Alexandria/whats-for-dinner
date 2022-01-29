import { Recipe } from "./src/types/Recipe"


const Tacos:Recipe = {
    name:'Tacos',
    ingrediants:['beef',
        'tortilla',
        'shredded lettus',
        'cheddar cheese',
    ],
    directions:'Put all ingrediants on a tortilla and then fold in half',
    image:'https://www.istockphoto.com/photo/serving-of-tacos-with-shredded-roast-pork-and-cheese-filling-on-brown-paper-in-gm1296272943-389739007?utm_source=unsplash&utm_medium=affiliate&utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Ftacos&utm_term=tacos%3A%3A%3A'

}

const recipes:Recipe[] = [Tacos]

export {recipes}