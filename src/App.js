import React, { Component } from 'react';
import './App.css';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme, MuiThemeProvider, withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { CssBaseline } from '@material-ui/core';
import Chip from '@material-ui/core/Chip';
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';
import pink from '@material-ui/core/colors/pink';
import red from '@material-ui/core/colors/red';
import cyan from '@material-ui/core/colors/cyan';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';


const styles = theme=> ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.primary,
    padding: theme.spacing.unit * 3,
  },
  drawerPaper: {
    width: 180,
  },
});

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
    fontFamily: [
      'Dosis',
    ].join(','),
    fontSize: 16,
  },
  drawer: {
    width: 180,
    flexShrink: 0,
    backgroundColor: red,
  },
  palette: {
    primary: cyan,
    secondary: pink,
    error: red,
    contrastThreshold: 3,
    tonalOffset: 0.2,
    type: 'dark',
  },
});



class App extends Component {

  state = {
    mobileOpen: false,
  };

  aboutme()
  {
    return(
      <div >
        <Grid container justify='center'>
          <Grid item xs={8}>
            <Paper elevation={10}>
          <Typography>
          I’m a creative maker driven to build amazing things.
          I have a varied, but balanced background, with experience in everything from requirements analysis, to design brainstorming, to development and deployment, and just about everything in between.
          I love to learn and crave challenge.
          <br /><br />
          On my spare time, I'm a friendly boy.
          <br />
          </Typography>
          </Paper>
        </Grid>
      </Grid>

      <br/>
      <br/>
      </div>
 
    )
  }

  professionalexp()
  {
    return(
      <div >

        <Grid container justify='center' spacing={24}>
          <Grid item xs={4}>
            <Paper elevation={10}>



              <Typography>
                Wawa, Inc.<br/>
                <br/>
                2014-present Business Analyst - Mobile and Digital Technologies<br/>
                2012-2014 Business Analyst - Store Operations<br/>
                2010-2012 QA Tester<br/>
                2003-2010 Store Associate<br/>
                </Typography>

            </Paper>
          </Grid>
          <Grid item xs={4}>

              <img src="https://image.shutterstock.com/z/stock-photo-princeton-new-jersey-usa-november-wawa-gas-station-store-749769307.jpg" width={175} height={175} />

            </Grid>
        </Grid>

        <br />

        <Grid container justify='center'  spacing={24}>
          <Grid item xs={4}>

            <img src="https://pbs.twimg.com/profile_images/470269005203116032/kbk9PxzT_400x400.png" width={175} height={175} />


          </Grid>
          <Grid item xs={4}>
            <Paper elevation={10}>
            <Typography>
                Wimbus Studios<br/>
                <br/>
                2013 - present - Developer/Co-Owner<br/>
              </Typography>
            </Paper>
            </Grid>
        </Grid>


            <br/>
            <br/>

      </div>
 
    )
  }

  
  projectsportfolios()
  {
    return(
      <div >
      <Typography>
        all the fun stuff i like to talk about!
      </Typography>

            <br/>
            <br/>

      </div>
 
    )
  }

