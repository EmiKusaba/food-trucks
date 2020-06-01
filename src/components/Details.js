import React, { useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Images from '../Images/5bad51bc-b238-4e92-a5ca-45e746204482.jpg'
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import tileData from './tileData';
import GridList from '@material-ui/core/GridList';
import Rating from '@material-ui/lab/Rating';
import Map from "./Map";
import Schedule from "./Schedule";
import Menu from "./Menu";
import Reviews from "./Reviews";
import { spacing } from '@material-ui/system';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  myButton: {
    margin: 5,
  }
}));

function HeroUnit() {
  const classes = useStyles();
  const styles = {
    paperContainer: {
      backgroundImage: `url(${Images})`,
      backgroundRepeat: "no-repeat",
      height: "50vh",
      backgroundSize: "cover",
      backgroundPosition: "center",
      justifyContents: "flexStart",
    }
  };


  return (
    <div className={classes.heroContent} >
      <Container maxWidth="lg" style={styles.paperContainer} >

      </Container>
    </div>

  );
}
function Title() {
  return (
    <div>
      <Typography variant="h1" className="detailHeroText">
        The Bamboo Skewer
        </Typography>
      <Typography component="legend" className="detailHeroText">
        BBQ, Asian, American
        </Typography>
    </div>
  )
}
function ScrollToButton(props) {
  const handleClick = () => {
    props.linkRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  const classes = useStyles();


  return (

    <Button
      variant="contained"
      color="secondary"
      onClick={handleClick}
      padding="5px"
      style={{ margin: "10px", }}
    >{props.title}</Button>

  )
}

function DetailNavBar(props) {
  return (
    <div>
      {props.buttons}
    </div>
  )
}

function Overview(props) {
  return (
    <div ref={props.linkRef}>
      <Typography variant="h3" className="detailHeroText">
        Overview
        </Typography>
      <Typography variant="h5" className="detailHeroText">
        Mail
        </Typography>
      <Typography component="legend" className="detailHeroText">
        hello@thebambooskewer.com
        </Typography>
      <Typography variant="h5" className="detailHeroText">
        Phone
        </Typography>
      <Typography component="legend" className="detailHeroText">
        (030)818-6755
        </Typography>
      <Typography variant="h5" className="detailHeroText">
        Website
        </Typography>
      <Typography component="legend" className="detailHeroText">
        http://www.thebambooskewer.com
        </Typography>
    </div>
  )
}
function SimpleRating() {
  const [value, setValue] = React.useState(5);
  if (setValue);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Rating name="read-only" value={value} readOnly />
        <Typography component="legend">Review (50)</Typography>
      </Box>
    </div>
  )
}

function Photos(props) {
  const classes = useStyles();

  return (
    <div className={classes.root} ref={props.linkRef}>
      <GridList className={classes.gridList} cols={2.5}>
        {tileData.map((tile) => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={
                <IconButton aria-label={`star ${tile.title}`}>
                  <StarBorderIcon className={classes.title} />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
function Details(props) {

  const refPhotos = useRef();
  const refOverView = useRef();
  const refSchedule = useRef();
  const refMenu = useRef();
  const refReview = useRef();
  const id = props.match.params.id
  const shop = props.shops.find(s => String(s.Id) === id)

  const buttons = [

    <ScrollToButton linkRef={refOverView} title="Overview" key="OverView" />,
    <ScrollToButton linkRef={refPhotos} title="Photos" key="photos" />,
    <ScrollToButton linkRef={refSchedule} title="Schedule" key="schedule" />,
    <ScrollToButton linkRef={refMenu} title="Menu" key="menu" className="scrollButton" />,
    <ScrollToButton linkRef={refReview} title="Review" key="Review" />,

  ]

  return (
    <Container maxWidth="lg" className="home-container">

      <HeroUnit />
      <div className="firstSection">
        <Title />
        <SimpleRating />
      </div>
      <DetailNavBar buttons={buttons} className="scrollButton" />
      <Overview linkRef={refOverView} />
      <Map address={shop.Address} zoom={16} />
      <Schedule linkRef={refSchedule} />
      <Typography variant="h3" className="detailHeroText">
        Photos
      </Typography>
      <Photos linkRef={refPhotos} />
      <Menu entrees={props.entrees} drinks={props.drinks} linkRef={refMenu} />
      <Reviews shopId={shop.Id} user={props.user} reviews={shop.reviews} addReview={props.addReview} linkRef={refReview} />
    </Container>
  )
}
export default Details;