import React from "react";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Redirect,Route, Switch} from "react-router-dom";
import ProductUrl from './routers/ProductUrl';
import NewsUrl from './routers/NewsUrl'
import AdminUrl from "./routers/AdminUrl";
import DashboardUrl from "./routers/DashboardUrl";

import './assets/boxicons-2.0.7/css/boxicons.min.css'
import "./public/sass/index.scss"
// import "./public/css/App.css";
import { auth } from './base/Base';

import Layout from "./components/user/Layout";
function App() {
  return (
    <div>
      < Switch>
        <Router exact path="/">
          <Layout />
        </Router>
        
        <div className="app" >
          <Router exact path="/login-admin">
            <AdminUrl />
            <div style={{ display: 'flex' }}>
              {
                auth ? <Sidebar /> : <Redirect to="/login-admin" />
              }

              <div id="background">
                <DashboardUrl />
                <ProductUrl />
                <NewsUrl />
              </div>
            </div>
          </Router>
        </div>
      </Switch>
    </div>
  );
}

export default App;
