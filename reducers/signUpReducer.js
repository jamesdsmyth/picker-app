const signUpReducer = (state = { signUpFailure: false }, action) => {
  switch(action.type) {
    case 'SIGN_UP_FAILURE':
      return {
        signUpFailure: true,
        message: action.data.message,
        code: action.data.code
      }

    default:
      return state;
  }
}

export default signUpReducer;