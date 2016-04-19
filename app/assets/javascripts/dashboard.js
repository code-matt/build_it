var submitted = 0;
function init_dashboard(){
  $('#container').children().fadeOut(1000);

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
