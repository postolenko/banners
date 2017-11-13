$(document).ready(function() {

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


});
