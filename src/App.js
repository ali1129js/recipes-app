/**
 * @Author: Ali
 * @Date:   2018-12-15T13:27:09+01:00
 * @Last modified by:   Ali
 * @Last modified time: 2018-12-20T08:44:36+01:00
 */
import React, { Component } from 'react'
import Form from './Components/Form'
import Recipes from './Components/Recipes'
import './App.css'

const API_KEY = "*****************************"

class App extends Component {
  state = {
    recipes:[]
  }
  /*new way to write methods with arrow-function
    -no need to bind it to (this)-
  */
  getRecipe = async (e) => {
    e.preventDefault()
    //we grap the input text from the input element "recipeName"
    const recipeName = e.target.elements.recipeName.value
    // added https://cors-anywhere.herokuapp.com/ because the site won't allow local servers to access their data
    const api_call = await fetch(`https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=${API_KEY}&q=${recipeName}`)
    //we call .json() on the api_call instead of using
    // JSON.parse/stringfy
    // and we store the results in this data constant
    const data = await api_call.json()
    this.setState({recipes:data.recipes})
    console.log(this.state.recipes);
  }
  componentDidMount = () => {
    const json= localStorage.getItem("recipes")
    const recipes = JSON.parse(json)
    this.setState({recipes})
  }
  componentDidUpdate = () => {
    const recipes = JSON.stringify(this.state.recipes)
    localStorage.setItem("recipes", recipes)
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1 className="app-title"> Recipe Search </h1>
        </header>
        <Form getRecipe={this.getRecipe}/>
        <Recipes recipes={this.state.recipes}/>
      </div>
    )
  }
}

export default App
