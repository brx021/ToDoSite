document.getElementsByClassName("tablink")[0].click();

function openTree(evt, treeName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("tree");
    for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
    tablinks[i].classList.remove("w3-light-grey");
    }
    document.getElementById(treeName).style.display = "block";
    evt.currentTarget.classList.add("w3-light-grey");
}

function updateReward(){
    if (Task.ALLTIME >= 10 && Task.ALLTIME < 30){
    var unlock = document.getElementById("sakuraBtn");
    unlock.disabled = false;
    }
    else if (Task.ALLTIME >= 30 && Task.ALLTIME < 100){
    var unlock = document.getElementById("eucalyptusBtn");
    unlock.disabled = false;
    }
    else if (Task.ALLTIME >= 100 && Task.ALLTIME < 200){
    var unlock = document.getElementById("bambooBtn");
    unlock.disabled = false;
    }
    else if (Task.ALLTIME >= 200 && Task.ALLTIME < 500){
    var unlock = document.getElementById("wisteriaBtn");
    unlock.disabled = false;
    }
}