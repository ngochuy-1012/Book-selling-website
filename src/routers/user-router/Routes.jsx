import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Home from '../../pages/Home'
import ProductDetail from '../../pages/ProductDetail'
import Products from '../../pages/Products'
import Cart from '../../pages/Cart'
import Contact from '../../pages/Contact'


const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/products/:slug' component={ProductDetail}/>
            <Route path='/products/search?:keyword' component={Products}/>
            <Route path='/products' component={Products}/>
            <Route path='/contact' component={Contact}/>
            <Route path='/cart' component={Cart}/>
        </Switch>
    )
}

export default Routes
