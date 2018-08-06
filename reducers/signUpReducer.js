const signUpReducer = (state = { signUpFailure: false }, action) => {
  switch(action.type) {
    case 'SIGN_UP_FAILURE':
      return {
        signUpFailure: true,
        message: action.data.message,
        code: action.data.code
      }
    
    case 'CLEAR_SIGN_UP_ERROR_MESSAGES':
      return {
        signUpFailure: false,
        message: '',
        code: ''
      }

    default:
      return state;
  }
}

export default signUpReducer;