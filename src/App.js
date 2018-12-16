import React, { Component } from 'react';
import './App.css';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme, MuiThemeProvider, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { CssBaseline } from '@material-ui/core';
import Chip from '@material-ui/core/Chip';
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';
import pink from '@material-ui/core/colors/pink';
import red from '@material-ui/core/colors/red';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IconButton from '@material-ui/core/IconButton';

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
  card: {
    maxWidth: 500,
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
    //primary: cyan,
    primary:{
      main: '#000000',
    },
    secondary: {
      main: '#32253f',
    },
    error: red,
    contrastThreshold: 3,
    tonalOffset: 0.2,
    type: 'dark',
  },
  /*
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginRight: -8,
    },
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  */
});



class App extends Component {

  state = {
    mobileOpen: false,
    state : { expanded: false }
  };


  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  aboutme(classes)
  {



    return(
      <div >

        <Grid container justify='center' spacing={24}>
          <Grid item xs={4}>
          <Card className={classes.card} raised='true'>
        <CardHeader title="About Me" />
        <CardContent>
            <Typography>
                I’m a creative maker driven to build amazing things.
                  I have a varied, but balanced background, with experience in everything from requirements analysis, to design brainstorming, to development and deployment, and just about everything in between.
                  I love to learn and crave challenge.
                  <br /><br />
                  On my spare time, I'm a friendly boy.
                  <br />
            </Typography>
          </CardContent>
          <CardActions className={classes.actions} disableActionSpacing>
 
        </CardActions>
      </Card> 
      </Grid>
      </Grid>

      <br/>
      <br/>
      </div>
 
    )
  }

