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

      return Object.assign({}, state, obj);

    case 'SIGN_OUT': 
      return {
        name: '',
        email: '',
        uid: '',
        loggedIn: false
      };

    default:
      return state;
  }
}

export default currentUserReducer;