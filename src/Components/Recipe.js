/**
 * @Author: Ali
 * @Date:   2018-12-18T10:52:56+01:00
 * @Last modified by:   Ali
 * @Last modified time: 2018-12-20T08:35:01+01:00
 */
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
const API_KEY = "d6e5954a2b386a35dd8b85fbe821fa80"
class Recipe extends Component {
  state = {
    activeRecipe: []
  }
  componentDidMount = async () => {
    const title = this.props.location.state.recipe
    const req = await fetch(`https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=${API_KEY}&q=${title}`)
    const res = await req.json()
    this.setState({
      activeRecipe:res.recipes[0]
    })
    console.log(res.recipes);
  }
  render(){
    const recipe = this.state.activeRecipe
    return (
    <div className="container">
      { this.state.activeRecipe.length !== 0 &&
        <div className="active-recipe">
          <img
            className="active-recipe__img"
            src={recipe.image_url}
            alt={recipe.title} />
          <h3 className="active-recipe__title">
            {recipe.title}
          </h3>
          <h4 className="active-recipe__publisher">
            Publisher: <span> { recipe.publisher } </span>
          </h4>
          <p className="active-recipe__website"> Website:
            <span> <a href={recipe.publisher_url}>{recipe.publisher_url}</a>
            </span>
          </p>
          <button className="active-recipe__button">
            <Link to="/"> Go Home </Link>
          </button>
        </div>
      }
    </div>
    )
  }
}
export default Recipe
