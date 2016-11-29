import { newFetch } from '../../lib/fetch'

export const setBuildItIdAction = (id) => ({
  type: 'SET_ID',
  buildItId: id
})

export default function getId () {
  return function (dispatch) {
    return newFetch('GET', true, '/api/v1/getid/')
    .then(response => response.json())
    .then(json =>
      dispatch(setBuildItIdAction(json.id))
    )
  }
}
