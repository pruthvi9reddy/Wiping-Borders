jQuery(function ($) {

    var navU = navigator.userAgent;
    // Android Mobile
    var isAndroidMobile = navU.indexOf('Android') > -1 && navU.indexOf('Mozilla/5.0') > -1 && navU.indexOf('AppleWebKit') > -1;
    // Apple webkit
    var regExAppleWebKit = new RegExp(/AppleWebKit\/([\d.]+)/);
    var resultAppleWebKitRegEx = regExAppleWebKit.exec(navU);
    var appleWebKitVersion = (resultAppleWebKitRegEx === null ? null : parseFloat(regExAppleWebKit.exec(navU)[1]));
    // Chrome
    var regExChrome = new RegExp(/Chrome\/([\d.]+)/);
    var resultChromeRegEx = regExChrome.exec(navU);
    var chromeVersion = (resultChromeRegEx === null ? null : parseFloat(regExChrome.exec(navU)[1]));
    // Native Android Browser
    var isAndroidBrowser = isAndroidMobile && (appleWebKitVersion !== null && appleWebKitVersion < 537) || (chromeVersion !== null && chromeVersion < 37);

    var windowWidth = Math.max($(window).width(), window.innerWidth),
        $root = $('html');
    if (isAndroidBrowser) {
        $root.addClass('stock-android')
    }
    var waitForFinalEvent = (function () {
        var timer = 0;
        return function (callback, ms) {
            clearTimeout(timer);
            timer = setTimeout(callback, ms);
        };
    })();

    /*Footer*/
    function stickyFooter() {
        var footerEl = $('footer');
        footerEl.css('marginTop', -footerEl.outerHeight());
        $('#indent').css('paddingBottom', footerEl.outerHeight());
    }

    /*______*/

    /*Equal height*/
    var equalheight = function (container) {
        var currentTallest = 0,
            currentRowStart = 0,
            rowDivs = new Array(),
            $el,
            topPosition = 0;
        $(container).each(function () {
            $el = $(this);
            $($el).height('auto');
            topPosition = $el.position().top;

            if (currentRowStart != topPosition) {
                for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
                    rowDivs[currentDiv].outerHeight(currentTallest);
                }
                rowDivs.length = 0; // empty the array
                currentRowStart = topPosition;
                currentTallest = $el.outerHeight();
                rowDivs.push($el);
            } else {
                rowDivs.push($el);
                currentTallest = (currentTallest < $el.outerHeight()) ? ($el.outerHeight()) : (currentTallest);
            }
            for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
                rowDivs[currentDiv].outerHeight(currentTallest);
            }
        });
        if ($('.feeds .target_audiences_menu').length && windowWidth > 728 ) {
            let $items = $('.feeds .target_audiences_menu .audiences-box .item .desc');
            if ($items.length > 1) {
                for (let i= 0; i < $items.length; i +=2 ) {
                    let max = Math.max ($($items[i]).outerHeight(),$($items[i+1]).outerHeight());
                    $($items[i]).outerHeight(max);
                    $($items[i+1]).outerHeight(max);
                }
            }
        }
        else {
            if ($('.feeds .target_audiences_menu').length && windowWidth < 729 ) {
                let $items = $('.feeds .target_audiences_menu .audiences-box .item .desc');
                if ($items.length > 1) {
                    for (let i= 0; i < $items.length; i +=2 ) {
                        $($items[i]).height('auto');
                        $($items[i+1]).height('auto');
                    }
                }
            }
        }
        
        
        setTimeout(stickyFooter, 3000);
    };
    var lazy_bg = function () {
        var slides = $('.bg-lazyload');
        $(slides).each(function () {
            var $el = $(this);
            var src = $el.data('background-image');
            $el.css('background-image', 'url("'+src+'")');
        });
        setTimeout(stickyFooter, 1500);
    };
    /*_________*/

    $(window).load(function () {
        equalheight('.equal');
        if ($('.bg-lazyload').length > 0) {
            setTimeout(lazy_bg, 500);
        }
    });

    $(window).resize(function () {
        windowWidth = Math.max($(window).width(), window.innerWidth);
        waitForFinalEvent(function () {
            stickyFooter();
            equalheight('.equal');
            /*if ($root.hasClass('menu-open')) {
                $('.menu-wrap').height($(window).height() - $('.right-controls').outerHeight())
            }*/
            if ($root.hasClass('header-ver3')) {
                $('nav').css({paddingLeft: $('header .container').offset().left + 20});
            }
        }, 50);
    });

    $(window).on('orientationchange', function () {
        stickyFooter();
        equalheight('.equal');
        /*
        if ($root.hasClass('menu-open')) {
            $('.menu-wrap').height( $(window).height() - $('.right-controls').outerHeight() );
        }*/
    });

    $('select').select2({
        minimumResultsForSearch: Infinity
    });

    $('nav > ul > li').each(function () {
        /*if ($(this).find('.submenu').length > 0) {
            $(this).addClass('has-child').children('a').append('<i class="fa fa-angle-right"></i>')
        }*/
        if ($(this).hasClass('active') && windowWidth < 1024) {
            $(this).addClass('nav-mob-visible');
        }
    });
    $('nav > ul > li.has-child > .submenu li').each(function () {
        if ($(this).find('ul').length > 0) {
            $(this).addClass('has-child second-level').children('a').append('<i class="fa fa-angle-right"></i>')
        }
        if ($(this).hasClass('active') && windowWidth < 1024) {
            $(this).addClass('nav-mob-visible');
        }
    });

    $('html:not(.header-ver3) nav').on('click', '.has-child > a .fa', function (e) {
        if (!$root.hasClass('desktop') || ($root.hasClass('desktop') && windowWidth < 1024) || $(this).closest('.submenu').hasClass('col-2') || $(this).closest('.submenu').hasClass('col-3')) {
            e.preventDefault();
            e.stopPropagation();
            if (!$(this).closest('li').hasClass('nav-visible')) {
                $(this).closest('li').siblings().removeClass('nav-visible nav-mob-visible').find('.nav-visible ').removeClass('nav-visible');
                $(this).closest('li').addClass('nav-visible');
            }
            else {
                $(this).closest('li').removeClass('nav-visible nav-mob-visible');
            }
        }
    });
    $('html.header-ver3 nav').on('click', '.has-child > a .fa', function (e) {
        e.preventDefault();
        e.stopPropagation();
        if (!$(this).closest('li').hasClass('nav-visible')) {
            $(this).closest('li').siblings().removeClass('nav-visible nav-mob-visible').find('.nav-visible ').removeClass('nav-visible');
            $(this).closest('li').addClass('nav-visible');
        }
        else {
            $(this).closest('li').removeClass('nav-visible nav-mob-visible');
        }
    });

    $('#menu-toggle-wrapper').click(function (e) {
        e.stopPropagation();
        e.preventDefault();
        if (!$root.hasClass('menu-open')) {
            $root.addClass('menu-open');
            //$('.menu-wrap').height($(window).height() - $('.right-controls').outerHeight() )
        }
        else {
            $root.removeClass('menu-open');
            $('.has-child').removeClass('visible');
        }
        if ($root.hasClass('header-ver3')) {
            $('nav').css({paddingLeft: $('header .container').offset().left + 20});
        }
    });

    $('.close-menu').on('click', function () {
        $('#menu-toggle-wrapper').trigger('click')
    });

    $('#wrapper').click(function (e) {
        if (windowWidth > 960) {
            $('.has-child').removeClass('nav-visible');
        }
        $('.dropdown-wrap').removeClass('opened')
        $root.removeClass('menu-open search-open');
        $('.open-search').find('i').removeClass('fa-close');
    });

    $('nav, .search-box, .dropdown-wrap').click(function (e) {
        e.stopPropagation();
    });

    $('.sub-nav > ul  li').each(function () {
        if ($(this).find('ul').length > 0) {
            $(this).addClass('has-child').children('a').append('<i class="fa fa-angle-down"></i>')
        }
    });
    $('.sub-nav > ul li.has-child > a').click(function (e) {
        e.stopPropagation();
        e.preventDefault();
        $(this).parent().toggleClass('active').siblings().removeClass('active')
    });

    $('.change-style').on('change', '.change-radio', function () {
        var $class = $(this).data('class');
        if ($class === 'no-sidebar') {
            $('aside').hide();
        } else {
            $('aside').show()
        }
        $('.content-box').removeClass('wo_bg bg_fwidth default no-sidebar').addClass($class)
    });

    $('.faq-toggle .question').click(function (e) {
        e.stopPropagation();
        e.preventDefault();
        if ($(this).parent().hasClass('open')) {
            $(this).parent().removeClass('open').find('.answer').slideUp();
        } else {
            $(this).parent().addClass('open').siblings().removeClass('open').find('.answer').slideUp();
            $(this).parent().find('.answer').slideDown()
        }
    });
    
    $('.accordion-box .accordion-title').click(function (e) {
        e.stopPropagation();
        e.preventDefault();
        if ($(this).parent().hasClass('open')) {
            $(this).parent().removeClass('open').find('.accordion-body').slideUp();
        } else {
            $(this).parent().addClass('open').siblings().removeClass('open').find('.accordion-body').slideUp();
            $(this).parent().find('.accordion-body').slideDown()
        }
    });





    $(document).on('click', '.question-box a', function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });

    $('.slider').each(function () {
        var autoplay = false;
        if (SLIDE_SPEED != 0) {autoplay = true}
        var $this = $(this);
        $this.slick({
            autoplay: autoplay,
            autoplaySpeed: SLIDE_SPEED * 1000,
            fade: true,
            dots: true,
            appendArrows: $this.next(),
            appendDots: $this.next(),
            prevArrow: '<button type="button" class="slick-prev" aria-label="Previous"></button>',
            nextArrow: '<button type="button" class="slick-next" aria-label="Next"></button>'
        })
    });

    $('.slide-text .slider-align').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        $(this).closest('.slider-box').find('.text').hide();
        $(this).closest('.slider-box').find('.text[data-slide=' + (nextSlide) + ']').fadeIn('fast');
    });

    if($('div.fb-page').length) {
        setTimeout( function(){
            (function(id) {
                if (document.getElementById(id)) return;
                let js = document.createElement('script');
                js.id = id;
                js.async=true;
                js.defer=true;
                js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.10";
                document.head.appendChild(js);
            }('facebook-jssdk'));
        }, 3500);
    }

    if($('.twitter-timeline').length) {
        setTimeout( function(){
            (function(id) {
                if (document.getElementById(id)) return;
                let js = document.createElement('script');
                js.id = id;
                js.async=true;
                js.defer=true;
                js.src = "//platform.twitter.com/widgets.js";
                document.head.appendChild(js);
            }('twitter-feed'));
        }, 4500);
    }

    if(window.recapcha_url) {
        setTimeout( function(){
            (function(id) {
                if (document.getElementById(id)) return;
                let js = document.createElement('script');
                js.id = id;
                js.async=true;
                js.defer=true;
                js.src = window.recapcha_url;
                document.head.appendChild(js);
                js.onload = recaptcha_v3;
            }('recaptcha-v3'));
        }, 3500);
    }


    if ($('.map').length) {
        window._map_loaded = false;
        let js = document.createElement('script');
        let gmap_url = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAAywRVXd9uASEPK4yimImKgYTlAkytYOc&libraries=geometry&language=' + ( window.LANG?window.LANG:'en');
        js.src = gmap_url;
        js.async=true;
        js.defer=true;
        document.head.appendChild(js);
        js.onload = function() {
            google.maps.event.addDomListener(window, 'load', gmap_init);
            window._map_load_timer = setInterval(function(){
                if ( google && google.maps ) {
                    if (window._map_loaded) {
                        clearInterval(window._map_load_timer);
                        return false;
                    }
                    else {
                        gmap_init();
                    }
                }
            }, 1000);
        };
    }

    var mapId = [],
        mapLat = [],
        mapLng = [];

    function gmap_init() {
        window._map_loaded = true;
        $('.map').each(function () {
            mapId.push($(this).attr('id'));
            mapLat.push($(this).attr('data-lat'));
            mapLng.push($(this).attr('data-lng'));
        });
        for (i = 0; i < mapId.length; i++) {
            var mapElement = document.getElementById(mapId[i]);
            var lat = mapLat[i];
            var lng = mapLng[i];

            var mapOptions = {
                zoom: 16,
                disableDefaultUI: true,
                center: new google.maps.LatLng(lat, lng)
            };


            if ($(mapElement).attr('data-zoomControl') == 'true') {
                mapOptions['zoomControl'] = true;
            }
            else {
                mapOptions['zoomControl'] = false;
            }
            if ($(mapElement).attr('data-mapTypeControl') == 'true') {
                mapOptions['mapTypeControl'] = true;
            }
            else {
                mapOptions['mapTypeControl'] = false;
            }
            if ($(mapElement).attr('data-scaleControl') == 'true') {
                mapOptions['scaleControl'] = true;
            }
            else {
                mapOptions['scaleControl'] = false;
            }
            if ($(mapElement).attr('data-streetViewControl') == 'true') {
                mapOptions['streetViewControl'] = true;
            }
            else {
                mapOptions['streetViewControl'] = false;
            }
            if ($(mapElement).attr('data-rotateControl') == 'true') {
                mapOptions['rotateControl'] = true;
            }
            else {
                mapOptions['rotateControl'] = false;
            }
            if ($(mapElement).attr('data-fullscreenControl') == 'true') {
                mapOptions['fullscreenControl'] = true;
            }
            else {
                mapOptions['fullscreenControl'] = false;
            }

            var map = new google.maps.Map(mapElement, mapOptions);

            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(lat, lng),
                map: map,
                title: ''
            });

            google.maps.event.addDomListener(window, "resize", function () {
                var center = map.getCenter();
                google.maps.event.trigger(map, "resize");
                map.setCenter(center);
            });
        }
    }

    $('.open-search').click(function () {
        $(this).find('i').toggleClass('fa-close');
        $root.toggleClass('search-open');
    });

    if ($root.hasClass('fixed-header')) {
        var headerHeight = $('header').outerHeight(),
            navHeight = $('nav', $('header')).outerHeight(),
            windowWidth = Math.max($(window).width(), window.innerWidth), alertTop=32;

        if ($('.alert-to-top').length) {
            alertTop= $('.alert-to-top').outerHeight()
        }
        navHeight += alertTop;
        $(window).scroll(function () {
            var top = $(window).scrollTop();
            if ( ( (windowWidth<=760) && top >= alertTop )  ||  ( (windowWidth>760) && top >= (headerHeight-navHeight) ) ) {
                if (!$('header').hasClass('fixed')){
                    $('header').addClass('fixed');
                    $('.alert-to-top').addClass('fixed-header');
                    $('main').css({paddingTop: headerHeight});
                }
            } else {
                $('header').removeClass('fixed');
                $('.alert-to-top').removeClass('fixed-header');
                $('main').css({paddingTop:0});
            } stickyFooter();
        });
    }

    if ($('#wpadminbar').length > 0) {
        $root.addClass('wp-adminbar')
    }

    $('table').each(function () {
        if (!$(this).parent('.table-wrap').length > 0) {
            $(this).wrapAll('<div class="table-wrap"></div>');
        }
    });

    $('.dropdown-wrap span').click(function () {
        $(this).parent().toggleClass('opened')
    });

    $(".select-search-filter").change(function () {
        var pathname = window.location.pathname;
        var sort = getUrlParameter('sort');
        var s = getUrlParameter('s');
        if ($(this).val() === '') {
            window.location.href = pathname + '?s=' + s;
        }
        else {
            window.location.href = pathname + '?s=' + s + '&sort=' + $(this).val();
        }

    });

    function getUrlParameter(name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        var results = regex.exec(location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    }

    function changeGoogleStyles() {
        if($('.goog-te-menu-frame').contents().find('.goog-te-menu2').length) {
            $('.goog-te-menu-frame').contents().find('.goog-te-menu2').css({
                'max-width':'100%',
                'overflow':'scroll',
                'box-sizing':'border-box',
                'height':'auto'
            });
        } else {
            setTimeout(changeGoogleStyles, 50);
        }
    }
    /* changeGoogleStyles(); */

    (function(){
        var link = '<link href="https://fonts.googleapis.com/css?family=Lato:300,400,700%7CRoboto:300,400,500,700&display=swap" rel="stylesheet">';
        $('head').append(link);
        var font11 = new FontFaceObserver('Lato',{weight: 300});
        var font12 = new FontFaceObserver('Lato',{weight: 400});
        var font13 = new FontFaceObserver('Lato',{weight: 700});
        var font21 = new FontFaceObserver('Roboto',{weight: 300});
        var font22 = new FontFaceObserver('Roboto',{weight: 400});
        var font23 = new FontFaceObserver('Roboto',{weight: 500});
        var font24 = new FontFaceObserver('Roboto',{weight: 700});
        Promise
            .all([font11.load(), font12.load(), font13.load(),font21.load(), font22.load(), font23.load(), font24.load()])
            .then(function(){document.documentElement.className += " fonts-loaded";});
    })();
});

function clearForm(oForm) {
    var elements = oForm.elements;
    oForm.reset();
    for(i=0; i<elements.length; i++) {
        field_type = elements[i].type.toLowerCase();
        switch(field_type) {
            case "text":
            case "search":
            case "password":
            case "textarea":
            case "hidden":
                elements[i].value = "";
                break;
            case "radio":
            case "checkbox":
                if (elements[i].checked) {
                    elements[i].checked = false;
                }
                break;
            case "select":
            case "select-one":
            case "select-multi":
                elements[i].selectedIndex = 0;
                jQuery(elements[i])
                    .trigger('change');
                break;
            default:
                break;
        }
    }
    jQuery("input:radio[name=groupName][disabled=false]:first").attr('checked', true);
}