import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Images from '../Images/nordwood-themes-Tmz8FThN_BE-unsplash.jpg'
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
// import Autocomplete from '@material-ui/lab/Autocomplete';
import { useHistory } from "react-router-dom";
import { fetchShopList } from '../redux/actions';


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

function Results(props) {
  const classes = useStyles();
  const history = useHistory();
  const handleClick = (event, id) => {
    event.preventDefault();
    history.push(`/shop/${id}`);
  }
  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <Grid container spacing={4}>
        {props.shops.map((shop, i) => (
          <Grid item key={i} xs={12} sm={6} md={4}>
            <button onClick={(event) => handleClick(event, shop.id)} style={{ "border": "none" }}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="https://source.unsplash.com/random"
                  title="Image title"
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


function HeroUnit(props) {
  const classes = useStyles();
  const styles = {
    paperContainer: {
      backgroundImage: `url(${Images})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "100% auto",
      backgroundPosition: "center 70%",
      height: "60vh",
      minHeight: "100px",
      maxHeight: "500px",
      color: "white",
      padding: '20px',
    }
  };

  const handleCategory = (event) => {
    props.setCategory(event.target.value);
  };

  const [location, setLocation] = React.useState("");
  const handleLocation = (event) => {
    setLocation(event.target.value);
  };

  return (
    <div className={classes.heroContent} >
      <Container maxWidth="lg" style={styles.paperContainer} className ="top-container">
        <Typography variant="h1">
          Discover the Latest News and Best Food Trucks in Austin
        </Typography>
        <Typography variant="h4">
          Explore breweries, upcoming events, menus, and your favorite brewery & food truck pairings
        </Typography>
        <Container  maxWidth="sm">
          <form className="login-form">
            <FormControl variant="outlined" >
              <InputLabel id="select-label-category">Category</InputLabel>
              <Select className="selectMenu"
                labelId="select-label-category"
                id="select-category"
                value={props.category}
                onChange={handleCategory}
              >
                <MenuItem value={"American"}>American</MenuItem>
                <MenuItem value={"Asian"}>Asian</MenuItem>
                <MenuItem value={"Mexican"}>Mexican</MenuItem>
                <MenuItem value={"BBQ"}>BBQ</MenuItem>
                <MenuItem value={"Dessert"}>Dessert</MenuItem>
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

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: "American",
    }

    this.setCategory = (category) => {
      this.setState({
        category: category,
      });
    };

    this.getShops = (category) => {
        return this.props.shops.filter((shop) => {
          return shop.category === category;
      });  
    };
  }

  componentDidMount() {
    const {dispatch} = this.props;
    dispatch(fetchShopList());
  }

  render() {
    const shops = this.getShops(this.state.category);

    return (
    <Container maxWidth="lg" className="home-container">
      <HeroUnit category={this.state.category} setCategory={this.setCategory} />
      <Results shops={shops} />
      <HeroUnitWithButton />
    </Container>
  );
  }
}

export default Search;