  skillset()
  {
    return(
      <div >
      <Typography>
        code
      </Typography>

      <Tooltip title="6+ years, professional/personal" aria-label="Add" TransitionComponent={Zoom}>
        <Chip label="C#" variant="outlined" color="primary" />
      </Tooltip>

      <Tooltip title="8+ years, multiple projects" aria-label="Add" TransitionComponent={Zoom}>
        <Chip label="HTML/CSS" color="primary" />
      </Tooltip>

      <Tooltip title="2 years" aria-label="Add" TransitionComponent={Zoom}>
        <Chip label="HLSL"  variant="outlined" color="primary" />
      </Tooltip>

      <Tooltip title="1 year" aria-label="Add" TransitionComponent={Zoom}>
        <Chip label="ReactJS" variant="outlined" color="primary" />
      </Tooltip>

      <Tooltip title="2 years" aria-label="Add" TransitionComponent={Zoom}>
        <Chip label="Node.js" variant="outlined" color="primary" />
      </Tooltip>

      <Tooltip title="2 years" aria-label="Add" TransitionComponent={Zoom}>
        <Chip label="PHP" variant="outlined" color="primary" />
      </Tooltip>

      <Tooltip title="2 years" aria-label="Add" TransitionComponent={Zoom}>
        <Chip label="Java" variant="outlined" color="primary" />
      </Tooltip>

            <br/>
            <br/>

      <Typography>
        data
      </Typography>

      <Tooltip title="2 years" aria-label="Add" TransitionComponent={Zoom}>
        <Chip label="MySQL" variant="outlined" color="primary" />
      </Tooltip>

      <Tooltip title="2 years" aria-label="Add" TransitionComponent={Zoom}>
        <Chip label="MongoDB" variant="outlined" color="primary" />
      </Tooltip>

      <Tooltip title="2 years" aria-label="Add" TransitionComponent={Zoom}>
        <Chip label="Vertica" variant="outlined" color="primary" />
      </Tooltip>

      <Tooltip title="2 years" aria-label="Add" TransitionComponent={Zoom}>
        <Chip label="Google Tagging" variant="outlined" color="primary" />
      </Tooltip>

      <Tooltip title="2 years" aria-label="Add" TransitionComponent={Zoom}>
        <Chip label="Google Firebase" variant="outlined" color="primary" />
      </Tooltip>



            <br/>
            <br/>


      <Typography>
        tools
      </Typography>

      <Tooltip title="2 years" aria-label="Add" TransitionComponent={Zoom}>
        <Chip label="Jira/Confluence" variant="outlined" color="primary" />
      </Tooltip>

      <Tooltip title="2 years" aria-label="Add" TransitionComponent={Zoom}>
        <Chip label="Slack" variant="outlined" color="primary" />
      </Tooltip>

      <Tooltip title="2 years" aria-label="Add" TransitionComponent={Zoom}>
        <Chip label="MS Office Suite" variant="outlined" color="primary" />
      </Tooltip>

      <Tooltip title="2 years" aria-label="Add" TransitionComponent={Zoom}>
        <Chip label="Postman" variant="outlined" color="primary" />
      </Tooltip>

      <Tooltip title="2 years" aria-label="Add" TransitionComponent={Zoom}>
        <Chip label="QA Symphony" variant="outlined" color="primary" />
      </Tooltip>

      <Tooltip title="2 years" aria-label="Add" TransitionComponent={Zoom}>
        <Chip label="GIMP" variant="outlined" color="primary" />
      </Tooltip>

      <Tooltip title="2 years" aria-label="Add" TransitionComponent={Zoom}>
        <Chip label="Steam SDK" variant="outlined" color="primary" />
      </Tooltip>

            <br/>
            <br/>


      <Typography>
        personal
      </Typography>

      <Tooltip title="2 years" aria-label="Add" TransitionComponent={Zoom}>
        <Chip label="Communication" variant="outlined" color="primary" />
      </Tooltip>

      <Tooltip title="2 years" aria-label="Add" TransitionComponent={Zoom}>
        <Chip label="Problem Solving" variant="outlined" color="primary" />
      </Tooltip>

      <Tooltip title="2 years" aria-label="Add" TransitionComponent={Zoom}>
        <Chip label="Self-Motivation" variant="outlined" color="primary" />
      </Tooltip>

      <Tooltip title="2 years" aria-label="Add" TransitionComponent={Zoom}>
        <Chip label="Adaptability" variant="outlined" color="primary" />
      </Tooltip>

      <Tooltip title="2 years" aria-label="Add" TransitionComponent={Zoom}>
        <Chip label="Creativity" variant="outlined" color="primary" />
      </Tooltip>

      <Tooltip title="2 years" aria-label="Add" TransitionComponent={Zoom}>
        <Chip label="Teamwork" variant="outlined" color="primary" />
      </Tooltip>

            <br/>
            <br/>


      <Typography>
        concepts
      </Typography>

      <Tooltip title="2 years" aria-label="Add" TransitionComponent={Zoom}>
        <Chip label="Agile Methodology" variant="outlined" color="primary" />
      </Tooltip>
      <Tooltip title="2 years" aria-label="Add" TransitionComponent={Zoom}>
        <Chip label="SDLC principles" variant="outlined" color="primary" />
      </Tooltip>
      <Tooltip title="2 years" aria-label="Add" TransitionComponent={Zoom}>
        <Chip label="Release Management" variant="outlined" color="primary" />
      </Tooltip>
            <br/>
            <br/>


      <Typography>
        other
      </Typography>

      <Tooltip title="2 years" aria-label="Add" TransitionComponent={Zoom}>
        <Chip label="Sharepoint" variant="outlined" color="primary" />
      </Tooltip>

      <br/>
      <br/>

      </div>
 
    )
  }

  
  education()
  {
    return(
      <div >

        <Grid container justify='center'>
          <Grid item xs={8}>
            <Paper elevation={10}>

      <Typography>
      2018 - BACHELOR’S <br />
Software Development and Design from Wilmington University<br />
Graduated with honors<br/>

<br />

2011 - ASSOCIATE’S <br />
Game Design and Development from Camden County College <br />

      </Typography>

          </Paper>
        </Grid>
      </Grid>



            <br/>
            <br/>

      </div>
 
    )
  }

