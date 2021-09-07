import React from 'react'
import Product from '../components/products/Product'
import CreateProduct from '../components/products/CreateProduct'
import EditProduct from '../components/products/EditProduct'

import {
    Switch,
    Route,

} from "react-router-dom";
const ProductUrl = () => {

    return (
        <div>
            <Switch>
                <Route path="/products/:id/edit">
                    <EditProduct />
                </Route>

                <Route path="/admin-products" >
                    <Product />
                </Route>
                <Route path="/create-product">
                    <CreateProduct />
                </Route>

            </Switch>
        </div>
    )
}

export default ProductUrl
