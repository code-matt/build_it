var submitted = 0;
function init_worker_dashboard(){
  console.log('I am a workers dashboard')
  $('#container').children().fadeOut(1000);
  initNavbar();

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
  });
}
function init_contractor_dashboard(){
  console.log('I am a contractors dashboard')
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
