import React, {Component} from 'react';
import './App.css';
import Footer from './layout/footer';
import Header from './layout/header';
import Lnb from './layout/lnb';
import {Theme, withStyles} from '@material-ui/core/styles';
import {Box, Container, createStyles} from '@material-ui/core';

interface AppState {
    open: boolean
}

const styles = (theme: Theme) => createStyles({
    root: {
        display: 'flex',
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    }
});

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
        const {classes} = this.props;
        return (
            <div>
                <Header handleDrawerOpen={this.handleDrawerOpen}
                        open={this.state.open}></Header>
                <Lnb handleDrawerClose={this.handleDrawerClose}
                     open={this.state.open}></Lnb>
                <main className={classes.content}>
                    <div className={classes.appBarSpacer}/>
                    <Container maxWidth="lg" className={classes.container}>
                        <Box pt={4}>
                            <Footer></Footer>
                        </Box>
                    </Container>
                </main>
            </div>
        );
    }
}

export default withStyles(styles)(App)
