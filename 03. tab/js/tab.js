$(function(){
    $('.nav-tit').on('mouseover',function(){
            //마우스에 올린 nav-tit의 li 안의 sub-wrap은 .on 추가
            $(this).closest('.nav>ul>li').find('.sub-wrap').addClass("on");
    });

    $('.sub-wrap').on('mouseover',function(){
            //마우스에 올린 sub-wrap에 .on 추가
            $(this).addClass("on");
    });

    $('.nav-tit').on('mouseleave',function(){
        //마우스를 벗어난 nav-tit의 li 안의 sub-wrap은 .on 제거
        $(this).closest('.nav>ul>li').find('.sub-wrap').removeClass("on");
    });

    $('.sub-wrap').on('mouseleave',function(){
        //마우스를 벗어난 sub-wrap에 .on 제거
        $(this).removeClass("on");
    });
});


