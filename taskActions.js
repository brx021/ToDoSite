var task;
function addTask() {
    idNum = Task.COUNT +1;//so the newest id can be the same as the count
    task = new Task("");
    var table = document.getElementById("table");
    var row = table.insertRow();
    var cell = row.insertCell();
    console.log("idNum="+idNum);
    var elements = `<input onKeyPress="checkSubmit(event);" id= "${idNum}" class="w3-input w3-animate-input w3-border-0 w3-bottombar w3-light-grey w3-margin-top" placeholder="Type Here" style="width:30%">` +
        "<h5 class='w3-opacity w3-padding-4'><b></input>";
     

    elements += "<br><span onclick=removeCompleted(this) class='w3-button w3-black w3-round-xxlarge w3-margin-right w3-medium'>Mark Completed</span>";
    elements += "<span id='cancel' onclick=removeCancel(this) class='w3-button w3-red w3-round-xxlarge w3-margin-right w3-medium'>Mark Missed</span>";
    
    cell.innerHTML = elements;
    console.log(Task.COUNT);
    drawPercentage();
}
function checkSubmit(e) {
    if(e && e.keyCode == 13) {
        
        storeTask(idNum);
    }
}

function storeTask(id){
    
    name = `${document.getElementById(`${id}`).value}`; 
    task.setName(name);
    
    console.log(Task.ALLTASKS);
    
}




function drawPercentage(){
    var total = document.getElementById('total');
    total.innerHTML = "<i class='fa fa-globe fa-fw w3-margin-right w3-text-teal'></i>Total Completed: " + Task.COMPLETED + " out of "+ Task.COUNT + " Task(s)" ;

    var totalPercent = Math.round(Task.COMPLETED/Task.COUNT * 100);
    var totalBar = document.getElementById("totalBar");
    totalBar.innerHTML = "<div class='w3-round-xlarge w3-teal w3-center' style='height:24px;width:" + totalPercent + "%'>" + totalPercent + "%</div>";
}

function removeCompleted(n){
    taskElement = n.parentElement.parentElement.parentElement;
    taskElement.style.display = 'none';
    taskId = taskElement.childNodes[0].id;
    curr = Task.ALLTASKS[taskId-1];
    Task.COMPLETED ++;
    Task.ALLTIME ++;
    drawPercentage();
    updateReward();
}
  function removeCancel(n){
    n.parentElement.parentElement.parentElement.style.display = 'none';
    //Task.MISSED += current task
    drawPercentage();
    //Brandon you didn't define modal here idk how to refer it to the element it must have been accidentally deleted
    modal.style.display = "block";
}
