/**
 * @Author: Ali
 * @Date:   2018-12-15T13:27:09+01:00
 * @Last modified by:   Ali
 * @Last modified time: 2018-12-15T18:49:18+01:00
 */
import React, { Component } from 'react'
import Form from './Components/Form'
import './App.css'

const API_KEY = "d6e5954a2b386a35dd8b85fbe821fa80"

class App extends Component {

  /*new way to write methods with arrow-function
    -no need to bind it to this-
  */
  getRecipe = async (e) => {
    e.preventDefault()
    const recipeName = e.target.elements.recipeName.value
    const api_call = await fetch(`https://www.food2fork.com/api/search?key=${API_KEY}&q=chicken%20breast&page=2`)
    const data = await api_call.json()
    console.log(recipeName)
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1 className="app-title"> Recipe Search </h1>
        </header>
        <Form getRecipe={this.getRecipe}/>
      </div>
    )
  }
}

export default App
