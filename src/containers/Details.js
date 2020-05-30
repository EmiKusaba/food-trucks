import { connect } from 'react-redux'
import Details from '../components/Details'
import { addReview } from "../redux/actions";


const mapStateToProps = (state) => {
  return {
    user: state.user,
    shops: state.shops,
    entrees: state.entrees,
    drinks: state.drinks,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addReview: (review) => dispatch(addReview(review)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Details)