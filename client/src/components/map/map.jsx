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
    defaultZoom={17}
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
    markers: [],
    map: null
  };

  props = {
    jobs: []
  }
  
  componentWillReceiveProps (props) {
    this.setState({markers: this.jobs2markers(props.jobs)});
  }
  jobs2markers (jobs) {
    var google = window.google
    var arr = []
    var component = this
    for(let job in jobs){
      var j = jobs[job]
      var contentString = this.infoBoxInstance(j.title,j.hourly_rate,j.address,j.id)
      var infoWindow = new google.maps.InfoWindow();
      infoWindow.setContent(contentString);
      infoWindow.setPosition({lat:j.lat,lng:j.lng})
      google.maps.event.addDomListener(
        infoWindow.content,
        "click",
        function(){
          component.props.showJobCB(this)
        })
      arr.push({
        title: j.title,
        position: {
          lat: j.lat,
          lng: j.lng,
        },
        key: j.id,
        defaultAnimation: 2,
        icon: 'https://builditreact.s3.amazonaws.com/uploads/user/avatar/' + j.user_id + '/marker_image.png',
        infoWindow: infoWindow
      })
    }
    return arr
  }
  infoBoxInstance (title, rate, address, id) {
    var $ = window.$
    return $('<div id="' + id + '" class="marker-info-win">'+
      '<div class="marker-inner-win"><span class="info-content">'+
      '<h1 class="marker-heading">'+ title +'</h1>'+
      address + '<br />' + 
      rate/100 + '$/hr' + '<button id="jobInfo' + id + '">Details</button>' +
      '</span>'+
      '</div></div>')[0]
  }

  handleMapLoad(map) {
    this._mapComponent = map;
    if (map) {
      this.addCustomElements(map)
    }
  }

  addCustomElements (map) {
    var google = window.google
    var centerControlDiv = document.createElement('div');
    var centerControl = new this.AddJobControl(centerControlDiv, map, this);
    centerControlDiv.index = 1;
    map.context.googleMapObj.controls[google.maps.ControlPosition.TOP_CENTER].push(centerControlDiv)
  }

  AddJobControl (controlDiv, map, component) {
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
    var map = this._mapComponent.context.googleMapObj
    targetMarker.infoWindow.open(map)
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
  handleMapLoad = this.handleMapLoad.bind(this);
  addNewJob = this.addNewJob.bind(this);
  handleMapClick = this.handleMapClick.bind(this);
  handleMarkerRightClick = this.handleMarkerRightClick.bind(this);
  handleMarkerClick = this.handleMarkerClick.bind(this)
  infoBoxInstance = this.infoBoxInstance.bind(this)
  jobs2markers = this.jobs2markers.bind(this)
}

JobsMap.propTypes = {
  markerCB: React.PropTypes.func,
  newJobCB: React.PropTypes.func,
  showJobCB: React.PropTypes.func
}
