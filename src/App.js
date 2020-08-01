import React, { useEffect, useState } from 'react';
import './App.css';
import Recipe from './Recipe';


function App() {

  const APP_ID="a4de7863";
  const APP_KEY="97e64c9b2e23e0f9148c9d3ab7d04215";

  const [recipes,setRecipes]=useState([])
  const [search,setSearch]=useState("")
  const [query,setQuery]=useState('chicken')

  useEffect(()=>{
    getRecipe();
  },[query]);

  const getRecipe=async ()=>{
    const response=await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data=await response.json()
    setRecipes(data.hits);
    console.log(data.hits);
  }

  const updateSearch=e=>{
    setSearch(e.target.value)
  }

  const getSearch=e=>{
    e.preventDefault()
    setQuery(search)
    setSearch('')
  }


  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input type="text" className="search-bar" value={search} onChange={updateSearch} />
        <button type="submit" className="search-button">Search</button>
      </form>
      <div className="recipes">
      {recipes.map(recipe=>(
        <Recipe key={recipe.recipe.url}
                title={recipe.recipe.label}
                calories={recipe.recipe.calories}
                image={recipe.recipe.image}
                ingredients={recipe.recipe.ingredients}
                ></Recipe>
      ))}
      </div>
    </div>
  );
}

export default App;
