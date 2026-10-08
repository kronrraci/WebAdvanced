
// function printName(){
//     document.write("John");
//     document.write("<br>>");
//     setTimeout(function(){document.write("Ana");},3000);
//     document.write("Bob");
// }

// printName();

var colors = ['red','green','blue','purple']

function ChangeBgColor(){
    document.querySelector('body').style.background =
    colors[Math.floor(Math.random()*colors.length)]
}

var names = ['John','Ana','Bob','Mark']

function ChangeNames(){
    document.querySelector('p').innerHTML =
    names[Math.floor(Math.random()*names.length)]
}

setInterval(ChangeBgColor, 1000)
setInterval(ChangeNames, 1000)