import { connect } from 'react-redux'
import LoginComponent from 'layouts/Account/Login'
import { fetchLoginWithRedux } from 'actions/account'

const mapDispatchToProps = dispatch => ({
  login: (user) => dispatch(fetchLoginWithRedux(user))
})

export const Login = connect(() => ({}), mapDispatchToProps)(LoginComponent)
