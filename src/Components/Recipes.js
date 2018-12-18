/**
 * @Author: Ali
 * @Date:   2018-12-16T14:09:47+01:00
 * @Last modified by:   Ali
 * @Last modified time: 2018-12-18T08:43:36+01:00
 */
import React from 'react'

const Recipes = props => (
  <div className="container">
    <div className="row">
      {props.recipes.map( recipe => {
        return (
          <div className="col-md-4">
            <div className="recipes__box">
              <div key={recipe.recipe_id}>
                <img
                  className="recipe__box-img"
                  src={recipe.image_url}
                  alt={recipe.title} />
                  <div className="recipe__text">
                    <h5> { recipe.title } </h5>
                  </div>
              </div>
            </div>
          </div>
        )
      }
      )}
    </div>
  </div>
)
export default Recipes
