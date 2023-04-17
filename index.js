let counterValue = 0;

document.getElementById("button1").onclick = function (){
    counterValue -= 1
    document.getElementById("countValue").innerHTML = counterValue;
    document.getElementById("countValue").style.color = randomColor();
}

document.getElementById("button2").onclick = function (){
    counterValue = 0
    document.getElementById("countValue").innerHTML = counterValue;
    document.getElementById("countValue").style.color = "white";
}

document.getElementById("button3").onclick = function (){
    counterValue += 1
    document.getElementById("countValue").innerHTML = counterValue;
    document.getElementById("countValue").style.color = randomColor();

}

// function randomizeColour() {
//     document.getElementById("countValue").style.color = randomColour();
//}


function randomColor(){
    const optionList = "234567ABCDEF";
    const hash = "#";
    let colour = hash;
    for (i=0;i<6;i++){
    colour += optionList[Math.floor(Math.random()*12)]
    }
    return colour;
}