const getColorsReducer = (state = {}, action) => {
  switch(action.type) {
    case 'GET_FIREBASE_COLORS_SUCCESS':
      return {
        list: action.data,
        colorsReceived: true
      }

    case 'GET_FIREBASE_COLORS_FAILURE':
      return state;

    default:
      return state;
  }
}

export default getColorsReducer;