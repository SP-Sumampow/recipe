import { useEffect,useState } from 'react'
import { getrecipes } from '../../service/recipe/recipe.js'
function useRecipes() {
    const [recipes,setRecipes]=useState([]);
    useEffect (()=> {
        getrecipes()
            .then(data => setRecipes(data.results));
    },[setRecipes]);
    return recipes;
}
export default useRecipes;