const currentUserReducer = (state = { loggedIn: false }, action) => {

  console.log(action);
  switch(action.type) {
    case 'SIGN_IN_SUCCESS':

      return {
        name: action.name,
        email: action.email,
        uid: action.uid,
        loggedIn: true
      };

    case 'GET_PROFILE_SUCCESS':
      const obj = { 
        name: action.name 
      }

      console.log(Object.assign({}, state, obj));

      return Object.assign({}, state, obj);

    default:
      return state;
  }
}

export default currentUserReducer;