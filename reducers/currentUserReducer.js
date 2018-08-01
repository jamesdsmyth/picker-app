const currentUserReducer = (state = { loggedIn: false }, action) => {
  switch(action.type) {
    case 'SIGN_IN_SUCCESS':

      const obj = {
        username: action.email,
        id: action.id,
        loggedIn: true
      }

      return Object.assign({}, state, obj);

    default:
      return state;
  }
}

export default currentUserReducer;