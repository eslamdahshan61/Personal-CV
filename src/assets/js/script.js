/*----------------------------------------------------------------

	Template Name: Ethant Hunt - HTML Template 
	Version: 1.0

	-------------------------------------------------------------------------------*/

/**************************************************************
	
	Main Js Activation
	01. Preloader 
	02. Menu 
	03. Pagepiling
	04. Typed Text
	05. Parallax
	06. Carousels
	07. Ajax Forms
	__ End Js Activation

***************************************************************/

(function ($) {
  "use strict";

  /*-------------------------------------------------------------------------------
	  Preloader
	-------------------------------------------------------------------------------*/

  $(window).on("load", function () {
    if ($(".preloader").length) {
      $(".preloader").fadeOut("slow");
    }

    if ($(".a-intro").length) {
      $(".a-intro").addClass("active");
    }
  });

  /*-------------------------------------------------------------------------------
	  Menu
	-------------------------------------------------------------------------------*/

  $(".a-nav-toggle").on("click", function () {
    if ($("html").hasClass("body-menu-opened")) {
      $("html").removeClass("body-menu-opened").addClass("body-menu-close");
    } else {
      $("html").addClass("body-menu-opened").removeClass("body-menu-close");
    }
  });

  /*-------------------------------------------------------------------------------
	  Pagepiling
	-------------------------------------------------------------------------------*/

  if ($(".a-pagepiling").length) {
    $(".a-pagepiling").pagepiling({
      scrollingSpeed: 280,
      menu: "#menu, #menuMain",
      anchors: [
        "About",
        "Services",
        "Skills",
        "Resume",
        "Portfolio",
        "Awards",
        "Testimonials",
        "Clients",
        "Contact",
      ],
      loopTop: false,
      loopBottom: false,
      navigation: {
        position: "right",
      },
      onLeave: function () {
        $(".a-progressbar .progress-bar").each(function () {
          if ($(".slide-skills").hasClass("active")) {
            $(this).width($(this).attr("aria-valuenow") + "%");
          } else {
            $(this).width("0");
          }
        });

        typedText();
      },
    });
  }

  /*-------------------------------------------------------------------------------
	  Typed Text
	-------------------------------------------------------------------------------*/

  function typedText() {
    $(".a-slide-typed").each(function () {
      var thisSlide = $(this);
      if (thisSlide.hasClass("active")) {
        var typedDiv = ".a-typed-" + thisSlide.data("name");
        $(typedDiv).html("");
        var typedText = thisSlide.find(".a-typed").data("text");

        var typedT = new Typed(typedDiv, {
          strings: [typedText],
          typeSpeed: 60,
          startDelay: 1000,
          loop: false,
          showCursor: false,
        });
      }
    });
  }

  $(window).load(function () {
    typedText();
  });

  /*-------------------------------------------------------------------------------
	  Parallax
	-------------------------------------------------------------------------------*/

  if ($("#a-parallax").length) {
    var scene = document.getElementById("a-parallax");
    var parallax = new Parallax(scene);
  }

  /*-------------------------------------------------------------------------------
	  Carousels
	-------------------------------------------------------------------------------*/

  if ($(".a-portfolio-carousel").length) {
    var owl = $(".a-portfolio-carousel");
    owl.owlCarousel({
      items: 3,
      smartSpeed: 750,
      margin: 30,
      autoplayHoverPause: true,
      dots: true,
      nav: false,
      dotData: false,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        900: {
          items: 3,
        },
      },
    });
  }

  if ($(".a-testimonial-carousel").length) {
    var owl = $(".a-testimonial-carousel");
    owl.owlCarousel({
      items: 1,
      smartSpeed: 750,
      margin: 30,
      autoplayHoverPause: true,
      dots: true,
      nav: false,
    });
  }
  ///////////////////////////////
  var dark = false;
  $("#dark-it").click(function () {
    darkIt(".body-piling");
    dark = true;
    return console.log(dark);
  });

  $("#light-it").click(function () {
    lightIt(".body-piling");
    dark = false;
    return console.log(dark);
  });

  $("#dark-it").click(function () {
    darkIt(".body-piling");
    dark = true;
    return dark;
  });

  $("#light-it").click(function () {
    lightIt(".body-piling");
    dark = false;
    return dark;
  });

  function addBootstrapRTL() {
    let head = document.head;

    let link = document.createElement("link");

    link.rel = "stylesheet";
    link.id = "rtl-id-2";
    link.href = "css/bootstrap-rtl.css";
    head.appendChild(link);
  }

  function addStyleRTL() {
    let head = document.head;
    let link = document.createElement("link");

    link.rel = "stylesheet";
    link.id = "rtl-id";
    link.href = "css/style-rtl.css";
    head.appendChild(link);
  }

  $("#ar").click(function () {
    addBootstrapRTL();
    addStyleRTL();
    $("#ar").css({ display: "none" });
    $("#en").css({ display: "inline" });
  });

  $("#en").click(function () {
    document.getElementById("rtl-id").remove();
    document.getElementById("rtl-id-2").remove();
    $("#en").css({ display: "none" });
    $("#ar").css({ display: "inline" });
  });
  // Animate
  function darkIt(element) {
    $(element).addClass("is-dark");
    $("#dark-it").css({ display: "none" });
    $("#light-it").css({ display: "inline" });
    /* var wait = setTimeout(function(){
		$(element).removeClass('animated '+animation);
	  }, 1000); */
  }
  function lightIt(element) {
    $(element).removeClass("is-dark");
    $("#dark-it").css({ display: "inline" });
    $("#light-it").css({ display: "none" });
    /* var wait = setTimeout(function(){
		$(element).removeClass('animated '+animation);
	  }, 1000); */
  }

  /*-------------------------------------------------------------------------------
	  Ajax Forms
	-------------------------------------------------------------------------------*/

  if ($(".a-form").length) {
    $(".a-form").each(function () {
      $(this).validate({
        errorClass: "error",
        submitHandler: function (form) {
          $.ajax({
            type: "POST",
            url: "mail.php",
            data: $(form).serialize(),
            success: function () {
              $(".form-group-message").show();
              $("#error").hide();
              $("#success").show();
            },
            error: function () {
              $(".form-group-message").show();
              $("#success").hide();
              $("#error").show();
            },
          });
        },
      });
    });
  }
})($);
