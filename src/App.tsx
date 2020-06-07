import React, {Component} from 'react';
import './App.css';
import {ApiService} from './services/api.service';
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@material-ui/core';
import {Test} from './interfaces/test';


class App extends Component {
    public rows: Array<Test>;
    private apiService: ApiService;

    constructor(props: Readonly<{}>) {
        super(props);
        this.apiService = new ApiService();
        this.rows = [
            {
                name: 'Frozen yoghurt',
                calories: 159,
                fat: 6.0,
                carbs: 24,
                protein: 4.0
            }
        ];
        this.getTest();
    }

    async getTest(): Promise<void> {
        console.log(1231313);
        const res = await this.apiService.getTest();
        this.rows = res.data;
    }

    render() {
        return (
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Dessert (100g serving)</TableCell>
                            <TableCell align="right">Calories</TableCell>
                            <TableCell align="right">Fat&nbsp;(g)</TableCell>
                            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                            <TableCell align="right">Protein&nbsp;(g)</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.rows.map((row: Test) => (
                            <TableRow key={row.name}>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.calories}</TableCell>
                                <TableCell align="right">{row.fat}</TableCell>
                                <TableCell align="right">{row.carbs}</TableCell>
                                <TableCell align="right">{row.protein}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        );
    }
}

export default App;
