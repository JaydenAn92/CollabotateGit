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

