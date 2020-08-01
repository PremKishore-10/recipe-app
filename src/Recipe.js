import React from 'react'
import style from './recipe.module.css'
import './App.css';

const Recipe=({title,calories,image,ingredients})=>{
    return(
        <div className={style.recipe}>
            <h1>{title}</h1>
            <h2>Calories : <span>{calories}</span></h2>
            <p></p>
            <img src={image} alt="" />
            <ol>
            {ingredients.map(ingredient=>(
                <li>{ingredient.text}</li>
            ))}
            </ol>
        </div>
    )
}

export default Recipe;