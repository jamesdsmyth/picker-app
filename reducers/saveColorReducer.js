const saveColorReducer = (state = {}, action) => {

  console.log(action);

  switch(action.type) {
    case 'TEMP_SAVE_COLOR':
      return action.data;

    default:
      return state;
  }
}

export default saveColorReducer;