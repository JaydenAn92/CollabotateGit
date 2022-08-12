//jquery 
// tab 클릭 시 
$(function () {
    $('.tab_wrap ul li').click(function () {
        var activeTab = $(this).attr('data-tab');
        $('.tab_wrap ul li').removeClass('current');
        $('.tab_content').removeClass('current');
        $(this).addClass('current');
        $('#' + activeTab).addClass('current');
    })
});
//script
//무게
const oneIne = document.getElementById("inSel01");
const oneOut = document.getElementById("outSel01");
const oneBtn = document.getElementById("convert_btn01");

function oneConvert(){
    //selectedIndex 사용해서 선택한 값(단위) 찾기
    const inUnit = oneIne.options[oneIne.selectedIndex].value;
    const outUnit = oneOut.options[oneOut.selectedIndex].value;

    //입력값 부분에서 값 들고오기
    const oneNum = document.getElementById("unit01").value;
    const twoNum = document.getElementById("unit02");

    if (inUnit == "g") {                                    // 입력값이 'g'일 경우
        if (outUnit == "kg") twoNum.value = oneNum * 0.001; //변환값 단위 : kg , 입력값 * 0.001 = 변환값
        if (outUnit == "t") twoNum.value = oneNum * 0.000001; //변환값 단위 : t , 입력값 * 0.000001 = 변환값
    } else if (inUnit == "kg") {                           // 입력값이 'kg'일 경우
        if (outUnit == "g") twoNum.value = oneNum * 1000; //변환값 단위 : g , 입력값 * 1000 = 변환값
        if (outUnit == "t") twoNum.value = oneNum * 0.001; //변환값 단위 : t , 입력값 * 0.001 = 변환값
    } else if (inUnit == "t") {                              // 입력값이 't'일 경우
        if (outUnit == "g") twoNum.value = oneNum * 1000000; //변환값 단위: g , 입력값 * 0.3025 = 변환값
        if (outUnit == "kg") twoNum.value = oneNum * 1000; //변환값 단위 : kg , 입력값 * 0.3025 = 변환값
    }
}
oneBtn.addEventListener("click", oneConvert);

//넓이
const twoIn = document.getElementById("inSel02");
const twoOut = document.getElementById("outSel02");
const twoBtn = document.getElementById("convert_btn02");

function twoConvert(){
    //selectedIndex 사용해서 선택한 값(단위) 찾기
    const firUnit = twoIn.options[twoIn.selectedIndex].value;
    const secUnit = twoOut.options[twoOut.selectedIndex].value;

    //입력값 부분에서 값 들고오기
    const threeNum = document.getElementById("unit03").value;
    const fourNum = document.getElementById("unit04");
    
    if (firUnit == "㎡") {                                      //입력값 단위가 ㎡
        if (secUnit == "평") fourNum.value = threeNum * 0.3025; //변환값 단위 : 평, 입력값 * 0.3025 = 변환값
    } else if (firUnit == "평") {                                //입력값 단위가 ㎡
        if (secUnit == "㎡") fourNum.value = threeNum * 3.3058; //변환값 단위 : ㎡,  입력값 * 3.3058 = 변환값
    } 
}

twoBtn.addEventListener("click", twoConvert);




