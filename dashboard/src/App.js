import React, { Component } from 'react';
import Content from './pages/Content'
import Config from './pages/Config';
import { Switch, Route } from 'react-router-dom';

const Router = () =>
    <Switch>
        <Route exact path={'/'} component={Content}/>
        <Route exact path={'/config'} component={Config}/>
    </Switch>;


class App extends Component{
    render(){
        return(
            <Router/>
        )
    }
}

export default App;