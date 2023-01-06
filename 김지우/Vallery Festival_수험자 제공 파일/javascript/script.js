jQuery(document).ready(function(){

    $('.navi>li').mouseover(function(){
        $(this).find('.submenu').stop().slideDown(500);
    }).mouseout(function(){
        $(this).find('.submenu').stop().slideUp(500);
    });
    $('.imgslide a:gt(0)').hide();
    setInterval(function(){
        $('.imgslide a:first-child')    /* 첫 번째 요소를 선택하여 페이드아웃 실행*/
        .fadeOut(1000)  
        .next('a')  /* 다음 요소를 선택하여 페이드인 실행*/
        .fadeIn(1000)
        .end()  /* 이전요소 선택 */
        .appendTo('.imgslide');
    },3000);
});