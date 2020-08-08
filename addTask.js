function taskHelper(){
    console.log("working");
    var div = document.createElement("div");
    div.className = "w3-container";
    document.getElementById("tasklist").appendChild(div);
    div.id = "div";

    addElements("h5", "div", ""); 
    addElements("h5", "h5", "");
    addElements("h5", "h5", "");
    document.getElementById("b").innerHTML = "hi";
    
}
function addElements(type, prevID, classname){ 
    var el = document.createElement(type);
    el.className = classname;
    var prev = document.getElementById(prevID);
    prev.appendChild(el);
    el.id = toString(type); //Id = "type"
    prev.removeAttribute("id");
    
}

function addTask(taskName, time){
    
}
