$(document).ready(function() {

    $(function() {

        if( $(".modal_banner_wrapp").length > 0 ) {

            var startShowTime = parseInt( $(".modal_banner_wrapp").attr("data-start-show") );

            $(".modal_banner_wrapp").delay(startShowTime).fadeIn(200, function() {

                var closeTimeout = parseInt( $(".modal_banner_wrapp").attr("data-close-time") );

                var timer = $(".modal_banner_wrapp").find(".time");

                var showCloseTimer = setInterval(function() {

                    closeTimeout--;

                    timer.html(closeTimeout);

                    if(closeTimeout <= 0) {

                        clearInterval(showCloseTimer);

                        $(".modal_banner_wrapp").addClass("showed");

                    }

                }, 1000);

            });            

        }
    });


    $(function() {

        $(".close-banner_2, .modal_banner_bg").click(function() {

            var parentBlock = $(this).closest(".modal_banner_wrapp");

            if(parentBlock.hasClass("showed")) {

                parentBlock.fadeOut(200);

            }

        });


        $(this).keydown(function(eventObject){

            if (eventObject.which == 27 &&
                $(".modal_banner_wrapp").hasClass("showed")) {

                $(".modal_banner_wrapp").fadeOut(200);

            }

        });



    });

});
