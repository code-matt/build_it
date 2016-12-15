import { connect } from 'react-redux'
import { geocodeSearch } from '../actions/jobs'
import { changeSearch } from '../actions/UI'
import Search from '../../components/search/search'

const mapStateToProps = (state, ownProps) => {
  return {
    searchState: state.searchState
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
      changeSearch: (value, fieldId, name) => {
        dispatch(changeSearch(value, fieldId, name))
      }
    }
  }
}

const VisibleSearch = connect(
  mapStateToProps,
  mapDispatchToProps
)(Search)

export default VisibleSearch
