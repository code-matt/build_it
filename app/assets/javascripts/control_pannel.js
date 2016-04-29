function initCPRotate(){
  $('#container').children().remove();
  $( '#container' )
    .append( data );
  finishRotation(divID,"initControlPannelButtons");
  initControlPannelButtons()
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
    rotateContainer(data,'initFeed','job-show');
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
