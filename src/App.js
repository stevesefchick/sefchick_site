import React, { Component } from 'react';
import './App.css';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme, MuiThemeProvider, withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import { CssBaseline } from '@material-ui/core';

const styles = theme=> ({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
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
    fontFamily: [
      'Ubuntu Condensed',
    ].join(','),
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
      <MuiThemeProvider theme={theme}>

        <Drawer variant="permanent" color="primary">
          <Typography variant="subtitle1">
          NOW! THAT'S WHAT I CALL STEVE!
          </Typography>          


          <br/>
          <Button variant="contained" color="secondary"> oh dang</Button>
          <br/>
          <Button variant="contained"> say what</Button>
          <br/>
          <Button variant="contained"> aw heck</Button>
          <br/>

          <br/>
          <Button variant="outlined"> oh dang</Button>
          <br/>
          <Button variant="outlined"> say what</Button>
          <br/>
          <Button variant="outlined"> aw heck</Button>
          <br/>


          <br/>
          <Button size="large"> oh dang</Button>
          <br/>
          <Button size="large"> say what</Button>
          <br/>
          <Button size="large"> aw heck</Button>
          <br/>



        </Drawer>

        <Typography variant="h3">
          hey! i'm steve sefchick and this is my site
        </Typography>

        <Typography>
          this will be a section where I talk about myself a little
        </Typography>

        <Typography>
          this will be a section about my portfolio and projects and crap
        </Typography>

        <Typography>
          this will be a section with my skills listed out all pretty
        </Typography>

        <Typography>
          this will be a footer or something.
        </Typography>

      </MuiThemeProvider>

      </div>
    );
  }
}

export default withStyles(styles)(App);
