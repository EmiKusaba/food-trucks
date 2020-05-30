import React from 'react'

import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
  TextField,
  Button
} from '@material-ui/core'

const Review = (props) => {
  const avatar = (props.avatar ? <img src={props.avatar} /> : null);
  return (
    <Table>
      <TableBody>
        <TableRow>
          <TableCell rowSpan={3}>
            {avatar ? avatar : null}
          </TableCell>
          <TableCell>
            {props.username}
          </TableCell>
          <TableCell>
            {props.rating}
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
  )
};

const AddReview = (props) => {

  const avatar = (props.user.avatar ? <img src={props.user.avatar} /> : null);

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
              {avatar ? avatar : null}
            </TableCell>
            <TableCell>
              <TextField
                required
                onChange={handleCommentChange}
                value={comment}
              />
            </TableCell>
            <TableCell>
              <TextField
                required
                onChange={handleRatingChange}
                value={rating}
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
            return <Review key={i} name={review.username} avatar={review.avatar} rating={review.rating} date={review.date} comment={review.comment} />
          }) : null
        }
      </div>
    </Container>
  )
}

export default Reviews;