  professionalexp(classes)
  {
    return(
      <div >


        <Grid container justify='center' spacing={24}>
          <Grid item xs={4}>
          <Card className={classes.card} raised='true'>
        <CardHeader title="Wawa, Inc." />
        <CardContent>
            <Typography>
                Over 15 years of experience working in a convenience retail industry, from a retail in-store position to a tenured Business Analyst Position in a customer-facing, digital environment. Currently responsible for the Wawa Mobile App, Wawa.com, and Wawarewards.com.<br/>

                <br/>
                Current Role:<br/>
                2014-present: Senior Business Analyst - Mobile and Digital Technologies<br/>

                <br/>

                Responsibilities:<br/>
                <ul>
                  <li>
                  Development and creation of thoughtful user stories<br/>
                  </li>
                  <li>
                  Development and creation of test plans and test scripts<br/>
                  </li>
                  <li>
                  Building and maintaining relationships with the Digital Marketing Team, the Contact Center, Application Management, and a wide array of other business and IT partners<br/>
                  </li>
                  <li>
                  Support, problem solving, and deep diving into production challenges<br/>
                  </li>
                </ul>

                <br/>

                Proudest Moments:<br/>
                <ul>
                  <li>
                  Helped drive initiatives such as the Mobile App launch (and redesign), Mobile Ordering, and In App Payment<br/>
                  </li>
                  <li>
                  Nominated for corporate "Wings of Excellence" award for improving and streamlining our mobile testing progress<br/>
                  </li>
                </ul>


                <br/>
                Previous:<br/>
                2012-2014: Business Analyst - Store Operations<br/>
                2010-2012: QA Tester<br/>
                2003-2010: Store Associate<br/>
            </Typography>
          </CardContent>
          <CardActions className={classes.actions} disableActionSpacing>
 
        </CardActions>
      </Card> 

            </Grid>
            <Grid item xs={4}>
          <Card className={classes.card} raised='true'>
        <CardHeader title="Wimbus Studios" />
        <CardContent>
            <Typography>
                Designed, coded, deployed, and promoted the video game "The Island of Eternal Struggle" with a team of three starting with just an idea. <br/>

                <br/>
                Current Role:<br/>
                2013 - present:  Developer/Co-Owner/Wearer of Many Hats<br/>
                <br/>

                Responsibilities:<br/>
                <ul>
                  <li>
                  Development of an early access Steam title using C# utilizing the Monogame Framework<br/>
                  </li>
                  <li>
                  Project planning, brainstorming, and driving major releases along with my team members<br/>
                  </li>
                  <li>
                  Representing the game and the studio at game conferences<br/>
                  </li>
                </ul>

            </Typography>
          </CardContent>
          <CardActions className={classes.actions} disableActionSpacing>
 
        </CardActions>
      </Card> 
      </Grid>
      </Grid>

        <br/>
        <br/>
      </div>
 



    )
  }

  
  projectsportfolios(classes)
  {
    return(
      <div >

      <Typography variant='h6' align='center'>
      Games
      </Typography>

      <Typography>
        <Grid container justify='center' spacing={24}>
          <Grid item xs={4}>

          <Card className={classes.card} raised='true'>
        <CardHeader title="The Island of Eternal Struggle" />
        <CardContent>
            <Typography>
            Turn based RPG out on Steam Early Access. <br/>
            <br/>

            Stuff I did:<br/>
            <ul>
            <li>Coded the entire game using C#/Monogame Framework</li>
            <li>Assisted in the game design process, especially combat and character class mechanics</li>
            <li>Built a custom particle effect editor</li>
            <li>Showcased the game at over a dozen different local gaming events</li>
            <li>Led the process of establishing the Wimbus Studio business and publishing the game on Steam and itch.io</li>
            </ul>
            Links:<br/>
            <ul>
            <li><a href="https://store.steampowered.com/app/534240/The_Island_of_Eternal_Struggle/" target="_blank">Steam link</a></li>
            <li><a href="https://wimbusstudios.itch.io/the-island-of-eternal-struggle" target="_blank">itch.io link</a></li>
            <li><a href="https://youtu.be/Wr59M17RxNE" target="_blank">Trailer</a></li>
            <li><a href="http://www.siliconera.com/2014/10/11/nun-viking-discoman-walk-rpg/" target="_blank">Siliconera Preview</a></li>
            <li><a href="https://www.youtube.com/watch?v=neYHKyXGUHs" target="_blank">CrispyNoodle video interview</a></li>
            <li><a href="https://www.youtube.com/watch?v=jup2EBn-2Fc" target="_blank">AverageGiants LetsPlay</a></li>
            </ul>
              <br/>
              Status: In Development
              <br/>
            </Typography>
          </CardContent>
          <CardActions className={classes.actions} disableActionSpacing>
 
        </CardActions>
      </Card> 

          </Grid>


          <Grid item xs={4}>
          <Card className={classes.card} raised='true'>
        <CardHeader title="Meds" />
        <CardContent>
            <Typography>
            A breakout-meets-Eternal Darkness mashup on XBLIG<br/>
              <br/>
              Stuff I did:<br/>
            <ul>
            <li>Coded the entire game using C#/XNA Framework</li>
            <li>Designed the game and contributed a large portion of art assets</li>
            <li>Published the game on XBLIG</li>
            </ul>
            Links:<br/>
            <ul>
            <li><a href="https://www.youtube.com/watch?v=Wr5SFGFrlH0" target="_blank">Meds Trailer</a></li>
            <li><a href="https://www.wired.com/2010/07/meds-xbox-indie/" target="_blank">Wired.com Review</a></li>
            </ul>
              <br/>
              <br/>
              Status: Complete
            </Typography>
          </CardContent>
          <CardActions className={classes.actions} disableActionSpacing>
 
        </CardActions>
      </Card> 

          </Grid>

        </Grid>

      <br/>
      
      <Typography variant='h6' align='center'>
      Web
      </Typography>


      <Grid container justify='center' spacing={24}>
          <Grid item xs={4}>

          <Card className={classes.card} raised='true'>
        <CardHeader title="WimbusStudios.com" />
        <CardContent>
            <Typography>
           cool site 
            </Typography>
          </CardContent>
          <CardActions className={classes.actions} disableActionSpacing>
 
        </CardActions>
      </Card> 

          </Grid>


          <Grid item xs={4}>
          <Card className={classes.card} raised='true'>
        <CardHeader title="Questline" />
        <CardContent>
            <Typography>
wip
            </Typography>
          </CardContent>
          <CardActions className={classes.actions} disableActionSpacing>
 
        </CardActions>
      </Card> 

          </Grid>

        </Grid>


      </Typography>

            <br/>
            <br/>

      </div>
 
    )
  }

