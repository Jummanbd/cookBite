$(".product_carousel").owlCarousel({
    loop: false,
    margin: 0,
    nav: true,
    dots: false,
    autoplay: false,
    autoplayTimeout: 6000,
    responsiveClass: true,
    navText: [
        `<i class="fa-solid fa-chevron-left"></i>`,
      `<i class="fa-solid fa-chevron-right"></i>`,
    ],
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      991: {
        items: 3,
    

      },

      1280: {
        items: 4,

      },
      1440: {
        items: 5,
     
      },
    },
    
  });

  // Testimonal
  $(".testimonial-carousel").owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    dots: true,
    autoplay:false,
    autoplayTimeout:6000,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 2,
        loop: false,
      },
      
    },
  })

// Reqular food items
    $(".reqular_food_items").owlCarousel({
      loop: true,
      margin: 0,
      nav: true,
      dots: false,
      autoplay:false,
      autoplayTimeout:6000,
      responsiveClass: true,
      navText: [
        `<i class="fa-solid fa-chevron-left"></i>`,
      `<i class="fa-solid fa-chevron-right"></i>`,
    ],
      responsive: {
        0: {
          items: 1,
        },
        580: {
          items: 2,
        },
        991: {
          items: 3,
          loop: true,
  
        },
        1000: {
          items: 4,
          loop: true,
  
        },
      },
    })