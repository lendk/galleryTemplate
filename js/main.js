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
    /*Slide In/Out effect for img captions*/
    $('.thumbnail').hover(
        function() {
            $(this).find('.caption').slideDown(250); //.fadeIn(250)
        },
        function() {
            $(this).find('.caption').slideUp(250); //.fadeOut(205)
        }
    );
});
