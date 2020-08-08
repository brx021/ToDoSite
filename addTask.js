function taskHelper(){
    console.log("working");
    var div = document.createElement("div");
    div.className = "w3-container";
    document.getElementById("tasklist").appendChild(div);
    div.id = "div"

    addElements("h5", "div", "w3-opacity"); 
    addElements("b", "h5", 0);
    document.getElementById("b").innerHTML = "hi";
    
}
function addElements(type, prevID, classname){ //classname = 0 -> no class
    var el = document.createElement(type);
    if (classname != 0){el.className = classname; }
    var prev = document.getElementById(prevID);
    prev.appendChild(el);
    el.id = toString(type); //Id = "type"
    prev.removeAttribute("id");
    
}

function addTask(taskName, time){
    
}
