$(document).ready(function(){
  function loaddr() {
    $.ajax({
        type: "POST",
        url: '/ajax/doctor.php',
        data: {
            token: '',
            p: $('#pagination li.active a').attr('id')
        },
        success: function(result) {
            $("#content").html(result);
        }
    });
  }
  loaddr();
  $("#pagination").on('click', 'a', function(e) {
    e.preventDefault();
    $('#pagination li.active').removeClass('active');
    $(this).parent().addClass('active');
    loaddr();
  });
});
