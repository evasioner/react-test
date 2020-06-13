import React, {Component} from 'react';
import {createStyles, Divider, Drawer, IconButton, List} from '@material-ui/core';
import clsx from 'clsx';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import {Theme, withStyles} from '@material-ui/core/styles';
import {mainListItems, secondaryListItems} from './menu.js';

export interface LnbProps {
    classes: any;
    open: boolean;
    handleDrawerClose: any;
}

const styles = (theme: Theme) => createStyles({
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },

    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: 240,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
        },
    },
});

class Lnb extends Component<LnbProps, any> {

    constructor(props: LnbProps) {
        super(props);
    }


    render() {
        const {classes} = this.props;
        return (
            <Drawer
                variant="permanent"
                classes={{
                    paper: clsx(classes.drawerPaper, !this.props.open && classes.drawerPaperClose),
                }}
                open={this.props.open}
            >
                <div className={classes.toolbarIcon}>
                    <IconButton onClick={this.props.handleDrawerClose}>
                        <ChevronLeftIcon/>
                    </IconButton>
                </div>
                <Divider/>
                <List>{mainListItems}</List>
                <Divider/>
                <List>{secondaryListItems}</List>
            </Drawer>
        );
    }
}

export default withStyles(styles)(Lnb)
