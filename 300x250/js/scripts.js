$(document).ready(function() {


    var setFooterPositionInterval;
    var contentCoor;
    var footerCoor;

    // ----------------------------

    var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

    // ----------------------------

    getImgPosition();

    // getFooterPosition();

    $(window).resize(function() {

        // $(".wrapper").css({"min-height" : $(window).height() + "px"});

        // if($(".footer").length > 0) {

        //     $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

        // }

        bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

        getImgPosition();

    });


    $(function() {

        var topCoord;
        var bannerHeader;

        $( ".banner_300_250").bind({
          mouseenter: function() {

            bannerMask = $(this).find(".mask");
            bannerMask.attr("style", "top: "+ 0 +"px");

          },
          mouseleave: function() {            

            bannerMask = $(this).find(".mask");
            topCoord = $(this).height() - $(this).find(".banner-header").outerHeight();
            bannerMask.attr("style", "top: "+ topCoord +"px");  

          }
        });

    });

    function getImgPosition() {

        if( bodyWidth <= 480 ) {

            $(".banner_300_250").each(function() {

                var photoBanner = $(this).find(".img-box");

                var bannerHeader = $(this).find(".banner-header");

                photoBanner.css({
                    "top" : bannerHeader.height() + "px"
                });

            });

        } else {

            $(".banner_300_250").find(".img-box").css({

                "top" : 0

            });

            $(".banner_300_250").each(function() {

                bannerMask = $(this).find(".mask");
                $(this).find(".banner-header").css({"height" : "auto"});
                topCoord = $(this).height() - $(this).find(".banner-header").outerHeight();
                bannerMask.attr("style", "top: "+ topCoord +"px");

            });

        }

    }


    // function getFooterPosition() {

    //     $(".wrapper").css({"min-height" : $(window).height() + "px"});

    //     if($(".footer").length > 0) {

    //         $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

    //         setFooterPositionInterval = setInterval(function() {

    //             contentCoor = $(".content").offset().top + $(".content").height();
    //             footerCoor = $(".footer").offset().top;

    //             if( contentCoor != footerCoor ) {

    //                 $(".wrapper").css({"min-height" : $(window).height() + "px"});

    //                 $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

    //                 clearInterval(setFooterPositionInterval);

    //             }

    //         }, 35);

    //     }

    // }



});
