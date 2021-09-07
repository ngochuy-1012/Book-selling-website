import { Switch, Route, Redirect } from 'react-router-dom';
import Dashboard from '../components/dashboard/Dashboard';
import React from 'react'
import {auth} from '../base/Base'
const DashboardUrl = () => {
    return (
        <div>
            <Switch>
                <Route path="/admin-dashboard" render={()=>{
                    return auth? <Dashboard/>: <Redirect to = "/login-admin" />
                }}>
                    
                </Route>
            </Switch>

        </div>
    )
}

export default DashboardUrl
