//navbar - https://stackoverflow.com/questions/16329937/docking-a-fixed-nav-bar-to-the-top-on-scroll
$(document).ready(function() {
  var totalH = $("#stickyNav").offset().top;
  $(window).bind("scroll", function() {
    var vPos = $(window).scrollTop();

    if (totalH < vPos) {
      $("#stickyNav").css({
        position: "fixed",
        top: 0,
        left: 0
      });
      $(".navbar_container").css({
        "width": "80%",
      });
    } else {
      $("#stickyNav").css({
        position: "absolute",
        top: "",
        left: ""
      });
      $(".navbar_container").css({
        "width": "100%",
      });
    }
  });
});
