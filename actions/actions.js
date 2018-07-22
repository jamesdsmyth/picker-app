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
  return {
    type: 'SIGN_IN',
    data: {
      email: data.email,
      password: data.password
    }
  }
}

export function signInSuccessAction(data) {


  console.log(data, 'SIGN IN SUCCESS');
  return {
    type: 'SIGN_IN_SUCCESS',
    email: data.user.email
  }
}

export function signUpAction(data) {

  console.log('returned');
  
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