export function getrecipes() {
  const APIurl = 'https://api.spoonacular.com'
  const API_key = '8cdf0991fa1142ff88c27da58e91fa05'
  const numberOfRecipes = 6
  return fetch(`${APIurl}/recipes/search?query=''banana'&number=${numberOfRecipes}&apiKey=${API_key}`
  )
  .then(reponse => reponse.json())
}