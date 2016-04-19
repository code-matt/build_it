window.onload = init();

function init()
{
  $('#sign_up_button').click(function(event)
  {
    event.preventDefault();

    var request = $.ajax
    (
      {
        method: "GET",
        data: "worker",
        url: "/api/v1/signup"
      }
    );

    request.done
    (
      function(data)
      {
        $('#sign-in').fadeOut(1000);
        $('#container').append(data);
        $('#select-type').slideUp(0);
        $('#select-type').slideDown(700);

        $('#worker_signup_button').click(function(event)
          {
            event.preventDefault();
            var request = $.ajax
            (
              {
                method: "GET",
                data: "worker",
                url: "/api/v1/signup/worker"
              }
            );
            request.done
            (
              function(data)
              {
                $('#select-type').fadeOut(1000);
                $('#container').append(data);
                $('#worker-signup-form').slideUp(0);
                $('#worker-signup-form').slideDown(700);

                $("form#sign_up_worker").bind("ajax:success", function(e, data, status, xhr) {
                  if (data.success) {
                    // $('#container').append(data);
                    console.log(data);
                    return alert('Success!!!!!!!');
                  } else {
                    // $('#container').append(data);
                    console.log(data);
                    // $("#worker_email").kendoTooltip({
                    //   content: "Tooltip content!",
                    //   showAfter: 1000,
                    //   autoHide: false
                    // });
                    // return alert('failure!');
                    tooltip = $("#worker_email").kendoTooltip({
                      position: "right",
                      showOn: "mouseenter",
                      autoHide: true,
                      content: function() {
                          return data;
                      },
                    });
                  }
                });
              }
            );
          }
        );

      }
    );
  });

  // $("form#sign_up_user").bind "ajax:success", (e, data, status, xhr)
  //   {
  //     if(data.success)
  //     {
  //       $('#sign_up').modal('hide')
  //       $('#sign_up_button').hide()
  //       $('#submit_comment').slideToggle(1000, "easeOutBack" )
  //     else{
  //       alert('failure!')
  //       }
  //     }
  //   }
}
