setInterval(drawTime, 1000);

function drawTime() {
    var now = new Date();
    var hour = cleanUpHour(now.getHours());
    var minute = cleanUp(now.getMinutes());
    var second = cleanUp(now.getSeconds());
    document.getElementById("clock").innerHTML = hour + " : " + minute + " : " + second;
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
    {
        i = i%12;
        cleanUpHour(i);
    }
    return i;
}