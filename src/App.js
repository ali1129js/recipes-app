/**
 * @Author: Ali
 * @Date:   2018-12-15T13:27:09+01:00
 * @Last modified by:   Ali
 * @Last modified time: 2018-12-15T16:57:05+01:00
 */
import React, { Component } from 'react'
import Form from './Components/Form'
import './App.css'

class App extends Component {


  //new way to write methods with arrow-function -no need to bind it to this-
  getRecipe = (e) => {
    e.preventDefault()
    console.log("works")
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
