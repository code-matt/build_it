const searchState = (state, action) => {
  if (!state) {
    state = {
      search: {
        distance: 5
      }
    }
  }
  switch (action.type) {

    case 'CHANGE_SEARCH':
     return {
        ...state,
        [action.name]: {
          ...state[action.name],
          [action.fieldId]: action.value
        }
      }
    default:
      return state
  }
}

export {
  searchState
}