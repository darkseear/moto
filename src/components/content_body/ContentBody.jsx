import React from 'react'
import { Switch, Route} from 'react-router-dom'
import About from '../pages/about/About'
import Cart from '../pages/cart/Cart'
import Catalog from '../pages/catalog/Catalog'
import Contacts from '../pages/contacts/Contacts'
import Home from '../pages/home/Home'
import Login from '../pages/login/Login'
import Museum from '../pages/museum/Museum'
import ReadOne from '../pages/read_one/ReadOne'
import Registration from '../pages/registration/Registration'
import Service from '../pages/service/Service'

function ContentBody() {
    return (
        <>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route path="/about">
                    <About/>
                </Route>
                <Route path="/museum">
                    <Museum/>
                </Route>
                <Route path="/catalog/:id">
                    <Catalog/>
                </Route>
                <Route path="/catalog">
                    <Catalog/>
                </Route>
                <Route path="/read_one/:id">
                    <ReadOne />
                </Route>
                <Route path="/login">
                    <Login />
                </Route> 
                <Route path="/service">
                    <Service/>
                </Route> 
                <Route path="/contacts">
                    <Contacts/>
                </Route>
                <Route path="/cart">
                    <Cart/>
                </Route>
                <Route path="/registration">
                    <Registration/>
                </Route>
            </Switch>
        </>
    )
}

export default ContentBody
