import { connect } from 'react-redux'
import { geocodeSearch } from '../actions/jobs'
import { changeModal } from '../actions/UI'
import Search from '../../components/search/search'

const mapStateToProps = (state, ownProps) => {
  return {
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    _jobActions: {
      geocodeSearch: (coords, distance) => {
        dispatch(geocodeSearch(coords, distance))
      }
    },
    _UIActions: {
      changeModal: (value, fieldId, modal) => {
        dispatch(changeModal(value, fieldId, modal))
      }
    }
  }
}

const VisibleSearch = connect(
  mapStateToProps,
  mapDispatchToProps
)(Search)

export default VisibleSearch
