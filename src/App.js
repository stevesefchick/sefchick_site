//stevesefchick.fyi 
//source code for reactJS project for Steve Sefchick's portfolio site
//Created by Steve Sefchick
//2018-2022

//TODO: Add a what I'm working on section
//TODO: Add a link to current resume
//TODO: Add support for larger screens
//TODO: Add video/trailers

//React
import React, { Component } from 'react';
//Particles
//import Particles from "react-tsparticles";

//material-ui
import Typography from '@material-ui/core/Typography';
import { createMuiTheme, MuiThemeProvider, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { CssBaseline, Tabs } from '@material-ui/core';
import Chip from '@material-ui/core/Chip';
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';
import red from '@material-ui/core/colors/red';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import CodeIcon from '@material-ui/icons/Code';
import ArtTrackIcon from '@material-ui/icons/ArtTrack';
import GamesIcon from '@material-ui/icons/Games';
//import WebIcon from '@material-ui/icons/Web';
import GroupIcon from '@material-ui/icons/Group';
import PersonIcon from '@material-ui/icons/Person';
import DoneIcon from '@material-ui/icons/DoneOutline';

//CSS
import './App.css';

//breakpoint stuff
import Hidden from '@material-ui/core/Hidden';

//standalone pages
import AboutMe from './sections/aboutme.js';
import ContactMe from './sections/contactme.js';
//professional experience
import ExpWawa from './sections/expwawa.js';
//portfolio
import PortIES from './sections/portIES.js';
import PortMeds from './sections/portmeds.js';
//import PortWimbusDotCom from './sections/portwimbusdotcom.js';
import PortBizBot from './sections/portbizbot.js';
import PortLife4Bot from './sections/portlife4bot.js';
import PortFakeDDRBot from './sections/portfakeddrbot.js';
import PortTheMark from './sections/portTheMark.js';
//images
import steveimage from './images/ss_whitefill.png';
//<img src ={steveimage} alt="it's steve!" width="250" height ="250" />


const styles = theme=> ({
  "@global":{
    html: {
      fontSize: 16,
      [theme.breakpoints.up("xs")]: {
        fontSize: 14
      },
      [theme.breakpoints.up("sm")]: {
        fontSize: 18
      },
      [theme.breakpoints.up("md")]: {
        fontSize: 20
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: 24
      },
      [theme.breakpoints.up("xl")]: {
        fontSize: 28
      },
    }
  },
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 3,
    backgroundColor: theme.palette.background.primary,
    padding: theme.spacing.unit * 2,
  },
  drawerPaper: {
    width: 180,
  },
  card: {
    maxWidth: 600,
  },
  wawacard: {
    maxWidth: 900,
  },
  projectcard: {
    maxWidth: 800,
  },
  cardlong: {
    //maxWidth:1000,
  },
  educard: {
    maxWidth:900,
  },
});


const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
    fontFamily: [
      'Dosis',
    ].join(','),
    htmlFontSize: 12,
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
  }
});


class App extends Component {

  state = {
    mobileOpen: false
  };


