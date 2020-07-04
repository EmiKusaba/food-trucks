import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Images from '../Images/home-banner.jpg'
import { useHistory } from "react-router-dom";
import { fetchShopList } from '../redux/actions';

const getImage = (path) => {
  const images = require.context("../Images", true);
  return images(`./${path}`);
}

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
    padding: theme.spacing(0, 0, 6),
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
  const history = useHistory();
  const handleClick = (event, id) => {
    event.preventDefault();
    history.push(`/shop/${id}`);
  }

  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <h3>{props.title}</h3>
      <Grid container spacing={4}>

        {props.shops.map((shop, i) => (
          <Grid item key={i} xs={12} sm={6} md={4}>
            <button onClick={(event) => handleClick(event, shop.id)} style={{ "border": "none" }}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={getImage(`trucks/${shop.id}/0`)}
                  title={shop.name}
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {shop.name}
                  </Typography>
                  <Typography>
                    {shop.description}
                  </Typography>
                </CardContent>
              </Card>
            </button>
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
      backgroundRepeat: "no-repeat",
      backgroundSize: "100% auto",
      backgroundPosition: "center 70%",
      height: "50vh",
      minHeight: "100px",
      maxHeight: "300px",
      color: "white",
    }
  };
  return (
    <div className={classes.heroContent} >
      <Container maxWidth="lg" style={styles.paperContainer}>
        <Typography variant="h1">
          Discover the Latest News and Best Food Trucks in Austin
          </Typography>
        <Typography variant="h4">
          Explore breweries, upcoming events, menus, and your favorite brewery & food truck pairings
            </Typography>
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

function ScrollableTabsButtonAuto(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const categories = [
    "All",
    "American",
    "Mexican",
    "BBQ",
    "Asian",
    "Italian",
    "Dessert",
    "Others"
  ];

  const getShopsInCategory = (category) => {
    return props.shops.filter((shop) => {
      if (category === "All") {
        return true;
      }
      return shop.category === category;
    })
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

          {categories.map((category, i) => {
            return <Tab label={category} {...a11yProps(i)} />
          })}

        </Tabs>
      </AppBar>

      {categories.map((category, i) => {
        return (
          <TabPanel value={value} index={i} >
            <TabContents title={category} shops={getShopsInCategory(category)} />
          </TabPanel>
        );
      })}

    </div>
  );
}

class Home extends React.Component {

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchShopList());
  }

  render() {
    return (
      <Container width="75%" className="home-container">
        <HeroUnit shops={this.props.shops} />
        <ScrollableTabsButtonAuto shops={this.props.shops} />
        <HeroUnitWithButton shops={this.props.shops} />
      </Container>
    )
  }
}

export default Home;