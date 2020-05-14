import React from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Paper } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Image from 'material-ui-image'
import Images from '../Images/paula-vermeulen-URjZkhqsuBk-unsplash.jpg'
import Toolbar from '@material-ui/core/Toolbar';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function TabContents(props) {
  const classes = useStyles();

  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <h3>{props.title}</h3>
      <Grid container spacing={4}>
        {cards.map((card) => (
          <Grid item key={card} xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image="https://source.unsplash.com/random"
                title="Image title"
              />
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                  Heading
                    </Typography>
                <Typography>
                  This is a media card. You can use this section to describe the content.
                    </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  View
                    </Button>
                <Button size="small" color="primary">
                  Edit
                    </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

function HeroUnit() {
  const classes = useStyles();
  const styles = {
    paperContainer: {
      backgroundImage: `url(${Images})`,
      backgroundSize: "100% 100%",
      backgroundRepeat: "no-repeat",
      height: "100vh",
      color: "white",
    }
  };
  const theme = createMuiTheme({
    palette: {
      text: {
        primary: "#FFFFFF"
      }
    },

    typography: {
      useNextVariants: true,
      fontFamily: "Montserrat",
      h1: {
        fontSize: 40,
        fontFamily: "Montserrat",
        fontWeight: 300,
        color: "#FFFFFF",
        letterSpacing: "0.0075em",
        verticalAlign: "middle",
        alignItems: "center",
        textAlign: "center"
      },
      h3: {
        fontSize: 25,
        fontFamily: "Montserrat",
        fontWeight: 300,
        color: "#FFFFFF",
        letterSpacing: "0.0075em",
        verticalAlign: "middle",
        alignItems: "center",
        textAlign: "center"
      }
    }
  });
  return (
    <div className={classes.heroContent} >
      <Container maxWidth="75%" style={styles.paperContainer}>
        <MuiThemeProvider theme={theme}>
          <Typography variant="h1">
            Discover the Latest News and Best Food Trucks in Austin
          </Typography>
          <Typography variant="h3">
            Explore breweries, upcoming events, menus, and your favorite brewery & food truck pairings
            </Typography>
        </MuiThemeProvider>
      </Container>
    </div>
  );
}

function HeroUnitWithButton() {
  const classes = useStyles();
  return (
    <div className={classes.heroContent} >
      <Container maxWidth="sm">
        <Typography component="h1" variant="h3" align="center" color="textPrimary" gutterBottom>
          Download The App
            </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>

        </Typography>
        <div className={classes.heroButtons}>
          <Grid container spacing={2} justify="center">
            <Grid item>
              <Button variant="contained" color="primary">
                Download on the App Store
                  </Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" color="primary">
                Get it on Google Play
                  </Button>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
}

function ScrollableTabsButtonAuto() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="American" {...a11yProps(0)} />
          <Tab label="Mexican" {...a11yProps(1)} />
          <Tab label="BBQ" {...a11yProps(2)} />
          <Tab label="Asian" {...a11yProps(3)} />
          <Tab label="Italian" {...a11yProps(4)} />
          <Tab label="Dessert" {...a11yProps(5)} />
          <Tab label="Others" {...a11yProps(6)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <TabContents title="American" />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <TabContents title="Mexican" />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <TabContents title="BBQ" />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <TabContents title="Asian" />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <TabContents title="Italian" />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <TabContents title="Dessert" />
      </TabPanel>
      <TabPanel value={value} index={6}>
        <TabContents title="Others" />
      </TabPanel>
    </div>
  );
}


function Home() {
  const classes = useStyles();

  return (
    <Container width="75%" className="home-container">

      <HeroUnit />
      <ScrollableTabsButtonAuto />
      <HeroUnitWithButton />
      

    </Container>
  )
}

export default Home;