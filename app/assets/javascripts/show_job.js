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
        showMap();
        initSignUpButton();
        initResignButton();
      });
      $( '#container' )
        .append( data );
      $( '#job-details' )
        .fadeOut( 0 );
      $( '#job-details' )
        .fadeIn( 1000 );
  });
}

function showMap()
{
  loc = geocode($('.post')[0].children[0].value,0)
}

function initSignUpButton(){
  $( '#signup_job_button' )
    .click( function( event ) {
      event.preventDefault();

      var request = $.ajax( {
        method: "GET",
        data: "worker",
        url: "/api/v1/signup-job/" + $('#id_field')[0].value
      } );

      request.done(
        function( data ) {
          init_worker_dashboard();
        }
      );
    });
}
function initResignButton(){
  $( '#resign_job_button' )
    .click( function( event ) {
      event.preventDefault();

      var request = $.ajax( {
        method: "GET",
        data: "worker",
        url: "/api/v1/resign-job/" + $('#id_field')[0].value
      } );

      request.done(
        function( data ) {
          init_worker_dashboard();
        }
      );
    });
}
