
// script
var result = document.getElementById("result");
// console.log(result);
function count(counter) {
    var number = result.innerText;

    if(counter === 'down') {
        
        number = parseInt(number) - 1;
        // console.log(number);
    } else if(counter === 'up') {
        number = parseInt(number) + 1;
        // console.log(number);
    };
    
    result.innerText = number;
};


// Jquery
$(function(){
    var $count = $('.result_q');
    var $currentNumber = parseInt($count.text()); // parseInt(값) 값을 숫자(정수)로 변환 
    
    // console.log($currentNumber);

    $('.count_btn_q a').click(function(e){
        e.preventDefault(); // 링크가 넘어가지 않기 위해 사용
        if($(this).hasClass('plus')){
            $currentNumber += 1;
        }else{
            $currentNumber -= 1;
        }
        // console.log($currentNumber);
        $count.text($currentNumber);
    });
});