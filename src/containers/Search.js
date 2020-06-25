import { connect } from 'react-redux'
import Search from '../components/Search'


const mapStateToProps = (state) => {
  return {
    shops: state.shops,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: dispatch,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)