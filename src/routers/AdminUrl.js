
import { Switch, Route, Redirect } from 'react-router-dom';
import LoginAdmin from '../components/admin/LoginAdmin';
import UpdatePass from '../components/admin/UpdatePass';
import React from 'react';
import {auth} from '../base/Base'
const AdminUrl = () => {
    return (
        <div>
            <Switch>
                
                <Route path="/:id/pass-update">
                    <UpdatePass />
                </Route>
                <Route exact path="/login-admin"  render = {()=>{
                    return auth ? <Redirect to = "/admin-dashboard" />: <LoginAdmin />
               }}>
                   
                </Route>
                
            </Switch>

        </div>
    )
}

export default AdminUrl
