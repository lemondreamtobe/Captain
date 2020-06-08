import * as React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import createLoadable from '../helpers/loadable';

const Demo = createLoadable(() => import('./Demo'));
const Demo2 = createLoadable(() => import('./Demo2'));

const BasicRoute = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Demo}/>
            <Route exact path="/demo2" component={Demo2}/>
        </Switch>
    </BrowserRouter>
);


export default BasicRoute;