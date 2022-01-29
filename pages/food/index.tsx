import useSWR from 'swr'
import axios from 'axios'
import { Recipe } from '../../mockData'
import Image from 'next/image'

const getAllRecipes = async (url:string) => {
    const response = await axios.get(url)
    console.log("response ", response) 
    return response
}

const Index = () =>{
    const {data, error} = useSWR('/api/recipes', getAllRecipes)

    console.log("DATA ", data?.data.recipes)
    if(error) return <h3>Uh oh! Error!</h3>
    if(!data?.data) return <h3>....Loading</h3>

    return <div>
        {data.data.recipes.map((recipe:Recipe, index:number) =>{
           return <ul key={index}>
            <li>{recipe.name}</li>
            <li>Ingrediants <ul>{recipe.ingrediants.map((ingrediant, index) =>{
                return <li key={index}>{ingrediant}</li>
            })}</ul></li>
            <li>{recipe.directions}</li>
            <Image src={recipe.image} layout='fill' alt='tacos'/>
            </ul>
        })}
    </div>
}

export default Index