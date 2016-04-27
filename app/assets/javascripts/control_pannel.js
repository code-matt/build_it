function initControlPannel()
{
  initControlPannelButtons();
}

function initControlPannelButtons()
{
  view_buttons_arr = $('.view-button');
  $.each(view_buttons_arr,function(index, value){
    value.addEventListener("click", showJobCP);
  });

  resign_buttons_arr = $('.resign-button');
  $.each(resign_buttons_arr,function(index, value){
    value.addEventListener("click", resignJobCP);
  });
}

function showJobCP()
{
  event.preventDefault();
  id = event.target.closest('tr').id;
  var request = $.ajax({
    method: "GET",
    url: "/api/v1/navrouter/" + id
  });
  request.fail(function(data){
    //KENDO IN THE ERROR MESSAGES FOR data.responseText
  });
  request.done(function( data ) {
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

function resignJobCP(){
  event.preventDefault();
  id = event.target.closest('tr').id;
  var request = $.ajax({
    method: "GET",
    data: {id: id},
    url: "/api/v1/resign-job/" + id
  });
  request.fail(function(data){
    //KENDO IN THE ERROR MESSAGES FOR data.responseText
  });
  request.done(function( data ) {
    init_worker_dashboard();
  });
}
