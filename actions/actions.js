export function saveColorAction(data) {
  return {
    type: 'SAVE_COLOR',
    data
  }
}

export function saveColorSuccessAction(data) {
  return {
    type: 'SAVE_COLOR_SUCCESS',
    data
  }
}

export function saveColorFailureAction(data) {
  return {
    type: 'SAVE_COLOR_FAILURE'
  }
}