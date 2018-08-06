const signInReducer = (state = { signInFailure: false }, action) => {
  switch(action.type) {
    case 'SIGN_IN_FAILURE':
      return {
        signInFailure: true
      }
    case 'CLEAR_SIGN_IN_ERROR_MESSAGES':
      return {
        signInFailure: false
      }

    default:
      return state;
  }
}

export default signInReducer;