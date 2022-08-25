//jquery 
// tab 클릭 시 
// $(function () {
//     $('.tab_wrap ul li').click(function () {
//         var activeTab = $(this).attr('data-tab');
//         $('.tab_wrap ul li').removeClass('current');
//         $('.tab_content').removeClass('current');
//         $(this).addClass('current');
//         $('#' + activeTab).addClass('current');
//     })
// });

//20220825 tab 클릭 시 jquery → script 변경

const tabMenu = document.querySelectorAll('.tab_wrap ul li');
const tabContent = document.querySelectorAll('.tab_content')
const isOn = 'current'; 

function activeTab(){
    //반복을 위한 forEach문 사용
    tabMenu.forEach((tabOn) => {
        tabOn.addEventListener('click',function(e){
            //클릭한 tab의 data-tab 속성을 변수로 사용
            let activeTab = tabOn.getAttribute('data-tab');
            //클릭한 tabMenu에 맞는 tabContent 들고오기 위한 
            ActiveContent(activeTab);
        })
    });
}

function ActiveContent(activeTab){
    tabContent.forEach((contentOn) => {
        //현시점 tabContent 이면서 current 클래스가 있는 경우 그 tabContent에 current 클래스 제거
        if(contentOn && contentOn.classList.contains(isOn)){
            console.log(contentOn);
            contentOn.classList.remove(isOn);
        }
        //클릭한 tabContent의 data-tab 속성을 변수로 사용
        let activeContent = contentOn.getAttribute('data-tab');
        //tabMenu의 data-tab 과 tabContent의 data-tab이 같은 경우 current 클래스 추가
        if (activeContent === activeTab) {
                contentOn.classList.add(isOn);
        }
    });
}
activeTab();


//script
//무게
const oneIn = document.getElementById("inSel01");
const oneOut = document.getElementById("outSel01");
const oneBtn = document.getElementById("convert_btn01");

function oneConvert(){
    //selectedIndex 사용해서 선택한 값(단위) 찾기
    const inUnit = oneIn.options[oneIn.selectedIndex].value;
    const outUnit = oneOut.options[oneOut.selectedIndex].value;

    //입력값 부분에서 값 들고오기
    const oneNum = document.getElementById("unit01").value;
    const twoNum = document.getElementById("unit02");

    // if (inUnit == "g") {                                    // 입력값이 'g'일 경우
    //     if (outUnit == "kg") twoNum.value = oneNum * 0.001; //변환값 단위 : kg , 입력값 * 0.001 = 변환값
    //     if (outUnit == "t") twoNum.value = oneNum * 0.000001; //변환값 단위 : t , 입력값 * 0.000001 = 변환값
    // } else if (inUnit == "kg") {                           // 입력값이 'kg'일 경우
    //     if (outUnit == "g") twoNum.value = oneNum * 1000; //변환값 단위 : g , 입력값 * 1000 = 변환값
    //     if (outUnit == "t") twoNum.value = oneNum * 0.001; //변환값 단위 : t , 입력값 * 0.001 = 변환값
    // } else if (inUnit == "t") {                              // 입력값이 't'일 경우
    //     if (outUnit == "g") twoNum.value = oneNum * 1000000; //변환값 단위: g , 입력값 * 1000000 = 변환값
    //     if (outUnit == "kg") twoNum.value = oneNum * 1000; //변환값 단위 : kg , 입력값 * 1000 = 변환값
    // }

    //20220822 ~ 20220823 if문 → switch문
    switch(inUnit){
        // 입력값이 'g'일 경우
        case "g" :
            switch(outUnit){
                case "kg" :
                twoNum.value = oneNum * 0.001;
                break;
                case "t" :
                twoNum.value = oneNum * 0.000001;
                break;
            }
        break; 
        // 입력값이 'kg'일 경우
        case "kg" :
            switch(outUnit){
                case "g" :
                twoNum.value = oneNum * 1000;
                break;
                case "t" :
                twoNum.value = oneNum * 0.001;
                break;
            }
        break;
        // 입력값이 't'일 경우
        case "t" :
            switch(outUnit){
                case "g" :
                twoNum.value = oneNum * 1000000;
                break;
                case "kg" :
                twoNum.value = oneNum * 1000;
                break;
            }
        break;
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
    
    // if (firUnit == "㎡") {                                      //입력값 단위가 ㎡
    //     if (secUnit == "평") fourNum.value = threeNum * 0.3025; //변환값 단위 : 평, 입력값 * 0.3025 = 변환값
    // } else if (firUnit == "평") {                                //입력값 단위가 평
    //     if (secUnit == "㎡") fourNum.value = threeNum * 3.3058; //변환값 단위 : ㎡,  입력값 * 3.3058 = 변환값
    // } 

    //20220822 ~ 20220823 if문 → switch문
    switch(firUnit){
        //입력값 단위가 '㎡'일 경우
        case "㎡" :
            switch(secUnit){
                case "평" :
                fourNum.value = threeNum *  0.3025;
                break;
            }
        break;
        //입력값 단위가 '평'일 경우
        case "평" :
            switch(secUnit){
                case "㎡" :
                fourNum.value = threeNum * 3.3058;
                break;
            }
        break;
    }


}

twoBtn.addEventListener("click", twoConvert);




