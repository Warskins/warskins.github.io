$(function(){

    $('.news__block').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows:false,
        dots:true,
        dotsClass:'news-dots'
    });
    $('.news__block-item').hover(function () {
        $(this).find('.news__title').css('color','#ff9900');
    },function () {
        $(this).find('.news__title').css('color','#2f281e');
    })
});