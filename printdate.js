var date = new Date();
setInterval(printDate, 1000)

function printDate() {
    var week = dayOfWeek(date.getDay());
    var day = date.getDate();
    var month = todaysMonth(date.getMonth())
    var year = date.getFullYear();

    function dayOfWeek(number) {
    if (number == 1)
        return "Monday";
    else if (number == 2)
        return "Tuesday";
    else if (number == 3)
        return "Wednesday";
    else if (number == 4)
        return "Thursday";
    else if (number == 5)
        return "Friday";
    else if (number == 6)
        return "Saturday";
    else
        return "Sunday";
    }

    function todaysMonth(number) {
    if (number == 0)
        return "January";
    else if (number == 1)
        return "February";
    else if (number == 2)
        return "March";
    else if (number == 3)
        return "April";
    else if (number == 4)
        return "May";
    else if (number == 5)
        return "June";
        if (number == 6)
        return "July";
    else if (number == 7)
        return "August";
    else if (number == 8)
        return "September";
    else if (number == 9)
        return "October";
    else if (number == 10)
        return "November";
    else
        return "December";
    }

    document.getElementById("date").innerHTML = week + " " + month + " " + day + ", " + year;
}