  contactinfo()
  {
    return(
      <div >
      <Typography>
        email / linkedin / twitter? / github / other?
      </Typography>
      </div>
 
    )
  }


  render() {
    return (
      <div className="App">
      <CssBaseline/>

      <MuiThemeProvider theme={theme}>

      <AppBar>
        <Toolbar variant="dense">
        <Button variant="outlined" size="large" href="#it_me">about me</Button>
        <Button variant="outlined" size="large" href="#professional">professional experience</Button>
        <Button variant="outlined" size="large" href="#fun_stuff">fun stuff</Button>
        <Button variant="outlined" size="large" href="#skills_bills">skills 4 billz</Button>
        <Button variant="outlined" size="large" href="#education">source of loans</Button>
        <Button variant="outlined" size="large" href="#contact">love me plz</Button>
        </Toolbar>
      </AppBar>

      {/*

        <Drawer variant="permanent" open >
    
          <br/>
          <Button variant="outlined" size="large" href="#it_me">about me</Button>
          <br/>
          <Button variant="outlined" size="large" href="#professional">professional experience</Button>
          <br/>
          <Button variant="outlined" size="large" href="#fun_stuff">fun stuff</Button>
          <br/>
          <Button variant="outlined" size="large" href="#skills_bills">skills 4 billz</Button>
          <br/>
          <Button variant="outlined" size="large" href="#education">source of loans</Button>
          <br/>
          <Button variant="outlined" size="large" href="#contact">love me plz</Button>
          <br/>

        </Drawer>
    */}
        <Typography variant="h3">
          Hello! I'm Steve Sefchick
        </Typography>

              <br/>
              <br/>


        <Typography variant="h4" id="it_me">
          About Me
        </Typography>

        {this.aboutme()}

        <Typography  variant="h4" id="professional">
          My Experience
        </Typography>

        {this.professionalexp()}


        <Typography  variant="h4" id="fun_stuff">
          projects and portfolio
        </Typography>

        {this.projectsportfolios()}


        <Typography variant="h4" id="skills_bills">
          skillset!
        </Typography>

        {this.skillset()}


        <Typography  variant="h4" id="education">
          Education
        </Typography>

        {this.education()}


        <Typography  variant="h4" id="contact">
          contact/follow me!
        </Typography>

                {this.contactinfo()}


      </MuiThemeProvider>

      </div>

    );
  }
}

export default withStyles(styles)(App);
