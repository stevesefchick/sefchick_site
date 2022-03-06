//React
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

//material ui
import { createMuiTheme, MuiThemeProvider, withStyles } from '@material-ui/core/styles';
import { CssBaseline, Tabs } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

//standalone pages
import AboutMe from './sections/aboutme.js';

//TODO: Identify Typography to use an updated font
//TODO: Define appropriate sections
//TODO: Add updated CSS
//TODO: Prune old content
//TODO: Prune old libraries and extensions

class App extends React.Component {
    render() {
        return (
        <div>

            

            <Grid container justify='center' spacing={24}>
            Hey, I'm Steve!
            </Grid>

            <Grid container justify='center' spacing={24}>
          <Grid item sm={4} xs ={10} >
                    <Card  raised>
                  <CardHeader title="About Me" />
                  <CardContent>
                      <Typography>


                            <AboutMe />
                            
                      </Typography>
                    </CardContent>
                    <CardActions  disableActionSpacing>
          
                  </CardActions>
                </Card> 
                </Grid>
            </Grid>



        </div>
      );

    }
  }
  
  ReactDOM.render(<App />, document.getElementById('root'))


  export default App;