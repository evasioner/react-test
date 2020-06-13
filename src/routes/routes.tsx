import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Dashboard from '../pages/dashboard';

class Routes extends Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Dashboard}/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Routes
