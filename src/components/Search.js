import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Images from '../Images/nordwood-themes-Tmz8FThN_BE-unsplash.jpg'
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
// import Autocomplete from '@material-ui/lab/Autocomplete';


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
    // paddingTop: theme.spacing(8),
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
          {children}
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
                <Typography >
                  This is a media card. You can use this section to describe the content.
                    </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="secondary">
                  View
                    </Button>
                <Button size="small" color="secondary">
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

  const [category, setCategory] = React.useState("");
  const handleCategory = (event) => {
    setCategory(event.target.value);
  };

  const [location, setLocation] = React.useState("");
  const handleLocation = (event) => {
    setLocation(event.target.value);
  };

  return (
    <div className={classes.heroContent} >
      <Container maxWidth="lg" style={styles.paperContainer}>
        <Typography variant="h1">
          Discover the Latest News and Best Food Trucks in Austin
        </Typography>
        <Typography variant="h3">
          Explore breweries, upcoming events, menus, and your favorite brewery & food truck pairings
        </Typography>
        <Container maxWidth="sm">
          <form className="login-form">
            <FormControl variant="outlined" >
              <InputLabel id="select-label-category">Category</InputLabel>
              <Select className="selectMenu"
                labelId="select-label-category"
                id="select-category"
                value={category}
                onChange={handleCategory}
              >
                <MenuItem value={"American"}>American</MenuItem>
                <MenuItem value={"Mexican"}>Mexican</MenuItem>
                <MenuItem value={"BBQ"}>BBQ</MenuItem>
                <MenuItem value={"Desset"}>Desset</MenuItem>
                <MenuItem value={"Others"}>Others</MenuItem>
              </Select>
            </FormControl>
            <FormControl variant="outlined" >
              <InputLabel id="select-label-location">Location</InputLabel>
              <Select className="selectMenu"
                labelId="select-label-location"
                id="select-location"
                value={location}
                onChange={handleLocation}
              >
                <MenuItem value={"Downtown"}>Downtown</MenuItem>
                <MenuItem value={"Central Austin"}>Central Austin</MenuItem>
                <MenuItem value={"East Austin"}>East Austin</MenuItem>
                <MenuItem value={"West Austin"}>West Austin</MenuItem>
                <MenuItem value={"South Austin"}>South Austin</MenuItem>

              </Select>
            </FormControl>
            <Button
              type="submit"
              className="login-button"
              variant="contained"
              color="secondary">
              Search
            </Button>
          </form>
        </Container>
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
  if(0) {
    console.log(setValue);
  }

  return (
    <div className={classes.root}>

      <h2>Best Local Food Trucks Near Down Town in Austin</h2>

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


function Search() {
  return (
    <Container maxWidth="lg" className="home-container">

      <HeroUnit />
      <ScrollableTabsButtonAuto />
      <HeroUnitWithButton />

    </Container>
  )
}

export default Search;