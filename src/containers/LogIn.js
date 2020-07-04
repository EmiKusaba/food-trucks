import { connect } from 'react-redux'
import LogIn from '../components/LogIn'

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

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);