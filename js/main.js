//navbar - https://stackoverflow.com/questions/16329937/docking-a-fixed-nav-bar-to-the-top-on-scroll
$(document).ready(() => {
  const totalH = $("#stickyNav").offset().top;
  $(window).bind("scroll", () => {
    const vPos = $(window).scrollTop();

    let navbar_container_width = "80%"
    // console.log($(window).width());
    if ($(window).width() < 400){
      navbar_container_width = "90%";
    } else {
      navbar_container_width = "80%";
    }
    // console.log(navbar_container_width);  

    if (totalH < vPos) {
      $("#stickyNav").css({
        position: "fixed",
        top: 0,
        left: 0
      });
      $(".navbar_container").css({
        width: navbar_container_width
      });
    } else {
      $("#stickyNav").css({
        position: "absolute",
        top: "",
        left: ""
      });
      $(".navbar_container").css({
        width: "100%"
      });
    }
  });
});
