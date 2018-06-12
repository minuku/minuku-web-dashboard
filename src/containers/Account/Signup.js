import { connect } from 'react-redux'
import SignupComponent from 'layouts/Account/Signup'
import { register } from 'actions/account'

const mapDispatchToProps = dispatch => ({
  register: () => dispatch(register())
})

export const Signup = connect(() => ({}), mapDispatchToProps)(SignupComponent)
