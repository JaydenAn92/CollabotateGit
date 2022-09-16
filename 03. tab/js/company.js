// esg_tab 클릭 시 
// esg_tab_nav_cont 시 block + esg_tab_nav>a 활성화
$(function () {
    $('.esg_tab_nav>a').click(function () {

        var activeTab = $(this).attr("href");

        $('.esg_tab_nav>a').removeClass("on");
        $('.esg_tab_nav_cont').removeClass("on");

        $(this).addClass("on");
        $(activeTab).addClass("on");
    })
});

// esg_tab 스크롤 시 상단 고정 위치



// accord
// list > accord_head a 클릭 시 accord_content 시 나타나기
$('.accord_wrap .list .accord_head').click(function () {
    var list = document.querySelectorAll('.list');
    // accord_content
    $('.accord_wrap .list .accord_head').parent(list).removeClass('on');
    $(this).parent(list).addClass('on');
    $(this).click(function () {
        $(this).parent(list).toggleClass('on');
    });
});

// accord 위치 조정
$('.accord_wrap .list .accord_head').click(function () {
    // 클릭한 a에서 가장 가까운 list 클래스을 변수로 주기
    var tag = $(this).parent('.list');
    // 0.2초 후 스크롤 실행
    setTimeout(function () {
        // 클릭한 a의 y축 좌표값 - 30을 변수로 주기
        var scrollPosition = tag.offset().top - 30;
        // 요소의 수직스크롤바 위치 = 클릭한 a의 y축 좌표값 - 30 경우 0.3초만에 멈춤
        $('html, body').stop().animate({
            scrollTop: scrollPosition
        }, 300);
    }, 200);
});

// btn_wrap > btn_close 클릭 시 
$('.accord_content .btn_wrap .btn_close').click(function () {
    // accord_content
    $('.accord_content .btn_wrap .btn_close').parent().parent().parent().removeClass('on');
    $(this).parent().parent().parent().parent('.list').addClass('on');
    // accord_btn(클릭한 btn의 accord_btn만 변경되어야 하므로)
    $(this).parent().parent().parent().parent('.list').removeClass('on');

});
