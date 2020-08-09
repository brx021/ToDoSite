class Task{
    static ALLTASKS = [];
    static POINTS = 0;
    static COUNT = 0;
    static CATEGORIES = [];
    static COMPLETED = 0;
    static MISSED = 0; 
    static ALLTIME = 0;
    name; 
    completed;//undefined = in progress, 
    date; 
    time;
    category;
    description;

    constructor(name) {
        this.name = name;
        Task.COUNT ++;
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
        Task.COUNT --;
    }
    complete(){
        this.completed = new Boolean(true);
        Task.COMPLETED ++;
        Task.ALLTIME ++;
    }
    incomplete(){
        this.completed = new Boolean(false);
        Task.MISSED ++;
    }
}
//test
/*var a = new Task("abc");
a.setName("123");
a.complete();
console.log(a.name + a.completed);*/