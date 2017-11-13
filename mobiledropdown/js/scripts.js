$(document).ready(function() {


    var setFooterPositionInterval;
    var contentCoor;
    var footerCoor;

    // ----------------------------

    // getFooterPosition();

    $(window).resize(function() {

        // $(".wrapper").css({"min-height" : $(window).height() + "px"});

        // if($(".footer").length > 0) {

        //     $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

        // }

    });


    $(function() {

        $(".close-banner").click(function() {

            var parentBlock = $(this).closest(".banner_wrapp");

            var closetHead = $(this).closest(".close-banner-block");

            var hiddenBlock = parentBlock.find(".hide_block");

            if( hiddenBlock.hasClass("hidden") ) {

                parentBlock.fadeOut(200);

            } else {

                hiddenBlock.addClass("hidden");

                hiddenBlock.slideUp(200);

                closetHead.addClass("active");
            }            

        });

    });

    $(function() {

        $(".dropdown_banner_wrapp").each(function() {

            var timeAttr = parseInt( $(this).attr("data-start-show") );

            $(this).delay(timeAttr).animate({
                "bottom" : 0
            }, 300);

        });

    });

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