  skillset(classes)
  {
    return(
      <div >

        <Grid container justify='center' spacing={24}>
          <Grid item xs={3}>
          <Card className={classes.card} raised='true'>
        <CardHeader title="Code" />
        <CardContent>


<Tooltip title="6+ years, multiple projects" aria-label="Add" TransitionComponent={Zoom}>
        <Chip label="C#" color="primary" />
      </Tooltip>

      <Tooltip title="3+ years, multiple projects" aria-label="Add" TransitionComponent={Zoom}>
        <Chip label="Javascript" color="primary" />
      </Tooltip>

      <Tooltip title="1 year, multiple projects" aria-label="Add" TransitionComponent={Zoom}>
        <Chip label="ReactJS"  color="primary" />
      </Tooltip>

      <Tooltip title="2+ years, multiple projects" aria-label="Add" TransitionComponent={Zoom}>
        <Chip label="Node.js" color="primary" />
      </Tooltip>

      <Tooltip title="8+ years, multiple projects" aria-label="Add" TransitionComponent={Zoom}>
        <Chip label="HTML/CSS" color="primary" />
      </Tooltip>

      <Tooltip title="2+ years" aria-label="Add" TransitionComponent={Zoom}>
        <Chip label="HLSL"  color="primary" />
      </Tooltip>

      <Tooltip title="2 years, primarily schoolwork" aria-label="Add" TransitionComponent={Zoom}>
        <Chip label="PHP" color="primary" />
      </Tooltip>

      <Tooltip title="3+ years, multiple projects" aria-label="Add" TransitionComponent={Zoom}>
        <Chip label="Java" color="primary" />
      </Tooltip>

      <Tooltip title="1 year, primarily schoolwork" aria-label="Add" TransitionComponent={Zoom}>
        <Chip label="C++" color="primary" />
      </Tooltip>
      
      <Tooltip title="2 years" aria-label="Add" TransitionComponent={Zoom}>
        <Chip label="Flash" color="primary" />
      </Tooltip>


          </CardContent>
      </Card> 


          </Grid>

          <Grid item xs={3}>
          <Card className={classes.card} raised='true'>
        <CardHeader title="Data" />
        <CardContent>

     <Tooltip title="4+ years" aria-label="Add" TransitionComponent={Zoom}>
        <Chip label="MySQL" color="primary" />
      </Tooltip>

      <Tooltip title="3+ years" aria-label="Add" TransitionComponent={Zoom}>
        <Chip label="MongoDB"  color="primary" />
      </Tooltip>

      <Tooltip title="3+ years" aria-label="Add" TransitionComponent={Zoom}>
        <Chip label="Vertica" color="primary" />
      </Tooltip>

      <Tooltip title="2+ years" aria-label="Add" TransitionComponent={Zoom}>
        <Chip label="Google Analytics" color="primary" />
      </Tooltip>

      <Tooltip title="1 year" aria-label="Add" TransitionComponent={Zoom}>
        <Chip label="Google Firebase" color="primary" />
      </Tooltip>

          </CardContent>
      </Card> 


          </Grid>


         <Grid item xs={3}>
          <Card className={classes.card} raised='true'>
        <CardHeader title="Tools" />
        <CardContent>

      <Tooltip title="2+ years" aria-label="Add" TransitionComponent={Zoom}>
        <Chip label="Git" color="primary" />
      </Tooltip>

      <Tooltip title="4+ years" aria-label="Add" TransitionComponent={Zoom}>
        <Chip label="Jira/Confluence" color="primary" />
      </Tooltip>

      <Tooltip title="2+ years" aria-label="Add" TransitionComponent={Zoom}>
        <Chip label="Slack" color="primary" />
      </Tooltip>

      <Tooltip title="6+ years" aria-label="Add" TransitionComponent={Zoom}>
        <Chip label="MS Office Suite" color="primary" />
      </Tooltip>

      <Tooltip title="4+ years" aria-label="Add" TransitionComponent={Zoom}>
        <Chip label="Postman" color="primary" />
      </Tooltip>

      <Tooltip title="2+ years" aria-label="Add" TransitionComponent={Zoom}>
        <Chip label="QA Symphony" color="primary" />
      </Tooltip>

      <Tooltip title="6+ years" aria-label="Add" TransitionComponent={Zoom}>
        <Chip label="GIMP" color="primary" />
      </Tooltip>

      <Tooltip title="2+ years" aria-label="Add" TransitionComponent={Zoom}>
        <Chip label="Steam SDK" color="primary" />
      </Tooltip>

      <Tooltip title="1 year" aria-label="Add" TransitionComponent={Zoom}>
        <Chip label="Butler" color="primary" />
      </Tooltip>

          </CardContent>
      </Card> 


          </Grid>
</Grid>
<Grid container justify='center' spacing={24}>



   <Grid item xs={3}>
          <Card className={classes.card} raised='true'>
        <CardHeader title="Interpersonal" />
        <CardContent>



      <Tooltip title="2 years" aria-label="Add" TransitionComponent={Zoom}>
        <Chip label="Communication" color="primary" />
      </Tooltip>

      <Tooltip title="2 years" aria-label="Add" TransitionComponent={Zoom}>
        <Chip label="Problem Solving"  color="primary" />
      </Tooltip>

      <Tooltip title="2 years" aria-label="Add" TransitionComponent={Zoom}>
        <Chip label="Self-Motivation" color="primary" />
      </Tooltip>

      <Tooltip title="2 years" aria-label="Add" TransitionComponent={Zoom}>
        <Chip label="Adaptability" color="primary" />
      </Tooltip>

      <Tooltip title="2 years" aria-label="Add" TransitionComponent={Zoom}>
        <Chip label="Creativity" color="primary" />
      </Tooltip>

      <Tooltip title="2 years" aria-label="Add" TransitionComponent={Zoom}>
        <Chip label="Teamwork" color="primary" />
      </Tooltip>

          </CardContent>
      </Card> 


          </Grid>


<Grid item xs={3}>
          <Card className={classes.card} raised='true'>
        <CardHeader title="Concepts" />
        <CardContent>

      <Tooltip title="2 years" aria-label="Add" TransitionComponent={Zoom}>
        <Chip label="Agile Methodology" color="primary" />
      </Tooltip>
      <Tooltip title="2 years" aria-label="Add" TransitionComponent={Zoom}>
        <Chip label="SDLC principles" color="primary" />
      </Tooltip>
      <Tooltip title="2 years" aria-label="Add" TransitionComponent={Zoom}>
        <Chip label="Release Management" color="primary" />
      </Tooltip>

          </CardContent>
      </Card> 


          </Grid>


      <Grid item xs={3}>
          <Card className={classes.card} raised='true'>
        <CardHeader title="Other" />
        <CardContent>

      <Tooltip title="2 years" aria-label="Add" TransitionComponent={Zoom}>
        <Chip label="Sharepoint" color="primary" />
      </Tooltip>

          </CardContent>
      </Card> 

          </Grid>

          </Grid>



      </div>
 
    )
  }

  
  education(classes)
  {
    return(
      <div >

        <Grid container justify='center' spacing={24}>
          <Grid item xs={4}>
          <Card className={classes.card} raised='true'>
        <CardHeader title="Bachelor's Degree in Software Development and Design" />
        <CardContent>
            <Typography>
           Wilmington University<br/>
           Graduated in 2018<br/>
           Graduated with Honor <br/>
            </Typography>
          </CardContent>
          <CardActions className={classes.actions} disableActionSpacing>
 
        </CardActions>
      </Card> 
      
      </Grid>
      <br/>
      <Grid item xs={4}>
      <Card className={classes.card} raised='true'>
        <CardHeader title="Associate's Degree in Game Design and Development" />
        <CardContent>
            <Typography>
           Camden County College<br/>
           Graduated in 2011<br/>
            </Typography>
          </CardContent>
          <CardActions className={classes.actions} disableActionSpacing>
 
        </CardActions>
      </Card> 

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




      
      <br/>
        <br/>
      </div>
 
    )
  }


