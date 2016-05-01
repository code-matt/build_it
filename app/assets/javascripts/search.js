function initSearchRotate(){
  $('#container').children().remove();
  $( '#container' )
    .append( data ).promise().done(function(){
      initSearch();
    });
  finishRotation(divID);
  // initSearch();
}

function initSearch()
{
  $( '#search-button' ).click( function( event ) {
    $('#results-container').children().fadeOut(1000, function(){
      $(this).remove();
    });

    type = $('#type_field').val();
    var request = $.ajax( {
      method: "GET",
      data: {task: "search-query", query: $('.search-input')[0].value},
      url: "/api/v1/navrouter"
    });

    request.fail(function(data){
      //KENDO IN THE ERROR MESSAGES FOR data.responseText
    });

    request.done(function( data ) {
      $( '#results-container' )
        .append( data );
        loopMaps();
        postsListener();
    });
  });
}
