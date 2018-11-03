const saveColorReducer = (state = {}, action) => {
  switch(action.type) {

    case 'SAVE_COLOR':
      return { 
        tempColorArr: [],
        savingColor: true
      }

    case 'TEMP_SAVE_COLOR':
      return { 
        tempColorArr: action.data,
        savingColor: false
      }

    case 'SAVE_COLOR_SUCCESS':
      return { 
        savingColor: false
      }

    default:
      return state;
  }
}

export default saveColorReducer;