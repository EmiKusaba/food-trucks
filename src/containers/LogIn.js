import { connect } from 'react-redux'
import LogIn from '../components/LogIn'
import { setUser } from '../redux/actions'

// const mapStateToProps = (state) => {
//     return {
//         user: state.user,
//         shops: state.shops
//     }
// }

// add mapDispatchToProps function here
const mapDispatchToProps = (dispatch) => {
    return {
        setUser: (user) => dispatch(setUser(user))
    }
}

export default connect(null, mapDispatchToProps)(LogIn)