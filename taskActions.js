var task;
var idNum = 0;

/** Called when the add button is pressed, generates a new task cell and updates its id (index in task array) */
function addTask() {
    idNum ++;  //id is always increasing, task.COUNT can decrease
    task = new Task("No Name");
    var table = document.getElementById("table");
    var row = table.insertRow();
    var cell = row.insertCell();
    console.log("idNum="+idNum);
    var elements = `<input onKeyPress="checkSubmit(event);" id= "${idNum}" class="w3-input w3-animate-input w3-border-0 w3-bottombar w3-light-grey w3-margin-top" placeholder="Type Here" style="width:30%">` +
        "<h5 class='w3-opacity w3-padding-4'><b></input>";
    
    elements += "<br><span onclick=removeCompleted(this) class='w3-button w3-blue w3-round-xxlarge w3-margin-right w3-medium'>Mark Completed</span>";
    elements += "<span id='cancel' onclick=removeCancel(this) class='w3-button w3-black w3-round-xxlarge w3-margin-right w3-medium'>Mark Incomplete</span>";
    elements += "<span id='delete' onclick=removeDelete(this) class='w3-button w3-red w3-round-xxlarge w3-margin-right w3-medium'>Delete</span>";
    
    cell.innerHTML = elements;
    console.log("count:" + Task.COUNT, "ALLTASKS", Task.ALLTASKS );
    drawPercentage();
}

function checkSubmit(e) {
    if(e && e.keyCode == 13)
        storeTask(idNum);
}

function storeTask(id){
    name = `${document.getElementById(`${id}`).value}`; 
    task.setName(name);
    
    console.log("UPDATE", Task.ALLTASKS);
}

/** Redraws the percentage bar based on tasks completed and total tasks created */
function drawPercentage(){
    var total = document.getElementById('total');
    total.innerHTML = "<i class='fa fa-globe fa-fw w3-margin-right w3-text-teal'></i>Total Completed: " + Task.COMPLETED + " out of "+ Task.COUNT + " Task(s)" ;

    var totalPercent = Math.round(Task.COMPLETED/Task.COUNT * 100);
    var totalBar = document.getElementById("totalBar");
    totalBar.innerHTML = "<div class='w3-round-xlarge w3-teal w3-center' style='height:24px;width:" + totalPercent + "%'>" + totalPercent + "%</div>";
}

/** Removes the task from the display, and updates the array of tasks completed */
function removeCompleted(n){
    taskElement = n.parentElement.parentElement.parentElement;
    taskId = taskElement.childNodes[0].id;
    curr = Task.ALLTASKS[taskId-1];
    curr.complete();
    taskElement.style.display = 'none';
    addCompletedToDisplay() 
    drawPercentage();
    updateReward();
}

/** Removes the task from the display, but overall array of tasks is unchanged */
function removeCancel(n){
    taskElement = n.parentElement.parentElement.parentElement;
    taskId = taskElement.childNodes[0].id;
    curr = Task.ALLTASKS[taskId-1];
    curr.incomplete();
    console.log(curr);
    taskElement.style.display = 'none'; 
    createBlankRef(curr);//blank reflection, gets updated when they press enter
    modal.style.display = "block"; //open reflection modal
    addMissedToDisplay();
    drawPercentage();//I don't think we need this but whatever
    console.log("Missed tasks:" , Task.MISSED);  
}

/** Removes the task from the list, and also the overall array of tasks */
function removeDelete(n){
    taskElement = n.parentElement.parentElement.parentElement;
    taskElement.style.display = 'none';
    Task.COUNT --;
    taskId = taskElement.childNodes[0].id;
    Task.ALLTASKS[taskId-1] = null;
    drawPercentage();
    
}

function createBlankRef(currTask){
    currTask.setReflection("none"); 
}

function checkRefForm(e){
    if(e && e.keyCode == 13){ //when enter key is pressed in the modal
        ref = `${document.getElementById("reflection").value}`
        curr = Task.MISSED[(Task.MISSED.length)-1]; //last task in missed
        curr.setReflection(ref);
        document.getElementById("reflection").value = "";//reset the form
        console.log("Missed tasks UPDATE: ", Task.MISSED);
        updateMissedDisplay();
        modal.style.display = "none"; //close modal
    }
}       

/** When the "Set as Profile" button is clicked, the profile picture is changed accordingly */
function changePfp(name) {
    var profile = document.getElementById("profile");

    if (name === "china") {
        profile.innerHTML = "<img src='images/china.jpg' alt='Avatar' class='w3-image'></img>";
    }
    else if (name === "italy") {
        profile.innerHTML = "<img src='images/italy.jpg' alt='Avatar' class='w3-image'></img>";
    }
    else if (name === "canada") {
        profile.innerHTML = "<img src='images/canada.jpg' alt='Avatar' class='w3-image'></img>";
    }
    else if (name === "australia") {
        profile.innerHTML = "<img src='images/australia.jpg' alt='Avatar' class='w3-image'></img>";
    }
    else if (name === "peru") {
        profile.innerHTML = "<img src='images/peru.jpg' alt='Avatar' class='w3-image'></img>";
    }
    else if (name === "turkey") {
        profile.innerHTML = "<img src='images/turkey.jpg' alt='Avatar' class='w3-image'></img>";
    }
    else if (name === "japan") {
        profile.innerHTML = "<img src='images/japan.jpg' alt='Avatar' class='w3-image'></img>";
    }
    else if (name === "stlucia") {
        profile.innerHTML = "<img src='images/stlucia.jpg' alt='Avatar' class='w3-image'></img>";
    }
}

function addMissedToDisplay(){
    var cur = Task.MISSED[(Task.MISSED.length)-1];
    var table = document.getElementById("missed-table");
    var row = table.insertRow();
    var cell = row.insertCell();
    console.log(cur);
    var elements = `
        <h5>Task: ${cur.name}</h5>
        <h7>Reflection: ${cur.reflection}</h7>
    `;
    cell.innerHTML = elements;
    
}
function updateMissedDisplay(){
    var cur = Task.MISSED[(Task.MISSED.length)-1];
    var table = document.getElementById("missed-table");
    var lastRow = table.rows[ table.rows.length - 1 ];
    var lastCell = lastRow.lastChild;
    lastCell.innerHTML = `
        <h5>Task: ${cur.name}</h5>
        <h7>Reflection: ${cur.reflection}</h7>
    `
}

function addCompletedToDisplay(){
    var cur = Task.COMPLETEDARR[(Task.COMPLETEDARR.length)-1];
    var table = document.getElementById("completed-table");
    var row = table.insertRow();
    var cell = row.insertCell();
    var elements = `
        <h5>Task: ${cur.name}</h5>
    `;
    cell.innerHTML = elements;
}
