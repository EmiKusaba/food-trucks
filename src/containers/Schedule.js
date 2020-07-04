import { connect } from 'react-redux'
import Schedule from '../components/Schedule'


const mapStateToProps = (state) => {
  return {
    user: state.user,
    shops: state.shops,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatch: dispatch,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Schedule)