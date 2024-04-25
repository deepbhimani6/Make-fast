import "slick-carousel";

export class App {
  init() {
    $(".hero-slider").slick({
      dots: true,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      // autoplay: true,
      speed: 500,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            dots: false,
          },
        },
      ],
    });

    $(".news-slider").slick({
      dots: false,
      arrows: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: false,
      autoplay: true,
      speed: 500,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            arrows: false,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            arrows: false,
          },
        },
      ],
    });

    $(".offer-slider").slick({
      dots: false,
      arrows: false,
      infinite: false,
      autoplay: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });

    $(".testimonial-slider").slick({
      dots: true,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: false,
      autoplay: true,
      speed: 500,
    });

    $(".marine-case-slider-2").slick({
      dots: false,
      arrows: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: false,
      autoplay: true,
      speed: 500,
    });

    $(".brochure-slider").slick({
      dots: false,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: false,
      autoplay: true,
      speed: 500,
      responsive: [
        {
          breakpoint: 768,
          settings: "unslick",
        },
      ],
    });

    $(".productSlider-img").slick({
      dots: false,
      arrows: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      autoplay: true,
      speed: 500,
    });

    $(".KeyFeatures-slider").slick({
      dots: false,
      arrows: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: false,
      autoplay: true,
      speed: 500,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            dots: true,
          },
        },
      ],
    });

    $(".post-slider").slick({
      dots: false,
      arrows: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      infinite: false,
      autoplay: true,
      speed: 500,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            arrows: false,
          },
        },
      ],
    });
  }

  slickSLider() {}
}
