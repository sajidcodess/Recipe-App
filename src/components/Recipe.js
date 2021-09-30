import React from 'react'
const Recipe = ({ingredients,image,title}) => {
    return (
        
            <div className="recipe">
                <h1 className="title">{title}</h1>
                <ol>
                    {ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                    ))}
                </ol>
                <img src={image} alt="" className="recipe-image" />
            </div>
        
    )
}

export default Recipe
