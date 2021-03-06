//navbar - https://stackoverflow.com/questions/16329937/docking-a-fixed-nav-bar-to-the-top-on-scroll
$(document).ready(() => {
  const totalH = $("#stickyNav").offset().top;
  const totalD = Math.round(
    $("#continue").offset().top - $("#name").offset().top
  );

  $("#stickyNav").fadeTo(0, 0);
  $("#about").fadeTo(0, 0);

  // header
  $(window).scroll(function () {
    const currentD = Math.round(
      $("#continue").offset().top - $("#name").offset().top
    );
    const fadeOut = Math.max((2 * currentD - totalD) / totalD, 0);
    const fadeIn = 1 - fadeOut;
    $("#continue").css({
      opacity: fadeOut,
    });
    $(".header-icons").css({
      opacity: fadeIn,
    });
    $("#name").css({
      "font-size": `${5 + 1 * fadeOut}rem`,
    });
    console.log(fadeOut, fadeIn);
  });

  // navbar
  $(window).scroll(() => {
    const vPos = $(window).scrollTop();

    let navbar_container_width = "80%";
    // console.log($(window).width());
    if ($(window).width() < 400) {
      navbar_container_width = "90%";
    } else {
      navbar_container_width = "80%";
    }
    // console.log(navbar_container_width);

    if (totalH < vPos) {
      $("#stickyNav").css({
        position: "fixed",
        top: 0,
        left: 0,
      });
      $(".navbar_container").css({
        width: navbar_container_width,
      });
    } else {
      $("#stickyNav").css({
        position: "absolute",
        top: "",
        left: "",
      });
      $(".navbar_container").css({
        width: "100%",
      });
    }
  });

  // fade in/out sections
  $(window)
    .scroll(() => {
      if ($(window).scrollTop() != 0) {
        $("#stickyNav").stop(true, false).fadeTo(125, 1, "linear");
      } else {
        $("#stickyNav").stop().fadeTo(250, 0);
        $("#about").stop().fadeTo(250, 0);
      }

      var windowBottom = $(this).scrollTop() + $(this).innerHeight();
      $(".fade").each(function () {
        /* Check the location of each desired element */
        var objectBottom = $(this).offset().top + $(this).outerHeight();

        //hides only-print sections
        if ($(this).attr("class").split(/\s+/).includes("only-print")) {
          return;
        }

        /* If the element is completely within bounds of the window, fade it in */
        if (
          objectBottom < windowBottom + $(this).innerHeight() * 0.7 &&
          $(window).scrollTop() != 0
        ) {
          //object comes into view (scrolling down)
          if ($(this).css("opacity") == 0) {
            $(this).stop().fadeTo(1000, 1);
          }
        } else {
          //object goes out of view (scrolling up)
          if ($(this).css("opacity") == 1) {
            $(this).stop().fadeTo(500, 0);
          }
        }
      });
    })
    .scroll(); //invoke scroll-handler on page-load
});

//toggle icon descriptions
$("#interest-icons > div > img").click(() => {
  const name = $(event.target).attr("alt");
  $("#" + name).slideToggle();
  $("#" + name)
    .siblings("p")
    .slideUp();
  // console.log($("#"+name).siblings("p").css("display","none"));
});

//toggle content
$(".details > ul > li > div").click(() => {
  const list1 = $(event.target).siblings("ul"); //handle click on div
  const list2 = $(event.target).parent("div").siblings("ul"); //handle click on div content
  // console.log(list1.length, list2.length);
  const list = list1.length === 1 ? list1 : list2;
  // console.log(list);
  $(list[0]).slideToggle();
});
