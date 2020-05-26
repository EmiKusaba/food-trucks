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
}));

function HeroUnit() {
  const classes = useStyles();
  const styles = {
    paperContainer: {
      backgroundImage: `url(${Images})`,
      backgroundRepeat: "no-repeat",
      height: "50vh",
      color: "white",
      backgroundSize: "cover",
      backgroundPosition: "center",
      justifyContents: "flexStart",
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
      <Container maxWidth="lg" style={styles.paperContainer} >
        <Typography variant="h1" className="detailHeroText">
          The Bamboo Skewer
        </Typography>
        <Typography component="legend" className="detailHeroText">
          BBQ, Asian, American
        </Typography>
      </Container>
    </div>

  );
}

function ScrollToButton(props) {
  const handleClick = () => {
    props.linkRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <Button
      variant="contained"
      color="primary"
      onClick={handleClick}
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
      <Typography variant="h1" className="detailHeroText">
        Overview
        </Typography>
      <Typography variant="h3" className="detailHeroText">
        Mail
        </Typography>
      <Typography component="legend" className="detailHeroText">
        hello@thebambooskewer.com
        </Typography>
      <Typography variant="h3" className="detailHeroText">
        Phone
        </Typography>
      <Typography component="legend" className="detailHeroText">
        (030)818-6755
        </Typography>
      <Typography variant="h3" className="detailHeroText">
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

  return (
    <div>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">Review (50)</Typography>
        <Rating name="read-only" value={value} readOnly />
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
  const id = props.match.params.id
  const shop = props.shops.find(s => s.Id == id)


  const buttons = [
    <ScrollToButton linkRef={refOverView} title="Overview" key="OverView" />,
    <ScrollToButton linkRef={refPhotos} title="Photos" key="photos" />,
    <ScrollToButton linkRef={refSchedule} title="Schedule" key="schedule" />,
  ]

  return (
    <Container maxWidth="lg" className="home-container">

      <HeroUnit />
      <SimpleRating />
      <DetailNavBar buttons={buttons} />
      <Overview linkRef={refOverView} />
      <Map address={shop.Address} zoom={16} />
      <Schedule linkRef={refSchedule} />
      <Typography variant="h1" className="detailHeroText">
        Photos
      </Typography>
      <Photos linkRef={refPhotos} />

    </Container>
  )
}
export default Details;