  aboutme(classes)
  {

    return(
      <div style={{ padding: 10}} >



        <Grid container justify='center' spacing={8}>

          <Grid item sm={10} xs ={10}>
          <Card className={classes.cardlong} justify='center' raised>
        <CardHeader title="About Me" />
        <CardContent>
            <Typography>


                  <AboutMe />
                  
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
      <div style={{ padding: 20}} >

        <Grid container justify='center' spacing={24}>
          <Grid item sm={5} xs ={10} >
          <Card className={classes.wawacard} raised >
        <CardHeader title="Wawa, Inc." subheader="2003-present" />
        <CardMedia 
        component="img" 
        image={require('./images/cardcontentimages/wawacard.png')} 
        height="80" 
        title="Wawa, Inc." />
        <CardContent>
            <Typography>
                <ExpWawa />
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
      <div style={{ padding: 20}} >


      <Typography>
        <Grid container justify='center' spacing={24}>


        <Grid item sm={6} xs ={10} >
          <Card className={classes.projectcard} raised >
        <CardHeader title="LIFE4" subheader="2019-present" />
        <CardMedia 
        component="img" 
        image={require('./images/cardcontentimages/life4card.png')} 
        height="80" 
        title="LIFE4" />
        <CardContent>
            <Typography>
              <PortLife4Bot />
            </Typography>
          </CardContent>
          <CardActions className={classes.actions} disableActionSpacing>
 
          <Tooltip title="Completed/Ongoing Project" aria-label="Completed/Ongoing Project" TransitionComponent={Zoom}>
            <IconButton aria-label="Completed/Ongoing Project">
            <DoneIcon />
          </IconButton>
          </Tooltip>

          <Tooltip title="Code" aria-label="Code" TransitionComponent={Zoom}>
            <IconButton aria-label="Code">
            <CodeIcon />
          </IconButton>
          </Tooltip>

          <Tooltip title="Solo project with community feedback" aria-label="Solo project with community feedback" TransitionComponent={Zoom}>
            <IconButton aria-label="Group Project">
            <GroupIcon />
          </IconButton>
          </Tooltip>
 
        </CardActions>
      </Card> 
          </Grid>




          <Grid item sm={6} xs ={10} >

          <Card className={classes.projectcard} raised >
        <CardHeader title="The Island of Eternal Struggle" subheader="2013-2021" />
        <CardMedia 
        component="img" 
        image={require('./images/cardcontentimages/iescard.png')} 
        height="80" 
        title="The Island of Eternal Struggle" />
        <CardContent>
            <Typography>
              <PortIES />
            </Typography>
          </CardContent>
          
          <CardActions className={classes.actions} disableActionSpacing>

<Tooltip title="Code" aria-label="Code" TransitionComponent={Zoom}>
            <IconButton aria-label="Code">
            <CodeIcon />
          </IconButton>
</Tooltip>

<Tooltip title="Design" aria-label="Design" TransitionComponent={Zoom}>
            <IconButton aria-label="Design">
            <ArtTrackIcon />
          </IconButton>
</Tooltip>

<Tooltip title="Game Development" aria-label="Game Development" TransitionComponent={Zoom}>
            <IconButton aria-label="Game Development">
            <GamesIcon />
          </IconButton>
</Tooltip>


<Tooltip title="Group Project" aria-label="Group Project" TransitionComponent={Zoom}>
            <IconButton aria-label="Group Project">
            <GroupIcon />
          </IconButton>
          </Tooltip>



        </CardActions>
      </Card> 

          </Grid>


          <Grid item sm={6} xs ={10} >
          <Card className={classes.projectcard} >
        <CardHeader title="The Mark" subheader="2020-2021" />
        <CardMedia 
        component="img" 
        image={require('./images/cardcontentimages/markcard.png')} 
        height="80" 
        title="themark" />
        <CardContent>
            <Typography>
              <PortTheMark />
            </Typography>
          </CardContent>
          <CardActions className={classes.actions} disableActionSpacing>
 

<Tooltip title="Code" aria-label="Code" TransitionComponent={Zoom}>
            <IconButton aria-label="Code">
            <CodeIcon />
          </IconButton>
</Tooltip>

<Tooltip title="Design" aria-label="Design" TransitionComponent={Zoom}>
            <IconButton aria-label="Design">
            <ArtTrackIcon />
          </IconButton>
</Tooltip>

<Tooltip title="Game Development" aria-label="Game Development" TransitionComponent={Zoom}>
            <IconButton aria-label="Game Development">
            <GamesIcon />
          </IconButton>
</Tooltip>



        </CardActions>
      </Card> 

          </Grid>



          <Grid item sm={6} xs ={10} >
          <Card className={classes.projectcard} raised >
        <CardHeader title="Bots (Assorted)" subheader="2018-2019" />
        <CardMedia 
        component="img" 
        image={require('./images/cardcontentimages/businesscard.png')} 
        height="80" 
        title="Bots" />
        <CardContent>
            <Typography>
              <PortFakeDDRBot />
            </Typography>
          </CardContent>
          <CardActions className={classes.actions} disableActionSpacing>
 
          <Tooltip title="Completed Project" aria-label="Completed Project" TransitionComponent={Zoom}>
            <IconButton aria-label="Completed Project">
            <DoneIcon />
          </IconButton>
          </Tooltip>

          <Tooltip title="Code" aria-label="Code" TransitionComponent={Zoom}>
            <IconButton aria-label="Code">
            <CodeIcon />
          </IconButton>
          </Tooltip>

          <Tooltip title="Solo Project" aria-label="Solo Project" TransitionComponent={Zoom}>
            <IconButton aria-label="Solo Project">
            <PersonIcon />
          </IconButton>
          </Tooltip>
 
        </CardActions>
      </Card> 
          </Grid>


          <Grid item sm={6} xs ={10} >
          <Card className={classes.projectcard} >
        <CardHeader title="Meds" subheader="2013" />
        <CardMedia 
        component="img" 
        image={require('./images/cardcontentimages/medscard.png')} 
        height="80" 
        title="meds" />
        <CardContent>
            <Typography>
              <PortMeds />
            </Typography>
          </CardContent>
          <CardActions className={classes.actions} disableActionSpacing>
 
          <Tooltip title="Completed Project" aria-label="Completed Project" TransitionComponent={Zoom}>
            <IconButton aria-label="Completed Project">
            <DoneIcon />
          </IconButton>
</Tooltip>

<Tooltip title="Code" aria-label="Code" TransitionComponent={Zoom}>
            <IconButton aria-label="Code">
            <CodeIcon />
          </IconButton>
</Tooltip>

<Tooltip title="Design" aria-label="Design" TransitionComponent={Zoom}>
            <IconButton aria-label="Design">
            <ArtTrackIcon />
          </IconButton>
</Tooltip>

<Tooltip title="Game Development" aria-label="Game Development" TransitionComponent={Zoom}>
            <IconButton aria-label="Game Development">
            <GamesIcon />
          </IconButton>
</Tooltip>

<Tooltip title="Group Project" aria-label="Group Project" TransitionComponent={Zoom}>
            <IconButton aria-label="Group Project">
            <GroupIcon />
          </IconButton>
          </Tooltip>


        </CardActions>
      </Card> 

          </Grid>


        </Grid>

      <br/>
      
      </Typography>

            <br/>
            <br/>

      </div>
 
    )
  }

