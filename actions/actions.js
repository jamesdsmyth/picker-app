export function saveColorAction(uid, data) {
  return {
    type: 'SAVE_COLOR',
    uid,
    colorsArray: data
  }
}

export function saveColorSuccessAction() {
  return {
    type: 'SAVE_COLOR_SUCCESS'
  }
}

export function saveColorFailureAction() {
  return {
    type: 'SAVE_COLOR_FAILURE'
  }
}

export function tempSaveColorAction(data) {
  return {
    type: 'TEMP_SAVE_COLOR',
    data
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

export function createUserProfileSuccessAction(data) {
  return {
    type: 'GET_PROFILE_SUCCESS',
    name: data.data.name
  }
}

export function signInAction(formData, tempColor) {
  return {
    type: 'SIGN_IN',
    data: {
      email: formData.email,
      password: formData.password,
      colorsArray: tempColor
    }
  }
}

export function signInSuccessAction(data) {
  return {
    type: 'SIGN_IN_SUCCESS',
    email: data.user.email,
    uid: data.user.uid
  }
}

export function signInFailureAction(data) {
  return {
    type: 'SIGN_IN_FAILURE'
  }
}

export function signUpAction(formData, tempColor) {
  return {
    type: 'SIGN_UP',
    data: {
      name: formData.name,
      email: formData.email,
      password: formData.password,
      colorsArray: tempColor
    }
  }
}

export function signUpSuccessAction(data) {
  return {
    type: 'SIGN_UP_SUCCESS',
    data
  }
}

export function signUpFailureAction(data) {
  return {
    type: 'SIGN_UP_FAILURE',
    data
  }
}

export function signOutAction() {
  return {
    type: 'SIGN_OUT'
  }
}

export function resetPasswordAction(data) {
  return {
    type: 'RESET_PASSWORD',
    data
  }
}

export function clearSignInErrorsAction() {
  return {
    type: 'CLEAR_SIGN_IN_ERROR_MESSAGES'
  }
}

export function clearSignUpErrorsAction() {
  return {
    type: 'CLEAR_SIGN_UP_ERROR_MESSAGES'
  }
}