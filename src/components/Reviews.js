import React from 'react'

import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
  TextField,
  Button,
  Avatar,
  Box
} from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

const UserAvatar = (props) => {
  const classes = useStyles();
  const avatar = (props.avatar ? <Avatar src={props.avatar} className={classes.large} /> : null);
  return (
    <Box>
      {avatar}
      {props.username}
    </Box>
  )
}

const Review = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
    <Table>
      <TableBody>
        <TableRow>
          <TableCell rowSpan={3}>
            <UserAvatar username={props.username} avatar={props.avatar} />
          </TableCell>
          <TableCell>
            {props.username}
          </TableCell>
          <TableCell>
            <Rating value={props.rating} readOnly size="small" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell colSpan={2}>
            {props.date}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell colSpan={2}>
            {props.comment}
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
    </div>
  )
};

const AddReview = (props) => {
  const [comment, setComment] = React.useState("");
  const [rating, setRating] = React.useState(5);

  const handleSubmit = (e) => {
    e.preventDefault();
    const review = {
      "shopId": props.shopId,
      "avatar": props.user.avatar,
      "username": props.user.username,
      "rating": rating,
      "date": (new Date()).toLocaleDateString(),
      "comment": comment,
    };
    props.addReview(review);
  }

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleRatingChange = (e) => {
    setRating(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell rowSpan={2}>
              <UserAvatar username={props.user.username} avatar={props.user.avatar} />
            </TableCell>
            <TableCell>
              <TextField
                required
                onChange={handleCommentChange}
                value={comment}
              />
            </TableCell>
            <TableCell>
              <Rating
                value={rating}
                onChange={handleRatingChange}
              />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={2}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                >
                Submit
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </form>
  )
}

const Reviews = (props) => {

  return (
    <Container maxWidth="lg" className="shop-container">
      <Typography variant="h3" className="detailHeroText">
        Review
      </Typography>
      <div>
        <AddReview shopId={props.shopId} user={props.user} addReview={props.addReview} />
        {
          props.reviews ? props.reviews.map((review, i) => {
            return <Review key={i} username={review.username} avatar={review.avatar} rating={review.rating} date={review.date} comment={review.comment} />
          }) : null
        }
      </div>
    </Container>
  )
}

export default Reviews;