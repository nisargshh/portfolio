$(document).ready(function() {
  var display;
  var targets = ".profile";

  anime({
    targets: ".path",
    loop: 4,
    direction: "alternate",
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: "easeInOutSine",
    duration: 1000,
    begin: function(anim) {
      $(".portfolio").css("display", "none");
    }
  }).finished.then(function() {
    $("svg").css("display", "none");
    $(".portfolio").css("display", "initial");
  });

  $(".ts3stats").click(function() {
    console.log(display);

    anime
      .timeline({
        loop: false,
        easing: "linear"
      })
      .add({
        targets: targets,
        width: "1px",
        height: "1px",
        direction: "normal",
        changeComplete: function(anim) {
          $(display).css("display", "none");
          $(targets).css("display", "none");
          $(".description").css("width", "0px");
          $(".description").css("height", "1px");
          $(".description").css("display", "block");
          $(".teamspeak-card").css("display", "block");
        }
      })
      .add({
        targets: ".description",
        width: "350px",
        height: "255px",
        duration: 1000,
        direction: "normal"
      })
      .finished.then(function() {
        display = ".teamspeak-card";
        targets = ".description";
      });
  });

  $(".se").click(function() {
    console.log(display);

    anime
      .timeline({
        loop: false,
        easing: "linear"
      })
      .add({
        targets: targets,
        width: "1px",
        height: "1px",
        direction: "normal",
        changeComplete: function(anim) {
          $(display).css("display", "none");
          $(targets).css("display", "none");
          $(".description").css("width", "0px");
          $(".description").css("height", "1px");
          $(".description").css("display", "block");
          $(".se-card").css("display", "block");
        }
      })
      .add({
        targets: ".description",
        width: "350px",
        height: "255px",
        duration: 1000,
        direction: "normal",
        changeComplete: function(anim) {
          $(".se-card").css("display", "initial");
        }
      })
      .finished.then(function() {
        display = ".se-card";
        targets = ".description";
      });
  });

  $(".d2d").click(function() {
    console.log(display);

    anime
      .timeline({
        loop: false,
        easing: "linear"
      })
      .add({
        targets: targets,
        width: "1px",
        height: "1px",
        direction: "normal",
        changeComplete: function(anim) {
          $(display).css("display", "none");
          $(targets).css("display", "none");
          $(".description").css("width", "0px");
          $(".description").css("height", "1px");
          $(".description").css("display", "block");
          $(".d2d-card").css("display", "block");
        }
      })
      .add({
        targets: ".description",
        width: "350px",
        height: "255px",
        duration: 1000,
        direction: "normal",
        changeComplete: function(anim) {
          $(".d2d-card").css("display", "initial");
        }
      })
      .finished.then(function() {
        display = ".d2d-card";
        targets = ".description";
      });
  });
});
