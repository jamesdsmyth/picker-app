const getColorsReducer = (state = {}, action) => {
  switch(action.type) {
    case 'SAVE_COLOR_SUCCESS':
      return action.data

    case 'SAVE_COLOR_FAILURE':
      return state;

    default:
      return state;
  }
}

export default getColorsReducer;