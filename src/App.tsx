import React, {Component} from 'react';
import './App.css';
import {ApiService} from './services/api.service';
import {Autocomplete} from '@material-ui/lab';
import {Test} from './interfaces/test';
import {TextField} from '@material-ui/core';


export interface SearchProps {
}

export interface SearchState {
    query: any
}

class App extends Component <SearchProps, SearchState> {
    public rows: Array<Test> = new Array<Test>();
    private apiService: ApiService;

    constructor(props: Readonly<SearchProps>) {
        super(props);
        this.apiService = new ApiService();
        this.state = {query: ""};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e: any) {
        this.setState({query: e.target.value});
        this.getTest(e.target.value);
    }

    async getTest(query: string) {
        const res = await this.apiService.getTest(query);
        console.log(res, 123123);
        this.rows = res.data.data;
        console.log(this.rows, 90909090);
    }

    initInput() {
        this.setState({query: ""});
    }

    render() {
        return (
            <Autocomplete
                id="combo-box-demo"
                options={this.rows}
                value={this.state.query}
                onKeyUp={this.handleChange}
                getOptionLabel={(option) => option.testNo}
                style={{width: 300}}
                renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined"/>}
            />
        );
    }
}

export default App;
