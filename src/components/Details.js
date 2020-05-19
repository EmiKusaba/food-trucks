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
import Avatar from 'react-avatar';


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


function Details() {
  return (
    <Container maxWidth="lg" className="home-container">

      <HeroUnit />

    </Container>
  )
}
export default Details;