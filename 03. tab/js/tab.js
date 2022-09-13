//nav-tit
$(function () {
    $('.nav-tit').on('mouseover', function () {
        //마우스에 올린 nav-tit의 li 안의 sub-wrap은 .on 추가
        $(this).closest('.nav>ul>li').find('.sub-wrap').addClass("on");
    });

    $('.sub-wrap').on('mouseover', function () {
        //마우스에 올린 sub-wrap에 .on 추가
        $(this).addClass("on");
    });

    $('.nav-tit').on('mouseleave', function () {
        //마우스를 벗어난 nav-tit의 li 안의 sub-wrap은 .on 제거
        $(this).closest('.nav>ul>li').find('.sub-wrap').removeClass("on");
    });

    $('.sub-wrap').on('mouseleave', function () {
        //마우스를 벗어난 sub-wrap에 .on 제거
        $(this).removeClass("on");
    });
});

//방법01. sub-tit 클릭 시 sub-nav-cont 나오게
// $(function(){
//     $('.sub-nav-cont').hide(); //sub-nav-cont 숨긴다
//     $('.sub-tit a').click(function(){ // 각 sub-tit 클릭 시 
//         $('.sub-nav-cont').hide().filter(this.hash).fadeIn(200); // sub-tit 과 동일한 id의.sub-nav-cont 나타나기
//         $('.sub-tit a').removeClass('active'); // 각 sub-tit의 active 클래스 삭제
//         $(this).addClass('active'); // 클릭한 sub-tit의 active 클래스 추가
//     })
// });

//방법02. sub-tit 클릭 시 sub-nav-cont 나오게
$(function () {
    $('.sub-tit a').click(function () {
        var activeTab = $(this).attr("href");

        $('.sub-tit a').removeClass('active');
        $('.sub-nav-cont').removeClass('on');

        $(this).addClass('active');
        $(activeTab).addClass('on');
    })
});




