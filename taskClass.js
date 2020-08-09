class Task{
    static ALLTASKS = [];
    static POINTS = 0;
    static COUNT = 0;
    static CATEGORIES = [];
    static COMPLETED = 0; //completed tasks for each day
    static MISSED = [];
    static ALLTIME = 0; //all time completed tasks
    
    name; 
    completed;  //undefined = in progress, 
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

    deleteOne(){
        Task.COUNT --;
    }

    complete(){
        this.completed = true;
        Task.COMPLETED ++;
        Task.ALLTIME ++;
    }
    
    incomplete(){
        this.completed = false;
        Task.MISSED.push(this);
    }
}