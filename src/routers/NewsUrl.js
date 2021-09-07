import React from 'react'
import { Switch, Route } from 'react-router-dom';
import News from '../components/news/News';
import CreateNews from '../components/news/CreateNews';
import EditNews from '../components/news/EditNews';
import { auth } from '../base/Base'
const NewsUrl = () => {
    return (
        <div>
            <Switch>
                <Route path="/news/:id/edit" >
                    <EditNews />
                </Route>
                <Route path="/admin-news" >
                    <News />
                </Route>
                <Route path="/create-news">

                    <CreateNews />
                </Route>


            </Switch>

        </div>
    )
}

export default NewsUrl
