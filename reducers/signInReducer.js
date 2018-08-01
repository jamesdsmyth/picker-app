const signInReducer = (state = { loginFailure: false }, action) => {
  switch(action.type) {
    case 'SIGN_IN_FAILURE':
      return {
        loginFailure: true
      }

    default:
      return state;
  }
}

export default signInReducer;