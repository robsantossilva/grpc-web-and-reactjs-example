import React from 'react';
import {BrowserRouter, Switch, Route, Redirect, Link} from "react-router-dom";
import {
    AppBar,
    CssBaseline,
    Drawer,
    List,
    ListItem, ListItemIcon,
    ListItemText,
    MuiThemeProvider,
    Toolbar,
    Typography
} from "@material-ui/core";
import theme from "./theme";

import PageList from "./pages/List";
import PageForm from "./pages/Form";
//import LiveForm from "./pages/live/Form";

import DriveEta from '@material-ui/icons/DriveEta';
import {makeStyles} from "@material-ui/core/styles";

const drawerWidth = 200;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex'
    },
    appBar: {
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
        flexShrink: 0,
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

function App() {

  const classes = useStyles();

  return (
    <div className={classes.root}>
        <MuiThemeProvider theme={theme}>
            <CssBaseline/>
            <BrowserRouter basename={process.env.REACT_APP_BASE_URL}>
                <AppBar className={classes.appBar} position="fixed">
                    <Toolbar>
                        <Typography variant="h6">
                            Driver Manager
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer
                    classes={{
                        root: classes.drawer,
                        paper: classes.drawer,
                    }}
                    variant="permanent"
                    open
                >
                    <List>
                        <ListItem button component={Link} to={"/driver"}>
                            <ListItemIcon>
                                <DriveEta/>
                            </ListItemIcon>
                            <ListItemText primary={'Drivers'}/>
                        </ListItem>
                    </List>
                </Drawer>
                <main className={classes.content}>
                    <div className={classes.toolbar}/>

                    <Switch>
                        <Route path={'/driver'} component={PageList} exact={true}/>
                        <Route path={'/driver/create'} component={PageForm} exact={true}/>
                        
                        <Redirect exact from="/" to="/driver"/>
                    </Switch>
                </main>
            </BrowserRouter>
        </MuiThemeProvider>
    </div>
  );
}

export default App;