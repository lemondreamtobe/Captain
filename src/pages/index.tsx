import * as React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Demo from './Demo';
import Demo2 from './Demo2';


const BasicRoute = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Demo}/>
            <Route exact path="/demo2" component={Demo2}/>
        </Switch>
    </BrowserRouter>
);


export default BasicRoute;