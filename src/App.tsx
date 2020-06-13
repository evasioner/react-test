import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import Dashboard from './pages/dashboard';


export interface SearchProps {
}

export interface SearchState {
}

class App extends Component <SearchProps, SearchState> {

    constructor(props: Readonly<SearchProps>) {
        super(props);
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={Dashboard}/>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
