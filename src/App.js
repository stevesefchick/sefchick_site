import React, { Component } from 'react';
import './App.css';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme, MuiThemeProvider, withStyles } from '@material-ui/core/styles';
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
  }
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
                Wawa, Inc.<br/><br/>
                Over 15 years of experience working in a convenience retail industry, from a retail in-store position to a tenured Business Analyst Position in a customer-facing, digital environment. Currently responsible for the Wawa Mobile App, Wawa.com, and Wawarewards.com.<br/>

                <br/>
                Current Role:<br/>
                2014-present: Senior Business Analyst - Mobile and Digital Technologies<br/>
                <br/>

                Responsibilities:<br/>
                Development and creation of thoughtful user stories. <br/>
                Development and creation of test plans and test scripts. <br/>
                Building and maintaining relationships with the Digital Marketing Team, the Contact Center, Application Management, and a wide array of other business and IT partners.<br/>
                Support, problem solving, and deep diving into production challenges.<br/>

                <br/>
                Previous:<br/>
                2012-2014: Business Analyst - Store Operations<br/>
                2010-2012: QA Tester<br/>
                2003-2010: Store Associate<br/>
                </Typography>

            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper elevation={10}>
            <Typography>
                Wimbus Studios<br/><br/>
                Designed, coded, deployed, and promoted the video game "The Island of Eternal Struggle" with a team of three starting with just an idea. <br/>

                <br/>
                Current Role:<br/>
                2013 - present:  Developer/Co-Owner/Wearer of Many Hats<br/>
                <br/>

                Responsibilities:<br/>
                Development of an early access Steam title using C# utilizing the Monogame Framework.<br/>
                Project planning, brainstorming, and driving major releases along with my team members.<br/>
                Representing the game and the studio at game conferences.<br/>
                <br/>


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

        Games

        <Grid container justify='center' spacing={24}>
          <Grid item xs={4}>
            <Paper elevation={10}>
              [pics w/ carousel]
              <br/>
              The Island of Eternal Struggle
              <br/>
              Turn based RPG out on Steam Early Access
              <br/>
              I did: programming, game design, etc.
              <br/>
              Status: In Development
              <br/>
              Stuff to brag about:
              <ul>
              <li>
                thing number one
              </li>
              <li>
              thing number two
              </li>
              <li>
              thing number three
              </li>
              </ul>
            </Paper>
          </Grid>


          <Grid item xs={4}>
            <Paper elevation={10}>
              [pics w/ carousel]
              <br/>
              Meds
              <br/>
              A breakout-meets-Eternal Darkness mashup on XBLIG
              <br/>
              I did: programming, game design, etc.
              <br/>
              Status: Complete
              <br/>
              Stuff to brag about:
              <ul>
              <li>
                thing number one
              </li>
              <li>
              thing number two
              </li>
              <li>
              thing number three
              </li>
              </ul>
            </Paper>
          </Grid>

        </Grid>

      Web

              <Grid container justify='center' spacing={24}>
          <Grid item xs={4}>
            <Paper elevation={10}>
            Questline
            </Paper>
            </Grid>


          <Grid item xs={4}>
            <Paper elevation={10}>
            WimbusStudios.com
            </Paper>
            </Grid>
            </Grid>

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

      <Tooltip title="6+ years, multiple projects" aria-label="Add" TransitionComponent={Zoom}>
        <Chip label="C#" variant="outlined" color="primary" />
      </Tooltip>

      <Tooltip title="3+ years, multiple projects" aria-label="Add" TransitionComponent={Zoom}>
        <Chip label="Javascript" variant="outlined" color="primary" />
      </Tooltip>

      <Tooltip title="1 year, multiple projects" aria-label="Add" TransitionComponent={Zoom}>
        <Chip label="ReactJS" variant="outlined" color="primary" />
      </Tooltip>

      <Tooltip title="2+ years, multiple projects" aria-label="Add" TransitionComponent={Zoom}>
        <Chip label="Node.js" variant="outlined" color="primary" />
      </Tooltip>

      <Tooltip title="8+ years, multiple projects" aria-label="Add" TransitionComponent={Zoom}>
        <Chip label="HTML/CSS" color="primary" />
      </Tooltip>

      <Tooltip title="2+ years" aria-label="Add" TransitionComponent={Zoom}>
        <Chip label="HLSL"  variant="outlined" color="primary" />
      </Tooltip>

      <Tooltip title="2 years, primarily schoolwork" aria-label="Add" TransitionComponent={Zoom}>
        <Chip label="PHP" variant="outlined" color="primary" />
      </Tooltip>

      <Tooltip title="3+ years, multiple projects" aria-label="Add" TransitionComponent={Zoom}>
        <Chip label="Java" variant="outlined" color="primary" />
      </Tooltip>

      <Tooltip title="1 year, primarily schoolwork" aria-label="Add" TransitionComponent={Zoom}>
        <Chip label="C++" variant="outlined" color="primary" />
      </Tooltip>
      
      <Tooltip title="2 years" aria-label="Add" TransitionComponent={Zoom}>
        <Chip label="Flash" variant="outlined" color="primary" />
      </Tooltip>

            <br/>
            <br/>

      <Typography>
        data
      </Typography>

      <Tooltip title="4+ years" aria-label="Add" TransitionComponent={Zoom}>
        <Chip label="MySQL" variant="outlined" color="primary" />
      </Tooltip>

      <Tooltip title="3+ years" aria-label="Add" TransitionComponent={Zoom}>
        <Chip label="MongoDB" variant="outlined" color="primary" />
      </Tooltip>

      <Tooltip title="3+ years" aria-label="Add" TransitionComponent={Zoom}>
        <Chip label="Vertica" variant="outlined" color="primary" />
      </Tooltip>

      <Tooltip title="2+ years" aria-label="Add" TransitionComponent={Zoom}>
        <Chip label="Google Analytics" variant="outlined" color="primary" />
      </Tooltip>

      <Tooltip title="1 year" aria-label="Add" TransitionComponent={Zoom}>
        <Chip label="Google Firebase" variant="outlined" color="primary" />
      </Tooltip>



            <br/>
            <br/>


      <Typography>
        tools
      </Typography>

      <Tooltip title="4+ years" aria-label="Add" TransitionComponent={Zoom}>
        <Chip label="Jira/Confluence" variant="outlined" color="primary" />
      </Tooltip>

      <Tooltip title="2+ years" aria-label="Add" TransitionComponent={Zoom}>
        <Chip label="Slack" variant="outlined" color="primary" />
      </Tooltip>

      <Tooltip title="6+ years" aria-label="Add" TransitionComponent={Zoom}>
        <Chip label="MS Office Suite" variant="outlined" color="primary" />
      </Tooltip>

      <Tooltip title="4+ years" aria-label="Add" TransitionComponent={Zoom}>
        <Chip label="Postman" variant="outlined" color="primary" />
      </Tooltip>

      <Tooltip title="2+ years" aria-label="Add" TransitionComponent={Zoom}>
        <Chip label="QA Symphony" variant="outlined" color="primary" />
      </Tooltip>

      <Tooltip title="6+ years" aria-label="Add" TransitionComponent={Zoom}>
        <Chip label="GIMP" variant="outlined" color="primary" />
      </Tooltip>

      <Tooltip title="2+ years" aria-label="Add" TransitionComponent={Zoom}>
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

      <div className="AppHeader">
            <CssBaseline/>

      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <Typography variant="h3">
        stevesefchick.fyi
      </Typography>

      <br/><br/><br/><br/><br/><br/><br/><br/>

      </div>

<br/><br/>



        <Typography  variant="h4" id="fun_stuff">
          My Projects and Portfolio
        </Typography>

        {this.projectsportfolios()}


        <Typography  variant="h4" id="professional">
          Professional Experience
        </Typography>

                {this.professionalexp()}




        <Typography variant="h4" id="skills_bills">
          My skillset
        </Typography>

        {this.skillset()}

        <Typography  variant="h4" id="education">
          Education
        </Typography>

        {this.education()}

        <Typography variant="h4" id="it_me">
          About Me
        </Typography>

         {this.aboutme()}


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
