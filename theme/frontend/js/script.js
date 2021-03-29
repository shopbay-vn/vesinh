var PROGRAM = (function() {
    var win = $(window);
    var html = $('html');
    var nav = $('.menu_wrapper');
    var menu = nav.children('ul');
    var blur = $('.blur');

    var checkDevice = _isMobile();


    var slide_service = function() {
        if($('.slide_service').length == 0) return;
        var swiper_feld = new Swiper('.slide_service', {
            slidesPerView: 1,
            spaceBetween: 10,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            draggable: true,
            observer: true,
            // init: false,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                640: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                991: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
            }
        });
    }
    
    var slideprocess = function() {
        if($('.process_slide').length == 0) return;
        var swiper_process = new Swiper('.process_slide', {
            slidesPerView: 1,
            spaceBetween: 10,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            updateOnWindowResize: true,
            draggable: true,
            observer: true,
            // init: false,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
                480: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
                576: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                },
                768: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                },
                1024: {
                    slidesPerView: 5,
                    spaceBetween: 20,
                },
            }
        });
    }
    var icon_mobile = function() {
        var Menu = {     
          el: {
            ham: $('.menu_open_1'),
            menuTop: $('.menu-top_1'),
            menuMiddle: $('.menu-middle_1'),
            menuBottom: $('.menu-bottom_1')
        },
        
        init: function() {
            Menu.bindUIactions();
        },
        
        bindUIactions: function() {
            Menu.el.ham
            .on(
              'click',
              function(event) {
                Menu.activateMenu(event);
                event.preventDefault();
            }
            );
        },
        
        activateMenu: function() {
            Menu.el.menuTop.toggleClass('menu-top_1-click');
            Menu.el.menuMiddle.toggleClass('menu-middle_1-click');
            Menu.el.menuBottom.toggleClass('menu-bottom_1-click'); 
        }
    };

    Menu.init();
}
var scrollheader = function() {
    if (win.width() >991) {
        $('#navbar').removeClass('sticky');
        window.onscroll = function() {myFunction()};
        var navbar = document.getElementById("navbar");
        var sticky = navbar.offsetTop;
        console.log(sticky);

        function myFunction() {
            if (window.pageYOffset >= sticky) {
                navbar.classList.add("sticky")
            } else {
                navbar.classList.remove("sticky");
            }
        }
    }else{
        $('#navbar').addClass('sticky');
        $('header').css('paddingTop', $('#navbar').innerHeight());
    }

}     

var menu_mobile = function() {
    $(' .menu_mobile').find("ul li").each(function() {
        if ($(this).find("ul>li").length > 0) {
            $(this).prepend('<i class="fa fa-angle-down icon_d"></i>');
        }
    });
    $(".icon_d").click(function(e) {
        e.preventDefault();
        $(this)
        .parent()
        .siblings()
        .find("ul")
        .removeClass("icon_open")
        .next("ul")
        .slideUp();
        $(this).toggleClass("icon_open").siblings("ul").slideToggle();
    });
    $('.menu_open_1').click(function() {
        $('.menu_mobile').toggleClass('menu_active');
        $('.overlay').toggleClass('active_1');
    });
    $('.overlay').click(function() {
        $(this).removeClass('active_1');
        $('.menu_mobile').removeClass('menu_active');
        $('.menu-top_1').removeClass('menu-top_1-click');
        $('.menu-middle_1').removeClass('menu-middle_1-click');
        $('.menu-bottom_1').removeClass('menu-bottom_1-click');
    });
}

var wow = function() {
    new WOW().init();
}
var slide_banner_home = function() {
    if($('.slide_banner_home').length == 0) return;
    var swiper_feld = new Swiper('.slide_banner_home', {
        slidesPerView: 1,
        spaceBetween: 10,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        draggable: true,
        observer: true

            // init: false,
        });
}
var loadSize= function()
{
    if($(window).width() > 991)
    {
        var imgs = $('.s-content img');
        imgs.each(function(index, el) {
            var width = $(this).attr('width');
            var height = $(this).attr('height');
            var _thisImg = $(this);
            _thisImg.css('width',width);
            _thisImg.css('height',height);
        });
    }
}
var scrollcontact = function(){
    $(document).ready(function(){
        $(".ct").on('click', function(event) {
            if (this.hash !== "") {
              event.preventDefault();
              var hash = this.hash;    
              $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){        
                window.location.hash = hash;
            });
          } 
      });    
    });
}

var modal_search = function(){
   $('.openBtn').click(function(){
     $("#myOverlay").addClass("active_modal");
 });

   $('.closebtn').click(function(){
     $("#myOverlay").removeClass("active_modal");
 });    
}
var slideFeld = function() {
    if($('.feld_slide').length == 0) return;
    var swiper_feld = new Swiper('.feld_slide', {
        slidesPerView: 1,
        spaceBetween: 10,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        updateOnWindowResize: true,
        draggable: true,
        observer: true,
            // init: false,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                640: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                991: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
            }
        });
}
var _calHeightSlider = function(){
    if(checkDevice == true) return false;
    var itemImg = $(".banner_home img");
    var _heightBrower = $(window).height();
    var _heightHeader = $('header').height();
    $(".banner_home img,.banner_home").css('height',parseInt(_heightBrower - _heightHeader) + 'px');
}
function _isMobile(){
    if($(window).width() > 991) return false;
    return true;
}

return {
    _: function() {
        if (/Lighthouse/.test(navigator.userAgent)) return;
        $('.preloader').fadeIn().delay(50).fadeOut();
        slide_service();
        slideprocess();
        icon_mobile();
        scrollheader();
        loadSize();
        _calHeightSlider();
        menu_mobile();
        wow();
        slide_banner_home();
        scrollcontact();
        modal_search();
        slideFeld();
    }
};
})();


jQuery(document).ready(function($) {
    PROGRAM._();
    success = function(json){
        if((json.code) == 200){
            toastr.success((json.message), {timeOut: 5000});
            setTimeout(function() { 
                window.location.reload();
            }, 2000);
        }
        else {
            toastr.error((json.message), {timeOut: 5000});
        }
    }

    $('.loading').delay(300).fadeOut(300);
});