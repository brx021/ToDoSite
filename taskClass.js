class Task{
    static ALLTASKS = [];
    static COUNT = 0;
    static CATEGORIES = [];
    name; 
    completed;//undefined = in progress, 
    date; 
    time;
    category;
    description;

    constructor(name) {
        this.name = name;
        Task.COUNT += 1; 
        Task.ALLTASKS.push(this);
    }
    setName(name){//for editing name
        this.name = name;
    }
    setDate(date){
        this.date = date;
    }
    setTime(time){
        this.time = time;
    }
    setCategory(category){
        if(CATEGORIES.indexOf(category) != -1){//if category exists
            this.category = category;
        }
        else{console.log('error')}
    }
    setDescr(descr){
        this.description = descr;
    }
    deleteOne(){
        COUNT -= 1;
    }
    complete(){
        completed = new Boolean(true);
    }
    incomplete(){
        completed = new Boolean(false);
    }
}
var a = new Task("abc");
console.log(a.name);