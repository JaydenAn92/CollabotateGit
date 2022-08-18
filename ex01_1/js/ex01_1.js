const selectBox = document.querySelector('.sel_box');
const selEl = document.querySelector('.sel_box select')
const tabW = document.querySelector('#tabCategory > .weight');
const tabA = document.querySelector('#tabCategory > .area');
const btnConver = document.querySelector('.btn_conver button');
const inputUnit = document.querySelector('.unit_input');
const outputUnit = document.querySelector('.unit_output');

let inputValue = '';
let outputEl = document.querySelector('#output');
let resultVal = '';

selEl.addEventListener('change', function() {
    inputUnit.innerHTML = '';
    outputUnit.innerHTML = '';
})
tabW.addEventListener('click', function(){
    tabW.classList.remove('active');
    tabA.classList.remove('active');
    
    if(!tabW.classList.contains('active')){
        tabW.classList.add('active');
    }
})
tabA.addEventListener('click', function () {
    tabW.classList.remove('active');
    tabA.classList.remove('active');

    if(!tabA.classList.contains('active')){
        tabA.classList.add('active');
    }
})

btnConver.addEventListener('click', () => {
    let inputLabel = selectBox.children['unitInput'].selectedOptions[0].label;
    let outputLabel = selectBox.children['unitOutput'].selectedOptions[0].label;

    checkConvert(inputLabel,outputLabel);

})
function checkConvert(input,output){
    if(!tabW.classList.contains('active') && !tabA.classList.contains('active')) {
        alert("탭버튼을 먼저 체크해주세요.")
    } else {
        inputValue = document.querySelector('#input').value;

        if(input == 'kg' && output == 'g' || input == 'g' && output == 'mg'){
            //kg -> g  또는 g -> mg
            resultVal = Number(inputValue) * 1000;
            
            console.log("변환 계산값" + resultVal);
        } else if (input == 'g' && output == 'kg' || input == 'mg' && output == 'g') {
            resultVal = Number(inputValue) * 0.001;
        } else if (input == output ){
            alert("입력값, 변환값을 동일하게 선택하였습니다. \n서로 다른 단위를 선택해주세요.")
        } else {
            alert("변환할수 없는 단위 입니다. 선택값을 다시 확인 해주세요.")
        }
        outputEl.value = resultVal;
        inputUnit.innerHTML = input;
        outputUnit.innerHTML = output;
    }
}