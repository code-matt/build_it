function initNavbar(){
  // $.ajaxSetup({
  //   headers: {
  //     'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
  //   }
  // });

  var request = $.ajax( {
    method: "POST",
    data: {task: "load"},
    url: "/api/v1/navrouter"
  } );

  request.done(
    function( data ) {
      $( '.top-bar' )
        .append( data );
      initDashboardLink();
  });
}
// $( '#signout-link' )
//   .click( function( event ) {
//     event.preventDefault();
//     var request = $.ajax( {
//       method: "POST",
//       data: {"worker": {"email": $('.email-field').val(), "password": $('.password-field').val()}, "commit": "Sign In"},
//       url: "/workers/sign_in"
//     } );
//     request.fail(
//       function(data){
//         //KENDO IN THE ERROR MESSAGES FOR data.responseText
//       }
//     );
//     request.done(
//       function( data ) {
//         init_worker_dashboard();
//       });
//     });
function initDashboardLink(){
  $( '#dashboard-link' )
    .click( function( event ) {
      event.preventDefault();
      type = $('#type_field').val();
      var request = $.ajax( {
        method: "POST",
        data: {type: {"email": $('.email-field').val(), "password": $('.password-field').val()}, "commit": "Sign In"},
        url: "/" + type + "s/sign_in"
      } );
      request.fail(
        function(data){
          //KENDO IN THE ERROR MESSAGES FOR data.responseText
        }
      );
      request.done(
        function( data ) {
          init_worker_dashboard();
        });
      });
}
// $( '#search-link' )
//   .click( function( event ) {
//     event.preventDefault();
//     var request = $.ajax( {
//       method: "POST",
//       data: {"worker": {"email": $('.email-field').val(), "password": $('.password-field').val()}, "commit": "Sign In"},
//       url: "/workers/sign_in"
//     } );
//     request.fail(
//       function(data){
//         //KENDO IN THE ERROR MESSAGES FOR data.responseText
//       }
//     );
//     request.done(
//       function( data ) {
//         init_worker_dashboard();
//       });
//     });
//
// $( '#controlpannel-link' )
//   .click( function( event ) {
//     event.preventDefault();
//     var request = $.ajax( {
//       method: "POST",
//       data: {"worker": {"email": $('.email-field').val(), "password": $('.password-field').val()}, "commit": "Sign In"},
//       url: "/workers/sign_in"
//     } );
//     request.fail(
//       function(data){
//         //KENDO IN THE ERROR MESSAGES FOR data.responseText
//       }
//     );
//     request.done(
//       function( data ) {
//         init_worker_dashboard();
//       });
//     });
