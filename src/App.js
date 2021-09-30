import React, {useState, useEffect} from 'react'
import "./App.css"
import Recipe from './components/Recipe'
function App() {
  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState("chicken")

  const App_ID = "2a23a5be"
  const App_Key = "a83d4bf12be8eba5f78cf153910733d1"
  const APP_URL = 
    `https://api.edamam.com/search?q=${query}&app_id=${App_ID}&app_key=${App_Key}&from=0&to=3&calories=591-722&health=alcohol-free`


useEffect(() => {
  getRecipes()
}, [query])


const getRecipes = async () => {
  const response = await fetch(APP_URL)
  const data = await response.json()
  setRecipes(data.hits)
}

const handleInput= (e) => {
  setSearch(e.target.value)
}

const handleSubmit = e => {
  e.preventDefault()
  setQuery(search)
}



  return (
    <div className="wrapper">
      <form action="#" onSubmit={handleSubmit}>
        <input 
             type="text" 
             name="search-bar" 
             id="search-bar" 
             placeholder="Enter Recipe Name"
             onChange={handleInput}
             value={search}
        />
        <button>Search</button>
      </form>



        <div className="recipe-grid">
          {recipes.map(recipe => (
            <Recipe
            key={recipe.recipe.label}
            ingredients={recipe.recipe.ingredientLines}
            image={recipe.recipe.image}
            title={recipe.recipe.label}
            />
          ))}
        </div>

    </div>
  )
}

export default App

