import { connect } from 'react-redux'
import Details from '../components/Details'
import { addReview } from "../redux/actions";


const mapStateToProps = (state) => {
  return {
    user: state.user,
    shop: state.shop,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatch: dispatch,
    addReview: (review) => dispatch(addReview(review)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Details)