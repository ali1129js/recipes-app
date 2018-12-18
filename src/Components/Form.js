/**
 * @Author: Ali
 * @Date:   2018-12-15T16:44:03+01:00
 * @Last modified by:   Ali
 * @Last modified time: 2018-12-18T08:35:31+01:00
 */
import React from 'react'

//a stateless functional Component
const Form = props => (
  <form onSubmit={props.getRecipe} style={{ marginBottom:"2rem" }}>
    {/* using name attribute for now, must change later*/}
    <input
      className="form__input"
      type="text"
      name="recipeName"/>
    <button className="form__button"> Search </button>
  </form>
)
export default Form
