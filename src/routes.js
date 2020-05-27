import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home/index';
import Header from './header/index';

import lamborghiniPage from './pages/Lamborghini';
import ferrariPage from './pages/Ferrari';
import bmwPage from './pages/Bmw';
import mercedesPage from './pages/Mercedes';
import maseratiPage from './pages/Maserati';
import porschePage from './pages/Porsche';
import ScrollToTop from './scrollToTop';

export default function Routes() {

    return(
        <BrowserRouter>
            <ScrollToTop>
                <Header />
                    <Switch>
                        <Route exact path = "/" component = { Home } />
                        <Route exact path = "/lamborghini" component = { lamborghiniPage } />
                        <Route exact path = "/mercedes" component = { mercedesPage } />
                        <Route exact path = "/ferrari" component = { ferrariPage } />
                        <Route exact path = "/maserati" component = { maseratiPage } />
                        <Route exact path = "/bmw" component = { bmwPage } />
                        <Route exact path = "/porsche" component = { porschePage } />
                    </Switch>
            </ScrollToTop>
        </BrowserRouter>
    );
}