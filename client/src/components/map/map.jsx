import React, {Component} from 'react'
import {
  withGoogleMap,
  GoogleMap,
  Marker,
  OverlayView
} from '../../lib'

function customMarker (pic_url) {
  var google = window.google
  return({
    anchor: new google.maps.Point(16, 16),
    // url: 'data:image/svg+xml;utf-8, \
    //   <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"> \
    //     <defs> \
    //       <pattern id="img1" patternUnits="userSpaceOnUse" width="100" height="100"> \
    //         <image xlink:href="' + pic_url + '" x="0" y="0" width="100" height="100" /> \
    //       </pattern> \
    //     </defs> \
    //     <path fill="url(#img1)" stroke="white" stroke-width="1.5" d="M3.5 3.5h25v25h-25z" ></path> \
    //   </svg>'
    url: 'data:image/svg+xml;utf-8, \
    <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"> \
      <defs> \
          <pattern id="imgpattern" x="0" y="0" width="1" height="1"> \
            <image width="32" height="32" \
                  xlink:href="' + pic_url + '" /> \
          </pattern> \
      </defs> \
      <path fill="url(#imgpattern)" stroke="black" stroke-width="1.5" \
            d="M3.5 3.5h25v25h-25z"> \
      </path> \
    </svg>'
  })
}

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
        icon: j.pic_url
        // icon: customMarker(j.pic_url)
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
    this.props.markerCB(targetMarker)
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

JobsMap.propTypes = {
  markerCB: React.PropTypes.func,
}