const currentUserReducer = (state = { loggedIn: false }, action) => {
  switch(action.type) {
    case 'SIGN_IN_SUCCESS':

      console.log('the new state will be', Object.assign({}, state, {username: action.email}));
      
      return Object.assign({}, state, {username: action.email});

    default:
      return state;
  }
}

export default currentUserReducer;