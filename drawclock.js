var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.font = "75px sans-serif";
ctx.fillStyle = "white";
setInterval(drawTime, 1000);

function drawTime() {
    ctx.fillStyle = "teal";
    ctx.fillRect(0, 0, 447, 200);

    ctx.fillStyle = "white";
    var now = new Date();
    var hour = cleanUpHour(now.getHours());
    var minute = cleanUp(now.getMinutes());
    var second = cleanUp(now.getSeconds());
    ctx.fillText(hour + " : " + minute + " : " + second, 32, 120);
}

function cleanUp(i){
    if (i < 10)
    i = "0" + i;
    return i;
}

function cleanUpHour(i)
{
    if (i < 10)
    i = "0" + i;
    else if (i > 12)
    i = "0" + i%12;
    return i;
}