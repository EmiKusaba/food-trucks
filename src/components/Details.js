import React, { useRef, createRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import GridList from '@material-ui/core/GridList';
import Rating from '@material-ui/lab/Rating';
import Map from "./Map";
import Schedule from "./Schedule";
import Menu from "./Menu";
import { fetchShopDetails } from '../redux/actions';

const getImage = (path) => {
  const images = require.context("../Images", true);
  return images(`./${path}`);
}

const getImages = (id) => {
  let images = [];
  let i = 0;
  while (true) {
    try {
      const path = `trucks/${id}/${i}`
      images.push(getImage(path));
      ++i;
    }
    catch (error) {
      break;
    }
  }
  return images;
}

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
  scrollButton: {
    minWidth: '20%',
  }
}));

function HeroUnit(props) {
  const bannerImage = getImage(`trucks/${props.shop.id}/banner`);
  const classes = useStyles();
  const styles = {
    paperContainer: {
      backgroundImage: `url(${bannerImage})`,
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
        <div/>
      </Container>
    </div>

  );
}
function Title(props) {
  return (
    <div>
      <Typography variant="h1" className="detailHeroText">
        {props.shop.name}
      </Typography>
      <Typography component="legend" className="detailHeroText">
        {props.shop.category}
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
      classes={{ root: classes.scrollButton }}
      onClick={handleClick}
      padding="5px"
      disableElevation
    >{props.title}</Button>

  )
}

function DetailNavBar(props) {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      {props.buttons}
    </Box>
  )
}

function Overview(props) {
  return (
    <div ref={props.linkRef}>
      <Typography variant="h5" className="detailHeroText">
        Overview
      </Typography>
      <Typography component="legend" className="detailHeroText">
        {props.shop.description}
      </Typography>
      <Typography variant="h5" className="detailHeroText">
        Mail
      </Typography>
      <Typography component="legend" className="detailHeroText">
        {props.shop.email}
      </Typography>
      <Typography variant="h5" className="detailHeroText">
        Phone
        </Typography>
      <Typography component="legend" className="detailHeroText">
        {props.shop.phone}
      </Typography>
      <Typography variant="h5" className="detailHeroText">
        Website
        </Typography>
      <Typography component="legend" className="detailHeroText">
        {props.shop.website}
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

  const photos = getImages(props.shop.id);

  return (
    <div className={classes.root} ref={props.linkRef}>
      <GridList className={classes.gridList} cols={2.5}>
        {photos ? photos.map((img, i) => (
          <GridListTile key={i}>
            <img src={img} />
            <GridListTileBar
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={
                <IconButton aria-label={`star ${i}`}>
                  <StarBorderIcon className={classes.title} />
                </IconButton>
              }
            />
          </GridListTile>
        )) : null}
      </GridList>
    </div>
  );
}

class Details extends React.Component {
  constructor(props) {
    super(props);

    this.refPhotos = createRef();
    this.refOverView = createRef();
    this.refSchedule = createRef();
    this.refMenu = createRef();
    this.refReview = createRef();
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchShopDetails(this.props.match.params.id));
  }

  render() {

    const shop = this.props.shop;

    if (!shop) {
      return null;
    }

    const buttons = [
      <ScrollToButton linkRef={this.refOverView} title="Overview" key="OverView" />,
      <ScrollToButton linkRef={this.refPhotos} title="Photos" key="photos" />,
      <ScrollToButton linkRef={this.refSchedule} title="Schedule" key="schedule" />,
      <ScrollToButton linkRef={this.refMenu} title="Menu" key="menu" />,
      <ScrollToButton linkRef={this.refReview} title="Review" key="Review" />,
    ];

    return (
      <Container maxWidth="lg" className="home-container">

        <HeroUnit shop={shop} />
        <div className="firstSection">
          <Title shop={shop} />
          <SimpleRating />
        </div>
        <DetailNavBar buttons={buttons} className="scrollButton" />
        <Overview linkRef={this.refOverView} shop={shop} />
        <Typography variant="h3" className="detailHeroText">
          Map
        </Typography>
        <Map address={shop.address} zoom={16} />
        <Schedule linkRef={this.refSchedule} />
        <Typography variant="h3" className="detailHeroText">
          Photos
        </Typography>
        <Photos linkRef={this.refPhotos} shop={shop} />
        <Menu shop={shop} linkRef={this.refMenu} />
        {/* <Reviews shopId={shop.id} user={this.props.user} reviews={shop.reviews} addReview={this.props.addReview} linkRef={this.refReview} /> */}
      </Container>
    )
  }
}

export default Details;