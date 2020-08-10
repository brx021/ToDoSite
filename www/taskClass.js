class Task{
    static ALLTASKS = [];       //array of all tasks that have been created, deleted = null
    static COUNT = 0;           //# of tasks that have been created/completed/missed(only goes down when tasks are deleted)
    static COMPLETED = 0;       //completed tasks for each day
    static MISSED = [];         //array of tasks that have been missed
    static ALLTIME = 0;         //all time completed tasks
    static COMPLETEDARR = [];   // array of completed tasks
    name; 
    completed;
    date; 
    time;
    category;
    reflection;


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

    setReflection(ref){
        this.reflection = ref;
    }


    complete(){
        this.completed = true;
        Task.COMPLETED ++;
        Task.ALLTIME ++;
        Task.COMPLETEDARR.push(this);
    }
    
    incomplete(){
        this.completed = false;
        Task.MISSED.push(this);
    }
}