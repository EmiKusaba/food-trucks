import { connect } from 'react-redux'
import Details from '../components/Details'


const mapStateToProps = (state) => {
  return {
    shops: state.shops,
    entrees: state.entrees,
    drinks: state.drinks,
  }
}

// add mapDispatchToProps function here
const mapDispatchToProps = (dispatch) => {
  return {
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Details)