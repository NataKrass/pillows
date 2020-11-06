/*
Copyright (c) 2017 
------------------------------------------------------------------
[Master Javascript]

Project:	Laundry Responsive Template

-------------------------------------------------------------------*/
(function($) {
    "use strict";
    var landingpage = {
        initialised: false,
        version: 1.0,
        mobile: false,
        init: function() {

            if (!this.initialised) {
                this.initialised = true;
            } else {
                return;
            }

            /*-------------- Laundry Functions Calling ---------------------------------------------------
            ------------------------------------------------------------------------------------------------*/
            this.Banner_slider();
            this.Partner_slider();
            this.Counter();
            this.Testimonial_slider();
            this.Wow();
            this.Map();



        },

        /*-------------- Laundry Functions definition ---------------------------------------------------
        ---------------------------------------------------------------------------------------------------*/

        //banner slider
        Banner_slider: function() {
            $(".clts_banner_slider").owlCarousel({
                navigation: true,
                loop: true,
                items: 1,
                margin: 0,
                autoplay: true,
                slideSpeed: 1000,
                singleItem: true,
                animateIn: 'fadeIn',
                animateOut: 'fadeOut',

            });

        },

        //partner slider
        Partner_slider: function() {
            $(".partner_slider").owlCarousel({
                navigation: true,
                loop: true,
                items: 5,
                margin: 0,
                autoplay: true,
                slideSpeed: 1000,
                singleItem: true,
                responsive: {
                    0: {
                        items: 1,
                    },
                    480: {
                        items: 2,
                    },
                    768: {
                        items: 4,
                    },
                    1068: {
                        items: 5,
                    }
                }

            });

        },
     // slider 

           

        // Counter
        Counter: function() {
            if ($('.clts_count_box').length > 0) {
                $('.clts_count_box').appear(function() {
                    $('.count-no').countTo();
                });
            }
        },

        //Testimonial slider
        Testimonial_slider: function() {
            $(".testimonial_slider").owlCarousel({
                navigation: true,
                loop: true,
                items: 2,
                margin: 30,
                autoplay: true,
                slideSpeed: 1000,
                singleItem: true,
                responsive: {
                    0: {
                        items: 1,
                    },
                    480: {
                        items: 1,
                    },
                    768: {
                        items: 2,
                    },
                    1068: {
                        items: 2,
                    }
                }

            });

        },

        //Wow
        Wow: function() {

            new WOW().init();
        },

        //Map
        Map: function() {
            if ($(".ed_map").length) {
                $(".ed_map").each(function(index) {
                    var id = $(this).attr("id");
                    var address = $(this).attr("data-address");
                    $(this).googleMap({
                        scrollwheel: true
                    });
                    $(this).addMarker({
                        //coords: [22.9622672, 76.05079490000003] // for using lat long for marker
                        address: "address"
                    });
                });
            }


        },

    };
    $(document).ready(function() {
        landingpage.init();
    });

    //On scroll fixed menu
    $(window).scroll(function() {
        var wh = window.innerWidth;
        var h = window.innerHeight;
        var window_top = $(window).scrollTop() + 1;
        if (window_top > 100) {
            $('.clts_banner_box').addClass('menu_fixed');
        } else {
            $('.clts_banner_box').removeClass('menu_fixed');
        }


    });



})(jQuery);