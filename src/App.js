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

      <Tooltip title="6+ years, multiple projects" aria-label="Add" TransitionComponent={Zoom}>
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
        other
      </Typography>

      <Tooltip title="2 years" aria-label="Add" TransitionComponent={Zoom}>
        <Chip label="Agile Methodology" variant="outlined" color="primary" />
      </Tooltip>

      <Tooltip title="2 years" aria-label="Add" TransitionComponent={Zoom}>
        <Chip label="Release Management" variant="outlined" color="primary" />
      </Tooltip>

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

        <Drawer variant="permanent" color="primary">
          <Typography variant="subtitle1">
          NOW! THAT'S WHAT I CALL STEVE!
          </Typography>          


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


        <Typography variant="subtitle" id="it_me">
          about me
        </Typography>

        {this.aboutme()}

        <Typography  variant="subtitle" id="professional">
          professional experience!
        </Typography>

        {this.professionalexp()}


        <Typography  variant="subtitle" id="fun_stuff">
          projects and portfolio
        </Typography>

        {this.projectsportfolios()}


        <Typography variant="subtitle" id="skills_bills">
          skillset!
        </Typography>

        {this.skillset()}


        <Typography  variant="subtitle" id="education">
          education
        </Typography>

        {this.education()}


        <Typography  variant="subtitle" id="contact">
          contact/follow me!
        </Typography>

                {this.contactinfo()}


      </MuiThemeProvider>

      </div>
    );
  }
}

export default withStyles(styles)(App);
