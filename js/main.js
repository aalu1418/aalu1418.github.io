//navbar - https://stackoverflow.com/questions/16329937/docking-a-fixed-nav-bar-to-the-top-on-scroll
$(document).ready(() => {
  const totalH = $("#stickyNav").offset().top;
  $(window).on("scroll", () => {
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

  //turn off darkmode between 7am and 6pm && darkmode is currently on
  const time = new Date();
  const hour = time.getHours();
  if (
    hour > 7 && hour < 18 &&
    $("#darkmode")
      .children("i")
      .text() === "toggle_on"
  ) {
    $("#darkmode").trigger("click");
  }
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
  const list2 = $(event.target)
    .parent("div")
    .siblings("ul"); //handle click on div content
  // console.log(list1.length, list2.length);
  const list = list1.length === 1 ? list1 : list2;
  // console.log(list);
  $(list[0]).slideToggle();
});

//toggle dark mode
$("#darkmode").click(() => {
  if (
    $("#darkmode")
      .children("i")
      .text() === "toggle_on"
  ) {
    //turn off dark mode
    $("#darkmode")
      .children("i")
      .text("toggle_off");
    $("html, .navbar, .dropdown, #interest-icons > div").css(
      "background-color",
      "white"
    );
    $("#interest-icons > div").css("border", "1.5px solid black");
    $("body, a").css("color", "black");
    $(
      ".logo, .row > .small-logo, #interest-icons > div > .small-logo, #github"
    ).css("filter", "invert(0)");
  } else {
    //turn on dark mode
    $("#darkmode")
      .children("i")
      .text("toggle_on");
    $(
      "html, .navbar, .dropdown, #interest-icons > div, .logo, .small-logo, body, a"
    ).removeAttr("style");
  }
});
