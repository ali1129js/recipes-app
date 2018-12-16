/**
 * @Author: Ali
 * @Date:   2018-12-15T13:27:09+01:00
 * @Last modified by:   Ali
 * @Last modified time: 2018-12-16T11:45:41+01:00
 */
import React, { Component } from 'react'
import Form from './Components/Form'
import './App.css'

const API_KEY = "d6e5954a2b386a35dd8b85fbe821fa80"

class App extends Component {

  /*new way to write methods with arrow-function
    -no need to bind it to (this)-
  */
  getRecipe = async (e) => {
    e.preventDefault()
    //we grap the input text from the element "recipeName"
    const recipeName = e.target.elements.recipeName.value
    // added https://cors-anywhere.herokuapp.com/ because the site won't allow local servers to access their data
    const api_call = await fetch(`https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=${API_KEY}&q=chicken%20breast&page=2`)
    //we call .json() on the api_call instead of using
    // JSON.parse/stringfy
    // and we store the results in this data constant
    const data = await api_call.json()
    console.log(data)
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
