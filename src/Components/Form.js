/**
 * @Author: Ali
 * @Date:   2018-12-15T16:44:03+01:00
 * @Last modified by:   Ali
 * @Last modified time: 2018-12-15T17:57:41+01:00
 */
import React from 'react'

//a stateless functional Component
const Form = props => (
  <form onSubmit={props.getRecipe}>
    {/* using string refs for now, must change later*/}
   <input type="text" name="recipeName"/>
   <button> Search </button>
  </form>
)
export default Form
