$(document).ready(function() {

    var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

    // ----------------------------

    getImgPosition();


    $(window).resize(function() {

        bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

        getImgPosition();

    });


    $(function() {

        var topCoord;
        var bannerMask;

        $(".banner_250_200").each(function() {

            bannerMask = $(this).find(".mask");
            $(this).find(".banner-header").css({"height" : "auto"});
            topCoord = $(this).height() - $(this).find(".banner-header").outerHeight();
            bannerMask.attr("style", "top: "+ topCoord +"px");

        });

        $( ".banner_250_200").bind({
          mouseenter: function() {

            if( bodyWidth > 480 ) {

                bannerMask = $(this).find(".mask");
                bannerMask.attr("style", "top: "+ 0 +"px");

            }

          },
          mouseleave: function() {

            if( bodyWidth > 480 ) {

                bannerMask = $(this).find(".mask");
                topCoord = $(this).height() - $(this).find(".banner-header").outerHeight();
                bannerMask.attr("style", "top: "+ topCoord +"px");

            }

          }
        });

    });

    function getImgPosition() {

        if( bodyWidth <= 480 ) {

            $(".banner_250_200").each(function() {

                var photoBanner = $(this).find(".img-box");

                var bannerHeader = $(this).find(".banner-header");

                photoBanner.css({
                    "top" : bannerHeader.height() + "px"
                });

            });

        } else {

            $(".banner_250_200").find(".img-box").css({

                "top" : 0

            });

        }

    }


});
