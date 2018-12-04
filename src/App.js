import React, { Component } from 'react';
import './App.css';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme, MuiThemeProvider, withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import { CssBaseline } from '@material-ui/core';
import Chip from '@material-ui/core/Chip';
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';
import indigo from '@material-ui/core/colors/indigo';
import pink from '@material-ui/core/colors/pink';
import red from '@material-ui/core/colors/red';
import cyan from '@material-ui/core/colors/cyan';


const styles = theme=> ({
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.primary,
    padding: theme.spacing.unit * 3,
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
    width: 240,
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


  aboutme()
  {
    return(
      <div >
      <Typography>
        about me section!
      </Typography>

      <br/>
      <br/>
      </div>
 
    )
  }

  professionalexp()
  {
    return(
      <div >
      <Typography>
        business business business business
      </Typography>

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
      <Typography>
        $$$$$$$$$$$$$$$$$$$$$$$$$$
      </Typography>

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
        call me
      </Typography>
      </div>
 
    )
  }


  render() {
    return (
      <div className="App">
      <CssBaseline/>
      <MuiThemeProvider theme={theme}>

        <Drawer variant="permanent" >
    
          <br/>
          <Button variant="outlined" size="large" href="#it_me">it me</Button>
          <br/>
          <Button variant="outlined" size="large" href="professional">a professional boy</Button>
          <br/>
          <Button variant="outlined" size="large" href="fun_stuff">fun stuff</Button>
          <br/>
          <Button variant="outlined" size="large" href="skills_bills">skills 4 billz</Button>
          <br/>
          <Button variant="outlined" size="large" href="education">source of loans</Button>
          <br/>
          <Button variant="outlined" size="large" href="contact">love me plz</Button>
          <br/>

        </Drawer>


        <Typography variant="h3">
          hey! i'm steve!
        </Typography>

              <br/>
              <br/>


        <Typography variant="h4" id="it_me">
          about me
        </Typography>

        {this.aboutme()}

        <Typography  variant="h4" id="professional">
          professional experience!
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
          education
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
