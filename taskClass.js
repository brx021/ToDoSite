class Task{
    static ALLTASKS = [];   //array of all tasks that have been created
    static COUNT = 0;       // the amount of tasks that have been created
    static COMPLETED = 0;   //completed tasks for each day
    static MISSED = [];     //array of tasks that have been canceled
    static ALLTIME = 0;     //all time completed tasks
    
    name; 
    completed;
    date; 
    time;
    category;
    description;

    constructor(name) {
        this.name = name;
        Task.COUNT ++;
        Task.ALLTASKS.push(this);
    }

    setName(name){  //for editing name
        this.name = name;
    }

    setDate(date){
        this.date = date;
    }

    setTime(time){
        this.time = time;
    }

    setCategory(category){
        if(CATEGORIES.indexOf(category) != -1) //if category exists
            this.category = category;
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
        Task.MISSED.push(this);
    }
}