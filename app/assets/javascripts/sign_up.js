window.onload = init();
var submitted = 0;

function init() {
  $( '#sign_up_button' )
    .click( function( event ) {
      event.preventDefault();

      var request = $.ajax( {
        method: "GET",
        data: "worker",
        url: "/api/v1/signup"
      } );

      request.done(
        function( data ) {
          $( '#sign-in' )
            .fadeOut( 1000 );
          $( '#container' )
            .append( data );
          $( '#select-type' )
            .slideUp( 0 );
          $( '#select-type' )
            .slideDown( 700 );

            signUpWorkerButton();
            signUpContractorButton();
        }
      );
    });
}
