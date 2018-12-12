$(function() {

  a();

  function a () {
    var pathSvg = $("#path").get(0),
      pathMain = pathSvg.getTotalLength();

    var confirm = $("#confirm").get(0),
      pathConfirm = confirm.getTotalLength();

    var contour = $("#contour").get(0),
      pathContour = contour.getTotalLength();

    var circle = $("#circle").get(0),
      pathCircle = circle.getTotalLength();

    var line = $("#line").get(0),
      pathLine = line.getTotalLength();

    var time = 300;

    $("path").each(function() {
      var path = $(this).get(0),
        pathTotal = path.getTotalLength();

      $(this).css({
        'stroke-dasharray': pathTotal,
        'stroke-dashoffset': pathTotal
      });
    });

    $(".student_id, .password").on('focusin', function() {
      $(this).parent(".cd-block").addClass('in-focus');
    });

    $(".student_id, .password").on('focusout', function() {
      $(this).parent(".cd-block").removeClass('in-focus');
    });

    $(".student_id, .password").on('change keyup', function() {
      ($(this).val() !== '') ? $(this).parent(".cd-block").addClass('typing') : $(this).parent(".cd-block").removeClass('typing');
    });

    $(".student_id").on('focusin keyup', function() {

      $("#path").animate({
        'stroke-dashoffset': pathMain - $(".student_id").innerWidth()
      }, time);

      var testStudentNumber = /^[0-9]{8}/i;

      (testStudentNumber.test(this.value)) ? $("#confirm").animate({'stroke-dashoffset': 0}, time) : $("#confirm").animate({'stroke-dashoffset': pathConfirm}, time);

    });

    $(".password").on('focusin keyup', function() {

      $("#path").animate({
        'stroke-dashoffset': - (pathMain - $(".student_id").innerWidth())
      }, time);

      if ($(this).val() == '') {
        $("#contour").animate({'stroke-dashoffset': pathContour}, time);
        $("#circle").animate({'stroke-dashoffset': pathCircle}, time);
        $("#line").animate({'stroke-dashoffset': pathLine}, time);
        $(".password").attr('type', 'password');
      } else {
        $("#contour, #circle").animate({'stroke-dashoffset': 0}, time);
      }
    });

    $("#show_password").on('click', function() {
      $(".password").attr('type') === 'password' ?
        ($(".password").attr('type', 'text'), $("#line").animate({'stroke-dashoffset': 0}, time)) :
        ($(".password").attr('type', 'password'), $("#line").animate({'stroke-dashoffset': pathLine}, time));

    });
  }

  $(".submit").on("click", function() {
    chrome.storage.sync.set({
      "ssu_username": $(".student_id").val(),
      "ssu_password": $(".password").val()
    });
  });
});
