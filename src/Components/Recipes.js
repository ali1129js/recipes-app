/**
 * @Author: Ali
 * @Date:   2018-12-16T14:09:47+01:00
 * @Last modified by:   Ali
 * @Last modified time: 2018-12-16T14:34:45+01:00
 */
import React from 'react'

const Recipes = props => (
  <div>
    {props.recipes.map( recipe => {
      return (
        <div key={recipe.recipe_id}>
          <img src={recipe.image_url} alt={recipe.title} />
          <p> { recipe.title } </p>
        </div>
      )
    }
    )}
  </div>
)
export default Recipes
