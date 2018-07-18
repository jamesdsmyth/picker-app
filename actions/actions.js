export function saveColorAction(data) {
  return {
    type: 'SAVE_COLOR',
    data
  }
}

export function getColorSuccessAction(data) {
  return {
    type: 'GET_FIREBASE_COLORS_SUCCESS',
    data
  }
}

export function getColorFailureAction(data) {
  return {
    type: 'GET_FIREBASE_COLORS_FAILURE'
  }
}

export function signInAction(data) {

  console.log('sign innnn action', data);
  return {
    type: 'SIGN_IN',
    data: {
      email: data.email,
      password: data.password
    }
  }
}