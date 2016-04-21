$( '#sign-in-button' )
  .click( function( event ) {
    event.preventDefault();
    var request = $.ajax( {
      method: "POST",
      data: {"worker": {"email": $('.email-field').val(), "password": $('.password-field').val()}, "commit": "Sign In"},
      url: "/workers/sign_in"
    } );
    request.fail(
      function(data){
        //KENDO IN THE ERROR MESSAGES FOR data.responseText
      }
    )
    request.done(
      function( data ) {
        init_worker_dashboard();
      });
    });
