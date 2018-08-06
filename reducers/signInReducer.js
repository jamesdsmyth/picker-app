const signInReducer = (state = { signInFailure: false }, action) => {
  switch(action.type) {
    case 'SIGN_IN_FAILURE':
      return {
        signInFailure: true
      }

    default:
      return state;
  }
}

export default signInReducer;