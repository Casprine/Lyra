import React, { Component } from 'react';
import Home from './pages/Home';
import Content from './pages/Content'
import Config from './pages/Config';
import { Switch, Route } from 'react-router-dom';

const Router = () =>
    <Switch>
        <Route exact path={'/'} component={Home}/>
        <Route exact path={'/config'} component={Config}/>
        <Route exact path={'/addContent'} component={Content}/>
    </Switch>;


class App extends Component{
    render(){
        return(
            <Router/>
        )
    }
}

export default App;