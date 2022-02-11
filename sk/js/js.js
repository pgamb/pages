
var swiper = new Swiper(".promotionsl", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween:20,
    observer: true,
  observeParents: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
  },
  autoplay: {
      delay: 5000,
      disableOnInteraction: false,
  },
});   



 $('.headercommentbox').on('click', function () {
        $('.commentbox').toggleClass('d-block');
        
    });



var swiper = new Swiper(".postslide", {
   slidesPerView: "auto",
   centeredSlides: true,
   effect: "coverflow",
   grabCursor: true,
   observer: true,
  observeParents: true,
   coverflowEffect: {
      rotate: 20,
      stretch: 0,
      depth: 200,
      modifier: 1,
      slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination2",
      clickable: true,
  },
  autoplay: {
      delay: 5500,
      disableOnInteraction: false,
  },
});




$('.containpro').show();
$('.btnpromotion').on('click', function () {
    $('.containpro').show();
    $('.containpost').hide();
    $('.btnpromotion').addClass('active');
    $('.btnpost').removeClass('active');
});
$('.btnpost').on('click', function () {
    $('.containpost').show();
    $('.containpro').hide();
    $('.btnpost').addClass('active');
    $('.btnpromotion').removeClass('active');
});


    $('.sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
        $('.overlay').toggleClass('active');
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
         $('.wrapper-menu').toggleClass('open'); 
         $('.wrapper-menu').toggleClass('hamopen');
         $('.overlay').show();
    });
    $('.overlay,#xsidebar').on('click', function () {
        $('.overlay').hide();
        $('#sidebar').toggleClass('active');
        $('.overlay').toggleClass('active');
        $('.collapse.in').toggleClass('in');
        $('.wrapper-menu').toggleClass('open'); 
         $('.wrapper-menu').toggleClass('hamopen');
    });


