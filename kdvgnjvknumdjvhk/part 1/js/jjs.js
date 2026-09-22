var x = 1;

if (x>2){
    console.log("vlera e X është më e madhe se 2")
}else{
    console.log("vlera e X është më e vogël se 2")
}

var input = document.getElementById('input_id')
var button = document.getElementById('btn_id')
var text = document.getElementById('text_id')

button.onclick = function(){
    if (input.value > 10){
        text.innerHTML = "input value is greater than 10";
    }
    else if (input.value < 10){
        text.innerHTML = "input value is lower than 10";
    }
    else{
        text.innerHTML = "input value is equal than 10";
    }
}