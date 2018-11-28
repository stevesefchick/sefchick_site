import React, { Component } from 'react';
import './App.css';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme, MuiThemeProvider, withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import { CssBaseline } from '@material-ui/core';

const styles = theme=> ({
  root: {
    width: '100%',
    maxWidth: 500,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  },
});

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  drawer: {
    width: 240,
    flexShrink: 0,
  },
  palette:{"common":
    {black:"#000",
    white:"#fff"},
  background:
    {paper:"rgba(199, 138, 251, 1)",
    default:"rgba(217, 212, 212, 1)"},
  primary:
    {light:"rgba(106, 113, 154, 1)",
    main:"rgba(91, 8, 130, 1)",
    dark:"rgba(95, 102, 141, 1)",
    contrastText:"#fff"},
  secondary:
    {light:"#ff4081",
    main:"rgba(147, 145, 145, 1)",
    dark:"#c51162",
    contrastText:"#fff"},
  error:{"light":"#e57373",
  main:"rgba(212, 26, 13, 1)",
  dark:"#d32f2f",
  contrastText:"#fff"},
  text:
    {primary:"rgba(12, 1, 1, 0.87)",
    secondary:"rgba(5, 1, 1, 0.54)",
    disabled:"rgba(14, 1, 1, 0.38)",
    hint:"rgba(0, 0, 0, 0.38)"}
  },
});

class App extends Component {
  render() {
    return (
      <div className="App">
      <CssBaseline/>
      <createMuiTheme>

        <Drawer variant="permanent" color="primary">
          Hey! I'm Steve!
          <br/>
          <Button> oh dang</Button>
          <Button> say what</Button>
          <Button> aw heck</Button>
        </Drawer>

        <Typography>
          this is my dang internet website 
        </Typography>

      </createMuiTheme>

      </div>
    );
  }
}

export default withStyles(styles)(App);
