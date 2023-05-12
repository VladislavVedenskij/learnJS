const box = document.getElementById("box");
const clickerCounter = document.getElementById("clicker__counter");
const clickerSpeed = document.getElementById("clicker__speed");
let value = 0;

box.onclick = function() {
    value++;
    clickerCounter.textContent = value;
    box.width = value % 2 == 0 ? 200 : 300;
    
    // if (value % 2 == 0) {
    //     cookie.width = 250;
    // } else {
    //     cookie.width = 180;
    // }

    let timeStart= new Date();
    let timeNow = new Date();
    clickerSpeed.textContent = (1 / ((timeNow.getTime() - timeStart.getTime()) / 1000)).toFixed(2);
    timeStart = new Date();
}