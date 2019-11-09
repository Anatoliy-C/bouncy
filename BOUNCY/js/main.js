 $(function(){

    $('.header_btn_mnu').on('click', function(){
        $('.header_items ul').slideToggle();
    });


    $('.portfolio_btn_mnu').on('click', function(){
        $('.portfolio_galery_tabs ul').slideToggle();
    });


    $(".tab_item").not(":first").hide();
$(".wrapper .hello_item").click(function() {
    $(".wrapper .hello_item").removeClass("active").eq($(this).index()).addClass("active");
    $(".tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");


$("form").submit(function() { //Change
    var th = $(this);
    $.ajax({
        type: "POST",
        url: "mail.php", //Change
        data: th.serialize()
    }).done(function() {
        alert("Спасибо за заявку, скоро мы с вами свяжимся");
        setTimeout(function() {
            // Done Functions
            th.trigger("reset");
        }, 1000);
    });
    return false;
});


$(".services_tab_item").not(":first").hide();
$(".services_wrapper .services_tab").click(function() {
    $(".services_wrapper .services_tab").removeClass("active").eq($(this).index()).addClass("active");
    $(".services_tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");



$(".portfolio_galery_item").not(":first").hide();
$(".portfolio_galery_wrapper .portfolio_galery_tab").click(function() {
    $(".portfolio_galery_wrapper .portfolio_galery_tab").removeClass("active").eq($(this).index()).addClass("active");
    $(".portfolio_galery_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");




    var $container = $(".masonry-container");
    $container.imagesLoaded(function () {
        $container.masonry({
            columnWidth: ".item",
            itemSelector: ".item"
        });
        
    });
    


    $(".team_items").not(":first").hide();
$(".team_galery_wrapper .team_slide").click(function() {
    $(".team_galery_wrapper .team_slide").removeClass("active").eq($(this).index()).addClass("active");
    $(".team_items").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");


$(".testimonials_items").not(":first").hide();
$(".testimonials_wrapper .testimonials_slide").click(function() {
    $(".testimonials_wrapper .testimonials_slide").removeClass("active").eq($(this).index()).addClass("active");
    $(".testimonials_items").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");

$(".news_item").not(":first").hide();
$(".news_wrapper .news_tab").click(function() {
    $(".news_wrapper .news_tab").removeClass("active").eq($(this).index()).addClass("active");
    $(".news_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");








});




