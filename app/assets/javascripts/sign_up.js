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
              }
            );
          }
        );

      }
    );
  });
}
