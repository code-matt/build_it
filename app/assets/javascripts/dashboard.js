var submitted = 0;
function init_worker_dashboard(){
  console.log('I am a workers dashboard');
  $('#container').children().fadeOut(1000, function(){
    $(this).remove();
  });

  if(isHomeContentPresent())
  {
    $( '#navbar-content' ).children().remove();
    initNavbar();
  }

  var request = $.ajax( {
    method: "GET",
    data: "worker",
    url: "/api/v1/dashboard"
  } );

  request.done(
    function( data ) {
      $( '#container' )
        .append( data );
      $( '#feed' )
        .fadeOut( 0 );
      $( '#feed' )
        .fadeIn( 1000 );
      loopMaps();
      postsListener();
  });
}
function init_contractor_dashboard(){
  console.log('I am a contractors dashboard');
  $('#container').children().fadeOut(1000);

  var request = $.ajax( {
    method: "GET",
    data: "contractor",
    url: "/api/v1/dashboard"
  } );

  request.done(
    function( data ) {
      $( '#container' )
        .append( data );
      $( '#feed' )
        .fadeOut( 0 );
      $( '#feed' )
        .fadeIn( 1000 );
  });
}

function isHomeContentPresent()
{
  if ($('#home-link').length)
  {
   return true;
  }
  else
  {
   return false;
  }
}

function postsListener()
{
  posts_arr = $('.post');
  $.each
    (posts_arr,function(index, value)
      {
        value.addEventListener("click", showJob)
      }
    )
}
function showJob(){
  id = event.currentTarget.children.id_field.value;
  console.log("The id is " + id);

  var request = $.ajax( {
    method: "GET",
    data: {id: id},
    url: "/api/v1/navrouter/" + id
  } );

  request.fail(
    function( data ){
      console.log("error!! " + data)
    }
  )

  request.done(
    function( data ) {
      $('#container').children().fadeOut(1000, function(){
        $(this).remove();
      });
      $( '#container' )
        .append( data );
      $( '#job-details' )
        .fadeOut( 0 );
      $( '#job-details' )
        .fadeIn( 1000 );
  });
}

function loopMaps() {
  posts_arr = $('.post');
  for (var i = 0; i < posts_arr.length; i++) {
    geocode($('.post')[i].children[0].value, i);
  }
}

function geocode(address, index)
{
  var request = $.ajax( {
    method: "GET",
    data: { "address": address },
    url: "https://maps.googleapis.com/maps/api/geocode/json"
  } );

  request.done(
    function( data ) {
      placeMap(data.results[0].geometry.location.lat,
        data.results[0].geometry.location.lng,
        index);
  });
}

function placeMap(lat, long ,index){
  var mapProp = {
    center:new google.maps.LatLng(lat, long),
    zoom:15,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  };
  map = new google.maps.Map(document.getElementById("map-canvas-" + index),mapProp);
}

// function createMarker(place) {
//   placeLoc = place.geometry.location;
//   marker = new google.maps.Marker({
//     map: map,
//     animation: google.maps.Animation.DROP,
//     position: placeLoc
//   });
// }
