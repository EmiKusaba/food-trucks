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
  const avatar = <Avatar src={`../Images/users/${props.user_id}/avatar`} className={classes.large} />;
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
              <UserAvatar user_id={props.review.user_id} username={props.review.username} />
            </TableCell>
            <TableCell>
              {props.review.username}
            </TableCell>
            <TableCell>
              <Rating value={props.review.rating} readOnly size="small" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={2}>
              {props.review.ts}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={2}>
              {props.review.comment}
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
      "userId": props.user.id,
      "rating": rating,
      "comment": comment,
    };

    fetch(`${process.env.REACT_APP_API_URL}/trucks/${props.shop.id}/reviews`, {
      method: "PUT",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(review)
    }).then(res => {
      props.onSubmitted();
    })
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
              <UserAvatar user_id={props.user.id} username={props.user.name} />
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
                name="rating"
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
    <Container maxWidth="lg" className="shop-container" ref={props.linkRef}>
      <Typography variant="h3" className="detailHeroText">
        Review
      </Typography>
      <div>
        {props.user ? <AddReview shop={props.shop} user={props.user} onSubmitted={props.onSubmitted}/> : null}
        {
          props.reviews ? props.reviews.map((review, i) => {
            return <Review key={i} review={review} />
          }) : null
        }
      </div>
    </Container>
  )
}

export default Reviews;