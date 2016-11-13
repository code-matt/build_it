import React, {Component} from 'react'
import {
  withGoogleMap,
  GoogleMap,
  Marker
} from '../../lib'

const GettingStartedGoogleMap = withGoogleMap(props => (
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={14}
    defaultCenter={{ lat: -25.363882, lng: 131.044922 }}
    onClick={props.onMapClick}
    center={props.center}
  >
    {props.markers.map(marker => (
      <Marker
        {...marker}
        onRightClick={() => props.onMarkerRightClick(marker)}
        onClick={() => props.onMarkerClick(marker)}
      />
    ))}
  </GoogleMap>
));

export default class JobsMap extends Component {

  state = {
    markers: [{
      position: {
        lat: 25.0112183,
        lng: 121.52067570000001,
      },
      key: `Taiwan`,
      defaultAnimation: 2,
    }],
  };

  props = {
    jobs: []
  }
  componentWillReceiveProps (props) {
    this.setState({markers: this.jobs2markers(props.jobs)});
  }
  jobs2markers (jobs) {
    var arr = []
    for(let job in jobs){
      var j = jobs[job]
      arr.push({
        position: {
          lat: j.lat,
          lng: j.lng,
        },
        key: j.id,
        defaultAnimation: 2,
      })
    }
    return arr
  }
  handleMapLoad = this.handleMapLoad.bind(this);
  handleMapClick = this.handleMapClick.bind(this);
  handleMarkerRightClick = this.handleMarkerRightClick.bind(this);
  handleMarkerClick = this.handleMarkerClick.bind(this)

  handleMapLoad(map) {
    this._mapComponent = map;
    if (map) {
      console.log(map.getZoom());
    }
  }

  handleMarkerClick(targetMarker) {
    console.log(targetMarker)
    console.log("hi")
  }

  handleMapClick(event) {

  }

  handleMarkerRightClick(targetMarker) {

  }

  render() {
    return (
      <div style={{height: `100%`}}>
        <GettingStartedGoogleMap
          containerElement={
            <div style={{ height: `100%` }} />
          }
          mapElement={
            <div style={{ height: `100%` }} />
          }
          onMapLoad={this.handleMapLoad}
          onMapClick={this.handleMapClick}
          markers={this.state.markers}
          onMarkerRightClick={this.handleMarkerRightClick}
          onMarkerClick={this.handleMarkerClick}
          center={this.props.center}
        />
      </div>
    );
  }
}