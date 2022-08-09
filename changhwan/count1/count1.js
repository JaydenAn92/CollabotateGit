
// script
var result = document.getElementById("result");

function count(counter) {
    var number = result.innerText;

    if(counter === 'down') {
        number = parseInt(number) - 1;
    } else if(counter === 'up') {
        number = parseInt(number) + 1;
    };

    result.innerText = number;
};

// Jquery
