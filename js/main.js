
$(document).ready(function () {
    //////////** main slider **//////////
    var mainswiper = new Swiper('.main-slider .swiper-container', {
        spaceBetween: 10,
        loop: true,
        speed: 500,
        autoplay: {
            delay: 5000,
        },
        pagination: {
            el: '.main-slider .swiper-pagination',
            clickable: true,
        },
    });
    //////////** services-slider **//////////
    var servicesswiper = new Swiper('.services-slider .swiper-container', {
        loop: true,
        navigation: {
            nextEl: '.services-slider .swiper-btn-next',
            prevEl: '.services-slider .swiper-btn-prev',
        },
        pagination: {
            el: '.services-slider .swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1.5,
                spaceBetween: 15,
            },
            767: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            1199: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
        },
    });
    //////////** testimonials-slider **//////////
    var testimonialswiper = new Swiper('.testimonials-slider .swiper-container', {
        loop: true,
        navigation: {
            nextEl: '.testimonials-slider .swiper-btn-next',
            prevEl: '.testimonials-slider .swiper-btn-prev',
        },
        pagination: {
            el: '.testimonials-slider .swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 15,
            },
            767: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            992: {
                slidesPerView: 2,
                spaceBetween: 23,
            },
        },
    });
    //////////** news-slider **//////////
    var newswiper = new Swiper('.news-slider .swiper-container', {
        pagination: {
            el: '.news-slider .swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 15,
            },
            767: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            992: {
                slidesPerView: 2,
                spaceBetween: 23,
            },
            1199: {
                slidesPerView: 3,
                spaceBetween: 31,
            },
        },
    });
    //////////** clients-slider **//////////
    var clientswiper = new Swiper('.clients-slider .swiper-container', {
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 3,
                spaceBetween: 15,
            },
            767: {
                slidesPerView: 5,
                spaceBetween: 10,
            },
            992: {
                slidesPerView: 6,
                spaceBetween: 10,
            },
            1199: {
                slidesPerView: 9,
                spaceBetween: 20,
            },
        },
    });
    //////////** projects-slider **//////////
    if ($(window).width() <= 991) {
        $(".swiper-container .grid-item").unwrap();
        $(".swiper-container .main-project").wrap("<div class='grid-item'></div>");
        $(".swiper-container .project").removeClass("main-project");
        $(".swiper-container .grid-item").addClass("swiper-slide");
        $(".swiper-container .grid-item").wrapAll("<div class='swiper-wrapper'></div>");
        $(".Projects-section .swiper-container .swiper-wrapper").unwrap();
        var Projectswiper = new Swiper('.Projects-section .swiper-container', {
            loop: true,
            pagination: {
                el: '.Projects-section .swiper-container .swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                0: {
                    slidesPerView: 1,
                },
                767: {
                    slidesPerView: 2,
                },
                992: {
                    slidesPerView: 3,
                },
                1199: {
                    slidesPerView: 4,
                },
            },
        });
    }
    //////////** footer **//////////
    if ($(window).width() <= 991) {
        $('footer .has-sub>i').click(function (e) {
            e.preventDefault();
            var ele = $(this).parents("li");
            console.log(ele);
            if (ele.siblings("ul").css('display') == 'none') {
                ele.siblings("ul").slideDown(500);
            } else {
                ele.siblings("ul").slideUp(500);
            }
            $(".mo-accordion").not(ele).siblings().slideUp(500);
        })
    }
    //////////** project-page-slider **//////////
    var clientswiper = new Swiper('.project-page-slider .swiper-container', {
        loop: true,
        navigation: {
            nextEl: '.project-page-slider .swiper-btn-next',
            prevEl: '.project-page-slider .swiper-btn-prev',
        },
        pagination: {
            el: '.project-page-slider .swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            992: {
                slidesPerView: 2,
            },
        },
    });
    //////////** menu **//////////
    if ($(window).width() <= 991) {
        $('.menu-ico').click(function (e) {
            $('nav').slideToggle(500);
            $(this).toggleClass('active');
            $("body").toggleClass("overflow");
        })
    }

    $(".inputfile").change(function () {
        var file = $('.inputfile')[0].files[0]
        if (file) {
            $(".preview").text(file.name)
        }
    });
});
