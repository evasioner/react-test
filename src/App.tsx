import React, {Component} from 'react';
import './App.css';
import Footer from './layout/footer';
import Header from './layout/header';
import Lnb from './layout/lnb';

interface AppState {
    open: boolean
}

class App extends Component <any, AppState> {

    constructor(props: Readonly<any>) {
        super(props);
        this.state = {
            open: true,
        }
        this.handleDrawerClose = this.handleDrawerClose.bind(this);
        this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
    }

    handleDrawerClose() {
        this.setState({open: false});
    }

    handleDrawerOpen() {
        this.setState({open: true});
    }

    render() {
        return (
            <div>
                <Header handleDrawerOpen={this.handleDrawerOpen}
                        open={this.state.open}></Header>
                <Lnb handleDrawerClose={this.handleDrawerClose}
                     open={this.state.open}></Lnb>
                <Footer></Footer>
                {/*<BrowserRouter>*/}
                {/*    <Switch>*/}
                {/*        <Route exact path="/" component={Dashboard}/>*/}
                {/*    </Switch>*/}
                {/*</BrowserRouter>*/}
            </div>
        );
    }
}

export default App;