  render() {
    const { classes } = this.props;

    return (



      <div className="App">
      <CssBaseline/>

      <MuiThemeProvider theme={theme}>

      <AppBar>
        <Toolbar variant="dense">
        stevesefchick.fyi!
        <Button variant="outlined" size="large" href="#it_me">about me</Button>
        <Button variant="outlined" size="large" href="#fun_stuff">portfolio</Button>
        <Button variant="outlined" size="large" href="#professional">professional experience</Button>
        <Button variant="outlined" size="large" href="#skills_bills">skillset</Button>
        <Button variant="outlined" size="large" href="#education">education</Button>
        <Button variant="outlined" size="large" href="#contact">contact</Button>
        </Toolbar>
      </AppBar>


      <div className="AppHeader">
            <CssBaseline/>

      <br/><br/><br/><br/>
      <Typography variant="h1" align='center'>
        stevesefchick.fyi
      </Typography>

      <br/><br/><br/>

      </div>

<br/><br/>



        <Typography variant="h4" id="it_me" align='center'>
          Hi, I'm Steve!
        </Typography>

         {this.aboutme(classes)}

        <Typography  variant="h4" id="fun_stuff" align='center'>
          My Projects and Portfolio
        </Typography>

        {this.projectsportfolios(classes)}


        <Typography  variant="h4" id="professional" align='center'>
          Professional Experience
        </Typography>

                {this.professionalexp(classes)}


        <Typography variant="h4" id="skills_bills" align='center'>
          My skillset
        </Typography>

        {this.skillset(classes)}

        <Typography  variant="h4" id="education" align='center'>
          Education
        </Typography>

        {this.education(classes)}

        <Typography  variant="h4" id="contact" align='center'>
          contact/follow me!
        </Typography>

        {this.contactinfo(classes)}


      </MuiThemeProvider>

      </div>

    );
  }
}

export default withStyles(styles)(App);
