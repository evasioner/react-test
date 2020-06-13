import React, {Component} from 'react';

export interface DashboardProps {
}

export interface DashboardState {
}

class Dashboard extends Component <DashboardProps, DashboardState> {
    constructor(props: Readonly<DashboardProps>) {
        super(props);
    }


    render() {
        return (
            <div></div>
        );
    }
}

export default Dashboard
