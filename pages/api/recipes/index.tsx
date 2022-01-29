import { NextApiRequest, NextApiResponse } from 'next'
import { recipes } from '../../../mockData' 

const allRecipes = (req:NextApiRequest, res:NextApiResponse) =>{
    const {method} = req 
    switch(method){
        case 'GET':
            res.status(200).json({recipes})
            break
        case 'PUT':
            res.status(200).json({message:'PUT request happened'})
            break
        default:
            res.setHeader('Allow', ['GET', 'PUT'])
            res.status(405).end(`Method ${method} Not Allowed`)        
    }
}

export default allRecipes