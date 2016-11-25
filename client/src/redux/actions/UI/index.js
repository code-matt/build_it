const openLoginModalAction = () => ({
  type: 'OPEN_LOGIN_MODAL'
})

const closeLoginModalAction = () => ({
  type: 'CLOSE_LOGIN_MODAL'
})

const hoverChangeSearchLocationAction = (location) => ({
  type: 'CHANGE_SEARCH_LOC_HOVER',
  searchLoc: {
    lat: location.lat,
    lng: location.lng
  }
})

const changeModal = (value, fieldId, modal) => ({
  type: 'CHANGE_MODAL',
    fieldId: fieldId,
    value: value,
    modal: modal
})

export {
  openLoginModalAction,
  closeLoginModalAction,
  changeModal,
  hoverChangeSearchLocationAction
}
