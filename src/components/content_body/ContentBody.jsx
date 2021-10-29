import React from 'react'
import { Switch, Route} from 'react-router-dom'
import About from '../pages/about/About'
import Catalog from '../pages/catalog/Catalog'
import Home from '../pages/home/Home'

function ContentBody() {
    return (
        <>
            <Switch>
                <Route path="/about">
                    <About/>
                </Route>
                <Route path="/">
                    <Home/>
                </Route>
                <Route path="/catalog">
                    <Catalog/>
                </Route>
            </Switch>
        </>
    )
}

export default ContentBody
