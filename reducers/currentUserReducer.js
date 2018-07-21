const currentUserReducer = (state = { loggedIn: false }, action) => {
  switch(action.type) {
    case 'SIGN_IN_SUCCESS':
      return Object.assign({}, state, {username: action.email, loggedIn: true});

    default:
      return state;
  }
}

export default currentUserReducer;