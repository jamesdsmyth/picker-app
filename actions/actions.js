export function saveColorAction(id, data) {
  return {
    type: 'SAVE_COLOR',
    id,
    colorsArray: data
  }
}

export function getColorsAction(data) {
  return {
    type: 'GET_FIREBASE_COLORS',
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
  return {
    type: 'SIGN_IN',
    data: {
      email: data.email,
      password: data.password
    }
  }
}

export function signInSuccessAction(data) {
  return {
    type: 'SIGN_IN_SUCCESS',
    email: data.user.email,
    id: data.user.uid
  }
}

export function signInFailureAction(data) {
  return {
    type: 'SIGN_IN_FAILURE'
  }
}

export function signUpAction(data) {
  return {
    type: 'SIGN_UP',
    data: {
      name: data.name,
      email: data.email,
      password: data.password
    }
  }
}

export function signUpSuccessAction(data) {
  return {
    type: 'SIGN_UP_SUCCESS',
    data
  }
}