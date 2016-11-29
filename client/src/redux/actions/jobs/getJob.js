import { newFetch } from '../../lib/fetch'

export default function getJob (id) {
  return function (dispatch) {
    return newFetch('GET', true, '', '/api/v1/jobs/' + id)
    .then(response => response.json())
    .then(json => json.id)
  }
}