  /*
  skillset(classes)
  {
    return(
      <div style={{ padding: 20}} >

        <Grid container justify='center' spacing={24}>
          <Grid item sm={3} xs ={10} >
          <Card className={classes.card} raised>
        <CardHeader title="Code" />
        <CardContent>


<Tooltip title="7+ years, multiple projects" aria-label="Add" TransitionComponent={Zoom}>
        <Chip label="C#" color="primary" />
      </Tooltip>

      <Tooltip title="3+ years, multiple projects" aria-label="Add" TransitionComponent={Zoom}>
        <Chip label="Javascript" color="primary" />
      </Tooltip>

      <Tooltip title="2+ years, multiple projects" aria-label="Add" TransitionComponent={Zoom}>
        <Chip label="ReactJS"  color="primary" />
      </Tooltip>

      <Tooltip title="3+ years, multiple projects" aria-label="Add" TransitionComponent={Zoom}>
        <Chip label="Node.js" color="primary" />
      </Tooltip>

      <Tooltip title="10+ years, multiple projects" aria-label="Add" TransitionComponent={Zoom}>
        <Chip label="HTML/CSS" color="primary" />
      </Tooltip>

      <Tooltip title="4+ years, multiple projects" aria-label="Add" TransitionComponent={Zoom}>
        <Chip label="HLSL"  color="primary" />
      </Tooltip>

      <Tooltip title="2 years, primarily schoolwork" aria-label="Add" TransitionComponent={Zoom}>
        <Chip label="PHP" color="primary" />
      </Tooltip>

      <Tooltip title="3+ years, primarily schoolwork" aria-label="Add" TransitionComponent={Zoom}>
        <Chip label="Java" color="primary" />
      </Tooltip>

      <Tooltip title="1+ years, primarily schoolwork" aria-label="Add" TransitionComponent={Zoom}>
        <Chip label="C++" color="primary" />
      </Tooltip>
      
      <Tooltip title="2+ years, multiple projects" aria-label="Add" TransitionComponent={Zoom}>
        <Chip label="Flash" color="primary" />
      </Tooltip>


          </CardContent>
      </Card> 


          </Grid>

          <Grid item sm={3} xs ={10}>
          <Card className={classes.card} raised >
        <CardHeader title="Data" />
        <CardContent>

     <Tooltip title="7+ years" aria-label="Add" TransitionComponent={Zoom}>
        <Chip label="MySQL" color="primary" />
      </Tooltip>

      <Tooltip title="7+ years" aria-label="Add" TransitionComponent={Zoom}>
        <Chip label="MongoDB"  color="primary" />
      </Tooltip>

      <Tooltip title="7+ years" aria-label="Add" TransitionComponent={Zoom}>
        <Chip label="Vertica" color="primary" />
      </Tooltip>

      <Tooltip title="5+ years" aria-label="Add" TransitionComponent={Zoom}>
        <Chip label="Google Analytics" color="primary" />
      </Tooltip>

          </CardContent>
      </Card> 


          </Grid>


         <Grid item sm={3} xs ={10}>
          <Card className={classes.card} raised >
        <CardHeader title="Tools" />
        <CardContent>

      <Tooltip title="4+ years, multiple projects" aria-label="Add" TransitionComponent={Zoom}>
        <Chip label="Git" color="primary" />
      </Tooltip>

      <Tooltip title="2+ years" aria-label="Add" TransitionComponent={Zoom}>
        <Chip label="Yarn" color="primary" />
      </Tooltip>

      <Tooltip title="2+ years, multiple projects" aria-label="Add" TransitionComponent={Zoom}>
        <Chip label="npm" color="primary" />
      </Tooltip>

      <Tooltip title="8+ years" aria-label="Add" TransitionComponent={Zoom}>
        <Chip label="Jira/Confluence" color="primary" />
      </Tooltip>

      <Tooltip title="10+ years" aria-label="Add" TransitionComponent={Zoom}>
        <Chip label="MS Office Suite" color="primary" />
      </Tooltip>

      <Tooltip title="4+ years" aria-label="Add" TransitionComponent={Zoom}>
        <Chip label="Slack" color="primary" />
      </Tooltip>

      <Tooltip title="6+ years" aria-label="Add" TransitionComponent={Zoom}>
        <Chip label="Postman" color="primary" />
      </Tooltip>

      <Tooltip title="7+ years" aria-label="Add" TransitionComponent={Zoom}>
        <Chip label="GIMP" color="primary" />
      </Tooltip>

      <Tooltip title="4+ years" aria-label="Add" TransitionComponent={Zoom}>
        <Chip label="Steam SDK" color="primary" />
      </Tooltip>

      <Tooltip title="3+ years" aria-label="Add" TransitionComponent={Zoom}>
        <Chip label="Butler" color="primary" />
      </Tooltip>

          </CardContent>
      </Card> 


          </Grid>
</Grid>
<Grid container justify='center' spacing={24}>



   <Grid item sm={3} xs ={10}>
          <Card className={classes.card} raised >
        <CardHeader title="Interpersonal" />
        <CardContent>

        <Chip label="Communication" color="primary" />

        <Chip label="Problem Solving"  color="primary" />

        <Chip label="Self-Motivation" color="primary" />

        <Chip label="Adaptability" color="primary" />

        <Chip label="Creativity" color="primary" />

        <Chip label="Teamwork" color="primary" />

          </CardContent>
      </Card> 


          </Grid>


<Grid item sm={3} xs ={10}>
          <Card className={classes.card} raised >
        <CardHeader title="Concepts" />
        <CardContent>

      <Tooltip title="7+ years across multiple projects" aria-label="Add" TransitionComponent={Zoom}>
        <Chip label="Agile Methodology" color="primary" />
      </Tooltip>
      <Tooltip title="10+ years across multiple projects and disciplines" aria-label="Add" TransitionComponent={Zoom}>
        <Chip label="SDLC principles" color="primary" />
      </Tooltip>
      <Tooltip title="8+ years" aria-label="Add" TransitionComponent={Zoom}>
        <Chip label="Release Management" color="primary" />
      </Tooltip>

          </CardContent>
      </Card> 


          </Grid>


      <Grid item sm={3} xs ={10}>
          <Card className={classes.card} raised >
        <CardHeader title="Other" />
        <CardContent>

      <Tooltip title="6+ years" aria-label="Add" TransitionComponent={Zoom}>
        <Chip label="Requirements Gathering" color="primary" />
      </Tooltip>
      <Tooltip title="5+ years" aria-label="Add" TransitionComponent={Zoom}>
        <Chip label="Support/Training Documentation" color="primary" />
      </Tooltip>
      <Tooltip title="4+ years" aria-label="Add" TransitionComponent={Zoom}>
        <Chip label="Sharepoint" color="primary" />
      </Tooltip>

          </CardContent>
      </Card> 

          </Grid>

          </Grid>



      </div>
 
    )
  }
*/
  
