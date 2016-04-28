function initAdd(){
  $( "form#add_job" ).bind( "ajax:success", function( e, data, status, xhr ) {
    if ( data.success ){
      init_worker_dashboard();
    }
  });
}
