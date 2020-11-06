 // slider

 $(document).ready(function(){
  $('.slider-item').slick({
  dots: false,
  infinite: true,
  speed: 900,
  // fade: true,
  autoplay: true,
  autoplaySpeed: 4000,
  cssEase: 'linear',
  prevArrow: '<button type="button" class="slick-prev"><img src="images/right-arrow.png"></button>',
  nextArrow: '<button type="button" class="slick-next"><img src="images/left-arrow (1).png"></button>'
});
  // window

  $('.form').click(function () {
     $('#Modal').arcticmodal();
  })
   

    $('.form2').click(function () {
     $('#Modal2').arcticmodal();
  })






    

});