  education(classes)
  {
    return(
      <div style={{ padding: 20}} >

        <Grid container justify='center' spacing={24}>
          <Grid item sm={6} xs ={10} >
          <Card className={classes.educard} raised >
        <CardHeader title="Bachelor's Degree in Software Development and Design" />
        <CardContent>
            <Typography>
           Wilmington University<br/>
           Graduated in 2018 with Honors<br/>
            </Typography>
          </CardContent>
          <CardActions className={classes.actions} disableActionSpacing>
 
        </CardActions>
      </Card> 
      
      </Grid>
      <br/>
      <Grid item sm={6} xs ={10} >
      <Card className={classes.educard} raised >
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



        <Typography  variant="h6" align='center'>

        <ContactMe />

          </Typography>

      </div>
 
    )
  }


  render() {
    const { classes } = this.props;

    return (



      <div className="App">

      <CssBaseline/>

      <MuiThemeProvider theme={theme}>

<Hidden mdUp>

<AppBar>
<Tabs centered>

<Toolbar variant="dense">

<Typography variant="h5">
            stevesefchick.fyi
</Typography>

</Toolbar>
</Tabs>

</AppBar>


</Hidden>


<Hidden smDown>
      <AppBar>
        <Tabs centered>
        <Toolbar variant="dense">
        
        <Button variant="outlined" size="large" href="#it_me">about me</Button>
        <Button variant="outlined" size="large" href="#professional">experience</Button>
        <Button variant="outlined" size="large" href="#fun_stuff">portfolio</Button>
        <Button variant="outlined" size="large" href="#education">education</Button>
        <Button variant="outlined" size="large" href="#contact">contact</Button>
        </Toolbar>
        </Tabs>

      </AppBar>
</Hidden>

      <div>
            <CssBaseline/>

      <br/><br/><br/><br/>

      <Hidden smDown>
      <Typography variant="h1" align='center'>
        stevesefchick.fyi
      </Typography>
      </Hidden>

      </div>

<br/><br/>

         <Typography  variant="h4" id="it_me" align='center'>
        </Typography>

         {this.aboutme(classes)}


         <Typography  variant="h4" id="professional" align='center'>
          Professional Experience
        </Typography>

                {this.professionalexp(classes)}

        <Typography  variant="h4" id="fun_stuff" align='center'>
          My Projects and Portfolio
        </Typography>

        {this.projectsportfolios(classes)}

        <Typography  variant="h4" id="education" align='center'>
          Education
        </Typography>

        {this.education(classes)}

        <Typography  variant="h3" id="contact" align='center'>
          Contact Me
        </Typography>

        {this.contactinfo(classes)}


      </MuiThemeProvider>

      </div>

    );
  }
}

export default withStyles(styles)(App);