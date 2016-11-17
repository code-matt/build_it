import React, {Component} from 'react'
import {
  withGoogleMap,
  GoogleMap,
  Marker,
  OverlayView
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
        icon: 'https://builditreact.s3.amazonaws.com/uploads/user/avatar/' + j.user_id + '/marker_image.png'
      })
    }
    return arr
  }
  handleMapLoad = this.handleMapLoad.bind(this);
  addNewJob = this.addNewJob.bind(this);
  handleMapClick = this.handleMapClick.bind(this);
  handleMarkerRightClick = this.handleMarkerRightClick.bind(this);
  handleMarkerClick = this.handleMarkerClick.bind(this)

  handleMapLoad(map) {
    this._mapComponent = map;
    if (map) {
      console.log(map.getZoom());
      this.addCustomElements(map)
    }
  }

  addCustomElements (map) {
    var google = window.google
    var centerControlDiv = document.createElement('div');
    var centerControl = new this.CenterControl(centerControlDiv, map, this);
    centerControlDiv.index = 1;
    map.context.googleMapObj.controls[google.maps.ControlPosition.TOP_CENTER].push(centerControlDiv)
  }

  CenterControl (controlDiv, map, component) {
    // Set CSS for the control border.
    var controlUI = document.createElement('div');
    controlUI.style.backgroundColor = '#fff';
    controlUI.style.border = '2px solid #fff';
    controlUI.style.borderRadius = '3px';
    controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
    controlUI.style.cursor = 'pointer';
    controlUI.style.marginBottom = '22px';
    controlUI.style.textAlign = 'center';
    controlUI.title = 'Click to recenter the map';
    controlDiv.appendChild(controlUI);

    // Set CSS for the control interior.
    var controlText = document.createElement('div');
    controlText.style.color = 'rgb(25,25,25)';
    controlText.style.fontFamily = 'Roboto,Arial,sans-serif';
    controlText.style.fontSize = '16px';
    controlText.style.lineHeight = '38px';
    controlText.style.paddingLeft = '5px';
    controlText.style.paddingRight = '5px';
    controlText.innerHTML = 'Add New Job';
    controlUI.appendChild(controlText);

    controlUI.addEventListener('click', function() {
      component.addNewJob()
    });
  }

  addNewJob () {
    this.props.newJobCB()
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
  newJobCB: React.PropTypes.func
}
