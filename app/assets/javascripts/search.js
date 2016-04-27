function initSearch()
{
  $( '#search-button' ).click( function( event ) {
    $('#results-container').children().fadeOut(100, function(){
      $(this).remove();
    });
    event.preventDefault();

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
