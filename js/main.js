$(document).ready(function() {
    /*Hides all the other tabs */
    $("#tab2,#tab3,#tab4").hide();
    /*On click events to show/hide tabs*/
    $("#lnkTab2").click(function(event) {
        $("#tab2").show();
        $("#lnkTab2").addClass('active');
        $("#tab1,#tab3,#tab4").hide();
        $("#lnkTab1,#lnkTab3,#lnkTab4").removeClass('active');
    });
    $("#lnkTab1").click(function(event) {
        $("#tab1").show();
        $("#lnkTab1").addClass('active');
        $("#tab2,#tab3,#tab4").hide();
        $("#lnkTab2,#lnkTab3,#lnkTab4").removeClass('active');
    });
    $("#lnkTab3").click(function(event) {
        $("#tab3").show();
        $("#lnkTab3").addClass('active');
        $("#tab1,#tab2,#tab4").hide();
        $("#lnkTab2,#lnkTab1,#lnkTab4").removeClass('active');
    });
    $("#lnkTab4").click(function(event) {
        $("#tab4").show();
        $("#lnkTab4").addClass('active');
        $("#tab1,#tab2,#tab3").hide();
        $("#lnkTab2,#lnkTab1,#lnkTab3").removeClass('active');
    });
    $("[rel='tooltip']").tooltip();
    //Slide In/Out effect for img captions
    $('.thumbnail').hover(
        function() {
            $(this).find('.caption').slideDown(250); //.fadeIn(250)
        },
        function() {
            $(this).find('.caption').slideUp(250); //.fadeOut(205)
        }
    );
    $('.carousel').each(function() {
        $(this).carousel({
            interval: false
        });
    });
    ///Thumbnail Handler
    $('[id^=carousel-selector-]').click(function() {
        var id_selector = $(this).attr("id");
        var id = id_selector.substr(id_selector.length - 1);
        id = parseInt(id);
        $('#carousel,#carouselB').carousel(id);
        $('[id^=carousel-selector-]').removeClass('selected');
        $(this).addClass('selected');
    });

    // AutoUpdate When it slidess
    $('#carousel,#carouselB').on('slid.bs.carousel', function(e) {
        var id = $(this).find('.item.active').data('slide-number');

        id = parseInt(id);
        $('[id^=carousel-selector-]').removeClass('selected');
        $('[id^=carousel-selector-' + id + ']').addClass('selected');
    });

});
