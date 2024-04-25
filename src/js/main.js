import $ from "jquery";
import "@popperjs/core";
import "bootstrap/dist/js/bootstrap";
import "lightbox2/dist/js/lightbox";

import { App } from "./parts/app.js";
import { Plugins } from "./parts/plugins.js";
import { Parts } from "./parts/parts.js";

// export for others scripts to use
window.$ = $;
window.jQuery = $;

$(function () {
  window.windowWidth = $(window).width();
  window.windowHeight = $(window).height();

  window.isiPhone = navigator.userAgent.toLowerCase().indexOf("iphone");
  window.isiPad = navigator.userAgent.toLowerCase().indexOf("ipad");
  window.isiPod = navigator.userAgent.toLowerCase().indexOf("ipod");

  // Functions List Below

  window.app = new App();
  window.app.init();

  window.plugins = new Plugins();
  window.plugins.init();

  window.parts = new Parts();
  window.parts.init();
});

// ===========================================================================

// Select2 JS
$(document).ready(function () {
  $(".select-dropdown").select2();
  $(".product-option, .disable-search").select2({
    minimumResultsForSearch: -1,
  });
  $(".product-slider-dropdown").select2({
    dropdownParent: $(".product-dropdown"),
    minimumResultsForSearch: -1,
  });
  $(".select-dropdown-modal").select2({
    dropdownParent: $(".form-group"),
    minimumResultsForSearch: -1,
  });
  // $(".contact-dropdown-form").select2({
  //   dropdownParent: $(".contact-form-modal"),
  //   minimumResultsForSearch: -1,
  // });
});

// ===========================================================================

// fancy box
require("@fancyapps/ui/src/Fancybox/Fancybox");

// ===========================================================================

// header
$(window).scroll(function () {
  var sticky = $("header"),
    scroll = $(window).scrollTop();

  if (scroll >= 50) sticky.addClass("header-fixed");
  else sticky.removeClass("header-fixed");
});
var p = $("header");
$(".fake-header").css("height", p.innerHeight());

$(document).ready(function () {
  $(".menu-close").click(function () {
    $(".mega-menu > a").removeClass("open");
    $("body").removeClass("fixed-bg");
    $("header").removeClass("mega-menu-open");
    $(".mega-menu-content").removeClass("opacity-100 visible");
    $(".tab-content").removeClass("opacity-100 visible");
  });

  $(".mega-menu > a").click(function () {
    if (innerWidth > 991) $("body").toggleClass("fixed-bg");
    $(this).toggleClass("open");
    $("header").toggleClass("mega-menu-open");
    $(".mega-menu-content").toggleClass("opacity-100 visible");
  });

  $(".nav > button").click(function () {
    if (innerWidth <= 991) $(".tab-content").addClass("opacity-100 visible");
  });

  $(".mega-menu-header .back-to-menu").click(function () {
    $(".mega-menu-content").removeClass("opacity-100 visible");
  });

  $(".tab-header .back-to-menu").click(function () {
    $(".tab-content").removeClass("opacity-100 visible");
  });
});

// ===========================================================================

// scroll none-add
$(".scroll-none").click(function () {
  $("body").addClass("fixed-bg");
});
$(".scroll-add").click(function () {
  $("body").removeClass("fixed-bg");
});

// ===========================================================================

// header search button
$("#searchIcon").click(function () {
  $("#search-collapse").addClass("show");
  $(".menu ul li:not(.search-btn)").addClass("hide");
});
$("#searchCloseBtn").click(function () {
  $("#search-collapse").removeClass("show");
  $(".menu ul li:not(.search-btn)").removeClass("hide");
});

// ===========================================================================

// read more/less
$(document).ready(function () {
  $(".read-more-less").click(function () {
    $(this)
      .parent(".read-more-less-content")
      .children("div")
      .toggleClass("text-truncate-unset text-truncate6");
    if ($(this).text() == "Read More") $(this).text("Read Less");
    else $(this).text("Read More");
  });
});

// ===========================================================================

// tab filter js
$(document).ready(function () {
  $(".filter-tab-btn").click(function () {
    var value = $(this).attr("data-filter");
    if (value == "all") {
      $(".filter").show("700");
    } else {
      $(".filter")
        .not("." + value)
        .hide("2000");
      $(".filter")
        .filter("." + value)
        .show("2000");
    }
    var filterOpen = $(this).hasClass("active");
    if (filterOpen) {
      $(".filter-tab-btn").removeClass("active");
    } else {
      var siblings = $(".filter-tab-nav").find(".active");
      siblings.removeClass("active");
      $(this).addClass("active");
    }
  });
});

// ===========================================================================
