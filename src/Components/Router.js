/**
 * @Author: Ali
 * @Date:   2018-12-18T09:19:33+01:00
 * @Last modified by:   Ali
 * @Last modified time: 2018-12-19T10:31:52+01:00
 */
import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import App from '../App'
import Recipe from './Recipe'

const Router = () => (
 <BrowserRouter>
   <Switch>
     <Route path="/" component={App} exact />
     <Route path="/recipe/:id" component={Recipe}/>
   </Switch>
 </BrowserRouter>
)
export default Router
