function initNavbar()
{
  var request = $.ajax({
    method: "POST",
    data: {task: "load"},
    url: "/api/v1/navrouter"
  });

  request.done(function( data ) {
    $( '.top-bar' )
      .append( data );
    initDashboardLink();
    initSearchLink();
    initControlPannelLink();
  });
}

function initDashboardLink()
{
  $( '#dashboard-link' ).click( function( event ){
    event.preventDefault();
    type = $('#type_field').val();

    var request = $.ajax({
      method: "POST",
      data: {type: {"email": $('.email-field').val(),
       "password": $('.password-field').val()},
       "commit": "Sign In"},
       url: "/" + type + "s/sign_in"
    });

    request.fail(function(data){
      //KENDO IN THE ERROR MESSAGES FOR data.responseText
    });

    request.done(function( data ) {
      init_worker_dashboard();
    });
  });
}
function initSearchLink()
{
  $( '#search-link' ).click( function( event ){
    event.preventDefault();

    var request = $.ajax({
      method: "GET",
      data: {task: "search"},
      url: "/api/v1/navrouter"
    });

    request.fail(function(data){
        //KENDO IN THE ERROR MESSAGES FOR data.responseText
    });
    request.done(function( data ){
      $('#container').children().fadeOut(1000, function(){
        $(this).remove();
      });
      $( '#container' )
        .append( data );
      $( '#search-container' )
        .fadeOut( 0 );
      $( '#search-container' )
        .fadeIn( 1000 );
        initSearch();
    });
  });
}

function initControlPannelLink()
{
  $( '#controlpannel-link' ).click( function( event ){
    event.preventDefault();

    var request = $.ajax({
      method: "GET",
      data: {task: "controlpannel"},
      url: "/api/v1/navrouter"
    });

    request.fail(function(data){
      //KENDO IN THE ERROR MESSAGES FOR data.responseText
    });

    request.done(function( data ) {
      $('#container').children().fadeOut(1000, function(){
        $(this).remove();
        loopMaps();
      });
      $( '#container' )
        .append( data );
      $( '#search-container' )
        .fadeOut( 0 );
      $( '#search-container' )
        .fadeIn( 1000 );
        initControlPannel();
    });
  });
}
