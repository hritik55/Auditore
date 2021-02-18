import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './actions/store'
import DashBoard from './components/Dashboard'


const App = () => {
    return (
        <>
            <Provider store={store}>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={ DashBoard }/>
                        <Route path="/user" component={ DashBoard }/>
                    </Switch>
                </BrowserRouter>
            </Provider>
        </>
    );
}

export default App;